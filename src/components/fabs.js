import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';


const style = {
    margin: 0,
    right: 20,
    bottom: 20,
    position: 'fixed',
};

const actions = [
    { icon: <FileCopyIcon style={{ fill: '#000000' }} />, name: 'Copy' },
    { icon: <SaveIcon style={{ fill: '#000000' }} />, name: 'Save' },
    { icon: <PrintIcon style={{ fill: '#000000' }} />, name: 'Print' },
    { icon: <ShareIcon style={{ fill: '#000000' }} />, name: 'Share' },
];

export default function Fabs() {
    const [show, setShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        let computeAction = () => {
            const showAction = (document.documentElement.scrollTop > 100);
            setShow(showAction);
        }

        window.addEventListener("scroll", computeAction);

        return () => window.removeEventListener("scroll", computeAction);
    });
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {show ? <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                style={style}
                hidden={!show}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial> : <div></div>}
        </div>
    );
}