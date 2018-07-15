Component({
    externalClasses: ['wux-class'],
    relations: {
        '../tabs/index': {
            type: 'parent',
        },
    },
    properties: {
        key: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '',
        },
        disabled: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        current: false,
        scroll: false,
    },
    methods: {
        changeCurrent(current, scroll) {
            this.setData({
                current,
                scroll,
            })
        },
        onTap() {
            const { key, disabled } = this.data
            const parent = this.getRelationNodes('../tabs/index')[0]

            if (disabled || !parent) {
                return false
            }

            this.triggerEvent('click', { key })

            parent.emitEvent(key)
        },
    },
})