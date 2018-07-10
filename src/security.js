// escape XSS and style injection (doesn't escape HTML)
const eXSS = ( value ) => escapeXSS ( value )

const escapeXSS = ( value ) => {
    // for now, simply fail if there are any scripts or styles

    return failIfUnsafe( value )
}

const failIfUnsafe = ( value ) => {
    if ( 
        value.includes('<script') || value.includes('</script') || 
        value.includes('<style') || value.includes('</style') 
    ) 
    {
        console.log('script or style tag detected. refusing to include.');
        return '';
    }

    return value;
}