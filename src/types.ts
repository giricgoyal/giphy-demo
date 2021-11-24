type Image = {
    url?: string
    mp4?: string
    webp?: string
}

export type GIF_IMAGES = {
    '480w_still'?: Image
    downsized?: Image
    downsized_large?: Image
    downsized_medium?: Image
    downsized_still?: Image
    fixed_height?: Image
    fixed_height_downsampled?: Image
    fixed_height_small?: Image
    fixed_height_small_still?: Image
    fixed_height_still?: Image
    fixed_width?: Image
    fixed_width_downsampled?: Image
    fixed_width_small?: Image
    fixed_width_small_still?: Image
    fixed_width_still?: Image
    hd?: Image
    looping?: Image
    original?: Image
    original_mp4?: Image
    original_still?: Image
    preview?: Image
    preview_gif?: Image
    preview_webp?: Image
}

export type GIF = {
    id: string
    images: GIF_IMAGES
    title: string
}

export type GIF_LIST = Array<GIF>

export type API_PARAMS = {
    offset: number
    limit: number
    q?: string
}

export type GIF_DATA = {
    data: GIF_LIST
}
