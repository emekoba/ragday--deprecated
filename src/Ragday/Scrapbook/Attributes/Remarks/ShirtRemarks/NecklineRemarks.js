import React from 'react'

function NecklineRemarks({tab}) {
    return (
        <div>
            
        { tab === 'form' &&
            <div>
                neckline form
            </div>
            
        }
        { tab === 'fabric' &&
            <div>
                neckline fabric
            </div>
            
        }
        { tab === 'color' &&
            <div>
                neckline color
            </div>
            
        }
        { tab === 'design' &&
            <div>
                neckline design
            </div>
            
        }
        { tab === 'append' &&
            <div>
                append
            </div>
            
        }
    </div>
    )
}

export default NecklineRemarks
