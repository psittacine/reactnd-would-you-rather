import React from 'react'
import { Badge, Paragraph, TickCircleIcon } from 'evergreen-ui'

export default function YourVoteBadge () {
    return (
        <Paragraph>
            <Badge
                alignItems="center"
                justifyContent="center"
                paddingY={6}
                height={28}
                color="green"
            >
                <TickCircleIcon
                    display="inline"
                    marginRight={4}
                    color="success"
                />
                Your Vote
            </Badge>
        </Paragraph>
    )
}
