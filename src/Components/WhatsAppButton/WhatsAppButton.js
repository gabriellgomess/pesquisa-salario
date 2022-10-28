import * as React from 'react';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

import './WhatsAppButton.css'


const WhatsAppButton = () => {
    return (
        <Tooltip className='tooltip--whatsapp' title="Entre em contato através do WhatsApp">
            <Link href="https://api.whatsapp.com/send?phone=5551992049874&text=Ol%C3%A1%20este%20canal%20%C3%A9%20destinado%20para%20d%C3%BAvidas%20e%20sugest%C3%B5es." target="_blank" rel="noopener" underline="none">
            <Box className='whatsapp-button'
                sx={{                
                    backgroundColor: '#4caf50',
                    opacity: [0.9, 0.8, 0.7],
                    '&:hover': {
                    backgroundColor: '#4caf50',
                    opacity: 1                
                    },
                }}
            >
                <WhatsAppIcon className='whatsapp--icon' sx={{width: 80}} />
            </Box>
            </Link>
        </Tooltip>
    )
}



export default WhatsAppButton;