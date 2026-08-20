---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.groats-meal-and-pellets-of-wheat-and-other-cereals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 小麦和其他谷物的去壳谷粒、粗粉和团粒

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 代码 23130：由小麦或另一种明确命名的谷物制成的去壳谷粒、粗粉和团粒。每个前景数据包必须锁定恰好一种植物学谷物物种、恰好一种产品形态和一条实际制造路线。不得跨谷物物种取平均，不得把去壳谷粒、粗粉或团粒合并，也不得以“其他谷物”作为材料身份。

前景边界从已声明谷物和外购公用工程跨越制造设施大门时开始。边界包括接收与储存、清理与分级、路线特定调质、脱壳、切割、研磨、筛分、路线特定制粒与冷却、成品储存与放行、批次归属的清洁、粉尘控制，以及条件适用的场内供热或废水处理。农业、接收前的谷物干燥或加工以及进厂运输需要单独的上游数据集。设施大门之后的分销、零售、使用和寿命终止属于下游。

覆盖产品为明确声明谷物物种和物理形态的干燥谷物去壳谷粒、谷物粗粉和谷物团粒。面粉、薄片、压片谷物、麦芽、淀粉、早餐谷物、蒸粗麦粉、复合饲料、多配料预制食品以及 CPC 23130 之外的任何产品均不在范围内。Codex 商品标准描述的产品，只有在其 CPC 身份仍为 23130 时才纳入。

本 PCR 不规定默认数量、范围、收率、水分调整、能源强度、损失比例或排放因子。数据集数值仅来自前景记录或根据采集记录计算的结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.groats-meal-and-pellets-of-wheat-and-other-cereals |
| classification_refs | CPC 3.0: 23130 — Groats, meal and pellets of wheat and other cereals (exact) |
| covered_products | 一种明确命名的谷物物种，以一种声明形态供应：去壳谷粒、粗粉或团粒。 |
| excluded_products | 面粉；薄片；压片谷物；麦芽；淀粉；早餐谷物；蒸粗麦粉；复合饲料；多配料预制食品；跨物种或跨形态平均；任何“其他谷物”兜底身份。 |
| representative_product | 一个由一种已声明植物学谷物物种生产的、净重合格的去壳谷粒、粗粉或团粒产品特定批次。 |
| production_route | 从谷物接收到适用的清理、调质、脱壳、碾磨、筛分、制粒、冷却、包装、储存、卫生、粉尘控制、供热和废水处理操作的确切设施路线。 |
| market_state | 一种声明的干散装或包装放行状态，并附产品特定的水分、粒径或团粒尺寸规范及储存条件。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造设施大门提供一种具体且符合规格的 CPC 23130 谷物产品。 |
| How much | 1 kg 净合格产品，不含任何包装材料。 |
| How well | 满足锁定的物种身份、产品形态定义、组成、水分、粒径或团粒尺寸、卫生和放行规范。 |
| How long or cycle | 一个已放行生产批次；披露设施内储存至放行的持续时间。 |
| reference_flow_link | 将 1 kg 参考数量赋给 `packaging_storage_release` 中恰好一个 `final_<species>_<form>` 输出行；其他所有最终产品行均不适用。 |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 kg |
| reference_product_flow | Groats, meal and pellets of wheat and other cereals `d38c3022-dc92-41e0-83b7-6bc99fa5b392` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | 植物学谷物物种; 去壳谷粒或粗粉或团粒形态; 完整或脱壳或脱胚状态; 确切粒径或团粒尺寸规范; 水分基准和放行水分; 实际清理和调质路线; 实际脱壳和碾磨路线; 适用时的制粒与冷却路线; 确切包装组成; 散装或包装放行状态; 净合格质量; 共产品去向; 不合格品去向; 粉尘控制配置; 废水去向 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明 `required_qualifiers` 列出的每一项。宽泛的天工参考身份绝不授权跨物种或跨形态取平均。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用 1 kg 净合格放行产品；参考质量不含任何包装组件。 |
| `species_form_lock` | 参考产品与清单 | Mass | kg | 一个数据包始终保留一种植物学物种和一种产品形态；不得平均或替换为另一谷物或形态。 |
| `moisture_basis` | 谷物、中间产品、共产品和废物 | Mass | kg | 记录实测质量和水分基准；干物质质量只能根据批次特定水分测量计算。 |
| `particle_specification` | 去壳谷粒和粗粉 | Mass | kg | 保留产品特定的筛分或粒径规范以及放行所用测试方法。 |
| `pellet_specification` | 团粒 | Mass | kg | 保留产品特定的团粒直径、长度或筛分规范、细粉判据和放行测试。 |
| `packaging_exclusion` | 包装 | Mass | kg | 参考质量不含包装，同时将每种物理包装材料作为独立清单交换记录。 |
| `energy_units` | 电力、蒸汽、热水和燃料 | Energy | kWh or MJ | 保留仪表和发票原始单位，并在归一化前记录每个换算因子。 |
| `water_units` | 工艺水和废水 | Volume | m3 | 分别记录每股水流，并保留实测体积基准。 |
| `pollutant_load` | 向空气或水体的排放 | Mass | kg | 仅可根据采集的活动量、体积、浓度或直接测量记录及有文件依据的公式计算负荷。 |
| `mass_balance` | 每个过程 | Mass | kg | 在不施加默认收率的前提下，核对投入、产品、共产品、废物、库存变化、保留水分和实测释放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造设施大门处谷物的确切物种、供应商批次、水分状态、污染或筛分状态、质量和储存状态。 |
| starting_condition_role | 一种已识别谷物的前景接收；上游种植、此前干燥和进厂运输仍为单独数据集。 |
| product_classification_scope | 仅限 CPC 3.0 代码 23130；每个数据包代表一个物种以及去壳谷粒、粗粉或团粒三者之一。 |
| recursive_input_rule | 外购 CPC 23130 中间产品按其确切物种和形态作为一个上游产品投入记录一次；不得递归重现其制造清单。 |
| upstream_dataset_requirement | 谷物种植、此前收获后作业、进厂运输、外购能源、水、化学品、包装以及设施外废物处理使用单独上游数据集。 |
| disclosure | 声明地理、技术、批次期间、物种、形态、谷物状态、路线、包装、共产品、废物去向、粉尘控制、场内公用工程和废水边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景系统 | 当确切谷物和外购公用工程在制造设施大门接收时开始。 | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `boundary_end` | 前景系统 | 在一种确切合格产品于设施大门储存、放行并计量后结束。 | `eu-pef-2021-2279` |
| `scope_lock` | 产品身份 | 锁定一种植物学物种、一种去壳谷粒或粗粉或团粒形态以及一条实际路线；跨物种和跨形态平均不合格。 | `un-cpc-3-2025`, `codex-cxs-155-1985`, `codex-cxs-178-1991` |
| `upstream_exclusion` | 上游阶段 | 种植、接收前收获后作业和进厂运输置于前景边界外，并链接单独上游数据集。 | `eu-pef-2021-2279` |
| `cleaning_inclusion` | 谷物准备 | 纳入锁定路线实际使用的筛分、抽吸、磁选、去石、擦麦、清洗和分级步骤。 | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `conditioning_inclusion` | 调质 | 仅在实际应用时纳入水、外购蒸汽、外购热水、保持时间和水分变化。 | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `pellet_route` | 团粒产品 | 仅对团粒产品纳入粗粉调质、模压、冷却、筛分、细粉处理和储存。 | `us-epa-ap42-grain-2003` |
| `dust_boundary` | 空气排放 | 对每个适用源和控制设备纳入捕集粉尘、废控制介质、粉尘控制公用工程和残余颗粒物释放。 | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `heat_boundary` | 热供应 | 热量跨越设施边界时记录外购蒸汽或热水；场内供热时记录燃料和给水；同一热量不得重复计入两者。 | `ec-jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `wastewater_boundary` | 废水 | 仅在前景设施内实际运行时纳入场内处理；否则在设施边界记录每股已命名的未处理废水。 | `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031` |
| `downstream_exclusion` | 下游阶段 | 前景边界排除设施大门后的分销、零售、使用和寿命终止。 | `eu-pef-2021-2279` |
| `unlisted_species_rule` | 未列出的有效谷物 | 验证前，为尚未列出的每种范围内谷物物种、材料、包装、废物、污染物或排放新增一条确切原子行；绝不得使用“其他谷物”选择器。 | `un-cpc-3-2025`, `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grain_receiving_storage` | 谷物接收与储存 | required | 始终纳入锁定谷物物种的接收、批次识别、称量和设施储存。 | 一种已声明谷物物种的前景接收与储存。 | 分配给锁定生产批次的已接收谷物质量 |
| `grain_cleaning_grading` | 谷物清理与分级 | required | 始终纳入实际使用的筛分、抽吸、磁选、去石、擦麦、清洗或分级步骤。 | 去除已命名异物并制备一股清洁谷物流。 | 按确切物种计的清洁谷物质量 |
| `conditioning_tempering` | 调质与润麦 | conditional | 仅在水、外购蒸汽、外购热水或保持步骤改变谷物水分或碾磨性能时纳入。 | 对一股清洁谷物流进行前景水分调整和润麦。 | 按确切物种计的调质谷物质量 |
| `dehulling_milling_sieving` | 脱壳、碾磨与筛分 | required | 始终纳入锁定去壳谷粒、粗粉或团粒路线所需的实际脱壳、切割、研磨、分级和筛分操作。 | 生产物种特定去壳谷粒或粗粉及已命名共产品。 | 每种确切产品形态和共产品的质量 |
| `pellet_forming_cooling` | 制粒与冷却 | conditional | 仅在声明参考产品形态为团粒时纳入。 | 一种物种特定团粒的前景蒸汽调质、模压、冷却和筛分。 | 合格物种特定团粒的质量 |
| `packaging_storage_release` | 包装、成品储存与放行 | required | 始终纳入成品储存与放行；仅在实际使用时纳入各包装材料。 | 在设施大门放行恰好一种物种特定产品形态。 | 一种合格放行产品的净质量 |
| `dust_collection_control` | 粉尘收集与控制 | conditional | 锁定路线使用抽吸、旋风器、袋式过滤器、湿式洗涤或油抑尘时纳入。 | 工艺粉尘的前景捕集、回收、处置和残余释放。 | 捕集粉尘和残余颗粒物释放的质量 |
| `hygiene_cleaning` | 卫生与设备清洁 | required | 始终纳入可归属于生产活动的干式清洁及实际执行的任何湿式清洁或消毒。 | 食品接触设备和生产区域的前景卫生作业。 | 可归属于生产活动的清洁记录 |
| `onsite_heat_generation` | 场内供热 | conditional | 仅在前景设施边界内产生蒸汽或热水时纳入。 | 将一种已记录燃料转化为蒸汽或热水。 | 燃料清单与有用热输出 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 仅在前景设施边界内实际运行废水处理时纳入。 | 处理每股已命名废水并记录残余污染物。 | 各处理水流的体积和污染物负荷 |

### 过程：谷物接收与储存（`grain_receiving_storage`）

#### 输入

##### 产品流

###### 输入 Common wheat grain（`receive_common_wheat_grain`）

Common wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Durum wheat grain（`receive_durum_wheat_grain`）

Durum wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Rye grain（`receive_rye_grain`）

Rye grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Barley grain（`receive_barley_grain`）

Barley grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Oat grain（`receive_oats_grain`）

Oat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Maize grain（`receive_maize_grain`）

Maize grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sorghum grain（`receive_sorghum_grain`）

Sorghum grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pearl millet grain（`receive_pearl_millet_grain`）

Pearl millet grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`receiving_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Diesel fuel（`receiving_diesel`）

Diesel fuel 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Diesel fuel 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Liquefied petroleum gas（`receiving_lpg`）

Liquefied petroleum gas 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Liquefied petroleum gas 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Ammonia refrigerant R717 makeup（`receiving_r717_makeup`）

Ammonia refrigerant R717 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Ammonia refrigerant R717 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ammonia refrigerant R717 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Carbon dioxide refrigerant R744 makeup（`receiving_r744_makeup`）

Carbon dioxide refrigerant R744 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Carbon dioxide refrigerant R744 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon dioxide refrigerant R744 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Propane refrigerant R290 makeup（`receiving_r290_makeup`）

Propane refrigerant R290 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Propane refrigerant R290 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Propane refrigerant R290 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Accepted Common wheat grain（`accepted_common_wheat_grain`）

Accepted Common wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Durum wheat grain（`accepted_durum_wheat_grain`）

Accepted Durum wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Rye grain（`accepted_rye_grain`）

Accepted Rye grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Barley grain（`accepted_barley_grain`）

Accepted Barley grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Oat grain（`accepted_oats_grain`）

Accepted Oat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Maize grain（`accepted_maize_grain`）

Accepted Maize grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Sorghum grain（`accepted_sorghum_grain`）

Accepted Sorghum grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Accepted Pearl millet grain（`accepted_pearl_millet_grain`）

Accepted Pearl millet grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Common wheat grain receiving reject（`receiving_reject_common_wheat`）

Common wheat grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Durum wheat grain receiving reject（`receiving_reject_durum_wheat`）

Durum wheat grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Rye grain receiving reject（`receiving_reject_rye`）

Rye grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Barley grain receiving reject（`receiving_reject_barley`）

Barley grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Oat grain receiving reject（`receiving_reject_oats`）

Oat grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oat grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oat grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Maize grain receiving reject（`receiving_reject_maize`）

Maize grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Sorghum grain receiving reject（`receiving_reject_sorghum`）

Sorghum grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Pearl millet grain receiving reject（`receiving_reject_pearl_millet`）

Pearl millet grain receiving reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet grain receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet grain receiving reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Low-density polyethylene inbound liner waste（`receiving_ldpe_liner_waste`）

Low-density polyethylene inbound liner waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Low-density polyethylene inbound liner waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Low-density polyethylene inbound liner waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Woven polypropylene inbound sack waste（`receiving_pp_sack_waste`）

Woven polypropylene inbound sack waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Woven polypropylene inbound sack waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Woven polypropylene inbound sack waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Corrugated fibreboard inbound carton waste（`receiving_carton_waste`）

Corrugated fibreboard inbound carton waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Corrugated fibreboard inbound carton waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Corrugated fibreboard inbound carton waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Wooden inbound pallet waste（`receiving_pallet_waste`）

Wooden inbound pallet waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Wooden inbound pallet waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Wooden inbound pallet waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Ammonia R717 to air（`receiving_r717_release`）

Ammonia R717 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Ammonia R717 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ammonia R717 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Carbon dioxide R744 to air（`receiving_r744_release`）

Carbon dioxide R744 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Carbon dioxide R744 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon dioxide R744 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Propane R290 to air（`receiving_r290_release`）

Propane R290 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Propane R290 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Propane R290 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 10 µm to air（`receiving_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`receiving_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：谷物清理与分级（`grain_cleaning_grading`）

#### 输入

##### 产品流

###### 输入 Accepted Common wheat grain（`cleaning_input_common_wheat`）

Accepted Common wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Durum wheat grain（`cleaning_input_durum_wheat`）

Accepted Durum wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Rye grain（`cleaning_input_rye`）

Accepted Rye grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Barley grain（`cleaning_input_barley`）

Accepted Barley grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Oat grain（`cleaning_input_oats`）

Accepted Oat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Maize grain（`cleaning_input_maize`）

Accepted Maize grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Sorghum grain（`cleaning_input_sorghum`）

Accepted Sorghum grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Accepted Pearl millet grain（`cleaning_input_pearl_millet`）

Accepted Pearl millet grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Accepted Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Accepted Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`cleaning_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Compressed air（`cleaning_compressed_air`）

Compressed air 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：压缩空气
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Compressed air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Process water for wet grain cleaning（`wet_cleaning_water`）

Process water for wet grain cleaning 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Process water for wet grain cleaning
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Process water for wet grain cleaning 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Food-grade white mineral oil（`dust_suppression_white_mineral_oil`）

Food-grade white mineral oil 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Food-grade white mineral oil
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Food-grade white mineral oil 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Refined soybean oil（`dust_suppression_soybean_oil`）

Refined soybean oil 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Refined soybean oil
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Refined soybean oil 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Cleaned Common wheat grain（`cleaned_common_wheat_grain`）

Cleaned Common wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Durum wheat grain（`cleaned_durum_wheat_grain`）

Cleaned Durum wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Rye grain（`cleaned_rye_grain`）

Cleaned Rye grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Barley grain（`cleaned_barley_grain`）

Cleaned Barley grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Oat grain（`cleaned_oats_grain`）

Cleaned Oat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Maize grain（`cleaned_maize_grain`）

Cleaned Maize grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Sorghum grain（`cleaned_sorghum_grain`）

Cleaned Sorghum grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Cleaned Pearl millet grain（`cleaned_pearl_millet_grain`）

Cleaned Pearl millet grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Common wheat cleaning screenings（`screenings_common_wheat`）

Common wheat cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Durum wheat cleaning screenings（`screenings_durum_wheat`）

Durum wheat cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Rye cleaning screenings（`screenings_rye`）

Rye cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Barley cleaning screenings（`screenings_barley`）

Barley cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Oats cleaning screenings（`screenings_oats`）

Oats cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Maize cleaning screenings（`screenings_maize`）

Maize cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Sorghum cleaning screenings（`screenings_sorghum`）

Sorghum cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Pearl millet cleaning screenings（`screenings_pearl_millet`）

Pearl millet cleaning screenings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet cleaning screenings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet cleaning screenings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Stone cleaning reject（`cleaning_stone_reject`）

Stone cleaning reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Stone cleaning reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Stone cleaning reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Sand cleaning reject（`cleaning_sand_reject`）

Sand cleaning reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sand cleaning reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sand cleaning reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Ferrous metal cleaning reject（`cleaning_ferrous_reject`）

Ferrous metal cleaning reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Ferrous metal cleaning reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ferrous metal cleaning reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Chaff cleaning reject（`cleaning_chaff_reject`）

Chaff cleaning reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Chaff cleaning reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Chaff cleaning reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Weed seed cleaning reject（`cleaning_weed_seed_reject`）

Weed seed cleaning reject 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Weed seed cleaning reject
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Weed seed cleaning reject 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Wet grain cleaning wastewater（`wet_cleaning_wastewater`）

Wet grain cleaning wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Wet grain cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Wet grain cleaning wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Particulate matter below 10 µm to air（`cleaning_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`cleaning_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：调质与润麦（`conditioning_tempering`）

#### 输入

##### 产品流

###### 输入 Cleaned Common wheat grain（`conditioning_input_common_wheat`）

Cleaned Common wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Durum wheat grain（`conditioning_input_durum_wheat`）

Cleaned Durum wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Rye grain（`conditioning_input_rye`）

Cleaned Rye grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Barley grain（`conditioning_input_barley`）

Cleaned Barley grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Oat grain（`conditioning_input_oats`）

Cleaned Oat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Maize grain（`conditioning_input_maize`）

Cleaned Maize grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Sorghum grain（`conditioning_input_sorghum`）

Cleaned Sorghum grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Pearl millet grain（`conditioning_input_pearl_millet`）

Cleaned Pearl millet grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Process water for grain tempering（`tempering_water`）

Process water for grain tempering 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Process water for grain tempering
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Process water for grain tempering 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`conditioning_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased steam（`conditioning_purchased_steam`）

Purchased steam 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased steam 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased hot water（`conditioning_purchased_hot_water`）

Purchased hot water 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased hot water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Tempered Common wheat grain（`tempered_common_wheat_grain`）

Tempered Common wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Durum wheat grain（`tempered_durum_wheat_grain`）

Tempered Durum wheat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Rye grain（`tempered_rye_grain`）

Tempered Rye grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Barley grain（`tempered_barley_grain`）

Tempered Barley grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Oat grain（`tempered_oats_grain`）

Tempered Oat grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Maize grain（`tempered_maize_grain`）

Tempered Maize grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Sorghum grain（`tempered_sorghum_grain`）

Tempered Sorghum grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Tempered Pearl millet grain（`tempered_pearl_millet_grain`）

Tempered Pearl millet grain 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Grain conditioning condensate（`conditioning_condensate`）

Grain conditioning condensate 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Grain conditioning condensate
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grain conditioning condensate 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

本 PCR 当前在该组未声明原子交换。


### 过程：脱壳、碾磨与筛分（`dehulling_milling_sieving`）

#### 输入

##### 产品流

###### 输入 Cleaned Common wheat grain（`milling_cleaned_common_wheat`）

Cleaned Common wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Common wheat grain（`milling_tempered_common_wheat`）

Tempered Common wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Common wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Common wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Durum wheat grain（`milling_cleaned_durum_wheat`）

Cleaned Durum wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Durum wheat grain（`milling_tempered_durum_wheat`）

Tempered Durum wheat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Durum wheat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Durum wheat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Rye grain（`milling_cleaned_rye`）

Cleaned Rye grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Rye grain（`milling_tempered_rye`）

Tempered Rye grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Rye grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Rye grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Barley grain（`milling_cleaned_barley`）

Cleaned Barley grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Barley grain（`milling_tempered_barley`）

Tempered Barley grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Barley grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Barley grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Oat grain（`milling_cleaned_oats`）

Cleaned Oat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Oat grain（`milling_tempered_oats`）

Tempered Oat grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Oat grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Oat grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Maize grain（`milling_cleaned_maize`）

Cleaned Maize grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Maize grain（`milling_tempered_maize`）

Tempered Maize grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Maize grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Maize grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Sorghum grain（`milling_cleaned_sorghum`）

Cleaned Sorghum grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Sorghum grain（`milling_tempered_sorghum`）

Tempered Sorghum grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Sorghum grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Sorghum grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cleaned Pearl millet grain（`milling_cleaned_pearl_millet`）

Cleaned Pearl millet grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cleaned Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cleaned Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Tempered Pearl millet grain（`milling_tempered_pearl_millet`）

Tempered Pearl millet grain 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Tempered Pearl millet grain
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Tempered Pearl millet grain 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`milling_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Compressed air（`milling_compressed_air`）

Compressed air 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：压缩空气
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Compressed air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Cooling water（`milling_cooling_water`）

Cooling water 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cooling water
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cooling water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Common wheat groats（`intermediate_common_wheat_groats`）

Common wheat groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat meal（`intermediate_common_wheat_meal`）

Common wheat meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat bran（`coproduct_common_wheat_bran`）

Common wheat bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat germ（`coproduct_common_wheat_germ`）

Common wheat germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat groats（`intermediate_durum_wheat_groats`）

Durum wheat groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat meal（`intermediate_durum_wheat_meal`）

Durum wheat meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat bran（`coproduct_durum_wheat_bran`）

Durum wheat bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat germ（`coproduct_durum_wheat_germ`）

Durum wheat germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye groats（`intermediate_rye_groats`）

Rye groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye meal（`intermediate_rye_meal`）

Rye meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye bran（`coproduct_rye_bran`）

Rye bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye germ（`coproduct_rye_germ`）

Rye germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley groats（`intermediate_barley_groats`）

Barley groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley meal（`intermediate_barley_meal`）

Barley meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley hulls（`coproduct_barley_bran`）

Barley hulls 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley hulls
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley hulls 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley germ（`coproduct_barley_germ`）

Barley germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats groats（`intermediate_oats_groats`）

Oats groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats meal（`intermediate_oats_meal`）

Oats meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oat hulls（`coproduct_oats_bran`）

Oat hulls 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oat hulls
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oat hulls 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oat germ（`coproduct_oats_germ`）

Oat germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oat germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oat germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize groats（`intermediate_maize_groats`）

Maize groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize meal（`intermediate_maize_meal`）

Maize meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize bran（`coproduct_maize_bran`）

Maize bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize germ（`coproduct_maize_germ`）

Maize germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum groats（`intermediate_sorghum_groats`）

Sorghum groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum meal（`intermediate_sorghum_meal`）

Sorghum meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum bran（`coproduct_sorghum_bran`）

Sorghum bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum germ（`coproduct_sorghum_germ`）

Sorghum germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet groats（`intermediate_pearl_millet_groats`）

Pearl millet groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet meal（`intermediate_pearl_millet_meal`）

Pearl millet meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet bran（`coproduct_pearl_millet_bran`）

Pearl millet bran 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet bran
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet bran 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet germ（`coproduct_pearl_millet_germ`）

Pearl millet germ 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet germ
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet germ 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Common wheat milling tailings（`milling_tailings_common_wheat`）

Common wheat milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Durum wheat milling tailings（`milling_tailings_durum_wheat`）

Durum wheat milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Rye milling tailings（`milling_tailings_rye`）

Rye milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Barley milling tailings（`milling_tailings_barley`）

Barley milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Oats milling tailings（`milling_tailings_oats`）

Oats milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Maize milling tailings（`milling_tailings_maize`）

Maize milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Sorghum milling tailings（`milling_tailings_sorghum`）

Sorghum milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Pearl millet milling tailings（`milling_tailings_pearl_millet`）

Pearl millet milling tailings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet milling tailings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet milling tailings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Alloy steel milling wear debris（`milling_steel_wear`）

Alloy steel milling wear debris 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Alloy steel milling wear debris
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Alloy steel milling wear debris 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Polyester sieve mesh waste（`milling_sieve_mesh_waste`）

Polyester sieve mesh waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Polyester sieve mesh waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Polyester sieve mesh waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Milling cooling wastewater（`milling_cooling_wastewater`）

Milling cooling wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Milling cooling wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Milling cooling wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Particulate matter below 10 µm to air（`milling_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`milling_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_milling_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：制粒与冷却（`pellet_forming_cooling`）

#### 输入

##### 产品流

###### 输入 Common wheat meal（`pellet_input_common_wheat_meal`）

Common wheat meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Durum wheat meal（`pellet_input_durum_wheat_meal`）

Durum wheat meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Rye meal（`pellet_input_rye_meal`）

Rye meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Barley meal（`pellet_input_barley_meal`）

Barley meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Oats meal（`pellet_input_oats_meal`）

Oats meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Maize meal（`pellet_input_maize_meal`）

Maize meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sorghum meal（`pellet_input_sorghum_meal`）

Sorghum meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pearl millet meal（`pellet_input_pearl_millet_meal`）

Pearl millet meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Process water for pellet conditioning（`pellet_conditioning_water`）

Process water for pellet conditioning 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Process water for pellet conditioning
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Process water for pellet conditioning 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`pellet_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased steam（`pellet_purchased_steam`）

Purchased steam 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased steam 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased hot water（`pellet_purchased_hot_water`）

Purchased hot water 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased hot water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Common wheat pellets（`intermediate_common_wheat_pellets`）

Common wheat pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat pellet fines（`pellet_fines_common_wheat`）

Common wheat pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat pellets（`intermediate_durum_wheat_pellets`）

Durum wheat pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat pellet fines（`pellet_fines_durum_wheat`）

Durum wheat pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye pellets（`intermediate_rye_pellets`）

Rye pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye pellet fines（`pellet_fines_rye`）

Rye pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley pellets（`intermediate_barley_pellets`）

Barley pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley pellet fines（`pellet_fines_barley`）

Barley pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats pellets（`intermediate_oats_pellets`）

Oats pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats pellet fines（`pellet_fines_oats`）

Oats pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize pellets（`intermediate_maize_pellets`）

Maize pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize pellet fines（`pellet_fines_maize`）

Maize pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum pellets（`intermediate_sorghum_pellets`）

Sorghum pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum pellet fines（`pellet_fines_sorghum`）

Sorghum pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet pellets（`intermediate_pearl_millet_pellets`）

Pearl millet pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet pellet fines（`pellet_fines_pearl_millet`）

Pearl millet pellet fines 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet pellet fines
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet pellet fines 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Off-spec common wheat pellets（`offspec_pellet_common_wheat`）

Off-spec common wheat pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec common wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec common wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec durum wheat pellets（`offspec_pellet_durum_wheat`）

Off-spec durum wheat pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec durum wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec durum wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec rye pellets（`offspec_pellet_rye`）

Off-spec rye pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec rye pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec rye pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec barley pellets（`offspec_pellet_barley`）

Off-spec barley pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec barley pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec barley pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec oats pellets（`offspec_pellet_oats`）

Off-spec oats pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec oats pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec oats pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec maize pellets（`offspec_pellet_maize`）

Off-spec maize pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec maize pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec maize pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec sorghum pellets（`offspec_pellet_sorghum`）

Off-spec sorghum pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec sorghum pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec sorghum pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec pearl millet pellets（`offspec_pellet_pearl_millet`）

Off-spec pearl millet pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec pearl millet pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec pearl millet pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Pellet conditioning condensate（`pellet_conditioning_condensate`）

Pellet conditioning condensate 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pellet conditioning condensate
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pellet_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pellet conditioning condensate 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Particulate matter below 10 µm to air（`pellet_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`pellet_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pellet_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：包装、成品储存与放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### 输入 Common wheat groats（`release_input_common_wheat_groats`）

Common wheat groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Common wheat meal（`release_input_common_wheat_meal`）

Common wheat meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Common wheat pellets（`release_input_common_wheat_pellets`）

Common wheat pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Durum wheat groats（`release_input_durum_wheat_groats`）

Durum wheat groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Durum wheat meal（`release_input_durum_wheat_meal`）

Durum wheat meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Durum wheat pellets（`release_input_durum_wheat_pellets`）

Durum wheat pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Rye groats（`release_input_rye_groats`）

Rye groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Rye meal（`release_input_rye_meal`）

Rye meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Rye pellets（`release_input_rye_pellets`）

Rye pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Barley groats（`release_input_barley_groats`）

Barley groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Barley meal（`release_input_barley_meal`）

Barley meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Barley pellets（`release_input_barley_pellets`）

Barley pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Oats groats（`release_input_oats_groats`）

Oats groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Oats meal（`release_input_oats_meal`）

Oats meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Oats pellets（`release_input_oats_pellets`）

Oats pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Maize groats（`release_input_maize_groats`）

Maize groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Maize meal（`release_input_maize_meal`）

Maize meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Maize pellets（`release_input_maize_pellets`）

Maize pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sorghum groats（`release_input_sorghum_groats`）

Sorghum groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sorghum meal（`release_input_sorghum_meal`）

Sorghum meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sorghum pellets（`release_input_sorghum_pellets`）

Sorghum pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pearl millet groats（`release_input_pearl_millet_groats`）

Pearl millet groats 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pearl millet meal（`release_input_pearl_millet_meal`）

Pearl millet meal 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pearl millet pellets（`release_input_pearl_millet_pellets`）

Pearl millet pellets 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grid electricity, medium voltage（`release_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Low-density polyethylene bag（`pack_ldpe_bag`）

Low-density polyethylene bag 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Low-density polyethylene bag
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Low-density polyethylene bag 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Woven polypropylene sack（`pack_pp_sack`）

Woven polypropylene sack 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Woven polypropylene sack
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Woven polypropylene sack 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Kraft paper sack（`pack_kraft_sack`）

Kraft paper sack 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Kraft paper sack 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Corrugated fibreboard carton（`pack_fibreboard_carton`）

Corrugated fibreboard carton 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Corrugated fibreboard carton
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Corrugated fibreboard carton 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Wooden pallet（`pack_wood_pallet`）

Wooden pallet 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Wooden pallet 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Steel strapping（`pack_steel_strap`）

Steel strapping 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Steel strapping
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Steel strapping 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Low-density polyethylene stretch film（`pack_ldpe_stretch_film`）

Low-density polyethylene stretch film 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：低密度聚乙烯拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Low-density polyethylene stretch film 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Ammonia refrigerant R717 makeup（`release_r717_makeup`）

Ammonia refrigerant R717 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Ammonia refrigerant R717 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ammonia refrigerant R717 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Carbon dioxide refrigerant R744 makeup（`release_r744_makeup`）

Carbon dioxide refrigerant R744 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Carbon dioxide refrigerant R744 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon dioxide refrigerant R744 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Propane refrigerant R290 makeup（`release_r290_makeup`）

Propane refrigerant R290 makeup 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Propane refrigerant R290 makeup
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Propane refrigerant R290 makeup 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Common wheat groats（`final_common_wheat_groats`）

Common wheat groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat meal（`final_common_wheat_meal`）

Common wheat meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Common wheat pellets（`final_common_wheat_pellets`）

Common wheat pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat groats（`final_durum_wheat_groats`）

Durum wheat groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat meal（`final_durum_wheat_meal`）

Durum wheat meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Durum wheat pellets（`final_durum_wheat_pellets`）

Durum wheat pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye groats（`final_rye_groats`）

Rye groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye meal（`final_rye_meal`）

Rye meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Rye pellets（`final_rye_pellets`）

Rye pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley groats（`final_barley_groats`）

Barley groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley meal（`final_barley_meal`）

Barley meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Barley pellets（`final_barley_pellets`）

Barley pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats groats（`final_oats_groats`）

Oats groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats meal（`final_oats_meal`）

Oats meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Oats pellets（`final_oats_pellets`）

Oats pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize groats（`final_maize_groats`）

Maize groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize meal（`final_maize_meal`）

Maize meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Maize pellets（`final_maize_pellets`）

Maize pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum groats（`final_sorghum_groats`）

Sorghum groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum meal（`final_sorghum_meal`）

Sorghum meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Sorghum pellets（`final_sorghum_pellets`）

Sorghum pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet groats（`final_pearl_millet_groats`）

Pearl millet groats 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet meal（`final_pearl_millet_meal`）

Pearl millet meal 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Pearl millet pellets（`final_pearl_millet_pellets`）

Pearl millet pellets 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Off-spec common wheat groats（`release_reject_common_wheat_groats`）

Off-spec common wheat groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec common wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec common wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec common wheat meal（`release_reject_common_wheat_meal`）

Off-spec common wheat meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec common wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec common wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec common wheat pellets（`release_reject_common_wheat_pellets`）

Off-spec common wheat pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec common wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec common wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec durum wheat groats（`release_reject_durum_wheat_groats`）

Off-spec durum wheat groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec durum wheat groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec durum wheat groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec durum wheat meal（`release_reject_durum_wheat_meal`）

Off-spec durum wheat meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec durum wheat meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec durum wheat meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec durum wheat pellets（`release_reject_durum_wheat_pellets`）

Off-spec durum wheat pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec durum wheat pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec durum wheat pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec rye groats（`release_reject_rye_groats`）

Off-spec rye groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec rye groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec rye groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec rye meal（`release_reject_rye_meal`）

Off-spec rye meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec rye meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec rye meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec rye pellets（`release_reject_rye_pellets`）

Off-spec rye pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec rye pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec rye pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec barley groats（`release_reject_barley_groats`）

Off-spec barley groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec barley groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec barley groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec barley meal（`release_reject_barley_meal`）

Off-spec barley meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec barley meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec barley meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec barley pellets（`release_reject_barley_pellets`）

Off-spec barley pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec barley pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec barley pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec oats groats（`release_reject_oats_groats`）

Off-spec oats groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec oats groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec oats groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec oats meal（`release_reject_oats_meal`）

Off-spec oats meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec oats meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec oats meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec oats pellets（`release_reject_oats_pellets`）

Off-spec oats pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec oats pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec oats pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec maize groats（`release_reject_maize_groats`）

Off-spec maize groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec maize groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec maize groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec maize meal（`release_reject_maize_meal`）

Off-spec maize meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec maize meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec maize meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec maize pellets（`release_reject_maize_pellets`）

Off-spec maize pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec maize pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec maize pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec sorghum groats（`release_reject_sorghum_groats`）

Off-spec sorghum groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec sorghum groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec sorghum groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec sorghum meal（`release_reject_sorghum_meal`）

Off-spec sorghum meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec sorghum meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec sorghum meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec sorghum pellets（`release_reject_sorghum_pellets`）

Off-spec sorghum pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec sorghum pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec sorghum pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec pearl millet groats（`release_reject_pearl_millet_groats`）

Off-spec pearl millet groats 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec pearl millet groats
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec pearl millet groats 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec pearl millet meal（`release_reject_pearl_millet_meal`）

Off-spec pearl millet meal 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec pearl millet meal
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec pearl millet meal 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Off-spec pearl millet pellets（`release_reject_pearl_millet_pellets`）

Off-spec pearl millet pellets 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Off-spec pearl millet pellets
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`codex-cxs-155-1985`, `codex-cxs-178-1991`, `codex-cxs-199-1995`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Off-spec pearl millet pellets 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Low-density polyethylene bag scrap（`scrap_ldpe_bag`）

Low-density polyethylene bag scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Low-density polyethylene bag scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Low-density polyethylene bag scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Woven polypropylene sack scrap（`scrap_pp_sack`）

Woven polypropylene sack scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Woven polypropylene sack scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Woven polypropylene sack scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Kraft paper sack scrap（`scrap_kraft_sack`）

Kraft paper sack scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Kraft paper sack scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Kraft paper sack scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Corrugated fibreboard carton scrap（`scrap_fibreboard_carton`）

Corrugated fibreboard carton scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Corrugated fibreboard carton scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Corrugated fibreboard carton scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Wooden pallet scrap（`scrap_wood_pallet`）

Wooden pallet scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Wooden pallet scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Wooden pallet scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Steel strapping scrap（`scrap_steel_strap`）

Steel strapping scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Steel strapping scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Steel strapping scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Low-density polyethylene stretch film scrap（`scrap_ldpe_stretch_film`）

Low-density polyethylene stretch film scrap 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Low-density polyethylene stretch film scrap
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Low-density polyethylene stretch film scrap 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Ammonia R717 to air（`release_r717_release`）

Ammonia R717 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Ammonia R717 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ammonia R717 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Carbon dioxide R744 to air（`release_r744_release`）

Carbon dioxide R744 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Carbon dioxide R744 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon dioxide R744 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Propane R290 to air（`release_r290_release`）

Propane R290 to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Propane R290 to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Propane R290 to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 10 µm to air（`release_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`release_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：粉尘收集与控制（`dust_collection_control`）

#### 输入

##### 产品流

###### 输入 Grid electricity, medium voltage（`dust_control_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Compressed air（`dust_control_compressed_air`）

Compressed air 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：压缩空气
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Compressed air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Polyester needle-felt filter fabric（`dust_control_filter_fabric`）

Polyester needle-felt filter fabric 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Polyester needle-felt filter fabric
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Polyester needle-felt filter fabric 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Process water for wet scrubbing（`dust_control_scrubber_water`）

Process water for wet scrubbing 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Process water for wet scrubbing
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_inputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Process water for wet scrubbing 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

本 PCR 当前在该组未声明原子交换。

##### 废物流

###### 产生 Captured common wheat dust（`captured_dust_common_wheat`）

Captured common wheat dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured common wheat dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured common wheat dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured durum wheat dust（`captured_dust_durum_wheat`）

Captured durum wheat dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured durum wheat dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured durum wheat dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured rye dust（`captured_dust_rye`）

Captured rye dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured rye dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured rye dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured barley dust（`captured_dust_barley`）

Captured barley dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured barley dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured barley dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured oats dust（`captured_dust_oats`）

Captured oats dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured oats dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured oats dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured maize dust（`captured_dust_maize`）

Captured maize dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured maize dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured maize dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured sorghum dust（`captured_dust_sorghum`）

Captured sorghum dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured sorghum dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured sorghum dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Captured pearl millet dust（`captured_dust_pearl_millet`）

Captured pearl millet dust 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Captured pearl millet dust
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Captured pearl millet dust 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Spent polyester filter fabric（`spent_filter_fabric`）

Spent polyester filter fabric 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Spent polyester filter fabric
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Spent polyester filter fabric 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Grain-dust scrubber wastewater（`scrubber_wastewater`）

Grain-dust scrubber wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Grain-dust scrubber wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grain-dust scrubber wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Particulate matter below 10 µm to air（`controlled_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`controlled_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dust_outputs`
- 来源：`us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：卫生与设备清洁（`hygiene_cleaning`）

#### 输入

##### 产品流

###### 输入 Grid electricity, medium voltage（`hygiene_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Compressed air（`hygiene_compressed_air`）

Compressed air 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：压缩空气
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Compressed air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Process water for hygiene cleaning（`hygiene_process_water`）

Process water for hygiene cleaning 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Process water for hygiene cleaning
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Process water for hygiene cleaning 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased hot water（`hygiene_purchased_hot_water`）

Purchased hot water 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased hot water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Purchased steam（`hygiene_purchased_steam`）

Purchased steam 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Purchased steam 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sodium hydroxide（`hygiene_sodium_hydroxide`）

Sodium hydroxide 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sodium hydroxide 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Nitric acid（`hygiene_nitric_acid`）

Nitric acid 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Nitric acid 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Phosphoric acid（`hygiene_phosphoric_acid`）

Phosphoric acid 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：磷酸
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Phosphoric acid 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Peracetic acid（`hygiene_peracetic_acid`）

Peracetic acid 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Peracetic acid 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sodium hypochlorite（`hygiene_sodium_hypochlorite`）

Sodium hypochlorite 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sodium hypochlorite 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

本 PCR 当前在该组未声明原子交换。

##### 废物流

###### 产生 Common wheat dry sweepings（`dry_sweepings_common_wheat`）

Common wheat dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Common wheat dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Common wheat dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Durum wheat dry sweepings（`dry_sweepings_durum_wheat`）

Durum wheat dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Durum wheat dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Durum wheat dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Rye dry sweepings（`dry_sweepings_rye`）

Rye dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Rye dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Rye dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Barley dry sweepings（`dry_sweepings_barley`）

Barley dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Barley dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Barley dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Oats dry sweepings（`dry_sweepings_oats`）

Oats dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oats dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oats dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Maize dry sweepings（`dry_sweepings_maize`）

Maize dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Maize dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Maize dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Sorghum dry sweepings（`dry_sweepings_sorghum`）

Sorghum dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Sorghum dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sorghum dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Pearl millet dry sweepings（`dry_sweepings_pearl_millet`）

Pearl millet dry sweepings 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pearl millet dry sweepings
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pearl millet dry sweepings 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Hygiene cleaning wastewater（`hygiene_wastewater`）

Hygiene cleaning wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Hygiene cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Hygiene cleaning wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Polypropylene cleaning-wipe waste（`hygiene_wipe_waste`）

Polypropylene cleaning-wipe waste 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Polypropylene cleaning-wipe waste
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Polypropylene cleaning-wipe waste 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

本 PCR 当前在该组未声明原子交换。


### 过程：场内供热（`onsite_heat_generation`）

#### 输入

##### 产品流

###### 输入 Grid electricity, medium voltage（`heat_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Boiler feedwater（`boiler_feedwater`）

Boiler feedwater 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Boiler feedwater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Boiler feedwater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Natural gas（`heat_natural_gas`）

Natural gas 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Natural gas 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Diesel fuel（`heat_diesel`）

Diesel fuel 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Diesel fuel 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Liquefied petroleum gas（`heat_lpg`）

Liquefied petroleum gas 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Liquefied petroleum gas 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Light fuel oil（`heat_light_fuel_oil`）

Light fuel oil 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Light fuel oil
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Light fuel oil 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

本 PCR 当前在该组未声明原子交换。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

###### 输出 Onsite steam（`onsite_steam`）

Onsite steam 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Onsite steam
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Onsite steam 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输出 Onsite hot water（`onsite_hot_water`）

Onsite hot water 在本过程中作为一个原子输出产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Onsite hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Onsite hot water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 产生 Boiler blowdown wastewater（`boiler_blowdown`）

Boiler blowdown wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：锅炉排污废水
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Boiler blowdown wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Light fuel oil tank sludge（`fuel_oil_tank_sludge`）

Light fuel oil tank sludge 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Light fuel oil tank sludge
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Light fuel oil tank sludge 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Carbon dioxide, fossil, to air（`combustion_co2`）

Carbon dioxide, fossil, to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon dioxide, fossil, to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Nitrogen oxides to air（`combustion_nox`）

Nitrogen oxides to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Nitrogen oxides to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Sulfur oxides to air（`combustion_sox`）

Sulfur oxides to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sulfur oxides to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Carbon monoxide to air（`combustion_co`）

Carbon monoxide to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Carbon monoxide to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 10 µm to air（`combustion_pm10`）

Particulate matter below 10 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 10 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 10 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Particulate matter below 2.5 µm to air（`combustion_pm25`）

Particulate matter below 2.5 µm to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Particulate matter below 2.5 µm to air
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Particulate matter below 2.5 µm to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Methane to air（`combustion_ch4`）

Methane to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Methane to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Nitrous oxide to air（`combustion_n2o`）

Nitrous oxide to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Nitrous oxide to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 输入 Grid electricity, medium voltage（`wwt_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：中压电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grid electricity, medium voltage 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sodium hydroxide（`wwt_sodium_hydroxide`）

Sodium hydroxide 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sodium hydroxide 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Sulfuric acid（`wwt_sulfuric_acid`）

Sulfuric acid 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Sulfuric acid 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Ferric chloride（`wwt_ferric_chloride`）

Ferric chloride 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Ferric chloride 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Calcium hydroxide（`wwt_calcium_hydroxide`）

Calcium hydroxide 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氢氧化钙
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Calcium hydroxide 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Anionic polyacrylamide（`wwt_polyacrylamide`）

Anionic polyacrylamide 在本过程中作为一个原子输入产品流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：阴离子聚丙烯酰胺
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Anionic polyacrylamide 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 废物流

###### 输入 Wet grain cleaning wastewater（`wwt_grain_washwater`）

Wet grain cleaning wastewater 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Wet grain cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Wet grain cleaning wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grain conditioning condensate（`wwt_conditioning_condensate`）

Grain conditioning condensate 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Grain conditioning condensate
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grain conditioning condensate 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Milling cooling wastewater（`wwt_milling_cooling_water`）

Milling cooling wastewater 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Milling cooling wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Milling cooling wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Pellet conditioning condensate（`wwt_pellet_condensate`）

Pellet conditioning condensate 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Pellet conditioning condensate
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Pellet conditioning condensate 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Grain-dust scrubber wastewater（`wwt_scrubber_water`）

Grain-dust scrubber wastewater 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Grain-dust scrubber wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Grain-dust scrubber wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Hygiene cleaning wastewater（`wwt_hygiene_water`）

Hygiene cleaning wastewater 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Hygiene cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Hygiene cleaning wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 输入 Boiler blowdown wastewater（`wwt_boiler_blowdown`）

Boiler blowdown wastewater 在本过程中作为一个原子输入废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：锅炉排污废水
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_inputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Boiler blowdown wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

本 PCR 当前在该组未声明原子交换。

#### 输出

##### 产品流

本 PCR 当前在该组未声明原子交换。

##### 废物流

###### 产生 Treated cereal-mill wastewater（`treated_wastewater`）

Treated cereal-mill wastewater 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Treated cereal-mill wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Treated cereal-mill wastewater 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Cereal-mill wastewater-treatment sludge（`wwt_sludge`）

Cereal-mill wastewater-treatment sludge 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cereal-mill wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cereal-mill wastewater-treatment sludge 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 产生 Cereal-mill wastewater-treatment grit（`wwt_grit`）

Cereal-mill wastewater-treatment grit 在本过程中作为一个原子输出废物流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Cereal-mill wastewater-treatment grit
- 流属性/单位：Mass / kg
- 数量规则：记录锁定批次中跨越本过程边界的实测前景数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Cereal-mill wastewater-treatment grit 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

##### 基本流

###### 排放 Biochemical oxygen demand to water（`wwt_bod5`）

Biochemical oxygen demand to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Biochemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Biochemical oxygen demand to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Chemical oxygen demand to water（`wwt_cod`）

Chemical oxygen demand to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Chemical oxygen demand to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Total suspended solids to water（`wwt_tss`）

Total suspended solids to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Total suspended solids to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Total nitrogen to water（`wwt_total_n`）

Total nitrogen to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Total nitrogen to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Total phosphorus to water（`wwt_total_p`）

Total phosphorus to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Total phosphorus to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Oil content to water（`wwt_oil_grease`）

Oil content to water 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：Oil content to water
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Oil content to water 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Methane to air（`wwt_methane`）

Methane to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Methane to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。

###### 排放 Nitrous oxide to air（`wwt_n2o`）

Nitrous oxide to air 在本过程中作为一个原子输出基本流交换单独记录；它不代表任何其他谷物、材料、载体、废物、污染物或排放。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据关联采集协议所定义的前景记录，计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：制造设施大门处每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_outputs`
- 来源：`ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279`
- UUID 状态：未解决；在完成精确 flow-hybrid-search 和公开 state-100 直接读取确认前保持空白。
- 适用性：仅当 Nitrous oxide to air 对锁定的谷物物种、产品形态和实际路线确实跨越本过程边界时记录；否则将此原子行标记为不适用。
- 不确定性：保留仪器分辨率、校准状态、采样基准、时间覆盖以及批次核对差异。


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 所有过程 | 尽可能使用产品特定配方、批次质量记录、分表、生产时间和设备状态避免分配。 | `eu-pef-2021-2279` |
| `no_species_average` | 所有输出 | 绝不得将一种谷物物种分配或平均到另一物种，也不得将一种产品形态分配或平均到另一形态。 | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `internal_transfer` | 内部中间体 | 内部中间体作为输出记录一次，并作为匹配的下游投入记录一次；不得重复增加上游负荷。 | `eu-pef-2021-2279` |
| `fines_rework` | 团粒细粉 | 同一锁定批次内回用的细粉留在其质量平衡内；外售细粉作为独立的物种特定产品输出记录。 | `us-epa-ap42-grain-2003`, `eu-pef-2021-2279` |
| `co_product_identity` | 麸皮、谷壳和胚芽 | 每种已命名的物种特定麸皮、谷壳和胚芽输出分别记录实测质量、去向以及经济或物理功能。 | `codex-cxs-155-1985`, `codex-cxs-178-1991`, `eu-pef-2021-2279` |
| `physical_relation` | 共产品 | 若无法避免分配，仅在其代表因果生产关系时采用有文件依据的物理关系。 | `eu-pef-2021-2279` |
| `economic_fallback` | 共产品 | 仅在研究方法要求且物理关系不具代表性时采用经济分配；保留价格、期间、币种和敏感性。 | `eu-pef-2021-2279` |
| `waste_treatment` | 废物 | 若无明确的下游处理模型和已披露方法，不得分配避免负荷或抵扣。 | `eu-pef-2021-2279` |
| `allocation_disclosure` | 发布数据集 | 披露分配层级、数量、因子、共产品去向、内部回收和未决选择。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_inputs` | `grain_receiving_storage` | 谷物接收与储存输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有谷物接收与储存的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_receiving_outputs` | `grain_receiving_storage` | 谷物接收与储存输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有谷物接收与储存的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_cleaning_inputs` | `grain_cleaning_grading` | 谷物清理与分级输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有谷物清理与分级的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_cleaning_outputs` | `grain_cleaning_grading` | 谷物清理与分级输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有谷物清理与分级的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_conditioning_inputs` | `conditioning_tempering` | 调质与润麦输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有调质与润麦的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_conditioning_outputs` | `conditioning_tempering` | 调质与润麦输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有调质与润麦的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_milling_inputs` | `dehulling_milling_sieving` | 脱壳、碾磨与筛分输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有脱壳、碾磨与筛分的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_milling_outputs` | `dehulling_milling_sieving` | 脱壳、碾磨与筛分输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有脱壳、碾磨与筛分的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_pellet_inputs` | `pellet_forming_cooling` | 制粒与冷却输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有制粒与冷却的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_pellet_outputs` | `pellet_forming_cooling` | 制粒与冷却输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有制粒与冷却的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_release_inputs` | `packaging_storage_release` | 包装、成品储存与放行输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有包装、成品储存与放行的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_release_outputs` | `packaging_storage_release` | 包装、成品储存与放行输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有包装、成品储存与放行的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_dust_inputs` | `dust_collection_control` | 粉尘收集与控制输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有粉尘收集与控制的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_dust_outputs` | `dust_collection_control` | 粉尘收集与控制输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有粉尘收集与控制的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_hygiene_inputs` | `hygiene_cleaning` | 卫生与设备清洁输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有卫生与设备清洁的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_hygiene_outputs` | `hygiene_cleaning` | 卫生与设备清洁输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有卫生与设备清洁的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_heat_inputs` | `onsite_heat_generation` | 场内供热输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有场内供热的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_heat_outputs` | `onsite_heat_generation` | 场内供热输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有场内供热的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |
| `cp_wwt_inputs` | `onsite_wastewater_treatment` | 场内废水处理输入 | 批次投入记录 | 批次编号；row_id；确切流身份；供应商或仪表编号；期初读数；期末读数；毛量；皮重；净量；单位；时间戳；分配键 | 使用经校准的秤、公用工程仪表、交付单据、库存移动和设备日志；保留每个原子行的原始单位。 | 原子流卡声明的原始单位 | 每个批次和每个仪表区间 | 完整生产活动期 | 所有场内废水处理的投入点 | 仅汇总可归属于锁定物种、产品形态和路线的记录；在净合格产出已知后归一化。 | 校准记录；供应商规格；仪表标识；批次可追溯性；核对记录 |
| `cp_wwt_outputs` | `onsite_wastewater_treatment` | 场内废水处理输出 | 批次输出与排放记录 | 批次编号；row_id；确切流身份；去向或环境介质；毛量；皮重；净量；浓度；体积；排放因子来源；单位；时间戳 | 使用经校准的秤、排放流量计、实验室结果、直接排放测量以及根据已采集活动数据形成的有文件依据计算。 | 原子流卡声明的原始单位 | 每个批次或有代表性的监测区间 | 完整生产活动期 | 所有场内废水处理的输出点 | 保持每项产品、共产品、废物、废水流和基本排放相互独立，并按所选最终产品质量归一化。 | 校准记录；实验室监管链；计算表；去向证据；质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference` | 每个清单行 | 归一化数量 = 批次归属数量 / 所选最终产品净合格质量 | 批次归属数量; 所选最终产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `net_mass` | 质量记录 | 净质量 = 毛质量 - 皮重 | 毛质量; 皮重 | 净质量 | `eu-pef-2021-2279` |
| `dry_matter` | 水分敏感流 | 干质量 = 实测质量 ×（1 - 实测水分质量分数） | 实测质量; 批次水分结果 | 干质量 | `fao-grain-milling-quality-1995` |
| `process_mass_balance` | 每个过程 | 核对差异 = 实测投入总量 - 实测产品总量 - 实测共产品总量 - 实测废物总量 - 库存变化 - 实测释放 | 过程投入和输出记录 | 核对差异 | `eu-pef-2021-2279` |
| `shared_meter` | 共享公用工程 | 批次数量 = 仪表期间数量 × 有文件依据的因果分配键；仅在设备负荷可证明稳定时使用运行时间 | 仪表读数; 批次时间戳; 设备状态; 分配键 | 批次归属的公用工程数量 | `eu-pef-2021-2279` |
| `refrigerant_loss` | 制冷剂 | 释放量 = 期初库存 + 补充量 - 期末库存 - 有文件依据的回收或转移量 | 制冷剂库存与维护记录 | 按确切物质计的制冷剂释放 | `eu-pef-2021-2279` |
| `dust_balance` | 粉尘控制 | 残余释放 = 进入控制装置的粉尘 - 捕集粉尘 - 沉积粉尘 - 返回产品的粉尘，并在可得时与直接监测核对 | 粉尘捕集记录; 过滤器记录; 监测结果 | 残余颗粒物释放 | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `combustion_emission` | 场内燃料燃烧 | 排放 = 实测燃料量 × 有文件依据的燃料特定因子，或采用直接监测负荷；本 PCR 不提供默认因子 | 燃料记录; 燃料特定因子或直接测量 | 按基本流计的污染物质量 | `eu-pef-2021-2279`, `ec-jrc-fdm-bref-2019` |
| `wastewater_load` | 废水污染物 | 污染物负荷 = 实测排放体积 × 有代表性的实测浓度，并进行单位换算 | 流量体积; 实验室浓度; 采样期间 | 按基本流计的污染物质量 | `eu-fdm-bat-2019-2031`, `eu-pef-2021-2279` |
| `packaging_mass` | 包装 | 包装消耗质量 = 已领用包装库存 - 退回未用库存 - 经核验的清洁可重复使用库存变化 | 包装领用与退回记录 | 按材料计的包装消耗质量 | `eu-pef-2021-2279` |
| `final_output_selection` | 参考产品 | 恰好一个 `final_<species>_<form>` 行接收该批次净合格质量；其他所有最终产品行均不适用 | 产品规格; 放行记录; 净质量 | 所选最终产品质量 | `un-cpc-3-2025`, `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留植物学物种、产品形态、完整或脱壳或脱胚状态、粒径或团粒规范、水分基准和放行状态。 | 经批准的产品规格和批次随行单 |
| `dq_scope` | 前景数据包 | 证明一个数据包只含一个物种、一种形态和一条路线。 | 数据集元数据和过程图 |
| `dq_traceability` | 谷物和产品 | 保留供应商批次、内部批次、筒仓或料仓、生产活动期与放行批次之间的链接。 | 批次谱系记录 |
| `dq_calibration` | 实测值 | 在有效校准期内使用经校准的秤、仪表、采样器和实验室仪器。 | 校准证书和仪器日志 |
| `dq_moisture` | 质量换算 | 保留采样位置、测试方法、时间戳、重复结果以及湿基或干基。 | 水分实验室记录 |
| `dq_particle_size` | 去壳谷粒、粗粉和团粒 | 保留筛组或团粒测量方法、样品基准和放行结果。 | 粒径或团粒尺寸测试 |
| `dq_temporal` | 前景数据 | 覆盖有代表性的完整生产活动期，并披露停机、启动和异常批次。 | 生产日历和异常日志 |
| `dq_completeness` | 清单 | 核对每个适用原子行，包括零值或不适用决定、共产品、废物、废水、粉尘和直接排放。 | 已签署完整性矩阵 |
| `dq_sources` | 计算值 | 保留每个公式、因子来源、单位换算和计算版本。 | 计算工作簿和来源登记 |
| `dq_destinations` | 共产品和废物 | 保留每股外出物流的数量、接收方、处理路线和转移证据。 | 地磅票和转移文件 |
| `dq_uncertainty` | 所有行 | 保留仪器分辨率、采样不确定性、缺失数据处理和核对差异。 | 不确定性登记 |
| `dq_review` | 发布数据集 | 完成对身份、边界、分配、质量平衡、来源以及双语机器字段对齐的独立技术审查。 | 已签署审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 参考流必须匹配第 3 节声明的已核验 CPC 23130 Product 流、Mass 属性、Units of mass 单位组和 kg 单位。 | `un-cpc-3-2025` |
| `val_reference_mass` | 参考数量 | 参考数量必须为 1 kg 净合格产品且不含包装。 | `eu-pef-2021-2279` |
| `val_species` | 产品身份 | 必须明确植物学谷物物种；“其他谷物”不是有效物种身份。 | `un-cpc-3-2025` |
| `val_form` | 产品身份 | 参考产品必须声明去壳谷粒、粗粉或团粒三者中恰好一种。 | `un-cpc-3-2025` |
| `val_one_final_row` | 最终产品 | 恰好一个 `final_<species>_<form>` 行必须承载归一化的 1 kg 参考数量。 | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `val_process_map` | 过程清单 | 每个过程章节必须匹配一个过程图 id，且每个 required 过程图行必须有一个过程章节。 | `us-epa-ap42-grain-2003` |
| `val_atomic_flow` | 清单卡 | 每个选定流必须是一个具体交换；复数类别、载体列表和选择指令均无效。 | `eu-pef-2021-2279` |
| `val_unlisted_flow` | 有效但未列出的交换 | 当范围内物种、投入、包装、共产品、废物、污染物或排放缺失时，验证前必须新增一条确切原子行。 | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `val_uuid_policy` | 非参考 UUID | 除非 flow-hybrid-search 和公开 state-100 直接读取均确认精确原子语义，否则非参考 UUID 保持空白。 | `eu-pef-2021-2279` |
| `val_modes` | 清单数量 | 仅使用 `foreground_record` 或 `calculated_value`；此处不允许固定默认值、建模估算或推理范围。 | `eu-pef-2021-2279` |
| `val_protocols` | 清单卡 | 每张采集或计算卡必须链接到一个现有采集协议。 | `eu-pef-2021-2279` |
| `val_mass_balance` | 每个过程 | 完成物种特定且形态特定的过程质量平衡，并披露核对差异。 | `eu-pef-2021-2279` |
| `val_conditioning` | 调质 | 调质水、蒸汽、热水和保持步骤仅在实际使用且测量时出现。 | `fao-grain-milling-quality-1995`, `us-epa-ap42-grain-2003` |
| `val_pellet_route` | 团粒 | 团粒数据必须包括调质、模压、冷却、筛分、细粉和不合格团粒去向。 | `us-epa-ap42-grain-2003` |
| `val_packaging` | 包装 | 每种物理包装材料必须分开，并排除在参考质量之外。 | `codex-cxs-155-1985`, `codex-cxs-178-1991`, `eu-pef-2021-2279` |
| `val_heat_double_count` | 热 | 外购热量和场内燃料不得代表同一热量。 | `ec-jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `val_dust` | 粉尘 | 记录源特定的捕集粉尘、控制投入、废介质和残余颗粒物释放，不得对不同物质净额处理。 | `us-epa-ap42-grain-2003`, `eu-fdm-bat-2019-2031` |
| `val_wastewater` | 废水 | 每股废水和每种排放污染物分别记录；适用场内处理时必须明确处理投入和污泥。 | `ec-jrc-fdm-bref-2019`, `eu-fdm-bat-2019-2031` |
| `val_allocation` | 共产品 | 披露分配避免、内部回收、共产品数量、分配基准和敏感性，不得使用默认因子。 | `eu-pef-2021-2279` |
| `val_bilingual` | 双语 PCR | 英文和中文的过程 id、row id、受控 token、协议 id、规则 id、来源 id、UUID 和顺序必须一致。 | `eu-pef-2021-2279` |
| `val_completeness` | 发布数据集 | 不得遗漏任何适用卡、数据源、计算、不确定性说明或去向证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定前景数据集；经批准后适于作为 `secondary_dataset` 或 `background_dataset` 接受审查 |
| downstream_use | 需要制造设施大门处一种明确谷物物种和一种 CPC 23130 产品形态的生命周期模型 |
| allowed_use | 对已声明物种、形态、地理、技术、生产活动期、包装状态和分配方法进行建模 |
| excluded_use | 跨谷物物种或产品形态替代；未披露的平均；作为面粉、淀粉、麦芽、早餐谷物、复合饲料或预制食品数据集使用 |
| required_metadata | PCR id；CPC 代码；物种；形态；谷物状态；路线；设施地理；生产活动期；技术；水分及粒径或团粒规范；包装；分配；共产品和废物去向 |
| required_quality_disclosure | 完整性；数据源；前景覆盖；校准；质量平衡差异；分配；不确定性；缺失数据；UUID 缺口；审查状态 |
| update_trigger | 物种、形态、配方、路线、设备、能源供应、粉尘控制、包装、分配、法规、来源证据、UUID 身份或重要数据质量结果发生变化 |

## 11. 数据源

| source_id | type | reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, retained raw structure dated 30 June 2025, code 23130, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-13). | CPC 的确切标题，以及小麦和其他谷物去壳谷粒、粗粉和团粒的范围边界。 |
| `fao-grain-milling-quality-1995` | `official_guidance` | FAO, Quality assurance for small-scale rural food industries, Chapter 2: grain cleaning, conditioning, milling, dehulling, and sieving, https://www.fao.org/4/v5380e/v5380e06.htm (retrieved 2026-08-13). | 进厂批次记录、污染物去除、调质水和水分检查、脱壳、碾磨、筛分及设备质量记录。 |
| `us-epa-ap42-grain-2003` | `official_guidance` | U.S. EPA, AP-42 Section 9.9.1, Grain Elevators and Processes, April 2003, https://www.epa.gov/sites/default/files/2020-10/documents/c9s0909-1.pdf (retrieved 2026-08-13). | 接收、清理、润麦、碾磨、蒸汽调质、制粒、冷却、筛分、装袋、粉尘源、油抑尘、旋风器、过滤器和湿式洗涤器。 |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-13). | 食品行业过程边界、公用工程、能源和水记录、废物、废水及空气排放控制结构。 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-13). | 谷物碾磨粉尘监测和袋式过滤、团粒冷却粉尘、能源管理、水流分离及废水管理。 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13). | 功能和参考流、产品特定公司数据、完整的材料—能源—废物—排放清单、分配、数据质量、透明度和验证。 |
| `codex-cxs-155-1985` | `standard` | Codex Alimentarius CXS 155-1985, Standard for Degermed Maize (Corn) Meal and Maize (Corn) Grits, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B155-1985%252FCXS_155e.pdf (retrieved 2026-08-13). | 具体玉米物种及去壳谷粒/粗粉身份、清理、研磨、麸皮与胚芽去除、卫生、粒径属性和包装。 |
| `codex-cxs-178-1991` | `standard` | Codex Alimentarius CXS 178-1991, Standard for Durum Wheat Semolina and Durum Wheat Flour, https://www.fao.org/input/download/standards/60/CXS_178e.pdf (retrieved 2026-08-13). | 硬粒小麦物种身份、碾磨和粉碎、麸皮与胚芽分离、粒径质量、卫生和包装。 |
| `codex-cxs-199-1995` | `standard` | Codex Alimentarius CXS 199-1995, Standard for Wheat and Durum Wheat, https://www.fao.org/input/download/standards/62/CXS_199e.pdf (retrieved 2026-08-13). | 小麦和硬粒小麦身份、水分与杂质记录、清理和分选、卫生、批次身份及包装。 |
