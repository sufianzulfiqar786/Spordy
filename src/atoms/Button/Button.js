import React from 'react';

function Button({ contactRef }) {
    return (
        <button
            className="  ml-3 ml-md-0 ml-lg-5 welcome-btn mt-md-4    "
            onClick={() =>
                contactRef.current.scrollIntoView({
                    behavior: "smooth",
                })
            }
        >
            Download Spordy
        </button>
    );
}

export default Button;