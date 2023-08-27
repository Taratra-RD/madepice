import { Button, Stack, Typography } from "@mui/material"


const MuiPage = () => {
    return(
        <>
            <div className="" style={{padding:'2em',background:'white'}}>
                <Stack spacing={2} direction={'column'}>
                    <Typography variant="h1" color={'black'}>h1 element</Typography>
                    <Typography variant="h3" color={'black'}>h3 element</Typography>
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <Button variant="contained" color="error">Gooo</Button>
                    <Button variant="contained" color="secondary">Hello you!</Button>
                    <Button variant="outlined" color="primary" size="large">Osu!</Button>
                </Stack>
            </div>
        </>
    )
}
export default MuiPage