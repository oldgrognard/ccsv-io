const Router = () => {
    return (
        <Providers>
            <Routes>
                <Route element={<Root />}>
                    <Route path='/' element={<Landing />} />
                </Route>
            </Routes>
        </Providers>
    )
}

export { Router };