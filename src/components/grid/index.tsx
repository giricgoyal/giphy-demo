import * as React from 'react'
import { ReactElement, useCallback, useEffect, useRef } from 'react'
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

export default function Grid(props: Props): ReactElement {
    const { children, columns = 4, isLoading, headerIcon, title, onLoadMore } = props

    const loader = useRef(null)

    const handleObserver = useCallback((entries) => {
        const target = entries[0]
        if (target.isIntersecting) {
            onLoadMore()
        }
    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 1,
        }
        const observer = new IntersectionObserver(handleObserver, options)
        if (loader.current) {
            observer.observe(loader.current)
        }
    }, [handleObserver])

    const colData = getDataByColumn(children, columns)

    return (
        <div className="grid" data-testid="grid">
            {title && (
                <GridHeader>
                    {headerIcon && <Icon icon={headerIcon} />}
                    <span>{title}</span>
                </GridHeader>
            )}
            <Row>
                {colData.map((col, index) => (
                    <Col key={`${col}-${index}`}>{col}</Col>
                ))}
            </Row>
            {isLoading && (
                <div className="grid__loader">
                    <Spinner animation="border" />
                </div>
            )}
            {<div ref={loader} />}
        </div>
    )
}
