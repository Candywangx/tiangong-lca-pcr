---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.superphosphate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 外购硫酸酸解熟化未造粒过磷酸钙

## 1. 范围与适用性

本方法覆盖外购原生接触法硫酸溶液与磷矿石酸解、熟化、破碎后散装交付的未造粒、未氨化、未掺混SSP。前景为电力驱动的磨粉、输送、酸稀释、反应/熟化和污染治理；无外购蒸汽、燃料烘干、燃烧装卸或商品六氟硅酸回收。确认这些现场条件后方可采用本边界。SSP是含磷酸一钙、硫酸钙、残余矿物及水分的混合物，不是高纯单一化合物。BREF 10.2支持熟化后直接销售；EPA 8.5.1支持磨粉—酸解—熟化及排放源。生产者原件支持外购酸和粉状支线，其袋装步骤不作为本稿散装证据。

本稿不涵盖TSP、硫酸/磷酸混合酸浓缩过磷酸钙、部分酸解磷矿PAPR、氨化/微量元素强化/含氮配方、造粒、酸厂一体化生产、骨粉路线或用肥阶段。工艺与等级须真实采集，历史收率、浓度、反应时间、温度和单厂消耗/排放均不作默认量。`ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-ap42-tsp-1993`, `agrophos-ssp-process`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.superphosphate |
| classification_refs | CPC 3.0 34621 Superphosphate; narrower |
| covered_products | 熟化散装未造粒SSP |
| excluded_products | TSP、混合酸浓缩产品、PAPR、颗粒/氨化/掺混/强化产品、高纯磷酸一钙 |
| representative_product | 具实测水分和等级的SSP粉料 |
| production_route | 外购硫酸稀释、磷矿电磨、酸解、熟化、破碎与散装交付 |
| market_state | 含实际水分的固态粉状混合物，不以P₂O₅营养量作为质量参考 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂交付验收合格的熟化SSP粉料供磷肥使用；不声称田间效果等同 |
| How much | 1 kg 验收净SSP混合物 |
| How well | 声明水分、总/有效/水溶性P₂O₅、游离酸、硫/钙、粒度、杂质与适用等级的验收证据 |
| How long or cycle | 一个声明时期/生产批次的工厂交付；无默认使用寿命或施肥次数 |
| reference_flow_link | ssp |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 过磷酸钙 `8c9749b5-e19f-4480-a575-3058aff804b3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg |
| 参考单位 | kg |
| 必需限定信息 | SKU、工厂/时期、SSP而非TSP、未造粒/未氨化/未掺混、硫酸/磷矿供应方、散装交付、水分、总/有效/水溶性P₂O₅及其化验基准、游离酸、硫/钙、粒度、污染物/等级验收、前景起点、电压/电表边界和无燃烧设备证据 |

以上限定信息须在数据包元数据、过程说明或参考流备注声明；缺失使数据包参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference-mass | ssp | Mass | kg | 1 kg是交付湿基SSP净质量，排除包装；水分、干基等级和湿基等级须配对，不用纯磷酸盐或营养量代替。采用cp_product。 |
| solution-basis | acid | Mass | kg | 按到货93–98%溶液湿质量计投入；实际H₂SO₄质量=溶液质量×实测质量分数；载水已含在溶液中，现场新增稀释水另计。 |
| nutrient-basis | ssp | Mass | kg | 有效P₂O₅质量=湿产品质量×同一湿基实测有效P₂O₅质量分数；不混同总磷、有效磷和水溶性磷，不把商业标示/原件历史等级用于默认换算。 |
| electricity-basis | electricity | Net calorific value | MJ | 电表kWh按1 kWh=3.6 MJ换算，核实供方参考电能、电压和损耗边界；此单位换算不证明供方背景兼容。 |
| water-basis | water | Volume | m3 | 以实测新供水体积计量；质量水衡算使用实测/可追溯密度和温度，不用数据库次级质量系数作密度。 |
| same-denominator | all inventory rows | reference flow | 1 kg | 所有交换合计除以同期验收净SSP千克数；熟化在制品、返料、库存和废品单独对账。各阶段均使用同一分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入厂已选矿磷矿石及外购原生接触法93–98%硫酸溶液；新自来水和1–35 kV电力供应，批次/供应方可追溯 |
| starting_condition_role | foreground production |
| product_classification_scope | CPC 34621的熟化未造粒散装SSP子集 |
| recursive_input_rule | 同类外购SSP不作为磷矿原料；若另有同类成品投入须披露并重新检查适用性；内部返料不再次导入背景生产负荷 |
| upstream_dataset_requirement | 磷矿开采/选矿、硫酸制造、电力、自来水、原料运输及外送废物治理须有匹配供应方/组成/数量基准的背景数据；缺失不得作为零负荷 |
| disclosure | 声明前景起点、上游补全、批次库存、供货溶液和湿基成品、废物流去向及排放覆盖；方法不是已完成数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| include-stages | ssp_production | 纳入接收/磨粉、酸稀释、酸解、熟化、破碎、散装装卸、除尘/洗涤和冲洗；各阶段独立计量后聚合为一个前景单元，内部SSP转移不作为第二个参考产品输出。 | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| retain-sulfate | ssp_production | SSP保留的硫酸钙属于成品混合物；不能移植湿法磷酸过滤流程生成虚构石膏联产品。 | ec-lvic-aaf-2007 |
| scope-conditions | ssp_production | 确认无燃烧驱动设备、供汽/燃料干燥、袋装、造粒、氨化、外售洗涤酸及直接液态环境排放。出现任一条件须扩展经审查的独立流和过程规则，不得把缺失项设零继续沿用本稿。 | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| emission-survey | ssp_production | 调查治理后、熟化建筑及无组织排放。检测矿石引入金属/放射性/有机物及清洗剂；实际存在而未列出的每个物种/助剂须独立增行、核验身份和量，不能仅凭本表声称清单完整。雨污排水也需核实。 | epa-ap42-ssp-1993; ec-lvic-aaf-2007 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ssp_production | 熟化未造粒SSP生产 | required | 限定路线适用时 | foreground production | 1 kg accepted SSP |

磨粉—酸稀释/混合—熟化槽—库存熟化—破碎—验收/散装交付；电能/物料/治理保留阶段表。实物物料、水、P、F、C衡算与环境负荷账分别保存；内部返粉/循环液两端数量相等，仅跨厂界交换进入聚合清单。

### 过程：熟化未造粒SSP生产 (`ssp_production`)

#### 输入

##### 产品流

###### rock (`rock`)

电磨用入厂磷矿石；采集到货湿质量、水分、P₂O₅化验、碳酸盐碳、有机碳、F、Fe、Al、Mg和污染物。声明选矿与磨粉粒度；不把矿石当作纯磷灰石。

- 选定流: 磷矿石 `f71b42aa-e220-4371-8fa4-9aa8946a6262`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_feed 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### acid (`acid`)

厂内实测稀释前到货的93–98%硫酸溶液。采集实际浓度、原生接触法酸供应方、杂质和到货质量。本行含载水，不是纯H₂SO₄的千克数。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_feed 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### electricity (`electricity`)

外购中国（CN）电网平均1–35 kV交流电；选定原生locationOfSupply为CN，其他地理须另行核实相容流及供方。计量用于磨粉、输送、破碎、装卸、泵和废气治理。采集电表边界、供方/电网时期和变压损耗。原生属性为净热值；以实测电能MJ使用并披露该命名约定，不按燃料热值解释。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### water (`water`)

外购处理后自来水，用于酸稀释、洗涤和清洗。本选定UUID限定香港（HK）水处理厂生产/供水，仅用于实际相容供应；其他地理或处理须另行核实流及供方。仅计新增供水；内部循环水不是另一次投入。原生参考属性为体积m3；不把数据库筛查质量系数当作场址密度。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` ; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则: 采用 cp_water 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

#### 输出

##### 产品流

###### ssp (`ssp`)

散装交付的一份验收熟化未造粒SSP混合物，含实际水分和保留的硫酸钙，排除包装及不合格品。等级须化验；身份记录的0-20-0-11S描述不是默认化验值。

- 选定流: 过磷酸钙 `8c9749b5-e19f-4480-a575-3058aff804b3`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_product`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `agrophos-ssp-process`

##### 废物流

###### scrubber_purge (`scrubber_purge`)

外送处理的含氟/磷SSP洗涤器排污液；须记录湿溶液质量、酸度、溶解/悬浮固体和接收方验收条件。进入同一罐的冲洗液仅计一次。内部回用不属于本项外送交换。

- 选定流: 含氟/磷SSP洗涤器排污液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_waste 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### scrubber_sludge (`scrubber_sludge`)

仅在确有分离外送时记录含硅/磷洗涤沉渣；测定湿质量、干固体、氟、金属和验收条件。不假定为纯氟化钙或生物污泥。无独立固体分离时凭证记录为零。

- 选定流: 含硅/磷SSP洗涤沉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_waste 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### dust_waste (`dust_waste`)

仅计实际外弃、不返回熟化系统的收集磷酸盐粉尘。明确矿石/成品粉尘和污染状态；称量送接收方的质量并记录验收。回用粉尘保留为内部实物流回路，不计为废物或空气排放。

- 选定流: 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_waste 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

##### 基本流

###### hf (`hf`)

治理后及场址逸散的氟化氢排入室外空气，子介质未特指。采用经验证的物种分辨采样计量分子HF千克数；仅有总氟不能确定该数量。

- 选定流: 氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### sif4 (`sif4`)

治理/熟化排出的四氟化硅进入室外空气，子介质未特指。核对水解及实际采样物种；不把洗涤液中的六氟硅酸盐称为空气SiF₄，不重复计量含氟颗粒质量。

- 选定流: 四氟化硅 `fe0acd60-3ddc-11dd-a706-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### pm_fine (`pm_fine`)

来自卸矿/磨粉、熟化槽、熟化、破碎和交付的排出空气动力学PM2.5；采集治理后及逸散排放，室外空气未特指。不把袋滤收集粉尘当作外排PM。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### pm_mid (`pm_mid`)

排入室外空气未特指的空气动力学粒径大于2.5且不超过10微米颗粒。仅用配对兼容的PM10及PM2.5测量差值；披露不确定性并拒绝负差值。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### pm_coarse (`pm_coarse`)

排入室外空气未特指的空气动力学粒径大于10微米颗粒。要求兼容的总可过滤颗粒物和PM10覆盖；不假定比例，不把总PM、PM10、PM2.5嵌套相加。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`, `epa-method201a-2020`

###### co2 (`co2`)

酸解实际产生时计量排入室外空气未特指的矿物/化石源CO₂；采集已反应碳酸盐碳和排出CO₂，核对成品/排污液/库存保留碳。电力背景CO₂不再作为前景排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_carbon 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carbon`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### co2_biogenic (`co2_biogenic`)

仅在碳源证据与氧化测量成立时计量生物源CO₂。即使另一个温室气体报告口径省略，LCI仍保留。矿石有机碳来源未知时不可假定为生物源。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_carbon 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carbon`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### methanethiol (`methanethiol`)

仅在物种分析检出CAS 74-93-1时计量排入室外空气未特指的甲硫醇。BREF指出硫醇异味可能性，并未证明普遍排出甲硫醇；臭气评分或总VOC不能填本行。调查检出其他化合物时独立增行。

- 选定流: 甲硫醇 `fe0acd60-3ddc-11dd-9e59-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_air 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`

###### 水蒸气 (`water_vapour`)

仅在酸解、熟化或湿法尾气治理产生、并经实际捕集/冷凝后仍有工艺可归属水蒸气进入室外空气未特指子介质时计量。按匹配气量和温压基准核对出口气相水与入口载气水分。厂内蒸发后已回收的水不是本外部交换。回收冷凝水、外送排污液、成品游离/结构水及夹带液滴/气溶胶水分分别保留；不得随颗粒物质量重复计同一水量。“蒸发”一词不证明正排放量；零值须有实际不存在或有依据的净水量核对，缺失数据保持未决。采用cp_water及共同完整期间归一规则。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用 cp_water 采集的交换量除以同期验收净SSP千克数，按每 1 kg 参考流记录；不提供默认数量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `ec-lvic-aaf-2007`, `epa-ap42-ssp-1993`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| separate-recycle | ssp_production | 内部返粉/返液在实物衡算保留、不作联产品，不重复上游負荷；外弃残渣计实际治理负荷，不自动给予替代信用。 | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| single-mixture | ssp | 参考产品为整个SSP混合物，硫酸钙、磷酸一钙和水分不是独立联产品；本范围无其他销售产品，不作营养组分分配。 | ec-lvic-aaf-2007 |
| shared-utilities | ssp_production | 共用电、水、治理设备优先子计量/批次隔离，再用记录的因果驱动量分摊；披露驱动量、共享范围及不确定性。不使用销售额作为默认分摊，不按负荷份额缩减实物成品量。 | agrophos-ssp-process; ec-lvic-aaf-2007 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | ssp_production | ssp | 称重/验收 | 批次、SKU、净交付量、退回/再次验收、期初期末在制品和成品库存、生产历史及库存结转负荷、废品/返料、水分、P₂O₅各形态/基准、游离酸、S/Ca、粒度、杂质/等级 | 校准秤和进出库对账；实验室配对采样与实际等级验收 | kg | 每批/交付 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_feed | ssp_production | rock; acid | 供应/投料 | 供应方、批次、接收/投料量、库存、酸浓度和杂质、矿水分/成分/碳源/粒度、稀释水 | 校准称量/质量流量计、入厂化验及库存对账；体积供货需实测密度与温度 | kg | 每批/投料 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_energy | ssp_production | electricity | 子计量 | kWh、电压、供方/电网时期、表边界、各阶段、损耗/共享驱动量、异常运行 | 阶段子电表和供电记录；核对变压器/背景损耗边界 | MJ | 连续/每批 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_water | ssp_production | water; water_vapour | 水表/循环 | 新水m3、用途、温度/密度、酸载水、库存、循环液、排污、入口/出口气体水分及匹配气量/流率、温压和湿干基、实际冷凝/捕集记录、单独气相H2O千克数、蒸发/成品水、游离水与结构水及试验条件、独立实测反应/相态转化及水生成/消耗 | 按m3计量新增液体供水并分用途对账；循环量另存，不叠加到取水。对water_vapour，采用有效的出口气体水分/气量配对测量及入口载气水分，确定实际回收后工艺可归属气相H2O千克数。液体冷凝/排污、夹带液滴、成品游离/结构水、具有独立证据的反应水及库存分开。已积分气体体积仅使用一次，或对含水浓度乘体积流率随时间积分。不得由液体供水体积或未解释平衡残差推定蒸发；核对不确定性，缺失测量保持发现 | m3; kg | 连续/每批 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_waste | ssp_production | scrubber_purge; scrubber_sludge; dust_waste | 外送记录/化验 | 湿质量、固含、F/P、酸度、金属/污染状态、内部回用、库存、接收方/治理路线 | 称量外送与联单核对；按接收条件采样化验，不按内部产生量计外排 | kg | 每批外送 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_air | ssp_production | hf; sif4; pm_fine; pm_mid; pm_coarse; methanethiol | 排放测试/调查 | 物种/介质、总氟与分子基准、粒径、浓度、干湿气量、T/P、含水、运行时长、治理/旁路、逸散、检出限/不确定性 | 各源治理后实测浓度与匹配气量/时长积分；逸散独立测定，物种/粒径方法验证，饱和湿气另选适用方法 | kg | 代表工况测试及全年运行对账 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |
| cp_carbon | ssp_production | co2; co2_biogenic | 碳衡算/排气 | 矿/酸碳、碳酸盐/有机碳、来源分配、成品/废物/库存保留碳、CO₂实测和气量 | 化验与气量/物种实测交叉核对；来源未知保留未决，不用来源标签替代测量 | kg | 每批化验/代表测试 | 同一声明时期，含启停/异常和熟化跨期 | 声明场址的本路线，库存和共享设施范围明确 | 每 1 kg 参考流 | 校准、化验、验收、检出限、对账与不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period-normalization | all inventory rows | 先汇总同一路线、交付湿基等级及完整声明时期的原始交换数量，包括可归属的失败/零产出批次、启停、清洗及返工，再仅除一次正值验收净SSP千克数；ssp输出=1 kg。不得平均成功批次单位比值或再次除已归一化每千克值。以生产历史及结转负荷核对退回/再次验收、熟化在制品和成品库存，使验收量仅确认一次且归属分子覆盖同一产出；负荷调整不得删除原始实物交换。内部返料不是新增验收产出。不得将全厂投入除以部分出货。验收产出为零时保留原始总量并披露无单位结果，不得相除或删除负荷。 | cp_product; cp_feed; cp_energy; cp_water; cp_waste; cp_air; cp_carbon | 每 1 kg 参考流交换量 | ec-lvic-aaf-2007; agrophos-ssp-process |
| composition-reconciliation | rock; acid; ssp; scrubber_purge; scrubber_sludge | 以实测组成核对总质量及实际元素守恒，包括P/F/C和相关Ca/S/H/O：输入加期初库存等于输出加期末库存及披露的不确定性/残差。磷酸一钙/硫酸钙形成、实际酸/碳酸盐/氟化物反应与水/干组分物种账分开。水输入加具有独立证据的反应生成等于输出加库存变化及实际消耗；结构水与游离水分开，不能将水合/脱水当作新水分子生成。以独立反应物/产物/相态测量及不确定性验证实际配平反应式；不移植理想矿石配方，不用残差拟合反应水或干物质，也不用COD当碳质量。湿质量乘(1−实测水分质量分数)仅为方法定义的干质量：须说明试验去除哪些游离/结构水或其他挥发物，不能自动当作无水磷酸盐或无水硫酸钙相的质量。P₂O₅形态和基准分别标识。反应核对不提供矿物组成、酸用量、收率或排放。 | cp_product; cp_feed; cp_water; cp_waste; cp_carbon | 元素/水衡算及组成说明 | ec-lvic-aaf-2007 |
| fluorine-accounting | hf; sif4 | 若已物种分辨的F质量基准需换算分子质量，采用化验物种及分子量/该分子F原子总质量；HF与SiF₄分别算。总F未分物种不可任意拆分，也不在颗粒含氟质量上再加同一F。 | cp_air; cp_waste | 物种分子排放量及氟衡算 | epa-ap42-ssp-1993; ec-lvic-aaf-2007 |
| particle-partition | pm_fine; pm_mid; pm_coarse | 同条件配对测试：中粒径=PM10−PM2.5；粗粒径=总可过滤PM−PM10。保留误差，拒绝负差值。凝结性PM另行测定/报告，核查与物种及粒径表重复性；湿气液滴条件不可强用201A。 | cp_air | 不重叠空气颗粒物分数及覆盖说明 | epa-method201a-2020; epa-ap42-ssp-1993 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity-and-provider | all inventory rows | UUID身份与供应方数量/背景兼容分开证明；未决UUID不使用相邻物种替代。 | 供方规格、批次、组成、量纲和背景元数据 |
| coverage-and-time | ssp_production | 现场证明工艺范围及所有跨厂界交换；声明采样代表性、全年/批次时间覆盖、缺失/低于检出限和不确定性。 | 工艺图、仪表台账、检验/治理记录和逐源调查 |
| no-defaults | all inventory rows | 不移植1993因子、2007单厂表/BAT浓度或供方商业等级为正排放/配方/能耗默认值；site_specific是未来采集要求。 | 实际采集和方法适用性说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reference-unique | ssp | 恰好一个ssp参考输出，1 kg湿基验收净质量；内部阶段转移不是第二参考输出，双语、清单、采集与换算分母一致。 | agrophos-ssp-process; ec-lvic-aaf-2007 |
| scope-and-background | ssp_production | 核实所有范围条件、上游补全和供方基准；缺失或不兼容的背景、未决废物身份、未经证明的零排放不允许声称完整数据集。 | ec-lvic-aaf-2007; epa-ap42-ssp-1993 |
| balances | ssp_production | 分别复核实物质量/水/P/F/C与环境负荷账；异常误差调查，内部两端同量，成品含硫酸钙不外列石膏联产品；无虚构默认反应收率。 | ec-lvic-aaf-2007 |
| emission-completeness | ssp_production | 核实HF/SiF₄分子基准、PM非重叠粒径/凝结性覆盖及全部实际物种；总氟/总VOC/臭气不冒充特定物种，生物CO₂不从LCI删除；未测或方法不适用保持未决。 | epa-ap42-ssp-1993; epa-method201a-2020; ec-lvic-aaf-2007 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经完整现场采集与审核后可形成生产数据集；本稿仅方法 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同粉状SSP工艺/供货状态的上游建模，披露实际等级和湿基 |
| excluded_use | TSP/颗粒/混合酸/PAPR/强化肥、纯磷酸一钙、田间营养等效、未补全上游的通用完整背景 |
| required_metadata | 全部参考限定信息、时期/供应方、工艺图、库存/组成、单位、上游/废物链接与排放介质 |
| required_quality_disclosure | 采集覆盖、检出限、基准兼容、未决身份/排放、误差及科学审核状态 |
| update_trigger | 原料/酸来源或浓度/等级/粒度、工艺/交付/治理、能源、排放/背景改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ec-lvic-aaf-2007 | official_guidance | European Commission, LVIC-AAF BREF, August 2007, chapter 10, especially 10.1, 10.2, Figure 10.1 and 10.4.1–10.4.3; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf ; retrieved 2026-10-14 | 路线/SSP混合物、熟化直接销售、粉尘/氟治理；历史单厂量、BAT浓度/效率、等级和反应时间不作为默认数值 |
| epa-ap42-ssp-1993 | official_guidance | US EPA AP-42 section 8.5.1 Normal Superphosphates, July 1993, reformatted January 1995, pp. 8.5.1-1–4; https://www.epa.gov/sites/default/files/2020-09/documents/8.5.1_normal_superphosphates.pdf ; retrieved 2026-10-14 | 酸解/熟化及逐源氟/颗粒排放；E评级历史因子不采用，金属/有机物缺因子不表示零排放 |
| epa-ap42-tsp-1993 | official_guidance | US EPA AP-42 section 8.5.2 Triple Superphosphates, July 1993, reformatted January 1995, p. 8.5.2-1; https://www.epa.gov/sites/default/files/2020-09/documents/8.5.2_triple_superphosphates.pdf ; retrieved 2026-10-14 | TSP磷酸路线的反证/排除，不移植TSP投料或收率 |
| agrophos-ssp-process | literature | Agro Phos India Limited, Manufacturing Process, section 1 Single Super Phosphate (SSP); https://www.agrophos.com/manufacturing-process/ ; retrieved 2026-10-14 | 生产者外购酸、粉状/颗粒支线和化验验收；单厂袋装/温度/流程细节不作通用默认，本稿不采用袋装支线 |
| epa-method201a-2020 | method_factor | US EPA Method 201A, October 7 2020, sections 1.1–1.6; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf ; retrieved 2026-10-14 | 固定源可过滤PM2.5/PM10及差值；不可直接用于饱和含液滴气流；凝结性PM须另有适用测试与重复性检查，不能推断默认粗颗粒比例 |
