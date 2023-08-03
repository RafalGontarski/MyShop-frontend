import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const CategoryMenu = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#fff' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ color: '#000' }}>Wędkarstwo Spinningowe</Button>
                <Button style={{ color: '#000' }}>Morskie</Button>
                <Button style={{ color: '#000' }}>Sumowe</Button>
                <Button style={{ color: '#000' }}>Biwak</Button>
                <Button style={{ color: '#000' }}>Łodzie i akcesoria</Button>
                <Button style={{ color: '#000' }}>Ubrania</Button>
                <Button style={{ color: '#000' }}>Gatunki</Button>
                <Button style={{ color: '#000' }}>Pozostałe</Button>
            </Toolbar>
        </AppBar>
    );
}

export default CategoryMenu;

