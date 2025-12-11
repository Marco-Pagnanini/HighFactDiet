// ==========================================
// components/WorkoutCard.tsx
// ==========================================

import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface WorkoutCardProps {
    title: string;
    subtitle: string;
    lastWeight: string;
    icon?: React.ReactNode;
    onPress: () => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
    title,
    subtitle,
    lastWeight,
    icon,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={cardStyles.card}
            activeOpacity={0.9}
        >
            <View style={cardStyles.header}>
                <View style={cardStyles.info}>
                    <Text style={cardStyles.title}>{title}</Text>
                    <Text style={cardStyles.subtitle}>{subtitle}</Text>
                </View>
                <LinearGradient
                    colors={Colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={cardStyles.iconContainer}
                >
                    {icon}
                </LinearGradient>
            </View>
            <View style={cardStyles.footer}>
                <View style={cardStyles.weightContainer}>
                    <Text style={cardStyles.weight}>{lastWeight}</Text>
                    <Text style={cardStyles.weightLabel}>Ultimo peso</Text>
                </View>
                <Text style={cardStyles.arrow}>›</Text>
            </View>
        </TouchableOpacity>
    );
};

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
        ...Shadows.md,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: Spacing.lg,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: Typography.fontSize.xl,
        fontWeight: Typography.fontWeight.bold,
        color: Colors.textPrimary,
        marginBottom: Spacing.xs,
    },
    subtitle: {
        fontSize: Typography.fontSize.sm,
        color: Colors.textSecondary,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.md,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weightContainer: {
        flex: 1,
    },
    weight: {
        fontSize: Typography.fontSize['2xl'],
        fontWeight: Typography.fontWeight.bold,
        color: Colors.textPrimary,
    },
    weightLabel: {
        fontSize: Typography.fontSize.xs,
        color: Colors.textSecondary,
        marginTop: Spacing.xs,
    },
    arrow: {
        fontSize: 32,
        color: Colors.textTertiary,
    },
});
