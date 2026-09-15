---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-cold-formed-cold-finished-or-further-worked-of-iron-or-non-a-41c0d70f
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铁或非合金钢制，经冷成形、冷加工或进一步加工的角材、型材及异型材

## 1. 范围与适用性

本 PCR 适用于铁或非合金钢制角材、型材及异型材的门到门前景数据包；所申报市场状态必须由至少一道冷成形、冷加工或进一步加工工序形成。产品可由扁平轧材或已有的铁或非合金钢型材制得，并应保持为基本钢型材而非已制备的结构制品。生产者应申报进厂钢材状态、钢号、截面几何形状、实际工艺路线、表面状态及出厂状态。

本 PCR 不包括仅经热轧、热拉拔或热挤压的产品；合金钢或不锈钢型材；条、杆、线材、钢板桩、铁路轨道材料、管材和空心型材；按焊接结构型材另行分类的焊接型材；以及为特定结构制备的板材、型材或组件。炼铁、炼钢以及购入钢材的生产由合格上游数据集表征，不在前景过程中重复建立。安装、使用、维护、拆除及寿命终止阶段不属于参考边界。

产品类别边界遵循 CPC 3.0 代码 41262 及相应的 HS 7216 产品状态区分。CPC 仅提供分类语境，不构成规范 PCR 身份。`un-cpc-3-0-2025` 与 `un-hs-2017-7216` 支持该语义边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.angles-shapes-and-sections-cold-formed-cold-finished-or-further-worked-of-iron-or-non-a-41c0d70f |
| classification_refs | CPC 3.0: 41262；HS 2017: 7216 产品状态区分 |
| covered_products | 在工厂门口保持基本钢型材状态的铁或非合金钢制冷成形、冷加工或进一步加工角材、型材及异型材 |
| excluded_products | 仅热加工型材；合金钢或不锈钢型材；条、杆和线材；钢板桩；铁路轨道材料；管材和空心型材；另行分类的焊接型材；结构制品 |
| representative_product | 由扁平轧材经辊式冷弯成形、定尺切断并检验后出厂的、截面尺寸明确的铁或非合金钢开口型材 |
| production_route | 已申报购入钢材，随后实施一道或多道有记录的冷成形、冷加工或进一步加工工序；仅在实际发生时纳入酸洗、热处理、表面精整和包装 |
| market_state | 生产设施门口的成品型材，申报钢号、截面、尺寸、表面状态、涂层状态、加工路线和包装状态 |

## 3. 参考流

由于本产品类别不确定最终用途和使用寿命，因此采用中间钢产品的质量申报单位，而非使用阶段功能单位。

| 字段 | 值 |
| --- | --- |
| What | 在生产设施门口提供经冷成形、冷加工或进一步加工、截面尺寸明确的铁或非合金钢角材、型材或异型材 |
| How much | 1 kg 合格成品型材，不含包装质量 |
| How well | 符合所申报钢号、截面几何形状、尺寸公差、表面状态及订单或适用产品规范 |
| How long or cycle | 工厂门口的一个生产报告期及生产批次；不规定使用阶段寿命 |
| reference_flow_link | `section_manufacturing` 的 `reference_product` 输出，归一化为 1 kg 净合格产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铁或非合金钢制，经冷成形、冷加工或进一步加工的角材、型材或异型材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铁或非合金钢钢号及适用规范；型材类别及截面尺寸；适用时的壁厚或腹板及翼缘厚度；产品长度；进厂原料形态和状态；实施的冷成形、冷加工和进一步加工工序；热处理状态；表面及涂层状态；设施及国家或地区；报告期；适用时的产品水分或油膜计量约定；交付质量是否包含包装 |

构建前景数据包时，`必需限定信息` 中的每项信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中申报。缺失限定信息将使参考流定义不完整。尚未确认完全匹配的 TianGong 公共参考产品 UUID；清单中的 `reference_product` 未解决项已登记于清单文件，不得用更宽泛的钢产品代理流替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用工厂门口合格成品型材的净质量。参考产品质量不含托盘、薄膜、纸张和捆扎带；实际使用时应分别盘查各包装组件。 |
| `mass_normalization` | 所有质量交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 参考产品 | 以同一报告期的净合格产品质量为分母，将报告期总量换算为每 kg 产品的数量；保留未舍入的原始总量和换算因子。 |
| `electricity_energy` | `rolling_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量电量换算为 MJ，并保持供应商、地域、电压、发电技术或电力组合及交付边界限定信息不变。 |
| `natural_gas_volume` | `natural_gas_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按计量表的参考温度和压力报告气体体积并披露这些条件；不得将天然气体积与购入热量或其他燃料合并。 |
| `route_applicability` | 条件交换 | 对应行流属性 | 对应行参考单位 | 仅在生产者证明申报路线中不存在该原子交换后使用 `not_applicable`；缺失记录不能证明不适用。 |

## 5. 系统边界

前景边界始于已申报的购入钢材跨越生产设施门口，止于合格型材在适用时完成包装并可供发运。综合过程包括接收和搬运；实际冷成形或冷加工；实际发生的切割、矫直、定径、冲孔、钻孔、磨削或其他进一步加工；条件性酸洗、漂洗、干燥和中和；条件性热处理；检验；厂内运输；现场公用工程；废物处理；污染控制及包装。`eu-jrc-fmp-bref-2022` 支持条件工序和投入产出分解，`worldsteel-lci-methodology-2017` 支持门到门边界以及能源、材料、废物和排放的完整记录。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产设施门口购入的铁或非合金钢扁平轧材、热加工型材或同类半成品型材，并申报质量、钢号、形态、表面及既往加工状态 |
| starting_condition_role | 将购入钢材生产与本 PCR 所表征的增量冷加工及进一步加工分开的前景门口 |
| product_classification_scope | 离开前景设施时处于符合 CPC 3.0 代码 41262 的冷成形、冷加工或进一步加工状态的铁或非合金钢角材、型材及异型材 |
| recursive_input_rule | 当购入投入本身属于同一产品类别时，仅将其作为 `input_same_category_section` 记录一次，要求具有其进厂状态的上游数据集，且前景仅建模现场新增工序；不得递归展开同一 PCR |
| upstream_dataset_requirement | 各已申报钢材、电力、燃料、化学品、水及包装组件优先使用供应商特定数据集，否则使用地域和技术具有代表性的数据集；披露数据集地域、技术、产品状态和参考年份 |
| disclosure | 申报设施、报告期、钢号、进厂原料路线和状态、纳入和缺失工序、公用工程供应条件、成材率和废钢去向、污染控制及废水路线、包装状态、分配、排除项及任何边界偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景产品系统 | 纳入从购入钢材接收到型材可供发运的所有现场工序和辅助服务，包括厂内运输、现场公用工程、污染控制、废物处理以及实际使用的包装。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `boundary_qualifying_operation` | 类别适用性 | 确认至少一道冷成形、冷加工或进一步加工工序将进厂钢材改变为申报市场状态；仅经热加工的产品不适用本 PCR。 | `un-cpc-3-0-2025`; `un-hs-2017-7216` |
| `boundary_upstream_inputs` | 购入投入 | 将每种购入钢材状态、电力、燃料、化学品、水和包装组件连接至地域、技术及交付状态相符的上游数据集；不得在前景内用无限定的通用过程重建上游炼钢。 | `worldsteel-lci-methodology-2017` |
| `boundary_cutoff` | 完整性 | 记录所有能源投入。每项被排除材料流应低于其单元过程质量、能源及环境相关性的 1%，所有被排除流合计应低于 5%；记录筛选过程，且不得以截断规则遗漏危险或受监管排放。 | `worldsteel-lci-methodology-2017` |
| `boundary_downstream` | 被排除生命周期阶段 | 排除出厂配送、加工为特定结构、安装、使用、维护、拆除和寿命终止；若单独申报的扩展研究纳入这些阶段，不得改变本参考流。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `section_manufacturing` | 铁或非合金钢型材综合冷加工及进一步加工 | required | 纳入从购入钢材接收到合格产品可供发运的实际工序序列；各条件性交换仅在相应工序或材料实际发生时记录。 | 前景制造、精整、辅助服务、污染控制、废物处理和包装 | 设施门口 1 kg 净合格成品型材 |

### 过程：综合冷加工及进一步加工（`section_manufacturing`）

#### 输入

##### 产品流

###### 热轧扁平钢材投入（`input_hot_rolled_flat_steel`）

仅当热轧铁或非合金钢板、带或卷材为申报型材路线的购入原料时记录。申报钢号、涂层、尺寸、质量和供应商生产路线。

- 选定流：铁或非合金钢制热轧扁平轧材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内用于合格产品及不合格产品生产的净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass`
- 来源：`un-hs-2017-7216`; `worldsteel-lci-methodology-2017`

###### 冷轧扁平钢材投入（`input_cold_rolled_flat_steel`）

仅当冷轧铁或非合金钢板、带或卷材作为型材成形的购入原料进入设施时记录。其既往冷轧负荷保留在上游数据集中。

- 选定流：铁或非合金钢制冷轧扁平轧材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内用于合格产品及不合格产品生产的净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass`
- 来源：`un-hs-2017-7216`; `worldsteel-lci-methodology-2017`

###### 热加工钢型材投入（`input_hot_rolled_section`）

仅当铁或非合金钢制热轧、热拉拔或热挤压角材、型材或异型材在前景中形成合格的冷加工或进一步加工市场状态时记录。

- 选定流：铁或非合金钢制热轧角材、型材或异型材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内用于合格产品及不合格产品生产的净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass`
- 来源：`un-cpc-3-0-2025`; `un-hs-2017-7216`

###### 同类半成品型材投入（`input_same_category_section`）

仅当购入的冷加工型材在前景现场接受新增合格加工时记录。申报准确的进厂状态并执行递归投入规则。

- 选定流：铁或非合金钢制半成品冷加工角材、型材或异型材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入新增前景加工的净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass`
- 来源：`worldsteel-lci-methodology-2017`

###### 使用点电力（`rolling_electricity`）

记录前景边界内生产设备、厂内搬运、冷却、泵送、抽排、污染控制、废水处理和包装所消耗的交流电。选定流必须申报供应商、地域、电压、发电技术或电力组合及交付边界；缺失这些事实时不得改用任何中国电压等级候选流。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：归属于申报产品路线的计量电量，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 现场加热用气态天然气（`natural_gas_input`）

仅当气态天然气为指定炉窑、干燥设备或其他工艺加热操作跨越前景边界时记录。申报供应地域、工艺用途以及计量参考温度和压力。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：归属于所纳入型材生产的参考状态计量气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 矿物油基冷成形润滑剂（`cold_forming_lubricant`）

记录补充到冷成形、轧制、磨削或切割系统的新矿物油基润滑剂或水包油乳化液浓缩液。单独加入的水记录为 `process_water`。

- 选定流：矿物油基冷成形润滑剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放至纳入设备的购入补充润滑剂质量，扣除退回的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eu-jrc-fmp-bref-2022`

###### 工艺用水（`process_water`）

记录为润滑乳化、冷却、酸洗槽配制、漂洗、清洗或废水处理跨越前景边界的补充水。内部循环水不得作为新投入重复计算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应至纳入工序的计量或发票补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eu-jrc-fmp-bref-2022`

###### 酸洗用盐酸（`hydrochloric_acid`）

仅当盐酸溶液加入纳入的酸洗或酸清洗工序时记录。报告溶液质量和浓度，以便在不与其他酸合并的情况下计算纯酸含量。

- 选定流：盐酸水溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入的购入或配制盐酸溶液质量，并记录浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eu-jrc-fmp-bref-2022`

###### 中和用氢氧化钠（`sodium_hydroxide`）

仅当氢氧化钠溶液用于前景边界内酸性废水或废酸液中和时记录。分别报告溶液质量和浓度，不与盐酸合并。

- 选定流：氢氧化钠水溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入纳入处理系统的氢氧化钠溶液质量，并记录浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`eu-jrc-fmp-bref-2022`

###### 钢制包装捆扎带（`steel_strapping`）

仅在为发运型材提供固定而消耗钢带时记录。退回供应商的可重复使用捆扎带不计为消耗，并申报其核算处理。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发运合格产品消耗的钢带净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-fmp-bref-2022`

###### 牛皮纸包装（`kraft_paper`）

仅在未涂布牛皮纸作为发运产品的包裹或隔层材料被消耗时记录。

- 选定流：未涂布牛皮包装纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发运合格产品消耗的纸张净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-fmp-bref-2022`

###### 低密度聚乙烯包装膜（`ldpe_film`）

仅在低密度聚乙烯薄膜用于发运型材包裹或防潮且被消耗时记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发运合格产品消耗的薄膜净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-fmp-bref-2022`

###### 可重复使用木托盘投入（`wood_pallet`）

仅在木托盘随产品提供或因损坏、丢失而被消耗时记录。采用周转池时，按有记录的周转次数分摊托盘质量并保留池记录。

- 选定流：可重复使用软木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：一次性供应的托盘质量，或按经核实周转次数分摊的损耗质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品型材（`reference_product`）

该参考产品在完成所申报冷加工、检验及适用包装状态后离开前景设施。此流不含包装质量。

- 选定流：铁或非合金钢制，经冷成形、冷加工或进一步加工的角材、型材或异型材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行发运的合格成品型材经核实净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass`
- 来源：`worldsteel-lci-methodology-2017`; `un-cpc-3-0-2025`

##### 废物流

###### 分类收集的含铁钢工艺废料（`ferrous_steel_scrap`）

将离开前景的边角料、切边、不合格型材和收集的含铁切屑作为一个分类收集的含铁钢废料流记录。在最终去向明确前，内部返工材料不得同时计入产品输出和外运废钢。

- 选定流：钢废料 `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：移交外部回收或处理的含铁工艺废料称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 废冷成形油乳化液（`spent_oil_emulsion`）

记录从润滑或冷却循环中排出并外运或进入现场处理的废水包油乳化液。不得与干切屑或废酸洗液合并。

- 选定流：废矿物油-水冷成形乳化液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开循环系统的废乳化液称量或联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-jrc-fmp-bref-2022`

###### 废盐酸酸洗液（`spent_pickling_liquor`）

记录从所纳入酸洗槽排出并用于再生或处理的废盐酸酸洗液。有数据时报告酸浓度和溶解铁含量。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从前景系统转出的废液称量或联单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-jrc-fmp-bref-2022`

###### 氢氧化铁中和污泥（`iron_hydroxide_sludge`）

仅在前景边界内中和酸性废水时记录脱水氢氧化铁污泥，并与废油乳化液和废酸洗液分开。

- 选定流：脱水氢氧化铁废水处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从处理系统转出的湿污泥质量，并记录干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 化石源二氧化碳排放至空气（`fossil_co2_air`）

记录所纳入现场天然气燃烧产生的直接化石源二氧化碳。本行不得用于上游电力排放或生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：烟囱实测质量，或天然气用量乘以有记录的场址特定燃料碳含量和氧化因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 氯化氢排放至空气（`hydrogen_chloride_air`）

记录纳入的盐酸酸洗工序经控制装置后排放的氯化氢，不得与其他酸性气体合并。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经污染控制后的烟囱测试、连续监测或经验证酸洗质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

###### 氮氧化物排放至空气（`nitrogen_oxides_air`）

记录所纳入现场燃烧产生的氮氧化物，以二氧化氮质量计。本行不得与一氧化碳或二氧化碳合并。

- 选定流：氮氧化物排放至空气，未指定环境舱，以二氧化氮计
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放质量，或燃料用量乘以有记录的场址特定氮氧化物因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

###### 一氧化碳排放至空气（`carbon_monoxide_air`）

将纳入的现场燃烧经污染控制后排放的一氧化碳作为独立基本流记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放质量，或燃料用量乘以有记录的场址特定一氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

###### 矿物油雾排放至空气（`mineral_oil_mist_air`）

记录冷成形、轧制、磨削或切割设备经抽排和控制后排放的矿物油气溶胶，不得与含铁颗粒物合并。

- 选定流：矿物油雾排放至空气，未指定环境舱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经污染控制后的烟囱测试或经验证质量平衡排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

###### 含铁颗粒物排放至空气（`iron_particulate_air`）

记录切割、磨削或精整经控制后排放的含铁颗粒物。申报实测粒径级别，不得与油雾合并。

- 选定流：含铁颗粒物排放至空气，粒径级别未指定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经污染控制后的烟囱测试或经验证的捕集量与排放量质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格成品型材
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

本 PCR 不规定外部定量清单范围。现有冷轧观测无法与第二个在本较宽型材类别上边界相容的独立来源合成。清单文件已记录未解决的范围证据需求，前景采集规则仍为强制要求。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 前景工序 | 优先按申报产品族细分，并使用直接计量表、秤或批次记录，从而避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_line` | 共用生产线投入和排放 | 无法直接计量时，应使用反映因果关系且有记录的物理关系分配共用交换，例如设备时间、计量负荷或加工质量。申报分配因子；当另一合理因子会实质改变结论时进行敏感性分析。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap` | 含铁工艺废料 | 除非有记录的扩展模型采用明确回收方法，否则在前景门口将分类收集的含铁工艺废料作为废物输出。本门到门产品不得增加寿命终止回收抵扣，内部返工钢材不得同时计作投入和外运废钢。 | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_output` | 回收的非产品输出 | 仅当数量、去向、市场需求及替代功能均有记录时，才将回收输出视为共产品。采用系统扩展时，应说明被替代产品和功能等效性，并在结果重大时进行敏感性分析。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass` | `section_manufacturing` | 每种已申报钢材投入状态 | 接收称量、采购及材料追溯记录 | 原料项目编号；钢号；形态；既往加工状态；供应商；产地；毛重、皮重和净重；批次；目标产品 | 按各原子钢材行，将经校准称量单与采购收货及生产领用记录核对 | kg | 每次接收和生产领用 | 与产品输出相同的报告期，通常为连续 12 个月 | 服务于申报产品的全部前景生产线及仓储损耗 | 按钢材行和产品族汇总净消耗质量；不计尚未消耗的库存变化 | 秤校准、供应商证明、材质证明书、采购收货及库存核对 |
| `cp_energy` | `section_manufacturing` | 电力和气态天然气 | 结算表、分表及燃料发票 | 仪表编号；期初和期末读数；kWh；气体体积；参考温压；供应商；电压；电价或电力组合；设备或生产线；停机时间 | 有条件时使用经校准分表并与设施发票核对；仅按申报因子分配共用量 | kWh、MJ 和 m3 | 至少每月及每次换表时 | 与产品输出相同的报告期，通常为连续 12 个月 | 全部纳入设备、辅助系统和厂内搬运 | 扣除有记录的非前景负荷，按 3.6 MJ/kWh 换算电力并以合格产品质量归一化 | 仪表校准、发票、仪表层级、供应商披露及分配工作表 |
| `cp_consumables` | `section_manufacturing` | 润滑剂、工艺用水、盐酸及氢氧化钠 | 分项领用、储罐、仪表、发票和库存记录 | 项目编号；化学品身份；溶液浓度；期初库存；收货；期末库存；退回量；补充水；工艺去向 | 由库存平衡或经校准仪表分别计算各指定材料消耗 | kg 及浓度分数 | 每次领用或每批次，每月核对 | 与产品输出相同的报告期 | 全部纳入成形、精整、酸洗、漂洗、冷却和处理系统 | 按原子行计算期初库存加收货减期末库存减有记录退回量 | 经校准储罐或仪表记录、安全数据表、浓度分析、发票及库存核对 |
| `cp_packaging` | `section_manufacturing` | 钢带、牛皮纸、LDPE 膜及可重复使用木托盘 | 包装领用及发运记录 | 包装项目编号；材料；单位质量；领用数量；退回数量；损坏数量；周转池次数；发运产品质量 | 称量代表性单元，并按分项将领用记录与发运记录核对 | kg 及件数 | 每个发运批次，每月核对 | 与产品输出相同的报告期 | 前景设施内用于申报产品的包装 | 分别计算各材料质量；仅在有记录周转池时按经核实次数计算托盘 | 单位质量检查、领用记录、发运记录、退回日志及周转池台账 |
| `cp_product_mass` | `section_manufacturing` | 合格成品型材 | 经校准产品秤、件数及尺寸记录 | 产品编号；钢号；截面；长度；件数；单位质量依据；实测净质量；不合格质量；放行状态；包装皮重 | 由经校准称量记录或经核实件数乘实测单件质量确定净合格质量，并扣除包装 | kg | 每个生产或发运批次 | 与全部投入输出相同的报告期 | 数据集表征的全部合格批次 | 扣除包装皮重和不合格产品后汇总放行净质量 | 秤校准、尺寸检验、放行证明、件数核对及包装皮重记录 |
| `cp_waste` | `section_manufacturing` | 每种分类废物流 | 废物称量、储罐转移、实验室及联单记录 | 废物行编号；毛重、皮重和净重；液体浓度或污泥干固体；来源工序；去向；处理代码；内部返工量 | 分别称量或计量各指定废物，并核对库存变化和联单 | kg | 每次转移，每月核对 | 与产品输出相同的报告期 | 全部纳入生产、污染控制和废水系统 | 产生量等于转出量加期末库存减期初库存，并按有记录内部返工调整 | 经校准秤或储罐、废物联单、实验室分析、回收方收据及库存核对 |
| `cp_air_emissions` | `section_manufacturing` | 每种直接空气基本流 | 连续监测、烟囱测试或分物种计算记录 | 排放源编号；污染物种类；浓度；流量；运行时间；燃料用量；燃料碳含量；氧化因子；控制效率；测试方法；检出限 | 优先使用实测质量；否则由经核实场址特定活动数据和因子逐一物种计算 | kg 排放物及支持测量单位 | 按要求连续监测或每次代表性测试，并与运行小时核对 | 与产品输出相同的报告期且代表实际运行条件 | 全部纳入燃烧、酸洗、成形、磨削和污染控制排放源 | 积分实测质量，或将经核实活动量乘以分物种场址因子；不得将上游电力排放计入此处 | 监测仪校准、认可测试报告、燃料证明、运行日志、因子出处及污染控制记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期该行总量 / 报告期净合格成品型材质量 | 相应采集协议的行总量；`reference_product` 净质量 | 每 1 kg 参考产品数量 | `worldsteel-lci-methodology-2017` |
| `calc_steel_mass_balance` | 含钢行 | 核对钢材投入总质量与合格产品、含铁废料、库存变化及其他分别计量的含钢输出；解释每项残差，不得强制配平 | 钢材投入行；`reference_product`；`ferrous_steel_scrap`；库存变化 | 有记录的钢质量平衡残差 | `worldsteel-lci-methodology-2017` |
| `calc_shared_exchange` | 共用计量表及共用批次 | 分配交换 = 共用总量 × 本产品申报因子 / 所有受服务产品同一因子之和 | 共用总量；各产品设备时间、计量负荷或加工质量 | 归属于本产品的交换 | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | `fossil_co2_air` | 使用直接实测化石源 CO2 质量；无实测时由计量天然气与有记录的场址特定碳含量和氧化因子按一致单位计算 | 天然气记录；碳含量证明；氧化证据或烟囱测量 | kg 化石源 CO2 排放 |  |
| `calc_reusable_pallet` | `wood_pallet` | 托盘分配质量 = 实测托盘质量 × 损失或随货托盘数 / 合格产品质量；有周转池记录时可按实测托盘质量 / 经核实周转次数计算 | 托盘单件质量；领用、退回、损失及周转记录；产品质量 | kg 托盘投入/kg 产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和钢材投入 | 保持钢号、材质证明、进厂状态、截面几何、路线、表面状态以及进厂批次到出厂批次的放行关联。 | 材质证明书、工艺流转卡、检验及放行记录 |
| `dq_temporal` | 所有前景数据 | 可行时使用具有代表性的 12 个月期间。无法避免较短期间时，应申报并说明理由，且考虑维护、生产批次、季节及产品组合影响。 | 报告日历、生产日志及由 `worldsteel-lci-methodology-2017` 支持的代表性评价 |
| `dq_geography_technology` | 上游链接和公用工程 | 将上游钢材、电力、燃料及耗材数据集与实际供应地域、技术和交付状态匹配；记录每项代理及其最接近实际的理由。 | 供应商声明、数据集元数据及代理审查 |
| `dq_measurement` | 仪表、秤和测试 | 保留重大测量的校准状态、分辨率、测试方法、检出限及不确定度或准确度说明。优先顺序为实测值、计算值、估算值。 | 校准证书、实验室报告及仪表台账 |
| `dq_completeness` | 所有纳入工序 | 在同一设施和期间内核对材料、能源、产品、废物和直接排放记录，并记录截断筛选及全部排除项。 | 质量平衡、发票核对、仪表层级、废物联单及排除项台账 |
| `dq_uuid_status` | TianGong 流身份 | 在混合检索及公开 state_code=100 直读确认语义身份、流类型、分类、属性、单位组、产品状态、地域、技术和备注前，未解决 UUID 单元格保持为空。 | 清单文件未解决登记表及直读审计记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 若数据包缺少钢号、截面几何和尺寸、进厂钢材状态、合格冷加工或进一步加工工序、表面状态、设施地域或报告期，则拒绝该数据包。 | `un-cpc-3-0-2025`; `un-hs-2017-7216` |
| `validation_reference_mass` | 参考流 | 确认归一化后的参考输出恰为 1 kg 净合格型材；包装皮重不计入产品质量，但各被消耗包装组件应分别盘查。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validation_route_rows` | 条件清单行 | 每个缺失的条件行均应有证据证明其指定工序或材料不存在。不得把空值或缺失记录作为 `not_applicable`。 | `eu-jrc-fmp-bref-2022` |
| `validation_balance` | 含钢清单 | 使用未舍入的报告期总量重新计算钢质量平衡，并要求解释每项差异、库存变化、内部返工和不合格输出。 | `worldsteel-lci-methodology-2017` |
| `validation_energy_and_emissions` | 公用工程和直接排放 | 将电力和天然气与发票及仪表层级核对；确保直接排放仅来自前景排放源，且化石源 CO2 不与上游电力重复。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validation_allocation` | 共线生产 | 先核实是否可细分，再复算所申报物理分配；另一合理因子实质改变结果时要求敏感性分析。 | `worldsteel-lci-methodology-2017` |
| `validation_recursive_input` | 同类投入 | 核实购入同类型材具有一个合格上游数据集，且仅表征现场新增工序，不递归展开本 PCR。 | `worldsteel-lci-methodology-2017` |
| `validation_uuid` | 带 UUID 的行 | 仅接受经最终定稿的混合检索回执和公开 state_code=100 直读支持的 UUID。除非新的路线事实建立精确语义匹配并完成新审计，否则本清单各行所用回执中的所有未采纳候选流均保持拒绝。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景生产数据包，经审查后可作为所申报型材路线的 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 当产品状态、地域、技术和边界匹配时，用于冷成形、冷加工或进一步加工铁或非合金钢型材的产品系统建模 |
| allowed_use | 加入合格上游数据集后的从摇篮到大门模型；参考流、边界和分配方法相同的内部情景比较；披露未解决流身份的供应链筛选 |
| excluded_use | 直接替代仅热加工、合金钢、不锈钢、空心型材、焊接结构型材或结构制品数据集；无应用特定功能单位的使用性能比较；未披露地域或技术代理 |
| required_metadata | 规范 PCR id；产品及原料限定信息；设施地域；报告期；工艺路线和工序标志；参考质量约定；上游数据集身份；公用工程供应限定信息；分配因子；截断筛选；废物去向；未解决 UUID 登记表 |
| required_quality_disclosure | 一手数据覆盖率；测量值和计算值占比；校准及不确定度证据；质量平衡残差；分配敏感性；时间、地域和技术代表性；排除项及代理；流 UUID 审计状态 |
| update_trigger | 钢材进厂状态或供应路线、型材系列、冷加工技术、热处理、表面处理、涂层、能源供应、污染控制、废物去向、分配因子、设施地域发生变化，或报告数据超过所申报代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类 3.0 版结构及解释性说明》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 41262 正式身份、相邻类别排除及产品状态边界 |
| `un-hs-2017-7216` | 官方指南（`official_guidance`） | 联合国统计司，《HS 2017 品目 7216 分类详情》，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2089/7216 | 区分由扁平轧材制得及其他冷成形或冷加工铁或非合金钢型材与仅热加工状态 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022-12，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | 条件性冷加工工序、精整、酸洗、水、油、能源、废水、废物及直接排放清单覆盖 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | 世界钢铁协会，《生命周期清单方法学报告》，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | 1 kg 申报单位、门到门边界、上游数据集匹配、数据期间和质量、完整性、质量平衡、分配及废钢处理 |
