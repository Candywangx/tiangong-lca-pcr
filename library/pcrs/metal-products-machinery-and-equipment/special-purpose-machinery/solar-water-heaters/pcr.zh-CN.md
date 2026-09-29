---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.solar-water-heaters
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 太阳能热水器

## 1. 范围与适用性

本规则适用于出厂验收的完整太阳能热水器，包括随产品交付的集热器、储水箱及声明配置内的连接件。平板与真空管集热路线均可使用，采用的路线须在数据包中声明。前景边界始于购入的板材、玻璃、保温材料与部件进入制造厂，止于已包装的成品在厂门交付。上游材料和能源生产通过背景数据集连接；安装、运行、维护和报废不计入本制造数据包。单独销售的集热器、储水箱、零件以及光伏或纯电热水器不属于本产品边界。此制造分解依据 `greening-2013` 的第 8 章表 70 与表 71；该研究的英国运行情景和数值不作为本规则的通用制造数值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.solar-water-heaters |
| classification_refs | CPC 3.0 44826：Solar water heaters；`un-cpc-3-2025` |
| covered_products | 含集热器和储水箱的完整出厂太阳能热水器；平板式或真空管式 |
| excluded_products | 独立集热器、独立储水箱、零部件、光伏装置、纯电热水器、现场定制安装系统 |
| representative_product | 一台已验收、配置已声明的完整太阳能热水器 |
| production_route | 集热器制造；储水箱制造；总装与包装 |
| market_state | 厂门交付、已包装；包装质量不计入净产品质量 M |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供太阳能加热生活热水的完整装置 |
| How much | 一台声明配置的验收成品；其净质量为 M kg |
| How well | 记录集热器形式、储水箱容量、额定性能和随附部件；不设统一性能值 |
| How long or cycle | 出厂交付时的一台装置；使用寿命不纳入本制造数据包 |
| reference_flow_link | `a_finished` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 太阳能热水器 `9ede182c-cfec-4513-a405-b17db74ed710` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；同一配置；集热器技术；储水箱容量；泵和传热液是否随附；包装；验收净质量 M；厂址和时间范围 |

构建前景数据包时，必需限定信息必须在元数据或等效过程记录中明确。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入材料和外购部件进入制造厂时的数量及状态 |
| starting_condition_role | 前景投入起点；上游生产由可追溯背景数据集覆盖 |
| product_classification_scope | 完整 CPC 44826 太阳能热水器；外购同类完整热水器须单列 |
| recursive_input_rule | 若外购完整同类热水器作为投入，不递归使用本规则计算其自身制造；作为独立上游数据集连接并披露数量 |
| upstream_dataset_requirement | 为材料、能源和外购部件连接与地理、技术、时间相符的上游数据集 |
| disclosure | 声明配置、供应状态、外购部件、厂内过程、包装边界和排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_1` | 制造边界 | 纳入集热器、储水箱、总装和随产品提供的包装；记录适用配置的实际投入与废物。 | `greening-2013` |
| `boundary_2` | 生命周期阶段 | 安装、运行、维护和报废单独建模；本制造数据集只在厂门交付。 | `greening-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `collector` | 集热器制造 | required | 无 | 前景制造 | 每台验收成品机器 |
| `tank` | 储水箱制造 | required | 无 | 前景制造 | 每台验收成品机器 |
| `assembly` | 总装与包装 | required | 无 | 前景制造 | 每台验收成品机器 |

### 过程：集热器制造（`collector`）

#### 输入

##### 产品流

###### 集热器框架钢板（`c_steel_sheet`）

仅在采用任一集热器路线时纳入；按同一配置的实际批次记录。

- 选定流：低合金钢板
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_bom`
- 来源：`greening-2013`

###### 平板吸热板铜板（`c_copper_sheet`）

仅在采用平板集热器时纳入；按同一配置的实际批次记录。

- 选定流：铜板材 `30cc5ca3-6198-4f82-8016-284f1b15d01b`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_bom`
- 来源：`greening-2013`

###### 平板集热器盖板玻璃（`c_flat_glass`）

仅在采用平板集热器时纳入；按同一配置的实际批次记录。

- 选定流：低铁平板玻璃
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_bom`
- 来源：`greening-2013`

###### 真空玻璃管（`c_glass_tube`）

仅在采用真空管集热器时纳入；按同一配置的实际批次记录。

- 选定流：硼硅玻璃管
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_bom`
- 来源：`greening-2013`

###### 集热器框架铝板（`c_aluminium_sheet`）

仅在安装铝制框架时纳入；按同一配置的实际批次记录。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_bom`
- 来源：`greening-2013`

###### 集热器制造电力（`c_electricity`）

仅在采用任一集热器路线时纳入；按同一配置的实际批次记录。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：能量 / MJ
- 数量规则：依据 cp_collector_energy 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_energy`
- 来源：`greening-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 集热器钢板边角料（`c_steel_scrap`）

仅在钢板切割产生边角料时纳入；按同一配置的实际批次记录。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_collector_scrap 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collector_scrap`
- 来源：

##### 基本流

### 过程：储水箱制造（`tank`）

#### 输入

##### 产品流

###### 储水箱钢板（`t_steel_sheet`）

仅在采用任一储水箱路线时纳入；按同一配置的实际批次记录。

- 选定流：低合金钢板
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_tank_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_bom`
- 来源：`greening-2013`

###### 储水箱保温玻璃棉（`t_glass_wool`）

仅在安装玻璃棉保温层时纳入；按同一配置的实际批次记录。

- 选定流：玻璃棉 `85977f80-d866-44ec-bac9-52cb2d9fb421`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_tank_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_bom`
- 来源：`greening-2013`

###### 储水箱制造电力（`t_electricity`）

仅在采用任一储水箱路线时纳入；按同一配置的实际批次记录。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：能量 / MJ
- 数量规则：依据 cp_tank_energy 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_energy`
- 来源：`greening-2013`

###### 储水箱热加工天然气（`t_natural_gas`）

仅在制造工序使用管输品质天然气时纳入；按同一配置的实际批次记录。

- 选定流：管输品质天然气 `7766e51e-0b64-4fbb-89cb-489c33293137`
- 流属性/单位：体积 / m3
- 数量规则：依据 cp_tank_fuel 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_fuel`
- 来源：`greening-2013`

###### 储水箱试验用自来水（`t_tap_water`）

仅在水压试验使用自来水时纳入；按同一配置的实际批次记录。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_tank_test_water 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_test_water`
- 来源：`greening-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 储水箱钢板边角料（`t_steel_scrap`）

仅在钢板切割产生边角料时纳入；按同一配置的实际批次记录。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_tank_scrap 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_scrap`
- 来源：

###### 排出的储水箱试验水（`t_test_water_waste`）

仅在试验水排出工序时纳入；按同一配置的实际批次记录。

- 选定流：使用后的水压试验水
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_tank_test_water 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tank_test_water`
- 来源：

##### 基本流

### 过程：总装与包装（`assembly`）

#### 输入

##### 产品流

###### 连接用铜管（`a_copper_pipe`）

仅在成品随附铜管时纳入；按同一配置的实际批次记录。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_assembly_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`greening-2013`

###### 集成循环泵（`a_pump`）

仅在产品为主动循环型时纳入；按同一配置的实际批次记录。

- 选定流：循环泵
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_assembly_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`greening-2013`

###### 出厂加注丙二醇（`a_glycol`）

仅在传热回路在工厂加注时纳入；按同一配置的实际批次记录。

- 选定流：丙二醇
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_assembly_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`greening-2013`

###### 瓦楞纸板包装（`a_cardboard`）

仅在随附瓦楞纸板运输包装时纳入；按同一配置的实际批次记录。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_assembly_bom 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_bom`
- 来源：`greening-2013`

###### 总装电力（`a_electricity`）

仅在采用任一总装路线时纳入；按同一配置的实际批次记录。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：能量 / MJ
- 数量规则：依据 cp_assembly_energy 记录并按验收成品机器分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`greening-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品太阳能热水器（`a_finished`）

仅在产品通过验收时纳入；按同一配置的实际批次记录。

- 选定流：太阳能热水器 `9ede182c-cfec-4513-a405-b17db74ed710`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`greening-2013`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_1` | 共用制造资源 | 优先按独立计量的工序和批次记录分配；共用仪表按经记录的机器运行时间或验收产量分摊，并披露方法。 |  |
| `allocation_2` | 钢板边角料 | 边角料作为独立废物流报告；回收收益仅在有独立记录且与下游系统边界一致时计入，避免重复抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | assembly | 成品热水器 | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台 | 一个代表性生产年 | 所声明工厂 | 每台验收净质量 | 校准证书与验收记录 |
| `cp_collector_bom` | collector | 集热器原材料 | 批次物料清单 | 型号；配置；物料编码；领用质量；退库质量；验收数量 | 核对仓库领退料和验收集热器数量。 | kg | 每生产批次 | 一个代表性生产年 | 集热器生产线 | 每台验收成品机器 | 物料清单与仓库台账 |
| `cp_tank_bom` | tank | 储水箱原材料 | 批次物料清单 | 型号；配置；物料编码；领用质量；退库质量；验收数量 | 核对仓库领退料和验收储水箱数量。 | kg | 每生产批次 | 一个代表性生产年 | 储水箱生产线 | 每台验收成品机器 | 物料清单与仓库台账 |
| `cp_assembly_bom` | assembly | 随附部件与包装 | 批次物料清单 | 型号；配置；部件编码；领用质量；退库质量；验收数量 | 核对外购部件、包装和验收成品数量。 | kg | 每生产批次 | 一个代表性生产年 | 总装线 | 每台验收成品机器 | 物料清单与仓库台账 |
| `cp_collector_energy` | collector | 电力 | 电表记录 | 电表期初；电表期末；验收数量 | 读取集热器生产线电表并换算为 MJ。 | MJ | 每生产批次 | 一个代表性生产年 | 集热器生产线 | 每台验收成品机器 | 电表与分摊记录 |
| `cp_tank_energy` | tank | 电力 | 电表记录 | 电表期初；电表期末；验收数量 | 读取储水箱生产线电表并换算为 MJ。 | MJ | 每生产批次 | 一个代表性生产年 | 储水箱生产线 | 每台验收成品机器 | 电表与分摊记录 |
| `cp_assembly_energy` | assembly | 电力 | 电表记录 | 电表期初；电表期末；验收数量 | 读取总装线电表并换算为 MJ。 | MJ | 每生产批次 | 一个代表性生产年 | 总装线 | 每台验收成品机器 | 电表与分摊记录 |
| `cp_tank_fuel` | tank | 天然气 | 燃气表记录 | 燃气表期初；燃气表期末；验收数量 | 使用经校准的燃气表计量管输品质天然气体积。 | m3 | 每生产批次 | 一个代表性生产年 | 储水箱生产线 | 每台验收成品机器 | 燃气发票与热值记录 |
| `cp_collector_scrap` | collector | 钢板边角料 | 废物称重台账 | 废物编码；边角料净质量；验收数量 | 分别称量集热器钢板边角料。 | kg | 每生产批次 | 一个代表性生产年 | 集热器生产线 | 每台验收成品机器 | 称重单与转移单 |
| `cp_tank_scrap` | tank | 钢板边角料 | 废物称重台账 | 废物编码；边角料净质量；验收数量 | 分别称量储水箱钢板边角料。 | kg | 每生产批次 | 一个代表性生产年 | 储水箱生产线 | 每台验收成品机器 | 称重单与转移单 |
| `cp_tank_test_water` | tank | 试验水 | 水表与排放记录 | 进水计量；排水计量；验收数量 | 分别计量水压试验进水与排水。 | kg | 每生产批次 | 一个代表性生产年 | 储水箱生产线 | 每台验收成品机器 | 水表与排水记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_average` | 共用批次记录 | 每台数量 = 净批次数量 / 同配置验收成品机器数；排除返工和报废件。 | 净批次数量；验收成品机器数 | 每台数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_1` | 所有清单行 | 记录同一配置、同一生产期间和准确计量单位；核对批次验收数量。 | 批次台账；校准记录 |
| `dq_2` | 条件行 | 披露路线适用性和缺失数据；不可把未采用路线的数量记为零而不说明。 | 配置清单；工艺记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_1` | 参考流 | 核对 a_finished 为 M kg；M 来自 cp_mass，同一配置且不含运输包装。 |  |
| `validation_2` | 材料与能源 | 核对所有投入、边角料、试验水和成品数量的批次覆盖，披露无法闭合的质量差异。 |  |
| `validation_3` | 路线和范围 | 核对平板与真空管条件行以及主动循环泵、传热液、天然气、试验水是否适用。 | `greening-2013` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 太阳能热水器厂门制造前景数据包 |
| downstream_use | 可用于 `secondary_dataset` 或 `background_dataset`，并连接后续安装、使用和报废模型 |
| allowed_use | 在配置、地域、时间和产品状态一致时用于制造阶段建模 |
| excluded_use | 不得把本厂门制造数据集当作全生命周期热水服务或其他技术路线的默认性能数据 |
| required_metadata | 型号；集热器路线；储水箱容量；随附件；M；厂址；年份；上游数据；分配方法 |
| required_quality_disclosure | 仪表覆盖；BOM 完整性；废物去向；条件行适用性；缺失与估算 |
| update_trigger | 产品配置、材料、能源结构或制造工艺发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品分类身份 |
| `greening-2013` | literature | Benjamin Paul Greening, *Life cycle environmental and economic sustainability assessment of micro-generation technologies in the UK domestic sector*, 2013, University of Manchester, https://pure.manchester.ac.uk/ws/portalfiles/portal/54548470/FULL_TEXT.PDF | 第 8 章表 70–71 的制造过程与候选材料；不作为通用数值范围 |
