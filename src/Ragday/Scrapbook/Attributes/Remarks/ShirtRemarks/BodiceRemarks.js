import React from 'react'

function BodiceRemarks({tab}) {

    return (
        <div>
            
            { tab === 'form' &&
                <div>
                    bodice form
                </div>
                
            }
            { tab === 'fabric' &&
                <div>
                    bodice fabric
                </div>
                
            }
            { tab === 'color' &&
                <div>
                    bodice color
                </div>
                
            }
            { tab === 'design' &&
                <div>
                    bodice design
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

export default BodiceRemarks
