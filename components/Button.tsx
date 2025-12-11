import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle
} from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    icon,
    style,
}) => {
    const isPrimary = variant === 'primary';

    const content = (
        <>
            {loading ? (
                <ActivityIndicator color={isPrimary ? Colors.white : Colors.primary} />
            ) : (
                <>
                    {icon && <>{icon}</>}
                    <Text style={[styles.text, styles[`text_${variant}`], styles[`text_${size}`]]}>
                        {title}
                    </Text>
                </>
            )}
        </>
    );

    if (isPrimary) {
        return (
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled || loading}
                style={[styles.button, styles[`button_${size}`], style]}
                activeOpacity={0.8}
            >
                <LinearGradient
                    colors={Colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.gradient, disabled && styles.disabled]}
                >
                    {content}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.button,
                styles[`button_${variant}`],
                styles[`button_${size}`],
                disabled && styles.disabled,
                style,
            ]}
            activeOpacity={0.8}
        >
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    button_sm: {
        height: 40,
    },
    button_md: {
        height: 48,
    },
    button_lg: {
        height: 56,
    },
    button_secondary: {
        backgroundColor: Colors.dark.background,
    },
    button_outline: {
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.dark.background,
    },
    button_ghost: {
        backgroundColor: Colors.transparent,
    },
    gradient: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: Spacing.lg,
    },
    text: {
        textAlign: 'center',
    },
    text_primary: {
        color: Colors.white,
        fontWeight: Typography.fontWeight.semibold,
    },
    text_secondary: {
        color: Colors.white,
        fontWeight: Typography.fontWeight.semibold,
    },
    text_outline: {
        color: Colors.dark.background,
        fontWeight: Typography.fontWeight.semibold,
    },
    text_ghost: {
        color: Colors.textSecondary,
        fontWeight: Typography.fontWeight.medium,
    },
    text_sm: {
        fontSize: Typography.fontSize.sm,
    },
    text_md: {
        fontSize: Typography.fontSize.base,
    },
    text_lg: {
        fontSize: Typography.fontSize.lg,
    },
    disabled: {
        opacity: 0.5,
    },
});
