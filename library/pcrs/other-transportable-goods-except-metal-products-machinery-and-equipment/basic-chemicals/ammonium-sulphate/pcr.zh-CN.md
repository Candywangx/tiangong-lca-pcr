---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-sulphate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 氨与硫酸中和制得的合成晶体硫酸铵

## 1. 范围与适用性

本PCR适用于无水氨与浓硫酸中和、饱和器/蒸发器内结晶、晶体分离、蒸汽加热干燥、筛分及封闭散装储存制得的合成晶体硫酸铵（(NH4)2SO4，CAS 7783-20-2）。`epa-as-ap42` §8.4.2及图8.4-1将该路线与己内酰胺、焦炉联产品回收分别描述。保留外供蒸汽及实际冷却界面；本选定路线不含前景燃料直燃干燥。参考产品为无涂层晶体，而非压实造粒产品或养分混合物。

排除己内酰胺/焦炉/镍/MMA联产品回收、废物或气体洗涤回收氨、废酸回收、石膏转化、硫酸氢铵/过硫酸铵、NPK/ASN混肥、交付溶液、湿晶饼、配制涂层及压实/团聚产品。场址特定扩展须具备相应原始路线证据、逐项交换及独立适用性审查。`yara-as-product`仅证明商品等级多样性和一个供方标签，不证明本制造路线，也不设纯度、养分或水分默认量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-sulphate |
| classification_refs | CPC 3.0:34612；本合成晶体路线建议narrower关系 |
| covered_products | 单物种合成晶体硫酸铵，实测游离水和杂质，无涂层散装交付 |
| excluded_products | 回收联产品；其他铵盐；混合/溶液/涂层/压实产品 |
| representative_product | 厂门验收净散装合成硫酸铵晶体 |
| production_route | 无水NH3 + 浓H2SO4 → 反应/结晶 → 离心分离 → 蒸汽加热干燥 → 筛分/散装操作；母液及捕集盐循环 |
| market_state | 散装无涂层晶体固体，实测残余水分/含量/粒度；不预设商品等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应合成晶体硫酸铵，作为化学品/氮硫肥料中间产品 |
| How much | 1 kg 参考流 |
| How well | 验收的声明等级；实测盐含量/游离水/游离酸/杂质/粒度和养分基准；不推定施用效果等效性 |
| How long or cycle | 一次制造厂门供货；作物周期和下游施肥不在范围内 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址/期间；实际SKU/等级；合成NH3/H2SO4路线；验收晶体净质量；盐含量及湿/干基准；游离水/游离酸/杂质；晶体粒度；无涂层散装状态；供方身份；蒸汽/冷却界面 |

实际数据包须记录全部限定信息。1 kg分母包含验收成品中的实测残余游离水和杂质，不得改用干纯盐质量或氮质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_product称量验收成品净质量，排除运输皮重。P为同一代表期间的验收净kg量。每个清单行均以每1 kg参考流计。 |
| species_basis | ammonia_feed, acid_feed, reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留供货/成品总质量及分别实测组分质量。含量分数声明湿/干基准；水和杂质不属于活性化学物。分子平衡仅用于一致性诊断，不生成收率或配方。 |
| steam_basis | steam, condensate | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留进汽和出凝结水质量。cp_steam另记入口/出口焓和MJ计的Q_delivered。Mass UUID不证明压力或净热量背景基准，必须核实相容供方定义。 |
| electricity_basis | power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留数据库参考属性Net calorific value；计量实际交流电并以3.6将kWh换算为MJ。这是电能单位换算，不是假定燃料热值。 |
| water_mass | process_water, cooling_water, cooling_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 体积记录须采用实际温度/组成下实测水密度并保留可追溯换算，不设通用密度默认值。分别核对液态/气态/载水与上游取水。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| water_discharge_volume | liquid_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留液态排放的m3量及已核实Volume身份。仅在独立水质量账中采用实测排水密度换为kg，不改变清单参考单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂区输入界面交付的无水氨、浓硫酸及实际公用工程/材料 |
| starting_condition_role | 前景界面；仍须纳入上游生产、运输和处理 |
| product_classification_scope | CPC 34612中选定合成晶体子集；分类不定义配方或制造方法 |
| recursive_input_rule | 外购同类晶种有上游供方；母液、湿晶体、回收细晶和内部库存移动作为同一单元内等量实物阶段链接保留 |
| upstream_dataset_requirement | 核实物种/状态/数量/来源/技术及供方质量/能量基准。仅支持身份的UUID不代表完整上游数据集 |
| disclosure | 实际场址、期间、等级、路线、供方界面、回收/废物、排放/介质、库存、排除项及缺失测量 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| b_route | as_production | 纳入收料/汽化、反应/结晶、晶体分离、蒸汽加热干燥、筛分、封闭散装储存、真空/冷却、尾气控制及实际维护/废物处理。即使聚合为一个单元也保留阶段计量。 | epa-as-ap42, eu-lvic-aaf |
| b_recovery | as_production | 内部回流两端质量/组分数量相等。记录库存变化、洒落、未回收盐和实际排污。未分配实物过程图与负荷归属账分别保留。 | epa-as-ap42, eu-lvic-aaf |
| b_receivers | as_production | 本范围内受污染母液/洗涤/冷却排污液及清洗废液送表征明确的外部处理，保留下游处理负荷。它们是废物转移，不是本场址淡水排放。实际直接工艺废水处理/排放须补充有独立证据的完整处理/物种交换。 | eu-cww |
| b_completeness | as_production | 纳入实际开停机/空转/异常负荷及控制后残余排放。历史可忽略排放、封闭循环或已找到UUID均不证明零。披露实际包装、涂层、水处理药剂、过滤器/抹布废物、资本设备处理及运输/处理服务；扩展须有逐项实测行和证据。 | eu-cww, eu-lvic-aaf |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| as_production | 聚合的合成晶体制造 | required | 声明NH3/H2SO4及蒸汽加热干燥路线 | 前景生产 | 1 kg验收净散装晶体成品 |

实物阶段分别计量：原料 → 饱和器/结晶器 → 离心机 → 蒸汽加热干燥器 → 筛分 → 散装交付。母液及捕集盐回到反应/结晶；真空冷凝液、蒸汽/回水及冷却进/回水保留各自相态及供方身份。不规定通用供货量、收率、纯度、涂层、干燥排放因子或蒸汽能耗强度。

### 过程：聚合的合成晶体制造（`as_production`）

#### 输入

##### 产品流

###### 氨，无水，液体 (`ammonia_feed`)

交付无水液氨，需要时在本单元内汽化。计量供货净质量并记录实际NH3含量、载水、汽化能耗和损失；交付氨水不属于本路线。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_inputs记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 硫酸 (`acid_feed`)

本UUID仅用于符合其交付质量分数93–98%定义的实际工业浓硫酸。分别计量供货溶液质量和H2SO4/水分数，不假定98%，也不把活性酸再次列为另一项输入。发烟硫酸、废酸或不相容浓度须另核身份并审查路线。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_inputs记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 硫酸铵 (`external_seed`)

仅在采购晶体硫酸铵用于晶种、开车或再溶解时纳入。记录供方路线、组成和上游负荷。内部细晶及返工是内部链接，不计作本外部投入；采购盐在N/S反应收率账中不计为新合成盐。

- 选定流：硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_inputs记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 交流电 (`power`)

本UUID表示中国用户侧1–35 kV电网平均交流电。链接前核对实际国家、电压和供方损耗边界。分别计量反应循环、离心、真空、干燥风机、筛分、冷却、洗涤和辅助负荷；其他电网或电压需另核身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_energy记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 蒸汽 (`steam`)

外供化工蒸汽是实物Mass交换，并非净交付MJ定义。记录入口质量、压力（表压/绝压）、温度、干度、焓和供方质量参考基准。保留真空系统和干燥阶段计量；如实际使用蒸发加热，应实测，不能由历史图推定。凝结水回送和损失另行保留。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_steam记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_steam`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 水，工艺 (`process_water`)

用于初始配液、洗涤/尾气洗涤补水、清洁及实际场内冷却补水的采购工艺水。分别记录各用途和水质；载水另记组分账，不在采购用水总量中重复计入。内部循环液不属于新供水。

- 选定流：水，工艺 `2f102a77-b596-4289-8a8d-ce7d6e347a2d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_water记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 冷却水 (`cooling_water`)

仅记录跨越本单元界面的外供液态冷却水。分别计量入口及配对回水，并记录温度和组成。场内循环回路属于内部链接，其补水用process_water，实际蒸发损失及排污用相应输出行。不得将循环通过量计作耗水，也不得重复采购同一水量及已完整包含该水量的冷却服务。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_water记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 润滑油 (`lubricant`)

仅记录实际泵、离心机及风机使用的石油基润滑油。核实SKU、基础油、添加剂、污染状态及消耗/更换质量；它不是产品防结块涂层，也不是PAO润滑油。数据库热值描述不提供能耗或配方默认量。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_inputs记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

#### 输出

##### 产品流

###### 硫酸铵 (`reference_product`)

出库/储存交付界面的验收散装晶体硫酸铵，无涂层且未压实造粒。称量时排除运输皮重；保留游离水、盐含量、游离酸、杂质、粒度分布及实际养分分析。验收成品只计一次；中间湿晶体及内部成品转运不是额外外部产品。

- 选定流：硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 回送的清洁蒸汽凝结水 (`condensate`)

仅记录跨供方界面回送的实际蒸汽凝结水。核实相变凝结水身份、纯度、质量、温度和接收方。含铵/酸的工艺蒸气冷凝液须单独表征并安排回用或废物处理，不得称为清洁锅炉回水。不自动给予避免供热抵扣。

- 选定流：回送的清洁蒸汽凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_steam记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_steam`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 冷却水 (`cooling_return`)

仅记录与cooling_water配对、向外部公用工程回送的冷却水。实物数量和温度不因环境负荷归属而改变；蒸发、泄漏、污染及库存变化解释进/回水差额。内部冷却回水不是本外部输出。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_water记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

##### 废物流

###### 硫酸铵结晶母液排放液 (`mother_purge`)

仅记录送往外部处理的实际母液排放。计量液体总质量、水、溶解硫酸铵、游离酸、杂质及接收条件。回用饱和母液留在内部；外送废液不是淡水排放，也不是商品盐。

- 选定流：硫酸铵结晶母液排放液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 硫酸铵干燥尾气洗涤器排放液 (`scrubber_purge`)

仅记录实际废弃的干燥尾气洗涤液；分别表征溶解/悬浮盐、酸和水。洗涤捕集物回用是内部盐/水回流，不得同时计为废物和空气排放。

- 选定流：硫酸铵干燥尾气洗涤器排放液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 冷却塔排污水 (`cooling_blowdown`)

仅记录场内冷却回路向外部处理方送出的实际排污水。测量盐类、实际投加药剂、污染物、水和处置条件。完整数据集必须为实际水处理药剂增加分别核实的原子投入；不预设杀菌剂或阻垢剂配方。

- 选定流：冷却塔排污水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 粉尘 (`rejected_dust`)

仅记录无法回收利用、单独收集的盐粉尘或洒落残余。记录实际盐/杂质/水分组成及接收方；可回用细晶保留在内部。不同污染残余须另列流。处置不获得默认抵扣，也不重复计为外排颗粒物。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 废润滑油 (`waste_oil`)

仅记录送交外部处理的实际使用后石油基润滑油。记录污染、水、净质量及实际接收方/处理方式；如存在污染抹布或过滤器，须另表征其废物流。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 硫酸铵设备清洗废水 (`washdown`)

仅记录单独收集并送外部处理的实际清洗废水。测量含水总质量、溶解盐/游离酸、实际清洗药剂及接收条件。每种实际外购清洗制剂按整份商品独立列为投入，并另记实际载水和组成。组分用于组成平衡；只有实际单独采购并投加的组分才另列采购，不得又将同一组分计作制剂内重复采购。清洗操作不提供通用试剂或默认水量。

- 选定流：硫酸铵设备清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 送处置的拒收硫酸铵晶体 (`rejected_crystals`)

仅记录实际废弃而非内部再溶解/返工的不合格晶体成品。保留含量、水分、污染、质量及接收方；不计入验收成品P，不同时计作回收盐或废粉尘。

- 选定流：送处置的拒收硫酸铵晶体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_waste记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

##### 基本流

###### 氨 (`nh3_air`)

记录收料/汽化/反应、真空放空、干燥及逸散源经治理后向室外空气排出的实际NH3。按同一期间汇总各实测源；报告NH3质量，氨氮量须经核实分子换算后才可使用。不设默认正排放，也不推定零。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_air记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 硫酸 (`acid_air`)

记录收料、操作或反应中实际证明存在的、控制后向室外空气排放的H2SO4酸雾。计量物种特定质量，并防止在盐颗粒物中重复计入；室内职业暴露浓度不是厂界排放。

- 选定流：硫酸 `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_air记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 颗粒物 (PM2.5) (`pm25_air`)

记录干燥、筛分及操作经捕集后仍向室外空气排出的实际粒径不大于2.5微米颗粒物。采用具有代表性的分粒径测量，披露可过滤/可凝结基准。总颗粒物测量仅作为诊断，不另加清单交换。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_air记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 颗粒物 (PM2.5 - PM10) (`pm10_air`)

记录实际向室外排出的粒径大于2.5且不大于10微米颗粒物。只可从相容且同步的累计测量推导；累计PM10不等于本粒径区间，且不得与PM2.5相加。粒径划分缺失属于数据缺口。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_air记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 颗粒物（> PM10） (`pmgt10_air`)

记录实际向室外排出的粒径大于10微米颗粒物，而非累计PM10。三个不重叠区间须与相容总颗粒物核对；所采颗粒不自动视为纯硫酸铵，用于N/S平衡须有组成证据。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_air记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 水蒸气 (`water_vapor`)

记录结晶/真空、干燥及实际场内冷却蒸发后到达室外空气的净工艺水蒸气。排除入口环境湿气和已捕集凝结水；记录冷凝回收及水分平衡。完全由上游公用工程供应的冷却不构成本场址排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_water记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

###### 水 (`liquid_water`)

仅记录向已明确淡水水体排出的无污染非接触冷却水。分别计量液态水量、温度和接收介质，不与回送公用工程混同。本范围内受污染工艺水/排污液送外部处理；直接排放经处理工艺废水须有完整处理/物种清单及路线证据。取水资源流或水蒸气流不能表示本液态排放。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：同一期间实际实物数量除以验收成品净质量P；采用cp_water记录。不设默认量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-as-ap42`, `eu-lvic-aaf`, `eu-cww`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| a_prime | as_production | 声明路线以硫酸铵为主产品。实测专属反应、分离、干燥及控制负荷归属验收产出；同一化学品的粗/细粒等级不虚构为不同联产品物种。优先拆分可计量的等级专属整理，等级混合须披露实际按产量加权的聚合。 | epa-as-ap42 |
| a_physical | as_production | 回收盐、液体回送、废物和排放保留完整实物数量。废物状态须有组成及接收方证据。不自动给予替代抵扣或负废物负荷；凝结水/冷却回水不因被列为产品界面就成为可售联产品。 | epa-as-ap42, eu-cww |
| a_shared | as_production | 共享公用工程在聚合前按实测阶段服务及相同仪表边界归属。记录归属驱动、总量及不确定性；不能按环境分配份额缩减实物量。己内酰胺/焦炉或其他回收产品分配需单独母过程方法，不属于本主产品路线。 | eu-lvic-aaf |

## 8. 前景数据采集、计算与质量规则

各协议保留同一场址、路线、等级、供货状态及完整代表生产期间的未分配原始总量，纳入应归属的开停机、空转、异常、失败、零验收产出、清洗及返工操作。核对原料、在制品、返工料和成品期初期末库存及相应结转负荷；不得以旧库存交付量配当前加工负荷，也不得遗失失败运行负荷。按可追溯生产、退回、再次验收、交付和库存记录确定唯一正验收成品净质量P；内部返工不是新增成品产出。每项经核对的原始交换总量仅应用一次normalize_period。清单数量规则及协议聚合栏声明最终每1 kg参考流基准，不表示再作除法。整个池无正P时，保留总量并论证匹配的更大代表期间，或报告单位结果不可得。本PCR要求未来实测SKU/数量，不提供真实场址数据集。实物数量、组分平衡和环境负荷归属分别保留。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | as_production | reference_product | acceptance_stock_assay | 批次/SKU；成品净质量P；皮重；盐含量湿/干基准；游离水/游离酸；杂质；N/S；粒度；拒收/返工品；可追溯退回/再次验收；期初/期末库存及在制品与结转负荷 | 校准净称量及具有代表性、经基质验证的分析；核对生产、交付及验收库存移动，不重计内部返工。养分标签本身不是盐含量分析。 | kg; mass fraction | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 校准；实验室QA/回收率；验收/库存核对 |
| cp_inputs | as_production | ammonia_feed, acid_feed, external_seed, lubricant | receipt_dosing_stock | row_id；供方/SKU/CAS；状态/路线；总质量；含量；载水；添加剂；收货/退回；库存；批次投料 | 按每项原子材料采用校准收料/投料和库存变动记录。保留供货总质量及组分分数；核实供方/背景质量基准相容。 | kg; mass fraction | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 供方原件；秤/计量器校准；路线/等级证明 |
| cp_energy | as_production | power | electricity_meter | 入口kWh；国家；电压；供方；阶段kWh；共享负荷；空转/开停机；损耗边界 | 读取交流入口和阶段仪表；仅按实测服务驱动归属共享负荷；核对入口总量。将实际kWh换为MJ。 | kWh; MJ | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 仪表校准；供方边界；阶段核对 |
| cp_steam | as_production | steam, condensate | steam_condensate_meter | 进/出口质量；压力表压/绝压；T；干度；焓方法；回收凝结水纯度/接收方；真空/干燥阶段仪表；热损失 | 分别计量进汽及出凝结水。采用经验证的压力-温度-干度焓及实测回水/损失条件；保留实物水账并单独按供方定义核对交付热量。不假定蒸汽压力或锅炉效率。 | kg; pressure; temperature; kJ/kg; MJ | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 流量计校准；焓/供方原件；界面及不确定性 |
| cp_water | as_production | process_water, cooling_water, cooling_return, water_vapor, liquid_water | water_phase_balance | 分用途入口；载水；实际密度/T；内部回路两端；凝结水；成品水分；湿废物；淡水出口；湿度；库存 | 计量液体流量及实际密度；核对载水/游离水、进汽、回水、净水蒸气及湿废物。气相归属排除入口湿气；明确实际接收水体及温度。相态/密度未知仍属于不完整。 | kg; m3; temperature; humidity | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 仪表校准；密度条件；相态闭合及不确定性 |
| cp_waste | as_production | mother_purge, scrubber_purge, cooling_blowdown, rejected_dust, waste_oil, washdown, rejected_crystals | waste_transfer | row_id；来源；总质量；水/干固体；盐/酸/污染物；回收份额；接收方/处理；验收；转移 | 转移界面对每项单独流称量/采样；记录组成、实际接收方及下游处理。区分内部回收盐、废物转移和环境排放；不得将所有废弃物视为可售产品。 | kg; mass fraction | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 称量/采样QA；转移记录；接收验收及供方链接 |
| cp_air | as_production | nh3_air, acid_air, pm25_air, pm10_air, pmgt10_air | outlet_monitoring | 出口/源；气体体积流率F或已积分气体体积V；匹配时段及T/P干湿基准；物种质量浓度；气溶胶粒径；可过滤/可凝结基准；运行时长；旁路/异常；入口空白/湿气 | 以经验证、具有代表性的源采样测量治理后出口气量及分物种/粒径浓度；按相同运行/事件期间积分负荷。历史AP42因子描述配置，但本稿不采用其默认量。避免酸气溶胶与盐颗粒重叠。 | kg; gas volume; concentration; time | 每批/连续仪表；代表性采样和事件 | 同一代表期间 | 声明相容场址/等级/路线 | 每 1 kg 参考流 | 采样/校准；检出限；粒径/物种定义；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 各非参考行将经库存核对的完整匹配池原始数量X_i仅除以验收成品净质量P一次；X_i尚未按每千克归一。逐批核对净交付、验收库存变化、退回/再次验收和实际验收生产，使P仅确认一次，并采用上文匹配的库存/在制品结转负荷。reference_product保持恰好1千克，分子单位不变。完整池P非正时无单位结果。电力换算和排放积分仅为同一次归一化准备原始数量。 各协议保留同一场址、路线、等级、供货状态及完整代表生产期间的未分配原始总量，纳入应归属的开停机、空转、异常、失败、零验收产出、清洗及返工操作。核对原料、在制品、返工料和成品期初期末库存及相应结转负荷；不得以旧库存交付量配当前加工负荷，也不得遗失失败运行负荷。按可追溯生产、退回、再次验收、交付和库存记录确定唯一正验收成品净质量P；内部返工不是新增成品产出。每项经核对的原始交换总量仅应用一次normalize_period。清单数量规则及协议聚合栏声明最终每1 kg参考流基准，不表示再作除法。整个池无正P时，保留总量并论证匹配的更大代表期间，或报告单位结果不可得。本PCR要求未来实测SKU/数量，不提供真实场址数据集。实物数量、组分平衡和环境负荷归属分别保留。 | X_i; P; cp_product | 每1 kg参考流的数量 | eu-lvic-aaf |
| component_ledger | ammonia_feed, acid_feed, external_seed, reference_product | 组分质量 = 实测总质量 × 同基准实测组分分数。干基分析先扣除单独实测游离水。按2NH3 + H2SO4 → (NH4)2SO4核对实际摩尔N/S投入、验收盐、排污、捕集/回收盐及排放。该反应不按化学计量生成水。载水、游离酸、杂质、外购晶种和库存变化解释差额；不得强制理论收率。 | gross mass; assay; wet/dry basis; cp_inputs; cp_product; cp_waste; cp_air | 实物组分/N/S账 | epa-as-ap42, eu-lvic-aaf |
| electricity_conversion | power | 原始Energy_MJ = 实测electricity_kWh × 3.6；先核对并聚合同边界仪表，再应用normalize_period。不得在本换算中除以P后又在normalize_period中相除。 | electricity_kWh; cp_energy | normalize_period前的原始MJ | eu-lvic-aaf |
| steam_interface | steam, condensate | 实物质量清单数量另行保留。交付热量为声明界面实测入口焓流减去出凝结水/其他实物出口焓流及储存变化，再由kJ换为MJ。采用cp_steam实测压力、温度、干度及实际供方定义；披露损失。供热诊断不将kg改成MJ，也不生成避免供热抵扣。 | steam mass/conditions; returns; cp_steam | 质量清单及独立供热诊断 | eu-lvic-aaf |
| air_load | nh3_air, acid_air, pm25_air, pm10_air, pmgt10_air | 按匹配物种质量浓度C_i(t)与气体体积流率F(t)的时间积分得到原始物种质量，并明确换为kg。若采用已积分时段体积V_j，则汇总相容流量加权浓度C_i,j乘V_j，不得再将V_j乘时间。只有论证常量或相容时段平均基准时，才可用浓度乘体积流率乘时长。保留温度、压力、干湿状态、空白和事件覆盖，再仅应用一次normalize_period。粒径区间为PM≤2.5、PM2.5–10和PM>10，采用同期相容测量基准；不得再次叠加累计PM10或总颗粒物。 | outlet concentration; defined gas rate or integrated volume; matched interval; cp_air | normalize_period前的原始kg | epa-as-ap42, eu-cww |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 按物种/CAS、状态、硬路线和地理核对每个采用UUID；未决行保留具体名称，不虚构UUID。物理身份与供方/参考数量相容性分开。 | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_balance | all inventory rows | 核对同期间总质量、水相态及N/S平衡，纳入库存、实际含量、载水、排污、排放及内部回路等量。不确定性须保留，诊断而非强行闭合。 | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_evidence | all inventory rows | AP42为美国历史过程/配置证据，LVIC-AAF提供共性综合厂区规则，CWW提供流表征/监测规则。不将单厂或供方标签变为通用配方、收率、范围或排放因子。 | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |
| dq_complete | all inventory rows | 缺失UUID、供方基准、测量及代表性采样须明确，阻止完整数据包声明。零、未检出、不适用和未测量分别报告；下游使用前逐项补齐实际物质。 | cp_product; cp_inputs; cp_energy; cp_steam; cp_water; cp_waste; cp_air; eu-lvic-aaf; eu-cww |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| v_reference | as_production | 恰有一个外部reference_product输出，为1 kg验收净散装晶体；拒绝用含容器总重、养分量或干纯盐量替换分母。须有全部限定信息及选定合成路线。 | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_inventory | as_production | 每行须为一个原子交换，属性/单位相容且同期间按每1 kg聚合。实际交换及服务供方须齐全；未决身份/基准/测量不能称为完整链接数据集。 | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_physical | as_production | 在环境负荷归属前检查内部链接等量、库存核对及组分/N/S/水闭合和不确定性。实物输出及回收数量不随归属份额改变。 | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_emissions | as_production | 须核实控制后实际物种/介质及不重叠粒径数量。酸雾与盐颗粒须分离或明确核对重叠。不为本路线推定己内酰胺VOC或燃料锅炉排放；实际扩展须有来源证据和独立物种行。 | epa-as-ap42, eu-lvic-aaf, eu-cww |
| v_provider | as_production | 核实氨状态、酸浓度、电力国家/电压、蒸汽压力/干度/焓/供方质量基准以及凝结水/冷却接收方定义。有效Mass或MJ属性不足以证明背景相容性。 | epa-as-ap42, eu-lvic-aaf, eu-cww |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 仅在实际前景数据生产及另行审查后作为secondary_dataset或background_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供方相容且质量披露的声明合成散装晶体供货 |
| excluded_use | 回收/副产制造；液体/混合/涂层/压实产品；田间施用影响；存在未决缺口的完整数据集声明 |
| required_metadata | 场址/时间/路线/等级；参考/成品质量基准；含量/水分；供方；边界、库存、回流、处理及归属决定 |
| required_quality_disclosure | 计量/采样不确定性；供方及身份缺口；覆盖/排除；证据适用性；科学审查状态 |
| update_trigger | 路线/等级/含量、供方/基准、公用工程界面、治理、处理或重要证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-as-ap42 | official_guidance | US EPA AP-42 §8.4 Ammonium Sulfate, 7/93 (reformatted 1/95), pp.8.4-1–8.4-3, Fig.8.4-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.4_ammonium_sulfate.pdf; 读取于2026-10-13 | 合成路线、晶体分离、蒸汽加热干燥、盐回收及颗粒物控制；不采用历史因子/水分/涂层数量 |
| eu-lvic-aaf | official_guidance | European Commission LVIC-AAF BREF, August 2007, §§1.3, 1.4.3, 1.5.1, printed pp.12–13,16,32–33; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1; 读取于2026-10-13 | 仅共性综合厂区能量/质量/蒸汽/水平衡及供热界面；不声称硫酸铵特定制造BAT或数量默认值 |
| eu-cww | official_guidance | European Commission CWW BREF, 2016, Chapter 4 BAT2–4 and water/treatment hierarchy, printed pp.543–548; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf; 读取于2026-10-13 | 化工流表征、监测及处理界面；保留实际基质和接收条件 |
| un-cpc3-as | official_guidance | UNSD CPC Version 3.0, 30 June 2025, subclass 34612; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/34612; 读取于2026-10-13 | 仅分类身份/层级；所选合成路线较窄 |
| yara-as-product | handbook | Yara United States Ammonium Sulfate product page, APF producer identified; https://www.yara.us/crop-nutrition/fertilizer-products/other-fertilizers/ammonium-sulfate/; 读取于2026-10-13 | 仅商品等级和一个供方养分标签；不证明合成路线，也不作组成默认量 |
