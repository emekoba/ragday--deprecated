import React from 'react'

function CuffRemarks({tab}) {
    return (
        <div>
            
        { tab === 'form' &&
            <div>
                cuff form
            </div>
            
        }
        { tab === 'fabric' &&
            <div>
                cuff fabric
            </div>
            
        }
        { tab === 'color' &&
            <div>
                cuff color
            </div>
            
        }
        { tab === 'design' &&
            <div>
                cuff design
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

export default CuffRemarks
