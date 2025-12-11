// ==========================================
// components/ProgressCard.tsx
// ==========================================

import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProgressCardProps {
    title: string;
    value: string;
    progress: number;
    icon?: React.ReactNode;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
    title,
    value,
    progress,
    icon,
}) => {
    return (
        <LinearGradient
            colors={Colors.gradients.dark}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={progressStyles.card}
        >
            <View style={progressStyles.header}>
                <View style={progressStyles.info}>
                    <Text style={progressStyles.title}>{title}</Text>
                    <Text style={progressStyles.value}>{value}</Text>
                </View>
                <View style={progressStyles.iconContainer}>{icon}</View>
            </View>
            <View style={progressStyles.progressBar}>
                <View style={[progressStyles.progressFill, { width: `${progress}%` }]} />
            </View>
        </LinearGradient>
    );
};

const progressStyles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        ...Shadows.xl,
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
        fontSize: Typography.fontSize.sm,
        color: Colors.textTertiary,
        marginBottom: Spacing.xs,
    },
    value: {
        fontSize: Typography.fontSize['3xl'],
        fontWeight: Typography.fontWeight.bold,
        color: Colors.white,
    },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: Colors.success,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressBar: {
        height: 8,
        backgroundColor: Colors.dark.backgroundTertiary,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.success,
        borderRadius: 4,
    },
});
