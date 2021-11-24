import * as React from 'react'
import { ReactElement, useState, useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import GridHeader from '../grid/header'
import Icon, { ValidIcons } from '../icon'

export type Props = {
    isLoading?: boolean
    children?: Array<ReactElement>
    columns?: number
    title?: string
    headerIcon?: ValidIcons
    onLoadMore?: () => void
}

export default function Grid(props: Props): ReactElement {
    const { children, columns = 4, isLoading, headerIcon, title, onLoadMore } = props
    const [lastElement, setLastElement] = useState(null)

    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0]
            if (first.isIntersecting) {
                onLoadMore()
            }
        }),
    )

    const getDataByColumn = (children: Array<ReactElement> = [], columns: number): Array<Array<ReactElement>> => {
        const columnsData = []
        for (let counter = 0; counter < columns; counter++) {
            columnsData.push([])
        }

        let colIndex = 0
        children.forEach((child) => {
            columnsData[colIndex].push(child)
            colIndex++
            if (colIndex === columns) {
                colIndex = 0
            }
        })

        return columnsData
    }

    useEffect(() => {
        const currentElement = lastElement
        const currentObserver = observer.current

        if (currentElement) {
            currentObserver.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement)
            }
        }
    }, [lastElement])

    const colData = getDataByColumn(children, columns)

    return (
        <div className="grid" data-testid="grid">
            {title && (
                <GridHeader>
                    {headerIcon && <Icon icon={headerIcon} />}
                    <span>{title}</span>
                </GridHeader>
            )}
            {colData.length > 0 && (
                <Row>
                    {colData.map((col, index) => (
                        <Col key={`${col}-${index}`}>{col}</Col>
                    ))}
                </Row>
            )}
            {isLoading && (
                <div className="grid__loader">
                    <Spinner animation="border" />
                </div>
            )}
            {!isLoading && children.length > 0 && <div ref={setLastElement} />}
        </div>
    )
}
