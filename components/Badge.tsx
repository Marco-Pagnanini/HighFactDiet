// ==========================================
// components/Badge.tsx
// ==========================================
import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

interface BadgeProps {
    label: string;
    variant?: 'orange' | 'blue' | 'purple' | 'green' | 'gray';
    style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
    label,
    variant = 'orange',
    style,
}) => {
    return (
        <Text style={[badgeStyles.badge, badgeStyles[`badge_${variant}`], style]}>
            {label}
        </Text>
    );
};

const badgeStyles = StyleSheet.create({
    badge: {
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.sm,
        borderRadius: 20,
        fontSize: Typography.fontSize.sm,
        fontWeight: Typography.fontWeight.semibold,
        overflow: 'hidden',
    },
    badge_orange: {
        backgroundColor: '#FED7AA',
        color: '#C2410C',
    },
    badge_blue: {
        backgroundColor: '#DBEAFE',
        color: '#1E40AF',
    },
    badge_purple: {
        backgroundColor: '#F3E8FF',
        color: '#7C3AED',
    },
    badge_green: {
        backgroundColor: '#D1FAE5',
        color: '#065F46',
    },
    badge_gray: {
        backgroundColor: Colors.backgroundTertiary,
        color: Colors.textSecondary,
    },
});
