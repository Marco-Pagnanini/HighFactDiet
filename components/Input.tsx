// ==========================================
// components/Input.tsx
// ==========================================

import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    icon,
    containerStyle,
    style,
    ...props
}) => {
    return (
        <View style={[inputStyles.container, containerStyle]}>
            {label && <Text style={inputStyles.label}>{label}</Text>}
            <View style={inputStyles.inputContainer}>
                {icon && <View style={inputStyles.icon}>{icon}</View>}
                <TextInput
                    style={[
                        inputStyles.input,
                        icon && inputStyles.inputWithIcon,
                        error && inputStyles.inputError,
                        style,
                    ]}
                    placeholderTextColor={Colors.textTertiary}
                    {...props}
                />
            </View>
            {error && <Text style={inputStyles.error}>{error}</Text>}
        </View>
    );
};

const inputStyles = StyleSheet.create({
    container: {
        marginBottom: Spacing.md,
    },
    label: {
        fontSize: Typography.fontSize.sm,
        fontWeight: Typography.fontWeight.semibold,
        color: Colors.textPrimary,
        marginBottom: Spacing.sm,
    },
    inputContainer: {
        position: 'relative',
    },
    input: {
        height: 48,
        backgroundColor: Colors.backgroundSecondary,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: 16,
        paddingHorizontal: Spacing.lg,
        fontSize: Typography.fontSize.base,
        color: Colors.textPrimary,
    },
    inputWithIcon: {
        paddingLeft: 48,
    },
    inputError: {
        borderColor: Colors.error,
    },
    icon: {
        position: 'absolute',
        left: Spacing.lg,
        top: '50%',
        transform: [{ translateY: -12 }],
        zIndex: 1,
    },
    error: {
        fontSize: Typography.fontSize.xs,
        color: Colors.error,
        marginTop: Spacing.xs,
    },
});
