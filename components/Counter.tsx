// ==========================================
// components/Counter.tsx
// ==========================================

import { Colors } from '@/Constant/Color';
import { Spacing } from '@/Constant/Spacing';
import { Typography } from '@/Constant/Typography';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CounterProps {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    label?: string;
    min?: number;
    max?: number;
}

export const Counter: React.FC<CounterProps> = ({
    value,
    onIncrement,
    onDecrement,
    label,
    min = 0,
    max = Infinity,
}) => {
    return (
        <View style={counterStyles.container}>
            <View style={counterStyles.counter}>
                <TouchableOpacity
                    onPress={onDecrement}
                    disabled={value <= min}
                    style={[counterStyles.button, counterStyles.buttonSecondary]}
                    activeOpacity={0.8}
                >
                    <Text style={counterStyles.buttonText}>-</Text>
                </TouchableOpacity>

                <View style={counterStyles.valueContainer}>
                    <Text style={counterStyles.value}>{value}</Text>
                </View>

                <TouchableOpacity
                    onPress={onIncrement}
                    disabled={value >= max}
                    style={counterStyles.button}
                    activeOpacity={0.8}
                >
                    <LinearGradient
                        colors={Colors.gradients.primary}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={counterStyles.gradient}
                    >
                        <Text style={counterStyles.buttonText}>+</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {label && <Text style={counterStyles.label}>{label}</Text>}
        </View>
    );
};

const counterStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.lg,
    },
    button: {
        width: 48,
        height: 48,
        borderRadius: 12,
        overflow: 'hidden',
    },
    buttonSecondary: {
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: Typography.fontSize.xl,
        fontWeight: Typography.fontWeight.semibold,
        color: Colors.white,
    },
    valueContainer: {
        minWidth: 80,
        height: 48,
        backgroundColor: Colors.backgroundSecondary,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    value: {
        fontSize: Typography.fontSize['2xl'],
        fontWeight: Typography.fontWeight.bold,
        color: Colors.textPrimary,
    },
    label: {
        fontSize: Typography.fontSize.sm,
        color: Colors.textSecondary,
        marginTop: Spacing.sm,
    },
});
