---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-lamps-and-lighting-fittings-including-lamps-and-lighting-fittings-of-a-k-899c3ecd
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# Other electric lamps and lighting fittings (including lamps and lighting fittings of a kind used for lighting public open spaces or thorough-fares), not solely for LED light sources

## 1. 范围与适用性

本PCR适用于CPC 3.0子类46539边界内、连接电网的成品电灯及照明装置，包括公共露天场所和通道照明用装置，且其设计并非专用于LED光源。灯具包括其结构，并在随产品交付或为正常运行所必需时包括控制装置、兼容灯、固定件、电气连接器、传感器和照明管理附件。

本PCR不包括专用于LED光源的灯具、自带能源的便携式灯、圣诞树灯串、非电灯、发光标志、作为独立产品销售的光源以及单独销售的零部件。前景边界为从原材料/采购部件进入到最终装配、测试和包装的摇篮到厂门边界。配送、安装施工、使用阶段电力、灯/控制装置更换和寿命终结属于下游情景，不纳入本前景清单；但必须保留使用特征限定信息，以便下游生命周期模型一致补充这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-lamps-and-lighting-fittings-including-lamps-and-lighting-fittings-of-a-k-899c3ecd |
| classification_refs | CPC 3.0:46539 |
| covered_products | 非专用于LED光源的连接电网成品电灯及照明装置，包括公共露天场所和通道照明灯具 |
| excluded_products | 专用于LED的灯具；自带能源便携式灯；圣诞树灯串；非电灯；发光标志；独立光源；单独销售的零部件 |
| representative_product | 具有已声明外壳、光学件、兼容的非专用LED光源配置、控制装置配置、输出光通量和指定寿命的包装成品灯具 |
| production_route | 采购和/或厂内制造部件；条件性表面处理；最终装配；电气与光度测试；包装 |
| market_state | 工厂门成品包装灯具；已声明应用和随附附件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由合规灯具提供输出人造光 |
| How much | 输出人造光通量1,000流明 |
| How well | 按声明的光度分布、电气输入、光源/控制装置配置、照明管理状态和应用条件 |
| How long or cycle | 35,000运行小时 |
| reference_flow_link | 灯具数量N =（1,000流明 × 35,000 h）/（声明输出光通量V × 指定寿命H）；所有摇篮到厂门交换均乘以N |

| 字段 | 值 |
| --- | --- |
| 参考数量 | N × 成品实测质量，单位kg |
| 参考产品流 | 其他电灯及照明装置（包括用于照明公共露天场所或通道的灯具和照明装置），非专用于LED光源 `f3d53035-bae3-4ebd-8a74-f133bc33211a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 声明输出光通量V；指定寿命H；灯具质量；应用；室内/室外状态；兼容光源技术及可更换性；随附灯数量；控制装置数量与类型；照明管理功能；声明输入功率；外壳/光学件材料；随附安装件与附件；制造地理；生产路线；包装状态 |

构建前景数据包时，`必需限定信息`中的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_product_mass` | 成品灯具及组成材料行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含产品包装的产品净质量及组成材料质量；包装须单列。 |
| `mu_luminous_flux` | 参考流缩放 | 输出人造光通量 | lumen | 使用完整声明灯具配置的光度报告；不得以裸灯额定光通量替代灯具输出。 |
| `mu_lifetime` | 参考流缩放 | 指定运行寿命 | h | 使用制造商在规定条件下声明的灯具寿命；不可更换光源按光源限制寿命，可更换光源按结构寿命。 |
| `mu_energy` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量kWh，并按1 kWh = 3.6 MJ仅转换一次；记录电压、电网地理和损耗边界。 |
| `mu_gas` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度和压力参考条件，并区分外购气体与现场制气。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 为声明灯具采购并进入报告设施的全部材料、成品部件、附件和包装 |
| starting_condition_role | 前景制造投入边界 |
| product_classification_scope | CPC 3.0:46539成品灯具；不包括专用LED灯具、独立灯或单独销售的零部件 |
| recursive_input_rule | 作为投入购买的CPC 46539灯具须作为具有上游数据集的独立产品投入记录，不得在同一前景过程中递归展开。 |
| upstream_dataset_requirement | 每项采购原子材料、部件、公用工程和废物处理服务均应使用供应商特定或地理/技术代表性上游数据集。 |
| disclosure | 披露自制/外购状态、所含灯/控制装置/附件、设施地理、分配、截断决定、再生含量声明、包装及厂内过程。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_complete_delivered_product` | 制造边界 | 纳入随产品交付或为声明灯具正常运行所需的全部部件和附件；结构改造、道路工程、配送、安装、使用、维护和寿命终结不在本前景边界内。 | pep-ecopassport-psr-0014-ed2-2023 |
| `sb_atomic_bom` | 材料和部件投入 | 按原子采购材料或部件流记录实际物料清单；不得合并不同材料或能源载体。 | pep-ecopassport-psr-0014-ed2-2023 |
| `sb_production_waste` | 制造产出 | 记录每项分类生产废物及其处理去向；不得从材料投入中扣除废料。 | pep-ecopassport-psr-0014-ed2-2023 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 材料与部件制造 | `required` | 始终纳入；若制造发生在报告设施外，则记录采购成品部件质量。 | 前景制造 | 每参考流的各组成材料质量及制造交换 |
| `surface_finishing` | 表面处理 | `conditional` | 报告设施内进行清洗、蚀刻、阳极氧化、喷漆或粉末涂装时纳入。 | 前景表面处理 | 每参考流的表面处理投入与产出 |
| `assembly_packaging` | 最终装配、测试与包装 | `required` | 始终纳入。 | 前景装配与产品放行 | 每参考流的成品质量及包装 |

### 过程：材料与部件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 铝板材（`aluminium_sheet`）

当报告设施内切割或成形铝板材时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 冷轧钢板（`steel_sheet`）

当报告设施内切割或成形钢板时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 冷轧钢板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 铜线材（`copper_wire`）

当铜线材作为内部导体跨越前景边界时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 浮法玻璃及表面经研磨或抛光的平板玻璃（`float_glass_sheet`）

当报告设施内制造平板玻璃罩、透镜或扩散板时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 浮法玻璃及表面经研磨或抛光的平板玻璃 `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 聚碳酸酯颗粒（`polycarbonate_granulate`）

当报告设施内注塑聚碳酸酯光学件或外壳件时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 聚碳酸酯颗粒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 电力（`fabrication_electricity`）

当报告设施内的切割、成形、注塑、连接及制造辅助作业，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_metered_energy`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 工业氧气（`fabrication_oxygen`）

当仅在报告设施内采用氧气辅助切割时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_process_gases`
- 来源: `luminaire-embodied-carbon-lca-2024`

##### 废物流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 基本流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

#### 输出

##### 产品流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 废物流

###### 铝废料（`aluminium_scrap`）

当分类收集的铝边角料或不合格件离开制造过程时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 废钢（`steel_scrap`）

当分类收集的钢边角料或不合格件离开制造过程时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 废钢
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 聚碳酸酯边角废料（`polycarbonate_scrap`）

当分类收集的聚碳酸酯流道料、边角料或不合格件离开制造过程时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 聚碳酸酯边角废料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 浮法玻璃碎料（`float_glass_cullet`）

当分类收集的平板玻璃边角料或破损料离开制造过程时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 浮法玻璃碎料 `a62b5f32-0de6-4587-a5f8-d668a64e7979`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

##### 基本流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

### 过程：表面处理（`surface_finishing`）

#### 输入

##### 产品流

###### 聚酯粉末涂料（`powder_coating`）

当灯具结构件采用粉末涂装时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 聚酯粉末涂料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_finishing_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 氢氧化钠（`sodium_hydroxide`）

当实施氢氧化钠清洗或蚀刻时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_finishing_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 工艺用水（`process_water`）

当实施水洗、漂洗或水系表面处理时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_finishing_materials`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 电力（`finishing_electricity`）

当用于可归属于产品的泵、喷房、固化炉和处理设备，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_metered_energy`
- 来源: `luminaire-embodied-carbon-lca-2024`

###### 气态天然气（`natural_gas`）

当仅在可归属的固化或干燥作业燃烧气态天然气时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_process_gases`
- 来源: `luminaire-embodied-carbon-lca-2024`

##### 废物流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 基本流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

#### 输出

##### 产品流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 废物流

###### 粉末涂装废弃物（`powder_coating_waste`）

当收集的过喷粉末或废粉以废物形式离开过程时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 金属表面处理废水（`surface_finishing_wastewater`）

当水系表面处理废水进入厂内或厂外处理时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 金属表面处理废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_waste_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

当仅计入可归属的现场天然气燃烧直接排放的化石源二氧化碳，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_stack_and_fuel_balance`
- 来源:

### 过程：最终装配、测试与包装（`assembly_packaging`）

#### 输入

##### 产品流

###### 电子镇流器或已声明的灯具控制装置（`control_gear`）

当控制装置随参考灯具交付、集成于灯具或为其运行所必需时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 电子镇流器或已声明的灯具控制装置
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 白炽灯或放电灯，弧光灯（`lamp_light_source`）

当兼容的非专用LED灯随参考灯具交付或被选作参考光源时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 白炽灯或放电灯，弧光灯 `73b0a95f-d108-410a-ba2e-fac299a73970`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_bom_and_materials`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 瓦楞纸箱（`corrugated_box`）

当成品灯具随附瓦楞纸箱时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_packaging_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 低密度聚乙烯薄膜（PE-LD）（`ldpe_film`）

当成品灯具随附PE-LD保护膜或袋时，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_packaging_mass`
- 来源: `pep-ecopassport-psr-0014-ed2-2023`

###### 电力（`assembly_electricity`）

当用于可归属的装配、电气安全测试、光度测试和包装，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_metered_energy`
- 来源: `luminaire-embodied-carbon-lca-2024`

##### 废物流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 基本流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

#### 输出

##### 产品流

###### 其他电灯及照明装置（包括用于照明公共露天场所或通道的灯具和照明装置），非专用于LED光源（`finished_luminaire`）

当经最终检验放行的合格成品灯具，记录该原子交换；数量由批次物料、计量或废物记录取得。

- 选定流: 其他电灯及照明装置（包括用于照明公共露天场所或通道的灯具和照明装置），非专用于LED光源 `f3d53035-bae3-4ebd-8a74-f133bc33211a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际跨越过程边界的数量，并按参考流折算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准: 每个参考流所需的功能等效灯具数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_finished_product`
- 来源: `un-cpc-3-0-structure-2025`

##### 废物流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

##### 基本流

本PCR不预设此分组中的原子交换；如实际发生，必须按具体流单独记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 全部前景过程 | 可行时通过分别计量产品批次、机器、表面处理线和废物流避免分配。 |  |
| `allocation_mass` | 不可避免的多共产品共享过程 | 无法细分且不能建立物理因果关系时，按实测产出质量分配共享负荷，并披露全部产出与分配比例。 | pep-ecopassport-psr-0014-ed2-2023 |
| `allocation_scrap` | 生产废料 | 将废料作为废物产出并单独模拟其处理；不得从前景清单的材料总投入中扣减其质量或回收信用。 | pep-ecopassport-psr-0014-ed2-2023 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_materials` | component_fabrication; assembly_packaging | 组成材料或部件 | ERP领料、供应商规格、称量样品 | 物料id；材料牌号；质量；数量；供应商；再生含量；自制/外购状态 | 核对批准BOM、采购及批次领料记录；称量代表性单元 | kg | 每次产品修订和生产批次 | 代表性12个月或完整生产周期 | 所有报告设施和已声明外包步骤 | 材料总投入除以合格产出后乘以N | 签署BOM；校准记录；供应商声明；质量平衡 |
| `cp_metered_energy` | all processes | 电力 | 分表或机器日志 | 起止读数；机器id；批次；运行模式；电网连接 | 产品专用分表或基于机器工时的有据分配 | kWh，转换为MJ | 每批或每月 | 代表性12个月 | 所有可归属现场作业 | 扣除非生产基线；除以合格产出；乘以N | 仪表校准；账单核对；分配表 |
| `cp_process_gases` | component_fabrication; surface_finishing | 工业氧气或天然气 | 流量计、钢瓶或账单记录 | 气体身份；体积；温度；压力；批次；期初/期末库存 | 按参考条件换算的计量或库存平衡 | m3 | 每批或每月 | 代表性12个月 | 可归属切割、固化或干燥设备 | 净消耗除以合格产出；乘以N | 仪表校准；账单平衡；参考条件记录 |
| `cp_waste_mass` | component_fabrication; surface_finishing | 分类废物 | 过磅单和废物联单 | 废物身份；质量；批次；去向；处理；危险属性 | 内部回用或外运前分别称量每项废物流 | kg | 每次外运并按批次核对 | 代表性12个月 | 所有报告设施 | 废物总量除以合格产出；乘以N | 秤校准；联单；质量平衡 |
| `cp_finishing_materials` | surface_finishing | 涂料、化学品或工艺水 | 批次配方、槽液补加日志、仪表 | 物质；浓度；期初/期末库存；补加；回收量；批次 | 库存平衡和校准水表 | kg | 每批 | 代表性12个月 | 每条声明表面处理线 | 新鲜净投入除以合格产出；乘以N | 配方批准；SDS；仪表校准；库存核对 |
| `cp_stack_and_fuel_balance` | surface_finishing | 直接化石源二氧化碳 | 燃料分析和燃烧计算 | 天然气体积；参考条件；碳含量；氧化因子 | 仅根据采集的燃料记录计算现场直接化石CO2 | kg | 每月或每周期 | 与燃气清单相同 | 报告设施燃烧源 | 记录碳平衡，按合格产出和N归一化 | 燃料规格；计算表；可得时的烟气测试 |
| `cp_packaging_mass` | assembly_packaging | 包装部件 | 包装BOM和称量样品 | 包装物；材料；质量；重复使用次数；出货单元 | 分别称量包装部件并与出货核对 | kg | 每种包装设计及季度复核 | 代表性12个月 | 工厂门随产品交付的包装 | 每台灯具包装质量乘以N | 包装图纸；秤校准；出货核对 |
| `cp_finished_product` | assembly_packaging | 成品灯具 | 最终检验和光度报告 | 净质量；输出光通量V；寿命H；功率；配置；不合格品 | 校准称量及对声明配置进行电气和光度测试 | kg；lumen；h；W | 每次产品修订和代表性批次 | 当前销售配置 | 所有声明参考产品变体 | 计算N并将全部交换缩放到功能单位 | 校准证书；测试报告；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_quantity` | 全部清单行 | N =（1,000 × 35,000）/（V × H）；每台灯具交换乘以N。 | 输出光通量V（lumen）；指定寿命H（h） | 功能等效灯具数量N | pep-ecopassport-psr-0014-ed2-2023 |
| `calc_electricity` | 电力行 | MJ = 实测kWh × 3.6。 | 可归属实测kWh | 每参考流MJ |  |
| `calc_mass_balance` | 部件制造和表面处理 | 在记录的不确定度内核对：总投入=合格产品计入质量+各项废物产出+库存变化。 | 投入、产出、废物和库存记录 | 质量平衡残差和完整性标志 |  |
| `calc_direct_co2` | fossil_co2 | 由采集的天然气量及有据的碳/氧化数据计算现场直接化石CO2；不得包括上游电力或燃料供应排放。 | 燃料及组成采集记录 | 每参考流kg化石CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证明产品属于CPC 46539且并非专用于LED光源；保留产品规格、兼容灯说明、照片和型号。 | 批准的产品规格及分类审查 |
| `dq_completeness` | 物料清单和过程 | 核对组成材料、采购部件、工厂投入、废物和成品产出；解释每项材料遗漏及外包步骤。 | BOM至生产质量平衡及供应商记录 |
| `dq_temporal` | 全部前景数据 | 使用代表性12个月或完整生产周期；披露停产、原型和异常批次。 | 有日期的仪表、采购、生产和废物记录 |
| `dq_technology` | 制造和表面处理 | 识别厂内与外包切割、成形、注塑、涂装、阳极氧化和测试技术。 | 工艺路线单、供应商声明和设施过程图 |
| `dq_photometry` | 参考流缩放 | 保留与BOM相同配置的完整灯具光度报告、指定寿命依据和声明功率。 | 光度与寿命报告 |
| `dq_uncertainty` | 全部计算或分配值 | 报告测量不确定度、分配比例、数据缺口及代理上游数据集。 | 计算工作簿和数据质量审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 产品身份 | 若产品专用于LED光源、属于独立光源或零部件，或缺乏CPC 46539边界证据，则失败。 | un-cpc-3-0-structure-2025 |
| `val_reference_flow` | 功能单位 | 若V、H、N、净质量、随附灯/控制装置配置或光度依据缺失或内部不一致，则失败。 | pep-ecopassport-psr-0014-ed2-2023 |
| `val_atomic_inventory` | 过程清单 | 若任何记录交换合并多种材料、公用工程、燃料、废物或排放，或实际交换隐藏在伞形行中，则失败。 |  |
| `val_mass_balance` | 制造 | 无法解释的非零质量平衡残差应标记；若材料遗漏或废料抵扣导致无法核对，则失败。 | pep-ecopassport-psr-0014-ed2-2023 |
| `val_direct_emissions` | fossil_co2 | 若将上游燃料或电力排放记录为直接基本流，或直接燃烧CO2缺乏燃料采集证据，则失败。 |  |
| `val_packaging` | 包装 | 若产品包装计入灯具净质量，或随附包装部件未分别报告，则失败。 | pep-ecopassport-psr-0014-ed2-2023 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品制造数据集 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 在相同CPC 46539边界内进行摇篮到厂门制造比较，并用于补充已声明配送、安装、使用、维护和寿命终结情景的下游生命周期模型 |
| excluded_use | 在功能性能、寿命、配置、地理和下游情景未统一时与专用LED灯具或其他照明类别比较 |
| required_metadata | 型号；CPC证据；V；H；N；质量；功率；灯/控制装置/附件配置；照明管理功能；应用；地理；路线；包装；数据期；分配；上游数据集 |
| required_quality_disclosure | 前景占比；初级数据覆盖率；质量平衡残差；计量不确定度；分配；外包步骤；再生含量证据；未解决UUID和范围证据需求 |
| update_trigger | 产品重新设计；光源/控制装置变化；光通量、功率或寿命变化；BOM或包装变化超过研究实质性阈值；设施/路线/地理变化；或出现更新的代表性数据 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC第3.0版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期2026-09-04） | CPC 46539正式身份及与相邻照明类别的区分 |
| `pep-ecopassport-psr-0014-ed2-2023` | `standard` | PEP ecopassport，PSR-0014-ed2.0-EN-2023 07 13，《灯具专用规则》，https://register.pep-ecopassport.org/documents/public/PSR-0014-EN（检索日期2026-09-04） | 灯具范围、功能单位、参考流限定信息、部件/附件边界、分配、包装、废物和披露规则 |
| `luminaire-embodied-carbon-lca-2024` | `literature` | Mazzei等，《Embodied carbon quantification of luminaires using life cycle assessment and CIBSE TM65 methodologies: A comparison case study》，Journal of Industrial Ecology 28（2024），剑桥大学机构库已发表版本，https://api.repository.cam.ac.uk/server/api/core/bitstreams/ebf1b47c-5d0f-4e43-bd63-fb691f995d10/content（检索日期2026-09-05；DOI 10.1111/jiec.13449） | 经原文核实的制造过程与材料组成证据；支持铝、钢、玻璃、电力、天然气和表面处理的初级数据采集 |
