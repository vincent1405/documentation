module.exports = [
    {
        title: "HTTP API",
        collapsable: true,
        path: "",
        children: [
            "",
            "appending-events.md",
            "reading-streams.md",
            "deleting-a-stream.md",
            "description-document.md",
            "optimistic-concurrency-and-idempotence.md",
            "stream-metadata.md",
        ]
    },
    {
        title: "Security",
        collapsable: true,
        path: "security/",
        children: [
            "security/"
        ]
    },
    {
        title: "Persistent subscriptions",
        collapsable: true,
        path: "persistent/",
        children: [
            "persistent/"
        ]
    },
    {
        title: "Projections",
        collapsable: true,
        path: "projections/",
        children: [
            "projections/",
            "projections/api.md"
        ]
    },
    {
        title: "Optional headers",
        collapsable: true,
        path: "optional-http-headers/",
        children: [
            "optional-http-headers/",
            "optional-http-headers/eventid.md",
            "optional-http-headers/eventtype.md",
            "optional-http-headers/expected-version.md",
            "optional-http-headers/harddelete.md",
            "optional-http-headers/longpoll.md",
            "optional-http-headers/requires-master.md",
            "optional-http-headers/resolve-linkto.md",
        ]
    },
    {
        title: "API reference",
        collapsable: true,
        path: "api/",
        children: [
            "api/"
        ]
    }
]
