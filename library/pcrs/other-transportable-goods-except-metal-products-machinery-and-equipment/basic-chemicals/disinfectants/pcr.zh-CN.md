---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.disinfectants
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 过氧化氢—丙二醇表面消毒液：外购药剂混配供货液

## 1. 范围与适用性

本 PCR 覆盖一种物理混配表面消毒水液路线：外购过氧化氢水溶液、丙二醇、正磷酸、十二烷基聚氧乙烯醚硫酸钠、马来酸、苯并三唑及单独加水。顺序稀释和混合得到配制场址门口的已验收供货液，不含下游使用。这是 CPC 34664 中的较窄方法，并不覆盖所有消毒剂。专利提供路线实例，未提供商业运行数据。各数据集须由实际配方修订、实测供货状态和产品验证定义。

排除农业作物或种子杀菌剂、除草剂、杀虫剂、残余类农药制剂、手消毒剂、湿巾、凝胶、过氧乙酸合成、含氯配方及上游过氧化氢制造。所选路线采用外购处理水、电动混合及转移；不预设反应合成、加热、燃烧或包装交付。额外实际配料、水处理、加热制冷、包装、燃料或处理操作须在扩展数据集使用前逐项提供证据并增列原子交换。不提供默认浓度、杀灭率、施用率、暴露、使用寿命、排放因子或密度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.disinfectants |
| classification_refs | CPC 3.0 34664 Disinfectants; narrower |
| covered_products | 所选原料组合的过氧化氢—丙二醇表面消毒水液 |
| excluded_products | 农业杀菌剂；手消毒液；含氯产品；过氧乙酸；上游大宗过氧化氢；包装制品 |
| representative_product | 具有实际已验证组成及放行批号的净供货液 |
| production_route | 外购药剂顺序稀释及物理混合、质量放行、暂存与散装转移 |
| market_state | 配制场址门口交接的未包装散装液体；声明实际浓度及温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供经验证的表面消毒配方液 |
| How much | 1 千克净供货液 |
| How well | 采用实际产品规范及有标签证据的声明；千克产出本身不构成消毒服务等效 |
| How long or cycle | 一次供货批次放行；无默认使用持续时间或保质期 |
| reference_flow_link | finished_liquid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 消毒剂 `93328a0a-7cd1-4f63-831b-e9ac5398506e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际原料身份及供货形态; 配方修订; 活性物及水的实测基准; 供应商等级与路线; 场址及报告期间; 验收供货状态; 散装交接点; 验证与标签限制; 在制品及返工谱系; 上游供应数据基准 |

原始通用身份为 Product flow／质量、工厂生产混合，未指定地理、CAS、浓度、配方或制造路线。其惰性表面含义与本有条件供货配方相容；不采用其关于杀灭99.999%的笼统声明。UUID 仅提供身份，不提供背景供应者或整份配方液规范。数据集须包含全部必需限定信息；缺项则参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用整份已验收供货液净质量，包括水和溶剂，排除储罐及包装。活性物质量另列亚账。 |
| single_basis | 所有清单分母 | Mass | kg | 已换算原始总量仅归一化一次至同一正验收供货千克，保留实际分子单位。浓度分数不得当成液体质量，已积分体积不得当成流率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配制场址接收单独外购药剂及处理水；记录进料组成和结转清单负荷 |
| starting_condition_role | 外购配料，不是场内合成或通用同类产品捷径 |
| product_classification_scope | CPC 3.0 34664; narrower surface-disinfectant formulation |
| recursive_input_rule | 外购已配制消毒剂作为一份完整溶液投入并保留自身上游负荷，不拆成重复采购；替换所选配料路线须明确重新评估边界。 |
| upstream_dataset_requirement | 匹配实际供货药剂或溶液、浓度基准、等级、路线、地理及交付；纯活性物供应数据须明确核对载体及负荷 |
| disclosure | 披露截断、运输接口、散装交付、实验室与服务、清洗、损失、共用服务分配及所有在制品负荷转移 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | blend | 纳入接收、储存、顺序稀释混合、检测放行、暂存、清洗及转移的全部实际负荷；物理混配不是化学合成。 | `cn113491268-blending` |
| boundary_scope | reference product | 本前景范围排除农业作物或种子保护及上游大宗化学品生产，但保留适用上游负荷，不能静默省略。 | `un-cpc3-2025`; `wco-disinfectants-2022` |
| boundary_use | reference product | 下游施用、暴露和环境归趋位于本生产清单之外；此类模型须另有实际使用证据及单独验证排放。 | `nhc-low-temperature-2020` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | 外购药剂混配及散装供应 | required | 仅限所选配料路线；实际场址操作有证据 | foreground | finished_liquid |

### 过程：外购药剂混配及散装供应 (`blend`)

#### 输入

##### 产品流

###### 外购过氧化氢水溶液 (`peroxide_solution`)

记录跨边界整份供货溶液及实际含量、稳定剂和杂质组成。纯过氧化氢身份或固定浓度目录记录均不能证明整份溶液采购基准；在该基准核实前保留具体水溶液行且不绑定 UUID。活性过氧化氢与载水为亚账，不另计采购。

- 选定流: 过氧化氢水溶液药剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 丙二醇投料 (`propylene_glycol`)

记录单独外购丙二醇、实际异构体与等级、含量和水分。通用防冻液、碳酸丙烯酯或环氧丙烷不是本交换。

- 选定流: 丙二醇
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 磷酸药剂 (`phosphoric_solution`)

记录实际供货酸液质量和含量，不采用干基五氧化二磷或养分当量。不预设85%浓度、湿法或热法路线及杂质容限。药剂载水仅入亚账。

- 选定流: 正磷酸水溶液药剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 十二烷基聚氧乙烯醚硫酸钠配料 (`sles`)

使用实际供货 SLES 等级，声明烷基分布、乙氧基化程度及含量。整份外购溶液或膏体仅记录一次，水和盐类列为亚账。不含乙氧基的十二烷基硫酸钠是不同物质。

- 选定流: 十二烷基聚氧乙烯醚硫酸钠配料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 马来酸配料 (`maleic_acid`)

计量供货马来酸及实际形态、含量和水分；不得以顺酐替代并隐含消耗水。

- 选定流: 马来酸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 苯并三唑缓蚀剂 (`benzotriazole`)

记录单独采购苯并三唑药剂的实际等级、含量和供货形态。采用原始身份绑定前须独立证明实际交接点、载体、配方及供应商数量基准。

- 选定流: 苯并三唑药剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 单独加入的水 (`water`)

仅对离子交换或反渗透制得的供货水使用此绑定。原始名称限定工厂生产混合和纯净物；备注还提及蒸馏及消费供应，但不能放宽名称限定或证明水质标准。CAS 7732-18-5，地理未指定。供应商等级、实际处理及交接点须有证据；专利未确定水质。外购药剂内已有的水不在本行重复记录。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_material`
- 来源: `cn113491268-blending`

###### 外购电力 (`electricity`)

计量搅拌、泵送、通风、清洗、实验室及可归属暂存服务用电。保留实际电压、来源与地理。共用设备采用独立论证的服务分配，不将铭牌功率当作电表读数。本行不指定电网地理或电压。

- 选定流: 外购交流电
- 流属性/单位: Energy / kWh
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_utilities`
- 来源:

#### 输出

##### 产品流

###### 已验收散装供货液 (`finished_liquid`)

这是唯一终端参考 Product 输出，已验收净液体仅计一次。原始通用身份为惰性表面用途、工厂生产混合，未指定 CAS、配方、浓度或地理。不得引入其未经产品验证的通用效果声明，也不得据此推定上游供应者。

- 选定流: 消毒剂 `93328a0a-7cd1-4f63-831b-e9ac5398506e`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_release`
- 来源: `cn113491268-blending`

##### 废物流

###### 废清洗水液 (`spent_wash`)

记录实际跨边界送交明确处理设施的清洗液及其中过氧化氢、有机组分、水和接收方。它是技术圈废物，不是环境水排放；不隐含未经处理排放。

- 选定流: 含过氧化氢清洗废液
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

###### 废弃不合格混合液 (`offspec_waste`)

仅永久弃置物料作为废物输出。内部退回与返工保留为内部流及原有负荷，直至验收或处置；不得计作新采购或正产品。

- 选定流: 不合格过氧化氢丙二醇混合废液
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

##### 基本流

###### 向空气释放氧气 (`oxygen_air`)

仅记录本操作中独立证实的氧气释放。过氧化氢减少本身不能区分分解和有机配料氧化。夹带空气不是新生成氧气。

- 选定流: 氧气，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

###### 水蒸气向空气排放 (`water_air`)

实际蒸发水与废液及过氧化氢雾分别记录；载水、实测成品水和独立证实的反应水保留为不同账目。

- 选定流: 水蒸气，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

###### 过氧化氢向空气排放 (`peroxide_air`)

计量气态或气溶胶中过氧化氢实际向空气的排放，保留物种、相态、捕集效率及监测限；不采用通用挥发或暴露因子。

- 选定流: 过氧化氢，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

###### 丙二醇向空气排放 (`glycol_air`)

记录实际丙二醇排放，包括单独计量的气溶胶。未检出须保留检出限和覆盖范围，不能证明通用零排放。其他检出物种须另列原子行并独立核实身份。

- 选定流: 丙二醇，空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 可归属已换算原始期间实际数量仅除以正的新验收供货净千克一次，具体见第8节。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_losses`
- 来源:

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | blend | 优先直接归属实际配方生产期。共用公用工程、清洗、实验室及储存按实测因果服务驱动量分配并对账；不同配方不得未经论证仅按质量分摊。不预设可售共产品；实际回收物与共产品须独立输出身份及分配证据。 |  |
| allocation_returns | all inventory rows | 保留失败或零产出负荷、退回及返工；在制品及其已承载负荷一并跨期间转移。内部返工流保留原有负荷，不是新采购或第二次验收产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | blend | 配料投料与水 | batch_material_records | 负责人：生产物料管理员；期间；批次；SKU；供应商；路线；地点；批号；等级；化学与异构体身份；供货形态；毛重与皮重；净质量；含量基准；不确定性；组分水与盐；体积计量时的独立密度及温度；期初期末库存；退回与返工标识 | 核对校准秤、收货记录、实际投料单和供应商证书；与实验室负责人验证基质选择性检测；独立核实每份溶液采购基准。 接收量、未投料原料库存、实际生产投料及原样退回应分别核对，属于同一采购的不同账面视图，不加总为重复采购；整份供货液体及组成子账保持区分。 保留相容可归属原始分子，不在采集端相除，并保存完整期间及库存、在制负荷链接。经核实原始单位换算及归属后，仅由period_normalization以正Q执行一次归一化。卡片数量公式及aggregation_rule描述同一次最终报告操作，不是再次相除。Q=0保留全部原始数量及负荷池，不报归一结果。 | kg; mass fraction; L and kg/L only with measured conditions | 每次交货及投料 | 完整实际报告期间及相连期初期末批号 | 同场址、产线、产品、路线及供货状态 | 每 1 kg 参考流 | 秤校准、原始投料单、证书、完整组成及检测验证 |
| cp_utilities | blend | 电力及共用服务 | meter_and_service_records | 负责人：公用工程工程师；表计编号；读数；时间区间；批次设备；电压；地理；通风及实验室服务记录；零产出运行；分配驱动量；期初期末在制品负荷 | 使用校准分表差值，或由实际服务记录支持且已对账的工程分配；包括开机、失败批次、清洗与暂存。 保留全部应归属原始能耗间隔，包括失败零产出、清洗、储存及结转服务份额。 保留相容可归属原始分子，不在采集端相除，并保存完整期间及库存、在制负荷链接。经核实原始单位换算及归属后，仅由period_normalization以正Q执行一次归一化。卡片数量公式及aggregation_rule描述同一次最终报告操作，不是再次相除。Q=0保留全部原始数量及负荷池，不报归一结果。 | kWh | 每计量区间及批次生产期 | 同一完整实际期间及结转负荷链接 | 同场址、产线、产品、路线及供货状态 | 每 1 kg 参考流 | 表计校准及共用服务分配对账 |
| cp_release | blend | 验收供货液与在制品 | mass_and_release_records | 负责人：独立质量放行员；完整期间；配方修订；实际含量；选择性检测回收率及干扰；已验证标签与状态；批次净质量；放行决定；温度；唯一批号；期初期末在制品质量及结转清单负荷；内部转移；失败批次；返工；退回；新验收供货质量 | 称量排除储罐与容器质量的净液体，核对出罐与批次放行；独立检测供货配方并保留可追溯在制品谱系。产品低温及杀灭效果验证与清单质量验收分开。 Q为声明最终生产验收门下新完成产品净质量，按唯一批次事件历史仅计一次。旧成品库存的发运或领出、重新发货、内部返工，以及已计批次的复检再验收不得再次增加Q。已释放成品库存及实际交付在独立仓库账核对，并将应归属储存转运负荷保留到匹配验收群；期末未释放存量、在制品及其结转负荷与验收产出分开。 保留相容可归属原始分子，不在采集端相除，并保存完整期间及库存、在制负荷链接。经核实原始单位换算及归属后，仅由period_normalization以正Q执行一次归一化。卡片数量公式及aggregation_rule描述同一次最终报告操作，不是再次相除。Q=0保留全部原始数量及负荷池，不报归一结果。 | kg | 每批放行及期间截点 | 完整实际匹配期间及前后批次谱系 | 同场址、产线、产品、路线及供货状态 | 每 1 kg 参考流 | 放行证书、秤与储罐校准、谱系、独立标签试验及选择性检测 |
| cp_losses | blend | 废物及各项排放 | weighing_speciation_and_monitoring | 负责人：环境计量负责人；完整期间；废物净质量；组成；处理接收方；留样；弃置质量；已积分气液体积；条件；仅速率记录所需流率及持续时间；实测物种浓度；检出限；捕集与释放份额；水和元素清单；期初期末滞留 | 核对处置称重、校准监测及独立物种测量，调查质量缺项。指定反应水或氧气前验证反应身份；不得以闭合残差拟合未知输出。 保留完整未归一废物量及独立计量逐物种总量，以及其库存群组归属；已积分体积不再乘额外时长。 保留相容可归属原始分子，不在采集端相除，并保存完整期间及库存、在制负荷链接。经核实原始单位换算及归属后，仅由period_normalization以正Q执行一次归一化。卡片数量公式及aggregation_rule描述同一次最终报告操作，不是再次相除。Q=0保留全部原始数量及负荷池，不报归一结果。 | kg; m3 with declared conditions; kg/m3; h only for rate integration | 每次废物交接及排放区间 | 匹配期间所有正常、失败、零产出、清洗及暂存操作 | 同场址、产线、产品、路线及供货状态 | 每 1 kg 参考流 | 交接单、处理接口、实验室选择性与回收率、监测设备、物理及元素闭合调查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 对每项交换，先把完整原始期间分子换算为声明单位，再以cp_release定义的唯一首次生产验收正Q将相容归属数量相除一次。归属期初既有负荷加当期负荷，仅扣除有据结转至期末未释放物料、在制品或转出该群组的负荷；保留失败零产出及全部返工退回负荷，不重复内部转移。已释放成品及其后仓储发运另账核对，不再增加Q或作为期末生产在制扣减；保留匹配实际储存转运负荷。不得对已归一因子再次归一。Q=0保留原始数量及完整负荷池，不报归一结果。 | cp_material; cp_utilities; cp_release; cp_losses | 每 1 kg 参考流的交换量 |  |
| solution_subledger | peroxide_solution; phosphoric_solution; sles; propylene_glycol; benzotriazole | 活性组分质量 = 整份供货药剂质量乘独立测得质量分数。水及其他组分采用各自实测分数。分数须基准一致，体积分数不等于质量分数。这些是单一采购行内亚账，不是额外投入。 | cp_material; cp_release | 非加和组分质量亚账 | `solvay-peroxide-assay-2019` |
| raw_conversion | all inventory rows | 直接使用校准质量，或体积乘以浓度与温度匹配的独立密度。速率乘时间用于积分速率；已积分气液体积仅乘物种浓度或独立核实密度，不得再乘时间。原始记录的次级因子不等于密度测量。 | cp_material; cp_losses; cp_utilities | 归一化前已换算原始数量 |  |
| physical_balance | all inventory rows | 整体实物质量、元素库存与含量检测分账闭合。生产池按完整实际投料加期初未释放物料及在制品，与唯一首次验收产出、期末未释放物料及在制品、实际废物释放和有据净转移核对。未投料原料库存通过独立接收入账及领用账核对，接收量与生产投料不得相加为两份外部投入。已验收产出不得再计期末生产存量。已释放成品及其后散装交付另设仓库账，并保留匹配物料及既有负荷。内部循环相抵。整份液体仅计一次，各载体中的水单独核算，并调查不确定性。不得用 COD、单一闭合残差或过氧化氢减少同时求解未知反应水和另一未知出口。反应、物种及其产水或耗水须独立证据；混配本身不能证明合成收率或反应水。 | cp_material; cp_release; cp_losses | 独立质量、元素、水及物种平衡 | `cn113491268-blending` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 保留完整药剂身份、溶液基准、路线、等级、地理及供应数据兼容性。辅助 UUID 为空时后续须核实绑定，不能以其他化学品代替。 | 供应商证书及原始身份依据 |
| quality_assay | reference product | 实验室负责人须证明活性过氧化氢检测的基质选择性、回收率及干扰控制，并独立表征水及其他组分。引用的进料高锰酸盐方法不能证明对有机混合液具有选择性；不得以 COD 或残差判定物种。具体数据集缺少实际检测或验证时不得使用。 | 已验证实验室程序、回收率及空白干扰研究、独立产品验证 |
| quality_period | all inventory rows | 核对完整原始期间及唯一验收供货产出，包括零产出失败、返工、库存和在制品变动及结转负荷；保留原始记录、不确定性和排除项。 | 完整期间台账及批次谱系 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_liquid | 要求 finished_liquid 指向唯一终端 Product 输出，UUID 与声明一致，采用质量／千克及整份液体净验收基准；两稿必须选择同一物理输出。 |  |
| validate_ledgers | all inventory rows | 检查整份溶液采购、独立组分亚账、物理及元素闭合、独立物种与水证据、完整期间归属和一次归一化。无法解释的闭合或无依据物种属于未决发现，不能拟合为损失或零。 |  |
| validate_claims | reference product | 使用具体数据集前须有实际产品特定检测与标签状态验证。专利及原始通用效果句均不能证明已批准浓度、最低使用温度、杀灭效果、剂量、暴露或排放。 | `nhc-low-temperature-2020`; `solvay-peroxide-assay-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为范围明确的表面消毒模型投入 |
| allowed_use | 相同供货配方状态及已核实上游基准，具有实测前景清单 |
| excluded_use | 通用每千克活性物、通用消毒剂、农业杀菌剂、手消毒液、效果等效或使用阶段排放默认值 |
| required_metadata | 配方修订；完整溶液采购基准；实测含量；原料等级与路线；地点；期间；散装供应接口；在制品谱系；供应数据兼容性 |
| required_quality_disclosure | 实际检测验证及标签限制；清单完整性；不确定性；未绑定辅助身份；原始通用身份限制；缺失测量 |
| update_trigger | 配方、检测方法、供应商基准、等级、路线、产品状态、标签、场址操作或期间改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC 3.0 Explanatory Notes, 30 June 2025, p.167. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于相邻类别边界；不提供配方、效果或已接受映射。 |
| wco-disinfectants-2022 | official_guidance | WCO, HS classification reference for Covid-19 medical supplies, edition 3.01, 15 January 2022, p.5. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/covid_19/hs-classification-reference_edition-3_en.pdf?la=en | 区分配制表面消毒剂和大宗化工原料；属于 HS2022 指导材料，并非海关裁定或产品批准。 |
| cn113491268-blending | literature | CN113491268A, 一种低温过氧化氢消毒液及其制备方法, 12 October 2021, paragraphs 0038–0062, PDF pp.5–6. https://patents.google.com/patent/CN113491268A/zh | 原始专利实施例仅支持所选原料组合及顺序混合。投料名称不能确定供货原料含量、水质或表面活性剂乙氧基化程度。比例、转速、时间、放大能耗、温度声明、保质期、杀灭效果及环境安全声明均非默认值或批准。 |
| nhc-low-temperature-2020 | official_guidance | 国家卫生健康委, 低温消毒剂卫生安全评价技术要求, attachment to 国卫办监督函〔2020〕1062号, pp.1–2. https://www.nhc.gov.cn/zhjcj/c100093/202012/b9c35590fd93459cadc5ae295a2e9279/files/1732842589101_90541.pdf | 历史中国技术要求支持按标签温度单独验证；不提供生产配方、清单因子或通用杀灭率。当前市场合规与具体产品试验须另行核实。 |
| solvay-peroxide-assay-2019 | method_factor | Solvay, Determination of Hydrogen Peroxide Concentration (20% to 70%), 08/19, FN 1167/01, p.1 Scope/Principle. https://www.solvay.com/sites/g/files/srpend616/files/2019-10/H2O2%20Determination%20of%20Hydrogen%20Peroxide%20Concentration%20-20%20to%2070-.pdf | 进料过氧化氢水溶液检测仅在其声明的浓度及干扰范围内适用。酸性高锰酸盐可氧化组分会产生干扰；不得未经验证用于本有机配方基质，也不得用 COD 推算过氧化氢损失。 |
