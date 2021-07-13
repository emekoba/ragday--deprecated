import React from 'react'

function CollarRemarks({tab}) {
    return (
        <div>
            
        { tab === 'form' &&
            <div>
                collar form
            </div>
            
        }
        { tab === 'fabric' &&
            <div>
                collar fabric
            </div>
            
        }
        { tab === 'color' &&
            <div>
                collar color
            </div>
            
        }
        { tab === 'design' &&
            <div>
                collar design
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

export default CollarRemarks
