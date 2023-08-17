import React from 'react';

import ThirdLayout from '@app/ThirdLayout';

// import Table from "../../components/table";
import ResumeFeed from '@components/ResumeFeed';

function Dashboard(props) {
    return (
        <ThirdLayout>
            <ResumeFeed />
        </ThirdLayout>
    );
}

export default Dashboard;