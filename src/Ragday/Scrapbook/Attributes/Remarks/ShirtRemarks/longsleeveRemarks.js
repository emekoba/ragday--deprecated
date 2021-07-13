import React from 'react'

function LongsleeveRemarks({tab}) {
    return (
        <div>
            
            { tab === 'form' &&
                <div>
                    longsleeve form
                </div>
                
            }
            { tab === 'fabric' &&
                <div>
                    longsleeve fabric
                </div>
                
            }
            { tab === 'color' &&
                <div>
                    longsleeve color
                </div>
                
            }
            { tab === 'design' &&
                <div>
                    longsleeve design
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

export default LongsleeveRemarks
