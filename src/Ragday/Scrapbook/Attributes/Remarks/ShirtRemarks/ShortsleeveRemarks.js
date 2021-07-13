import React from 'react'

function ShortsleeveRemarks({tab}) {
    return (
        <div>
            
        { tab === 'form' &&
            <div>
                shortsleeve form
            </div>
            
        }
        { tab === 'fabric' &&
            <div>
                shortsleeve fabric
            </div>
            
        }
        { tab === 'color' &&
            <div>
                shortsleeve color
            </div>
            
        }
        { tab === 'design' &&
            <div>
                shortsleeve design
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

export default ShortsleeveRemarks
