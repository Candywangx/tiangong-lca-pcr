---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.manufactured-tobacco
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 人造烟草

## 1. 适用范围

本 PCR 适用于 CPC 3.0 子类 25091“人造烟草”的工厂大门生产。范围包括其他人造烟草和烟草代用品、均化或再造烟草，以及作为申报产品离开报告工厂的烟草提取物和香精。产品路线可包括散装吸用烟草、嚼烟、湿鼻烟或干鼻烟、压制或绞制烟草、膨胀烟草、再造烟草薄片，以及烟草提取物或香精。每个数据集必须声明实际路线和可销售形态。

前景边界从报告工厂接收已调制烟叶、烟梗、烟末、外购烟草提取物或其他已声明含烟草原料开始，包括接收、调理、混合、路线特定的尺寸减小或提取、配方、干燥或回潮、可选膨胀、包装，以及直接服务于这些步骤的厂内作业。烟草种植、进厂前调制、供应商生产、出厂后配送、消费者使用和生命末期不属于前景；研究目标需要时只能通过相连的上游或下游数据集表示。

不包括 HS 品目 24.02 的雪茄、方头雪茄、小雪茄和卷烟，HS 品目 24.01 的未加工烟草和烟草废料，以及归入 HS 品目 24.04 的含尼古丁或不含尼古丁产品。多产品工厂必须对 CPC 25091 路线进行细分或计量，不得无说明地纳入被排除产品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.manufactured-tobacco` |
| classification_refs | CPC 3.0 `25091`，精确；使用 HS 2022 品目 `24.03` 操作化范围 |
| covered_products | 其他人造烟草和代用品；均化或再造烟草；烟草提取物和香精 |
| excluded_products | 未加工烟草和废料；雪茄、小雪茄和卷烟；HS 24.04 的非燃烧吸入产品和其他尼古丁产品 |
| representative_product | 报告路线生产的实际可销售 CPC 25091 产品 |
| production_route | 声明一种或多种：散装/嚼用/鼻烟/压制/绞制烟草、膨胀烟草、再造薄片、提取物或香精 |
| market_state | 报告工厂大门处的净可销售产品；声明包装配置和含水率基准 |

分类必须依据产品组成、形态和预期用途核验，不得从工厂名称或“烟草制品”等泛称推断。水烟烟草可能含甘油、芳香油或提取物、糖蜜或糖；实际使用时必须将这些组分分别作为原子输入记录。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合 CPC 3.0 25091 以及所声明路线、组成、可销售形态和含水率基准的人造烟草 |
| How much | 净产品 1 kg，不含运输包装，并与单独报告的销售包装分开 |
| How well | 符合适用产品规格；声明路线、含水率、烟草/代用品组成和包装配置 |
| How long or cycle | 一个有代表性的生产期；通常至少连续 12 个月，或有理由的完整生产批期 |
| reference_flow_link | Tiangong 流 `0b1039e5-6251-4030-a2fd-707a1f32f365`，版本 `01.01.000`，状态 `100` |

| 字段 | 值 |
| --- | --- |
| Reference amount | `1` |
| Reference product flow | 人造烟草（`0b1039e5-6251-4030-a2fd-707a1f32f365`） |
| Reference flow property | 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| Reference unit group | 质量（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| Reference unit | `kg` |
| Required qualifiers | CPC 25091 分类；路线；净重含水率基准和实测含水率；烟草与代用品组成；可销售形态；纳入的包装；报告期；工厂和地理范围 |

构建前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品描述或等效字段中声明 `Required qualifiers`。缺少任一必需限定条件即表示该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_product_net_mass` | 参考产品和含烟草中间料 | 质量 | kg | 使用经校准的净质量；扣除皮重和单独报告的包装；声明为销售态质量还是换算至规定含水率基准。 |
| `measure_material_mass` | 烟叶、烟梗、烟末、配料、制冷剂、燃料、包装和固体废物 | 质量 | kg | 根据采购、领用、地磅或库存变动分别记录每种具名材料；不得报告“材料”“添加剂”“包装”或“废物”等聚合项。 |
| `measure_water_volume` | 工艺水和处理前后废水 | 体积 | m3 | 分别计量各水流和废水流；只有在记录密度和温度时才可从质量换算。 |
| `measure_electricity` | 按过程计量或分配的电力 | 能量 | kWh | 分开记录外购和现场发电，注明电压等级和电表边界。 |
| `measure_thermal_energy` | 外购热水和其他计量热量 | 能量 | MJ | 与蒸汽和燃料分开报告交付的有用热量，并披露温度水平和换算基准。 |
| `measure_steam` | 外购或内部转移蒸汽 | 质量 | kg | 记录蒸汽质量及压力/温度或品质；不得与泛化热量合并。 |
| `measure_fuel` | 天然气和柴油 | 能量和物理量 | MJ 加 m3 或 kg/L | 分别记录各种燃料，并采用注明来源和期间的低位热值。 |
| `measure_air_emission` | 粉尘、制冷剂、二氧化碳、氮氧化物和颗粒物 | 质量 | kg | 对每种具名物质采用烟道测试、连续监测或有记录的质量平衡/排放计算。 |
| `measure_moisture` | 原料、中间料和可销售产品 | 质量分数 | kg/kg 或 % | 采用代表性取样和声明的测试方法；协调进厂态与干物质平衡。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告工厂大门接收的含烟草原料和非烟草配料 |
| starting_condition_role | 前景入口；上游种植、调制、供应商制造和运输采用相连数据集 |
| product_classification_scope | CPC 3.0 25091，并受 HS 2022 品目 24.03 和第 1 节明确排除项约束 |
| recursive_input_rule | 外购 CPC 25091 产品或中间料作为单独输入并连接供应商数据集；除非在报告前景内生产，否则不递归重建 |
| upstream_dataset_requirement | 为已调制烟叶或其他烟草原料、配料、水、电力、热、蒸汽、燃料、制冷剂和每种包装组分连接独立数据集 |
| disclosure | 声明路线、自有和外包作业、截断、现场公用工程、废水处理、产品含水率、分配和排除的厂内活动 |

| rule_id | 适用对象 | 要求 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有数据集 | 纳入从接收到工厂大门净可销售产品的全部路线步骤；实际发生时包括清理、调理、混合、提取、成片、干燥、膨胀和包装。 | `us-epa-tobacco-processing-2006`; `eu-pef-2021` |
| `boundary_upstream_links` | 外购输入 | 供应商生产留在前景外，但必须为跨边界的每种材料、配料、能源载体和包装组分连接数据集。 | `eu-pef-2021` |
| `boundary_same_category_input` | 外购人造烟草 | 作为独立输入记录其来源、路线、含水率和供应商数据集，防止制造阶段重复计数。 | `eu-pef-2021` |
| `boundary_optional_routes` | 再造、膨胀、提取物和香精路线 | 仅纳入实际运行的步骤，但适用步骤若不存在必须明确声明不适用。 | `us-epa-tobacco-processing-2006` |
| `boundary_excluded_products` | 多产品烟草工厂 | 通过计量或细分将 CPC 25091 与品目 24.01、24.02 和 24.04 分离。 | `unsd-cpc-v3-2025`; `wco-hs-2022-ch24` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_storage` | 原料接收与储存 | required | 始终 | 确定接收的含烟草质量并去除异物 | kg 合格含烟草原料 |
| `tobacco_conversion` | 路线特定烟草转化 | required | 始终 | 按适用路线进行调理、混合、配方、切割/粉碎/压制、提取/成片、干燥或回潮 | kg 人造烟草中间料 |
| `expanded_tobacco` | 二氧化碳膨胀 | conditional | 工厂进行烟草膨胀时纳入 | 使用液态二氧化碳和快速加热膨胀切后烟草 | kg 膨胀烟草 |
| `packing` | 最终调理、包装与放行 | required | 始终；散装交付时销售包装为零 | 生产并核验参考产品 | 净人造烟草 1 kg |
| `onsite_steam_generation` | 现场蒸汽生产 | conditional | 工厂为该路线生产蒸汽时纳入 | 将分别记录的燃料和水转化为输送蒸汽 | kg 输送蒸汽 |
| `onsite_wastewater_treatment` | 现场废水处理 | conditional | 含烟草废水在现场处理时纳入 | 处理工艺废水并量化出水和污泥 | m3 处理废水 |

### 过程：原料接收与储存（`receiving_storage`）

#### 输入

##### 产品流

###### 已调制烟叶（`receiving_cured_tobacco`）

按批次称量接收的已调制烟叶并连接供应商数据集。本卡不含下列烟梗和烟末。

- 选定流：已调制烟叶
- 流属性/单位：质量 / kg
- 数量规则：按批次采用前景地磅、秤和库存变动记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_materials`
- 来源：`us-epa-tobacco-processing-2006`

###### 烟梗（`receiving_tobacco_stems`）

分别称量为再造烟草或其他路线有意接收的烟梗。

- 选定流：烟梗
- 流属性/单位：质量 / kg
- 数量规则：前景批次接收量加库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_materials`
- 来源：`us-epa-tobacco-processing-2006`

###### 烟末（`receiving_tobacco_fines`）

分别称量为再造烟草或提取物路线有意接收的烟末。

- 选定流：烟末
- 流属性/单位：质量 / kg
- 数量规则：前景批次接收量加库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_materials`
- 来源：`us-epa-tobacco-processing-2006`

#### 输出

##### 废物流

###### 烟草中去除的异物（`receiving_foreign_material_waste`）

接收检查时去除的异物作为独立废物流称量。

- 选定流：烟草中去除的异物
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_waste`
- 来源：

### 过程：路线特定烟草转化（`tobacco_conversion`）

#### 输入

##### 产品流

###### 工艺水（`conversion_water`）

计量直接用于调理、提取、配方、进入产品的清洗或成片的水；作为废水排放的卫生清洗水仍须在废水原始记录中分开。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：前景水表或批次加水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_water`
- 来源：`us-epa-tobacco-processing-2006`

###### 蒸汽（`conversion_steam`）

进入调理、干燥、提取或浓缩的蒸汽必须与热量和燃料分开记录。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：前景蒸汽表或含压力和品质的工程平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_steam`
- 来源：`us-epa-tobacco-processing-2006`

###### 外购热水（`conversion_hot_water`）

仅当热水跨越前景边界且不是蒸汽时纳入外购热水热量。

- 选定流：外购热水
- 流属性/单位：能量 / MJ
- 数量规则：前景热量表，或质量流量与温差平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_heat`
- 来源：

###### 中压电力（`conversion_electricity`）

计量或从有记录的分表分配输送、切割、粉碎、压制、提取、打浆、成片、风机、干燥和冷却的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：报告期前景分表记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_electricity`
- 来源：`us-epa-tobacco-processing-2006`

###### 甘油（`conversion_glycerol`）

水烟烟草或其他声明配方使用甘油时单独记录。

- 选定流：甘油
- 流属性/单位：质量 / kg
- 数量规则：前景配方领用量减退料库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_ingredients`
- 来源：`wco-hs-2022-ch24`

###### 糖蜜（`conversion_molasses`）

声明配方使用糖蜜时单独记录。

- 选定流：糖蜜
- 流属性/单位：质量 / kg
- 数量规则：前景配方领用量减退料库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_ingredients`
- 来源：`wco-hs-2022-ch24`

###### 蔗糖（`conversion_sucrose`）

使用蔗糖时与糖蜜及其他配料分开记录。

- 选定流：蔗糖
- 流属性/单位：质量 / kg
- 数量规则：前景配方领用量减退料库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_ingredients`
- 来源：`wco-hs-2022-ch24`; `us-epa-tobacco-processing-2006`

###### 烟草提取物（`conversion_tobacco_extract`）

将外购或内部转移、用于薄片回加或配方的烟草提取物作为独立输入计量；内部转移不得重复计作上游采购。

- 选定流：烟草提取物
- 流属性/单位：质量 / kg
- 数量规则：前景批次加入和内部转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_ingredients`
- 来源：`us-epa-tobacco-processing-2006`

###### 氨制冷剂补充量（`conversion_ammonia_makeup`）

服务于该路线的氨制冷系统补加量按采购和库存平衡记录；仅在没有氨系统时省略。

- 选定流：氨制冷剂
- 流属性/单位：质量 / kg
- 数量规则：采购量加期初库存减期末库存和有记录的回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_refrigerants`
- 来源：

###### R-134a 制冷剂补充量（`conversion_r134a_makeup`）

服务于该路线的 R-134a 补加量与氨分开记录；仅在没有 R-134a 系统时省略。

- 选定流：R-134a 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：采购量加期初库存减期末库存和有记录的回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_refrigerants`
- 来源：

#### 输出

##### 产品流

###### 人造烟草中间料（`conversion_intermediate`）

在可选膨胀或最终包装前称量离开转化步骤的路线特定中间料。对于提取物或香精路线，该项为浓缩的可销售前体。

- 选定流：人造烟草中间料
- 流属性/单位：质量 / kg
- 数量规则：前景转移秤并声明含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_outputs`
- 来源：`us-epa-tobacco-processing-2006`

##### 废物流

###### 废弃烟叶（`conversion_tobacco_leaf_waste`）

称量不进行厂内回用的不合格烟叶，不得与烟梗、烟末或捕集粉尘合并。

- 选定流：废弃烟叶
- 流属性/单位：质量 / kg
- 数量规则：按处理去向采用前景容器秤
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_waste`
- 来源：`us-epa-tobacco-processing-2006`

###### 废弃烟梗（`conversion_tobacco_stem_waste`）

扣除转移至再造烟草路线且有记录的内部回用量后，单独称量不可用烟梗。

- 选定流：废弃烟梗
- 流属性/单位：质量 / kg
- 数量规则：按处理去向采用前景容器秤
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_waste`
- 来源：`us-epa-tobacco-processing-2006`

###### 废弃烟末（`conversion_tobacco_fines_waste`）

扣除转移至再造烟草或提取物路线且有记录的内部回用量后，单独称量不可用烟末。

- 选定流：废弃烟末
- 流属性/单位：质量 / kg
- 数量规则：按处理去向采用前景容器秤
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_waste`
- 来源：`us-epa-tobacco-processing-2006`

###### 捕集的烟草粉尘（`conversion_captured_tobacco_dust`）

称量过滤器或集尘器截留的烟草粉尘；本流不含排放至空气的烟草粉尘。

- 选定流：捕集的烟草粉尘
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景集尘器或废物容器秤
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_waste`
- 来源：`us-epa-tobacco-processing-2006`

###### 含烟草工艺废水（`conversion_process_wastewater`）

仅可合并水力相连且处理方式和组成表征相同的废水；提取稀释水、过量提取液、蒸发器冷凝水、洗涤器排污、设备清洗和地面清洗必须在原始记录中分开。

- 选定流：含烟草工艺废水
- 流属性/单位：体积 / m3
- 数量规则：前景排放流量计，注明采样点和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_wastewater`
- 来源：`us-epa-tobacco-processing-2006`

##### 基本流

###### 排放至空气的烟草粉尘（`conversion_tobacco_dust_air`）

测量控制后释放的烟草颗粒物；捕集粉尘属于固体废物或内部回收，不是空气排放。

- 选定流：排放至空气的烟草粉尘
- 流属性/单位：质量 / kg
- 数量规则：烟道测试，或排气流量乘实测浓度并扣除捕集量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_air`
- 来源：`who-tobacco-environment-2017`

###### 排放至空气的氨（`conversion_ammonia_air`）

氨制冷系统服务于前景时，单独报告氨向空气的损失。

- 选定流：排放至空气的氨
- 流属性/单位：质量 / kg
- 数量规则：与事件日志协调的制冷剂质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_refrigerants`
- 来源：

###### 排放至空气的 R-134a（`conversion_r134a_air`）

R-134a 系统服务于前景时，单独报告 R-134a 向空气的损失。

- 选定流：排放至空气的 R-134a 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：与事件日志协调的制冷剂质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conversion_refrigerants`
- 来源：

### 过程：二氧化碳膨胀（`expanded_tobacco`）

#### 输入

##### 产品流

###### 切后人造烟草中间料（`expansion_intermediate`）

称量送入膨胀的切后调理烟草，不重复计算其上游生产。

- 选定流：切后人造烟草中间料
- 流属性/单位：质量 / kg
- 数量规则：前景转移秤和含水率测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_expansion_materials`
- 来源：`us-epa-tobacco-processing-2006`

###### 液态二氧化碳（`expansion_liquid_co2`）

记录进入膨胀容器的新鲜液态二氧化碳，并扣除实测回收量。

- 选定流：液态二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：前景储罐液位或交付质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_expansion_materials`
- 来源：`us-epa-tobacco-processing-2006`

###### 膨胀用中压电力（`expansion_electricity`）

将膨胀泵、控制和直接相关快速加热设备的电力与一般转化电力分开记录。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：前景分表或设备小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_expansion_energy`
- 来源：`us-epa-tobacco-processing-2006`

#### 输出

##### 产品流

###### 膨胀烟草（`expansion_expanded_tobacco`）

稳定并测量含水率后称量离开容器的膨胀烟草。

- 选定流：膨胀烟草
- 流属性/单位：质量 / kg
- 数量规则：前景转移秤并声明含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_expansion_outputs`
- 来源：`us-epa-tobacco-processing-2006`

##### 基本流

###### 膨胀过程排放至空气的二氧化碳（`expansion_co2_air`）

将膨胀过程释放的外购二氧化碳与燃烧二氧化碳分开报告。

- 选定流：膨胀过程排放至空气的二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：液态二氧化碳输入减实测回收量和库存变动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_expansion_outputs`
- 来源：`us-epa-tobacco-processing-2006`

### 过程：最终调理、包装与放行（`packing`）

#### 输入

##### 产品流

###### 散装人造烟草（`packing_bulk_tobacco`）

称量转入最终调理和包装的合格散装产品。

- 选定流：散装人造烟草
- 流属性/单位：质量 / kg
- 数量规则：前景转移秤和含水率测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_product`
- 来源：`us-epa-tobacco-processing-2006`

###### 纸袋（`packing_paper_pouch`）

记录进入可销售单元的纸袋质量；未使用时以声明的零值表示。

- 选定流：纸袋
- 流属性/单位：质量 / kg
- 数量规则：前景物料清单与领用和废料协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_components`
- 来源：`us-epa-tobacco-processing-2006`

###### 铝罐（`packing_aluminium_tin`）

铝罐与纸、玻璃和塑料组分分开记录。

- 选定流：铝罐
- 流属性/单位：质量 / kg
- 数量规则：前景物料清单与领用和废料协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_components`
- 来源：`us-epa-tobacco-processing-2006`

###### 玻璃罐（`packing_glass_jar`）

使用玻璃罐时单独记录。

- 选定流：玻璃罐
- 流属性/单位：质量 / kg
- 数量规则：前景物料清单与领用和废料协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_components`
- 来源：`us-epa-tobacco-processing-2006`

###### 纸板盒（`packing_paperboard_box`）

纸板盒与纸袋分开记录。

- 选定流：纸板盒
- 流属性/单位：质量 / kg
- 数量规则：前景物料清单与领用和废料协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_components`
- 来源：

###### 低密度聚乙烯薄膜（`packing_ldpe_film`）

低密度聚乙烯薄膜与全部纤维、金属和玻璃包装分开记录。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：前景物料清单与领用和废料协调
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_components`
- 来源：

###### 包装用中压电力（`packing_electricity`）

记录最终调理、灌装、密封、贴标和箱体搬运电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：前景分表或设备小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_electricity`
- 来源：

#### 输出

##### 产品流

###### 人造烟草（`packing_reference_product`）

这是唯一参考交换。Tiangong 状态 100 产品流归一化为 1 kg 净合格产品；包装仍保留在独立输入卡中。

- 选定流：人造烟草 `0b1039e5-6251-4030-a2fd-707a1f32f365`
- 流属性/单位：质量 / kg
- 数量规则：按参考流定义精确为 1 kg 净合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考产品身份
- 基准类型：产品产出（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`unsd-cpc-v3-2025`; `wco-hs-2022-ch24`

##### 废物流

###### 纸袋废料（`packing_paper_pouch_scrap`）

将废弃纸袋与纸板盒和所有其他包装分开称量。

- 选定流：纸袋废料
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景废料容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

###### 纸板盒废料（`packing_paperboard_scrap`）

将废弃纸板盒与纸袋和所有其他包装分开称量。

- 选定流：纸板盒废料
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景废料容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

###### 铝质包装废料（`packing_aluminium_scrap`）

单独称量铝质包装废料。

- 选定流：铝质包装废料
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景废料容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

###### 玻璃包装废料（`packing_glass_scrap`）

单独称量玻璃包装废料。

- 选定流：玻璃包装废料
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景废料容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

###### 低密度聚乙烯包装废料（`packing_plastic_scrap`）

低密度聚乙烯包装废料与其他聚合物分开称量。

- 选定流：低密度聚乙烯包装废料
- 流属性/单位：质量 / kg
- 数量规则：按去向采用前景废料容器称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

###### 不合格人造烟草（`packing_offspec_tobacco`）

将离开前景作为废物的不合格产品报告为废物流。厂内返工材料属于内部转移，不得同时计作输入和废物。

- 选定流：不合格人造烟草
- 流属性/单位：质量 / kg
- 数量规则：前景不合格品称重减有记录的内部返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 1 kg 净人造烟草
- 基准类型：产品产出（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_waste`
- 来源：

### 过程：现场蒸汽生产（`onsite_steam_generation`）

#### 输入

##### 产品流

###### 天然气（`boiler_natural_gas`）

锅炉天然气与柴油和其他燃料分开记录。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：使用有记录低位热值的前景燃料表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_inputs`
- 来源：`who-tobacco-environment-2017`

###### 柴油（`boiler_diesel`）

蒸汽锅炉或启动燃烧器使用的柴油与天然气分开记录。

- 选定流：柴油
- 流属性/单位：能量 / MJ
- 数量规则：使用有记录低位热值的前景储罐领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_inputs`
- 来源：`who-tobacco-environment-2017`

###### 锅炉给水（`boiler_feedwater`）

原始记录中分别记录补充水和回收冷凝水；本交换为进入蒸汽生产的净给水。

- 选定流：锅炉给水
- 流属性/单位：体积 / m3
- 数量规则：前景给水流量计
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_inputs`
- 来源：

###### 锅炉用中压电力（`boiler_electricity`）

记录锅炉泵、风机和控制用电。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：前景分表或设备小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_inputs`
- 来源：

#### 输出

##### 产品流

###### 输送蒸汽（`boiler_steam`）

在输送边界测量转入烟草转化过程的蒸汽。

- 选定流：蒸汽
- 流属性/单位：质量 / kg
- 数量规则：前景蒸汽表并记录压力和品质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_outputs`
- 来源：

##### 废物流

###### 锅炉排污废水（`boiler_blowdown`）

将锅炉系统排污与含烟草废水分开测量。

- 选定流：锅炉排污废水
- 流属性/单位：体积 / m3
- 数量规则：前景排污流量计或经核验的水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_outputs`
- 来源：`us-epa-tobacco-processing-2006`

##### 基本流

###### 排放至空气的化石二氧化碳（`boiler_co2_air`）

根据分别记录的锅炉燃料量化化石二氧化碳。

- 选定流：排放至空气的二氧化碳（化石）
- 流属性/单位：质量 / kg
- 数量规则：烟道测量或燃料特定碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_air`
- 来源：

###### 以二氧化氮计的氮氧化物空气排放（`boiler_nox_air`）

量化已安装控制设备后的氮氧化物。

- 选定流：排放至空气的氮氧化物（以二氧化氮计）
- 流属性/单位：质量 / kg
- 数量规则：烟道测试、连续监测或有记录的燃料特定因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_air`
- 来源：

###### 排放至空气的细颗粒物（`boiler_pm_air`）

量化已安装控制设备后空气动力学直径不大于 2.5 微米的颗粒物；任何更粗粒级必须另设原子行。

- 选定流：排放至空气的颗粒物（<=2.5 微米）
- 流属性/单位：质量 / kg
- 数量规则：烟道测试或有记录的燃料特定因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 kg 输送蒸汽
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_air`
- 来源：

### 过程：现场废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 废物流

###### 待处理含烟草工艺废水（`treatment_process_wastewater`）

在定义的采样点测量进入现场处理的含烟草废水。

- 选定流：含烟草工艺废水
- 流属性/单位：体积 / m3
- 数量规则：前景进水流量计
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_inputs`
- 来源：`us-epa-tobacco-processing-2006`

##### 产品流

###### 废水处理用中压电力（`treatment_electricity`）

记录均衡、生物处理、澄清、污泥处理和相关泵的电力。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：前景分表或设备小时分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_inputs`
- 来源：`us-epa-tobacco-processing-2006`

#### 输出

##### 废物流

###### 经处理废水（`treatment_treated_wastewater`）

测量最终出水体积并保留污染物特定分析结果；没有水量平衡时不得用进水体积替代。

- 选定流：经处理废水
- 流属性/单位：体积 / m3
- 数量规则：前景出水流量计和采样记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_outputs`
- 来源：`us-epa-tobacco-processing-2006`

###### 废水处理污泥（`treatment_sludge`）

按声明的湿基或干基称量污泥并记录处理去向。

- 选定流：废水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：前景秤，或容积配合实测固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：厂址特定（`site_specific`）
- 归一化基准：每 m3 处理废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_outputs`
- 来源：`us-epa-tobacco-processing-2006`

## 7. 分配与副产品处理

| rule_id | 适用对象 | 要求 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 多路线或多产品工厂 | 首先按路线、生产线、批次、仪表、配方和运行时间细分，使 CPC 25091 前景记录可直接归属。 | `eu-pef-2021` |
| `allocation_physical` | 不可避免地联合生产多种可销售烟草产品的过程 | 无法细分且存在因果物理关系时，按净干物质质量或其他已证明的因果属性分配，并披露含水率换算和敏感性。 | `eu-pef-2021` |
| `allocation_economic` | 缺乏可辩护物理关系的联合过程 | 只有在说明细分和物理分配均不可行后才可采用经济分配；使用同期净出厂价值并测试敏感性。 | `eu-pef-2021` |
| `allocation_internal_rework` | 返回同一前景的回收烟草 | 作为无副产品信用的内部转移，不得同时作为废物和新输入报告。 | `us-epa-tobacco-processing-2006` |
| `allocation_waste_recovery` | 送往再生、能量回收或处理的废物 | 记录废物量和去向；下游信用只有在所选研究方法允许时才可使用，并在前景生产平衡之外披露。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集规程

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_materials` | `receiving_storage` | 输入产品流 | 称重 | 流名、供应商、批号、毛重、皮重、净重、含水率、库存变动 | 校准秤加库存协调 | kg | 每批；每月协调 | 代表性年度或完整生产批期 | 全部接收点 | 分原子流求和；保留原始质量后再换算含水率 | 校准、批次记录、库存协调 |
| `cp_receiving_waste` | `receiving_storage` | 输出废物 | 称重 | 废物名、容器皮重、毛重、去向 | 校准容器秤 | kg | 每次外运 | 与生产相同期间 | 接收区 | 按原子废物和去向求和 | 票据、校准、去向记录 |
| `cp_conversion_water` | `tobacco_conversion` | 输入水 | 仪表/批次 | 表起止读数、批次加水、用途 | 校准水表和批次记录 | m3 | 每日或每批 | 与生产相同期间 | 全部转化用水点 | 直接用水求和；卫生清洗水保留在废水原始记录 | 仪表校准、批次表 |
| `cp_conversion_steam` | `tobacco_conversion` | 输入蒸汽 | 仪表 | 质量、压力、温度、品质 | 蒸汽表或核验工程平衡 | kg | 每小时/每日 | 与生产相同期间 | 转化交付边界 | 仅汇总交付蒸汽 | 校准和平衡 |
| `cp_conversion_heat` | `tobacco_conversion` | 输入外购热水 | 仪表 | 质量流量、进出口温度、时间 | 热量表 | MJ | 每小时/每日 | 与生产相同期间 | 转化交付边界 | 积分交付能量；不与蒸汽聚合 | 校准和热平衡 |
| `cp_conversion_electricity` | `tobacco_conversion` | 输入电力 | 仪表 | 表起止读数、停机、生产线产出 | 收入级分表 | kWh | 每日/每月 | 与生产相同期间 | 转化设备 | 汇总实测用电；共享负荷按第 7 节 | 电表证书和生产日志 |
| `cp_conversion_ingredients` | `tobacco_conversion` | 配料输入 | 配方 | 配料身份、批号、领用、退料、库存变动 | 批次领用和库存平衡 | kg | 每批 | 与生产相同期间 | 配方和回加点 | 每种化学品或提取物分别求和 | 配方、领料单、库存协调 |
| `cp_conversion_refrigerants` | `tobacco_conversion` | 制冷剂输入和排放 | 质量平衡 | 制冷剂身份、采购、库存、回收、充注、事件损失 | 年度制冷剂平衡和泄漏日志 | kg | 每次事件；年度结算 | 与生产相同期间 | 服务前景的系统 | 每种制冷剂分别计算；共享系统按实测冷量分配 | 发票、维护日志、库存、分配记录 |
| `cp_conversion_outputs` | `tobacco_conversion` | 产品产出 | 转移称重 | 质量、含水率、路线、批次 | 校准转移秤和含水率测试 | kg | 每批 | 与生产相同期间 | 转化出口 | 销售态求和并保留干物质换算 | 校准和实验室结果 |
| `cp_conversion_waste` | `tobacco_conversion` | 固体废物 | 称重 | 原子废物、质量、含水率、去向、内部回收 | 容器秤和处置日志 | kg | 每个容器 | 与生产相同期间 | 转化区域 | 扣除有记录内部转移；按去向求和 | 票据和协调 |
| `cp_conversion_wastewater` | `tobacco_conversion` | 废水产出 | 仪表/采样 | 流、体积、采样点、去向、污染物结果 | 流量计和代表性采样 | m3 | 连续/每日；按许可或研究采样 | 与生产相同期间 | 各水力排放口 | 保留分流；仅聚合共用处理流 | 校准、实验室报告、水量平衡 |
| `cp_conversion_air` | `tobacco_conversion` | 空气排放 | 测量 | 源、流量、浓度、控制状态、小时 | 烟道测试或连续测量 | kg | 代表性工况测试 | 代表性运行状态 | 全部路线排气 | 控制后按具名污染物求和 | 测试报告和控制日志 |
| `cp_expansion_materials` | `expanded_tobacco` | 材料输入 | 仪表/称重 | 烟草质量/含水率、CO2 交付、回收、库存 | 校准秤和储罐平衡 | kg | 每批/每次交付 | 与膨胀相同期间 | 膨胀装置 | 烟草与 CO2 分开 | 校准、储罐和批次日志 |
| `cp_expansion_energy` | `expanded_tobacco` | 输入电力 | 仪表 | 表起止读数、设备小时 | 分表 | kWh | 每日/每批 | 与膨胀相同期间 | 膨胀装置 | 仅汇总膨胀负荷 | 校准和运行日志 |
| `cp_expansion_outputs` | `expanded_tobacco` | 产品和 CO2 排放 | 质量平衡 | 膨胀后质量/含水率、CO2 输入、回收、库存 | 秤加 CO2 质量平衡 | kg | 每批；每月结算 | 与膨胀相同期间 | 膨胀装置 | 产品和释放 CO2 分开报告 | 校准和协调平衡 |
| `cp_packing_product` | `packing` | 散装产品输入 | 转移称重 | 质量、含水率、批号 | 校准秤 | kg | 每批 | 与包装相同期间 | 包装入口 | 按产品路线和含水率基准求和 | 校准和实验室结果 |
| `cp_packing_components` | `packing` | 包装输入 | 物料清单 | 组分身份、单件质量、领用件数、退料、废料 | BOM 加领用和计数协调 | kg | 每批；每月结算 | 与包装相同期间 | 全部包装线 | 每种材料组分分别计算 | 批准 BOM、单件质量检查、库存协调 |
| `cp_packing_electricity` | `packing` | 输入电力 | 仪表 | 表起止读数、生产线产出、停机 | 分表或有记录设备小时分配 | kWh | 每日/每月 | 与包装相同期间 | 包装线 | 仅汇总包装负荷 | 校准和分配工作簿 |
| `cp_packing_waste` | `packing` | 废物产出 | 称重 | 废物身份、质量、去向、返工 | 校准容器秤 | kg | 每个容器 | 与包装相同期间 | 包装线 | 纸、铝、玻璃、LDPE 和不合格烟草分开 | 票据和质量协调 |
| `cp_boiler_inputs` | `onsite_steam_generation` | 燃料、给水、电力 | 仪表/库存 | 燃料量和低位热值、给水、电力、库存 | 校准仪表和储罐平衡 | MJ、m3、kWh | 每日/每月 | 与蒸汽使用相同期间 | 服务前景的锅炉 | 每种燃料分开；共享锅炉按实测输送蒸汽分配 | 校准、发票、热值证书 |
| `cp_boiler_outputs` | `onsite_steam_generation` | 蒸汽和排污 | 仪表 | 蒸汽质量/品质、排污体积 | 蒸汽表和水表 | kg、m3 | 每日 | 与蒸汽使用相同期间 | 交付和排放点 | 协调给水、蒸汽、冷凝水和排污 | 校准和水量平衡 |
| `cp_boiler_air` | `onsite_steam_generation` | 空气排放 | 测量/计算 | 污染物、烟气流量、浓度、燃料、碳/热值、控制状态 | 烟道监测或有记录燃料计算 | kg | 代表性测试加期间计算 | 与蒸汽使用相同期间 | 服务前景的锅炉 | 每种污染物分别计算；按输送蒸汽分配 | 测试报告、因子来源、计算工作簿 |
| `cp_treatment_inputs` | `onsite_wastewater_treatment` | 进水和电力 | 仪表/采样 | 进水体积/水质、电力、处理状态 | 流量计、采样和分表 | m3、kWh | 连续/每日 | 与排放相同期间 | 服务前景的处理厂 | 共用处理优先按实测污染负荷分配，否则按流量并披露 | 校准、实验室和运行日志 |
| `cp_treatment_outputs` | `onsite_wastewater_treatment` | 出水和污泥 | 仪表/采样/称重 | 出水体积/水质、污泥湿重、固含量、去向 | 仪表、实验室采样和秤 | m3、kg | 连续/每日；每次污泥外运 | 与排放相同期间 | 最终出水和污泥边界 | 保留污染物结果及干/湿基；按去向汇总污泥 | 实验室报告、票据、水和固体平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景交换 | 归一化交换 = 期间交换量 / 期间净合格产品质量 | 期间交换；净产品 kg | 每 1 kg 产品的交换 | `eu-pef-2021` |
| `calc_net_product_mass` | 包装后参考产品 | 净产品 = 灌装单元毛重 - 全部单独报告包装的皮重 | 灌装毛重；包装皮重 | kg 净人造烟草 |  |
| `calc_dry_matter` | 含烟草质量 | 干物质 = 进厂态质量 ×（1 - 含水率质量分数） | 质量；含水率 | kg 干物质 |  |
| `calc_material_balance` | 从接收到包装 | 输入 + 期初库存 = 可销售产出 + 废物 + 排放 + 期末库存；内部转移抵消 | 原子质量记录和库存 | 绝对值和百分比闭合 | `us-epa-tobacco-processing-2006` |
| `calc_refrigerant_loss` | 各制冷剂 | 损失 = 采购 + 期初库存 - 期末库存 - 有记录回收 - 净充注增加 | 制冷剂记录 | kg 物质排放至空气 |  |
| `calc_expansion_co2_release` | CO2 膨胀 | 释放量 = 新鲜液态 CO2 输入 + 期初库存 - 期末库存 - 有记录回收 | CO2 储罐和回收记录 | kg CO2 排放至空气 | `us-epa-tobacco-processing-2006` |
| `calc_steam_allocation` | 共用现场锅炉 | 分配锅炉交换 = 锅炉总交换 × 前景实测蒸汽 / 实测总输送蒸汽 | 锅炉记录；蒸汽表 | 分配后的交换 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_temporal` | 全部前景数据 | 使用一个连贯的代表性期间，通常至少连续 12 个月；批期生产可使用有理由的完整批期。 | 有日期的生产、仪表和库存记录 |
| `dq_geographical` | 工厂和上游链接 | 识别工厂地理位置，并尽可能采用匹配实际采购的供应商或区域数据集。 | 工厂地址、供应商来源、数据集元数据 |
| `dq_technological` | 路线和设备 | 描述实际散装/鼻烟/压制/绞制、膨胀、再造、提取物或香精路线及控制设备。 | 工艺图、设备清单、批次记录 |
| `dq_completeness` | 原子清单 | 协调烟草干物质、净产品、包装、水、能源、废物和直接排放；解释每个缺失适用卡。 | 平衡工作簿和不适用登记表 |
| `dq_precision` | 测量和分配 | 保留校准、采样不确定性、含水率测试、分配驱动和计算版本。 | 证书、实验室 QA/QC、版本化计算 |
| `dq_source_caution` | 外部比较 | 不得把企业总体或仅卷烟强度转作 CPC 25091 前景事实；只可用于识别数据字段或定性风险。 | 引用 `hendlin-bialous-2019` 和 `who-tobacco-environment-2017` 的来源边界审查 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考交换 | 除非恰有一个输出使用 UUID `0b1039e5-6251-4030-a2fd-707a1f32f365`、质量、质量单位组和 kg，否则为错误。 | `unsd-cpc-v3-2025` |
| `validate_classification` | CPC/HS 范围 | 除非产品证据支持 CPC 25091/HS 24.03，且不属于任何声明排除项，否则为错误。 | `unsd-cpc-v3-2025`; `wco-hs-2022-ch24` |
| `validate_net_mass` | 参考量 | 除非产出精确归一化至 1 kg 净产品，并声明含水率基准和包装处理，否则为错误。 |  |
| `validate_route_coverage` | 过程图 | 除非纳入全部适用路线步骤，并明确说明每个不适用的条件过程，否则为错误。 | `us-epa-tobacco-processing-2006` |
| `validate_atomic_flows` | 清单原子性 | 任一行合并电力、热、蒸汽、燃料、制冷剂、材料、包装组分、废物材料或排放物质时为错误。 |  |
| `validate_localized_reference_name` | 中文参考名称 | 除非带 UUID 的中文 Selected flow 逐字为 `人造烟草`，否则为错误。 |  |
| `validate_material_balance` | 烟草和产品平衡 | 除非进厂态和干物质平衡纳入库存、内部转移、产品、废物和实测空气损失并报告闭合和残差，否则为错误。 | `us-epa-tobacco-processing-2006` |
| `validate_energy_separation` | 能源记录 | 除非电力、外购热水、蒸汽、天然气和柴油为独立交换，且不存在的载能体有明确不适用记录，否则为错误。 |  |
| `validate_refrigerants` | 制冷系统 | 除非服务前景的每种制冷剂分别具名并有补充量和损失记录，或记录不存在该系统，否则为错误。 |  |
| `validate_packaging` | 包装清单 | 除非每种实际包装材料为独立输入且相应废料单独报告；散装产品须声明销售包装为零，否则为错误。 |  |
| `validate_waste_emissions` | 废物与排放 | 除非废物去向和直接空气/水排放按物质或材料明确，且捕集粉尘未同时报告至空气，否则为错误。 | `us-epa-tobacco-processing-2006` |
| `validate_allocation` | 共用作业和副产品 | 除非首先尝试细分，并为所有物理或经济分配记录驱动、期间和敏感性，否则为错误。 | `eu-pef-2021` |
| `validate_data_quality` | 代表性和证据 | 缺少时间、地理、技术、完整性或精度证据时给出警告。 | `eu-pef-2021` |
| `validate_no_empirical_range_transfer` | 范围溯源 | 经验范围没有至少两项独立且边界可比的全文来源时为错误；本 PCR 不规定经验范围。 | `hendlin-bialous-2019`; `who-tobacco-environment-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 人造烟草生产单元过程前景数据集 |
| downstream_use | 为匹配的 CPC 25091 产品构建产品系统和生命周期模型 |
| allowed_use | 声明的人造烟草路线、组成、含水率基准、地理、技术和工厂大门边界 |
| excluded_use | 卷烟、雪茄、未加工烟草、HS 24.04 产品，或不匹配的路线和含水率基准 |
| required_metadata | 参考产品 UUID；CPC/HS 证据；路线；配方类别；含水率基准；包装配置；地理；技术；报告期 |
| required_quality_disclosure | 原子清单覆盖；物料和水量平衡；分配；排除项；采集规程；数据质量证据 |
| update_trigger | 路线、配方、设备、能源供应、包装配置、分配、边界或数据质量发生实质变化 |

## 11. 数据来源

| source_id | Type | 标题 | 作者或发布机构 | 发布日期 | Reference | 用途 |
| --- | --- | --- | --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | standard | Central Product Classification Version 3.0, final explanatory notes | 联合国统计司 | 2025-06-30 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 25091 精确身份和分类上下文 |
| `wco-hs-2022-ch24` | standard | Harmonized System 2022, Chapter 24 | 世界海关组织 | 2022 | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0424_2022e.pdf | HS 24.03 产品范围、排除项和水烟烟草组分 |
| `us-epa-tobacco-processing-2006` | official_guidance | Final Engineering Report: Tobacco Products Processing Detailed Study | 美国环境保护署 | 2006-06 | https://19january2017snapshot.epa.gov/sites/production/files/2015-09/documents/tobacco-products-processing-study_2006.pdf | 全文路线作业、膨胀和再造烟草步骤、废水来源与处理 |
| `who-tobacco-environment-2017` | official_guidance | Tobacco and its environmental impact: an overview | 世界卫生组织 | 2017 | https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | 制造资源、化学品、能源、废水和证据质量考虑 |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods | 欧盟委员会 | 2021-12-15 | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32021H2279 | 功能单位、参考流、企业特定前景数据、系统边界、分配和数据质量 |
| `hendlin-bialous-2019` | literature | The environmental externalities of tobacco manufacturing: A review of tobacco industry reporting | Yogi Hale Hendlin；Stella Aguinaga Bialous | 2019-03-05 | DOI: 10.1007/s13280-019-01148-3；全文：https://pure.eur.nl/ws/portalfiles/portal/48170611/Hendlin-Bialous2019_Article_TheEnvironmentalExternalitiesO.pdf | 能源、水、废水、废物和报告局限全文综述；支持排除不可比数值迁移 |
