// ==========================================
// components/IconButton.tsx
// ==========================================

import { Colors } from '@/Constant/Color';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface IconButtonProps {
    icon: React.ReactNode;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
    style,
}) => {
    const isPrimary = variant === 'primary';

    if (isPrimary) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[iconStyles.button, iconStyles[`button_${size}`], style]}
                activeOpacity={0.8}
            >
                <LinearGradient
                    colors={Colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[iconStyles.gradient, disabled && iconStyles.disabled]}
                >
                    {icon}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                iconStyles.button,
                iconStyles[`button_${variant}`],
                iconStyles[`button_${size}`],
                disabled && iconStyles.disabled,
                style,
            ]}
            activeOpacity={0.8}
        >
            {icon}
        </TouchableOpacity>
    );
};

const iconStyles = StyleSheet.create({
    button: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    button_sm: {
        width: 40,
        height: 40,
    },
    button_md: {
        width: 48,
        height: 48,
    },
    button_lg: {
        width: 56,
        height: 56,
    },
    button_secondary: {
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_outline: {
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        opacity: 0.5,
    },
});
