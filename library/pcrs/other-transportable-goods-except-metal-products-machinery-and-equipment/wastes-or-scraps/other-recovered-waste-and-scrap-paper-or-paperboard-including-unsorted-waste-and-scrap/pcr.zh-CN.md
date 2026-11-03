---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-recovered-waste-and-scrap-paper-or-paperboard-including-unsorted-waste-and-scrap
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 供再制浆接收方使用的混合回收纸及纸板

## 1. 范围与适用性

本PCR覆盖一份真实旧纸/纸板混合供货批次，经过收集、去除禁入物或非纸异物、干式搬运及实际压实/打包后，纸种仍保持混合。终点为明确再制浆接收方在进入碎浆机前首次无条件质量放行的净纸料。可由市政或私人收集，但回收纸必须构成具有规格的材料供货；仅收集混合剩余垃圾或提供废物处理服务不满足该产品功能。JRC报告中实际混合纸出口与瓦楞纸、图文纸出口不同；Smurfit提供独立混合包装纸供货实例。这些来源形成透明的工艺综合，不假称来自同一当代工厂、SKU、订单或配方。

新纸；包括脱墨浆在内的纸浆；再生纸成品；纺织纤维；医疗或危险废物；从混合剩余垃圾提取的纸；可分开交易的单独未漂白牛皮纸/瓦楞纸等级（39241）、主要由漂白化学浆制成且未在浆内染色的纸等级（39242）、或主要机械浆纸等级（39243）。真实预混批次含有这些成分，不构成三次独立采购。分选出的纯等级另按适用方法记录出口，不作为本参考产品。

代表路线采用机械干式去杂与铁丝捆包，不规定纸种比例、包捆密度、水分、产率或公用工程用量。加热、洗纸、化学去污、粉碎为新产品或制浆需要增加路线证据和方法。清扫水仅在真实使用时计入，不构成洗纸。每种实际新增外购制剂、燃料、包装组件、废物和排放物种均须新增独立原子交换；缺记录不等于零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-recovered-waste-and-scrap-paper-or-paperboard-including-unsorted-waste-and-scrap |
| classification_refs | CPC 3.0:39249；拟议的较窄混合纸供货范围；分类接受另行治理 |
| covered_products | 真实未制浆旧纸/纸板混合供货批次；去异物后纸种仍混合 |
| excluded_products | 新纸；包括脱墨浆在内的纸浆；再生纸成品；纺织纤维；医疗或危险废物；从混合剩余垃圾提取的纸；可分开交易的单独未漂白牛皮纸/瓦楞纸等级（39241）、主要由漂白化学浆制成且未在浆内染色的纸等级（39242）、或主要机械浆纸等级（39243）。真实预混批次含有这些成分，不构成三次独立采购。分选出的纯等级另按适用方法记录出口，不作为本参考产品。 |
| representative_product | 由明确再制浆接收方验收作为原料的一批称重混合废纸包 |
| production_route | 原持有者交接→收集/运输→接收和负分选去杂→干式压实/打包→实际运至接收方及制浆前无条件放行 |
| market_state | 接收方门口的混合纸料Product供货；法律废物状态另行披露 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供接收方针对既定再制浆用途验收的混合回收纸原料 |
| How much | 1 kg按放行实测水分计的净混合纸料；排除捆扎丝和运输包装 |
| How well | 满足明确接收合同及实测组成/杂质/水分规格；无通用等级或数值目标 |
| How long or cycle | 一个明确供货/放行批群；重复检验和交付不产生新产量 |
| reference_flow_link | mixed_paper_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 废纸 `d1008171-2d06-4e14-b107-7e510875203f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 批次与原持有者; 源纸历史及继承负荷向量; 实际纸种组成和水分基准; 混合状态和单等级排除检验; 收集与运输各路段; 异物身份及去向; 接收方与验收规格; 首次无条件质量放行时间及Q; 实物毛质量V和包装皮重; 逐交换向量的期初期末在制品; 按原批群记录的期初期末成品; 失败和零产出期间; 关联原放行的返工与退回; 真实公用工程供给和供方边界; 铁丝组成及包装台账; 归因分配/价值门和剩余份额; 原生UUID属性/单位相容性; 不确定性及未解决行 |

所有限定信息须写入数据集元数据或等效过程/参考流备注。该Product身份是ELCD重建的通用废纸材料，不是本供方或等级的证书。采用其质量参考；原生辅助净/总热值因子14和16.4750000852581仅保留为身份背景，不作为密度、配方、水分、能源投入或实测热值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用一个净混合纸质量基准。Q为首次无条件接收放行的唯一批次之和，排除铁丝/包装及重复复检；称量实际含水质量，另报绝干纸固形物。商业水分扣重不得静默替代物理质量。 |
| numerator_units | all inventory rows | row-specific | row-specific | 采集未相除原始总量。kWh乘3.6转换MJ；吨公里乘1000转换kg*km。液压油使用Volume/m3；L乘0.001转换m3，仅在物理质量账需要时称量或独立测该油在指定温度下的密度。累计体积不得再乘时间，只有真实速率才积分。 |
| no_invented_conversion | all inventory rows | measured physical basis | declared | 不得假设每包千克数或默认水/油密度。件数换算要求同配置实测净质量。整份供货混料只跨界一次，组成子账不得叠加；真实厂内配制逐项记录外购原料及损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原持有者交接的真实源纸批次，识别其来源特定的既往生产/回收负荷；不因名称而无负荷 |
| starting_condition_role | 明确前景观察边界；仍建模并披露上游历史 |
| product_classification_scope | 保持混合的纸料，为CPC3 39249拟议子集；不声称覆盖所有其他废纸 |
| recursive_input_rule | 外购预混纸只记录一次并采用一个供方/负荷向量；追溯上游准备和源纸历史，不能重复计入同一收集/打包段 |
| upstream_dataset_requirement | 按真实交接状态提供来源特定纸生产和既往回收清单；公用工程/材料/运输和废物处理明确供方边界；不编回收率或避免负荷信用 |
| disclosure | 场址期间、源纸分区、价值/状态转换、运输所有权、放行/在制品/成品门、真实排放和处理去向；源纸历史缺失时不能形成完整数据集 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_full_route | all foreground processes | 包括原持有者交接、全部收集和运至接收方的运输、卸料、进料检查、实际危险/非纸侵入物去除、输送、干式压实、铁丝捆扎、除尘、接收方卸料和制浆前最终无条件放行。疑似危险批次交真实受控处理方；本PCR不提供危废处理方法。 | jrc-paper-bref-2015; cepi-quality-control; smurfit-mixed-packaging |
| boundary_operations | recovery and cohort services | 保留全部启停、失败批次、零产出、闲置、清扫、返工、维护、损失和期初期末在制品。放行后至所声明碎浆前交接期间实际仓储/包装/搬运按原放行批群Qc归属；H为服务活动，绝非生产分母。不虚构蒸汽或锅炉。 | jrc-paper-bref-2015; ilcd-attributional-2010 |
| boundary_provider | all exchanges | 每一外包运输或处理段只选择一次明确供方边界，不再将其燃料/排放重复作为自营运行。自营燃料搬运分别记录柴油和物种交换。准备止于制浆/脱墨/造纸之前；不对这些产品给予替代信用。 | jrc-paper-bref-2015; ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | 源头交接至接收方放行 | required | 真实分开收集的混合纸料供货；不制浆 | 完整路线观察，按阶段/批次建内部账 | 首次放行唯一净质量Q |
| cohort_service | 放行后批群服务至碎浆前交接 | conditional | 首次放行后真实仓储或搬运 | 服务增量归原批群 | 原放行批群Qc；H仅为服务暴露量 |

每卡是一个真实边界交换。真实预混进料与整份混合出口分别是一份实体供货，不是未来选择集合。具有多个来源的废物出口只计一次，来源分区不叠加。整份采购批次内的化学成分、源纸组分和水分分析不构成额外采购。条件行须有存在/不存在记录；未列但实际存在的交换必须新增，不得藏入“其他”池。

### 过程：源头交接至接收方放行 (`recovery`)

#### 输入

##### 产品流

###### 前序已准备混合纸采购 (`prepared_mixed_paper`)

仅当真实外购Product时采用，并替代mixed_paper_feed中对应纸量，绝不是同一纸料的额外采购。原生为ELCD重建的通用废纸Product/Mass/kg，等级、形态、路线和地理未指定；不采用净14和总16.4750000852581热值换算。记录上游分选/打包及一个供方；源纸种与水保持组成子账。

- 选定流: 废纸 `d1008171-2d06-4e14-b107-7e510875203f`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_lots保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_lots`
- 来源: jrc-paper-bref-2015; ilcd-attributional-2010

###### 外购低压电 (`electricity`)

计量输送、打包、抽风及真实辅机，保留闲置/启停/清扫和失败批次。原生Product为<1 kV电网平均消费组合、到用户，locationOfSupply CN，采用Net calorific value/MJ：仅用于匹配的中国低压电网供给；不同电压、国家或发电合同须另核流和供方。kWh读数先换算一次再分配；不得因属性名称推断热燃料。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_utilities保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源: jrc-paper-bref-2015; smurfit-mixed-packaging

###### 自营收运及搬运柴油 (`diesel`)

仅在真实自营收集车辆和搬运设备用柴油时计量；排除已由完整货运供方覆盖的路段。原生Product/Mass/kg为前景柴油身份，牌号、配方、密度、热值、炼制路线、地理和供方全部未指定；按需要实测并披露，不引入默认密度或排放因子。化石比例和实际掺混决定物种归属。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_utilities保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源: smurfit-mixed-packaging; ilcd-attributional-2010

###### 外购公路收集及接收方运输 (`freight`)

仅在真实外购时记录收集至堆场、堆场至接收方每个公路货运段，供方清单包括真实回程/空驶。原生Product为公路货运生产混合、在厂，参考Transport performance/kg*km，未固定车型、地理或供方。采用真实载荷质量和距离，吨公里乘1000，并匹配供方载荷/空驶约定；不编载重，不重复计入该段自营燃料。

- 选定流: 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Transport performance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_transport保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_transport`
- 来源: smurfit-mixed-packaging; jrc-paper-bref-2015

###### 铁或钢捆包丝 (`wire`)

计量用于该纸包的一种真实柔韧铁/钢捆扎丝，包括断丝和余存。原生Product/Mass/kg为捆包铁丝、生产混合、在厂；正式注释明确包括纸/纸板捆扎且通常为铁/钢，围栏分类是孤立分类异常，不构成带刺形态要求。只用于该实体捆扎品；声明真实镀层/组成/供方，不猜纸包质量。

- 选定流: 捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_packaging保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 外购液压油制剂 (`hydraulic_oil`)

仅在打包机液压油补加/更换时计入，整份基础油加添加剂制剂只采购一次；各组分为组成子账。原生Product为液压油，矿物或合成基础油加添加剂，Volume/m3，未固定牌号/地点/供方；匹配真实制剂并测体积。物理油质量须独立实测指定温度密度或直接称重，不套水密度或润滑油热值因子。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_utilities保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源: smurfit-mixed-packaging

###### 真实清扫外购自来水 (`cleanup_water`)

仅记录真实清扫水，不默认洗纸或制浆。原生Product/Mass/kg为经处理管网市政/饮用水，在厂/供消费者，具体处理随地点变化；不能替代原水/地表水或蒸汽。辅助0.001体积因子不构成场址密度实测；称量供水，或转换水表读数时独立测密度/状态，再追踪真实废水、保留水分和蒸发去向。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_utilities保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源: jrc-paper-bref-2015

###### 条件性LDPE防护薄膜 (`ldpe_cover`)

仅指为保护该批纸料而真实另行供应的LDPE薄膜；独立于纸和铁丝称重。声明聚合物、厚度、添加剂、回用和供方；不得用树脂粒料、食品接触再生聚合物或另一配方UUID替代。

- 选定流: 低密度聚乙烯防护薄膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_packaging保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源: cepi-quality-control

##### 废物流

###### 原持有者预混纸批料 (`mixed_paper_feed`)

一份真实进料混合纸批料，附带水分和杂质列入实测且不可叠加的组成子账。原生为Waste flow、未指定废纸、Mass/kg，无固定等级/路线/地点：仅用于原持有者废纸交接，不代表Product放行、市政垃圾、纸浆或分别采购三种纸等级。法律状态与源纸继承负荷是独立属性；废物身份不使负荷归零。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_lots保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_lots`
- 来源: jrc-paper-bref-2015; jrc-recycling-2020; ilcd-attributional-2010

##### 基本流

###### 自营发动机大气氧投入 (`oxygen_air_in`)

仅在真实大气分子物种跨越自营发动机边界时计入，独立测气体状态、湿度和组成以闭合物理账。这不是外购工业气体、NOx、新增纸产出、固定空气比例或默认排放因子；结合燃料C/H/S及实测废气物种核对真实进口/出口氮、氧和水。

- 选定流: 来自空气的氧气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010

###### 大气氮通量投入 (`nitrogen_air_in`)

仅在真实大气分子物种跨越自营发动机边界时计入，独立测气体状态、湿度和组成以闭合物理账。这不是外购工业气体、NOx、新增纸产出、固定空气比例或默认排放因子；结合燃料C/H/S及实测废气物种核对真实进口/出口氮、氧和水。

- 选定流: 来自空气的氮气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010

###### 进口大气水蒸气 (`humidity_air_in`)

仅在真实大气分子物种跨越自营发动机边界时计入，独立测气体状态、湿度和组成以闭合物理账。这不是外购工业气体、NOx、新增纸产出、固定空气比例或默认排放因子；结合燃料C/H/S及实测废气物种核对真实进口/出口氮、氧和水。

- 选定流: 来自空气的水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010

#### 输出

##### 产品流

###### 接收方首次放行混合纸供货 (`mixed_paper_release`)

唯一参考产出是一份仍未制浆且纸种混合、由明确接收方首次无条件验收的真实混合纸批次；净纸料排除铁丝和防护膜。原生ELCD重建通用废纸为Product/Mass/kg，不固定组成、路线、地点或等级；辅助净/总热值因子14和16.4750000852581不提供实测热值、密度或水分。整份批料的来源分区不得叠加且共用一个上游供方；身份不是供方认证、已审LCA过程或脱废状态证明。

- 选定流: 废纸 `d1008171-2d06-4e14-b107-7e510875203f`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: product_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: method_formula
- 采集协议: `cp_release`
- 来源: jrc-recycling-2020; cepi-quality-control; un-cpc-2025

##### 废物流

###### 分离的不适用湿强纸 (`rejected_paper`)

仅指该接收方实际拒收且分离的湿强纸；保留实测整份湿质量和组成。记录独立处理或另一有据接收方，不将其当作合格混合纸给予信用。

- 选定流: 拒收湿强回收纸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 捕集纸屑细料 (`paper_fines`)

称量抽风/清扫捕集的纸屑细料，另测水分和矿物含量。厂内返回为内部转移，对外废物为独立去向；不能以窑灰UUID或大气颗粒物质量替代捕集固体。

- 选定流: 捕集干式纸屑细料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离PET异物 (`pet_reject`)

仅为实测分离的PET物品，不代表所有塑料杂质或再生树脂。原生Waste flow/Mass/kg为废弃聚对苯二甲酸乙二醇酯，生产混合、在厂，未限定等级或回收率；匹配PET化学身份并记录真实处理方及添加剂/组成。

- 选定流: 废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离聚乙烯薄膜 (`pe_reject`)

单独记录真实从进料分离或损坏包装产生的已鉴别聚乙烯薄膜；来源分区不得重复整份出口。不绑定PET或未指定塑料家族；另一聚合物另增卡。

- 选定流: 废弃聚乙烯薄膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离容器玻璃 (`glass_reject`)

仅在真实存在且化学身份确认的钠钙容器玻璃异物时，称量并关联真实处理方。晶圆用玻璃、光伏玻璃或玻璃制造残余物不代表此交换。

- 选定流: 分离钠钙容器玻璃
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离非团聚木材 (`wood_reject`)

仅指从纸料中分离的未处理木块；涂层/处理木材须另建化学身份明确的卡与去向。团聚木材/压块流物理不相容，不能采用。

- 选定流: 分离未处理非团聚木块
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离废铁丝 (`iron_reject`)

一个真实废铁丝出口，拆下的来料铁丝或新断丝仅作不可叠加来源分区。记录真实镀层与去向；另行分出的铝/钢物品按实体另增卡，不绑定废金属/电池集合。

- 选定流: 废弃铁捆扎丝
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离食物污物 (`food_reject`)

一份真实污染纸拒收料，纸、食物固形物和水列独立组成子账，不是所有残余物通用池。危险污染隔离后另按真实身份命名，并保留真实处理去向。

- 选定流: 分离食物污染纸残余物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 分离砂质土 (`soil_reject`)

仅指真实取样的砂质土异物；称量水分及夹带有机物并记录处理。不映射为农业基本流投入，不作为未测纸和水的配平残差。

- 选定流: 分离砂质土异物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 废液压油 (`spent_oil`)

仅指实际使用后处置且污染量实测的矿物基液压油；合成液压油废液另增卡。不在无相容证据时采用50%油/25%水/15%添加剂废油配方或金属加工切削液身份。

- 选定流: 废矿物基液压油
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 收集清扫废水 (`cleanup_effluent`)

仅在真实发生时将整份清扫水计入明确处理方，测质量；若按体积计量则测密度/状态。外包整份水流的溶解/悬浮物种是组成子账；若实际直接排放，则逐项记录实测基本流物种和介质，不以COD/VOC冒充一种化学质量。

- 选定流: 收集纸场清扫水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_residues保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residues`
- 来源: jrc-paper-bref-2015; cepi-quality-control

##### 基本流

###### 自营发动机化石二氧化碳排气 (`co2_fossil`)

仅计自营燃料真实化石CO2，CAS124-38-9，Mass/kg，排入未细分空气。ILCD通用同义词含宽泛二氧化碳/同位素/离子变体；本卡严格限定主名称/CAS一致的中性气态化石CO2，不包括那些其他物种。不假定纸或生物碳燃烧；采用实测燃料碳及独立物种完整性证据。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 自营发动机化石一氧化碳排气 (`co_fossil`)

仅为真实气态化石CO，CAS630-08-0，Mass/kg，未细分空气；原生同义词含更宽泛低温/废气用词，不改变本卡主化学身份。采用实测CO和化石归属；它既非全部废气，也不代替VOC或CO2。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 实测二氧化氮排气 (`no2`)

仅为真实NO2气体，CAS10102-44-0；直读候选同义词含N2O4歧义，UUID保持未解决待化学身份审查。以NO2当量表示的NOx总量不能证明实际NO2质量。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 实测一氧化氮排气 (`no`)

仅为真实NO，CAS10102-43-9；候选同义词还含nitroxyl/HNO，解决化学歧义前不采用UUID。与NO2分别定量，不编NOx物种比例。

- 选定流: 排入空气的一氧化氮
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 实测二氧化硫排气 (`so2`)

按真实燃料硫及实测氧化/物种证据计入SO2，不用外购二氧化硫或SOx总指标替代。无默认含硫量、因子或去除率。

- 选定流: 排入空气的二氧化硫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 实测水蒸发至空气 (`water_vapour`)

真实水分蒸发与有独立证据的燃烧生成H2O分别测量，来源分区不可叠加。分类为淡水排放的水蒸气候选不采用；不从一个残差同时解水和固体损失，也不为干式纸路线推断反应水。

- 选定流: 排入空气的水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 小于2.5微米纸尘排气 (`paper_pm25`)

仅计真实未捕集小于2.5微米纸颗粒，测组成并与捕集paper_fines区分。此粒径组与paper_pmcoarse互斥；不能将PM10总量叠加PM2.5。

- 选定流: 排入空气的PM2.5纸尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 2.5至10微米纸尘排气 (`paper_pmcoarse`)

仅计该粒径区间内实测互斥粗纸尘，记录真实空气介质与去向。更粗颗粒及其他实际排放化学物另增卡；无固定纸尘组成或捕集效率。

- 选定流: 排入空气的大于2.5至10微米纸尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010; jrc-paper-bref-2015

###### 剩余分子氧排气 (`oxygen_air_out`)

仅在真实大气分子物种跨越自营发动机边界时计入，独立测气体状态、湿度和组成以闭合物理账。这不是外购工业气体、NOx、新增纸产出、固定空气比例或默认排放因子；结合燃料C/H/S及实测废气物种核对真实进口/出口氮、氧和水。

- 选定流: 排入空气的氧气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010

###### 分子氮排气 (`nitrogen_air_out`)

仅在真实大气分子物种跨越自营发动机边界时计入，独立测气体状态、湿度和组成以闭合物理账。这不是外购工业气体、NOx、新增纸产出、固定空气比例或默认排放因子；结合燃料C/H/S及实测废气物种核对真实进口/出口氮、氧和水。

- 选定流: 排入空气的氮气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_species保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_species`
- 来源: ilcd-attributional-2010

### 过程：放行后批群服务 (`cohort_service`)

#### 输入

##### 产品流

###### 放行后外购低压电 (`service_electricity`)

计量输送、打包、抽风及真实辅机，保留闲置/启停/清扫和失败批次。原生Product为<1 kV电网平均消费组合、到用户，locationOfSupply CN，采用Net calorific value/MJ：仅用于匹配的中国低压电网供给；不同电压、国家或发电合同须另核流和供方。kWh读数先换算一次再分配；不得因属性名称推断热燃料。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: jrc-paper-bref-2015; smurfit-mixed-packaging

###### 放行后自营收运及搬运柴油 (`service_diesel`)

仅在真实自营收集车辆和搬运设备用柴油时计量；排除已由完整货运供方覆盖的路段。原生Product/Mass/kg为前景柴油身份，牌号、配方、密度、热值、炼制路线、地理和供方全部未指定；按需要实测并披露，不引入默认密度或排放因子。化石比例和实际掺混决定物种归属。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: smurfit-mixed-packaging; ilcd-attributional-2010

###### 放行后真实清扫外购自来水 (`service_cleanup_water`)

仅记录真实清扫水，不默认洗纸或制浆。原生Product/Mass/kg为经处理管网市政/饮用水，在厂/供消费者，具体处理随地点变化；不能替代原水/地表水或蒸汽。辅助0.001体积因子不构成场址密度实测；称量供水，或转换水表读数时独立测密度/状态，再追踪真实废水、保留水分和蒸发去向。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: jrc-paper-bref-2015

###### 放行后铁或钢捆包丝 (`service_wire`)

计量用于该纸包的一种真实柔韧铁/钢捆扎丝，包括断丝和余存。原生Product/Mass/kg为捆包铁丝、生产混合、在厂；正式注释明确包括纸/纸板捆扎且通常为铁/钢，围栏分类是孤立分类异常，不构成带刺形态要求。只用于该实体捆扎品；声明真实镀层/组成/供方，不猜纸包质量。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: jrc-paper-bref-2015; cepi-quality-control

###### 放行后外购液压油制剂 (`service_hydraulic_oil`)

仅在打包机液压油补加/更换时计入，整份基础油加添加剂制剂只采购一次；各组分为组成子账。原生Product为液压油，矿物或合成基础油加添加剂，Volume/m3，未固定牌号/地点/供方；匹配真实制剂并测体积。物理油质量须独立实测指定温度密度或直接称重，不套水密度或润滑油热值因子。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: smurfit-mixed-packaging

###### 放行后条件性LDPE防护薄膜 (`service_ldpe_cover`)

仅指为保护该批纸料而真实另行供应的LDPE薄膜；独立于纸和铁丝称重。声明聚合物、厚度、添加剂、回用和供方；不得用树脂粒料、食品接触再生聚合物或另一配方UUID替代。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 低密度聚乙烯防护薄膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: cepi-quality-control

###### 放行后外购公路收集及接收方运输 (`service_freight`)

仅在真实外购时记录收集至堆场、堆场至接收方每个公路货运段，供方清单包括真实回程/空驶。原生Product为公路货运生产混合、在厂，参考Transport performance/kg*km，未固定车型、地理或供方。采用真实载荷质量和距离，吨公里乘1000，并匹配供方载荷/空驶约定；不编载重，不重复计入该段自营燃料。 本卡仅为按原放行批群Qc归属的实测放行后服务增量，排除回收阶段总量；采用原批群已存分母，不新增生产产出。

- 选定流: 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Transport performance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则: A_i,c / Q_c；对本行按第8节完成原始单位转换和归属后仅计算一次；在cp_service保留未相除总量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_service`
- 来源: smurfit-mixed-packaging; jrc-paper-bref-2015

放行后全部废物和排放出口使用对应、身份已明确的回收卡作为全路线出口，在cp_residues/cp_species中按阶段/批群作不可叠加分区。化学身份、介质或供方不同时另增行。这些出口卡保留全部真实服务数量，不遗漏服务负荷或实物出口。

## 7. 分配与共产品处理

以下规则仅用于归因型建模。先独立建立物理存量平衡与毛质量，再分配交换负荷。正价格、废物名称和法律脱废状态是不同事实，均不能单独建立零负荷边界。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | each exchange and operation | 首先对专属源批次、作业和服务增量直接归属，或采用有据的实际/虚拟细分。按来源、真实纸等级/质量和交接状态保留源纸生产及既往回收清单向量，不因回收纸身份删除历史。也不得不加区分地分给全部历史产品使用/转换负荷：识别技术上可比的真实共同生产阶段和真实上游分配边界。 | ilcd-attributional-2010 |
| allocation_physical | remaining shared exchange | 细分后逐一检验该交换与每个共同功能的决定性物理因果；只有当实测物料通量、设备运行或服务暴露确实决定该交换时才采用。质量不自动决定每项电机、建筑、分选或处理负荷；不得任意在物理与经济份额间选择。 | ilcd-attributional-2010 |
| allocation_residual | genuinely inseparable residual | 只有确实不可分且无已证决定因素的共同过程剩余部分，才按同一物理状态与门口、同期真实共同功能市场价值分配。记录数量、币种、期间、交付状态和净价格/入场费基准；该剩余份额之和为一。无固定产率、分配比例、废料信用或避免原生纸信用。 | ilcd-attributional-2010 |
| allocation_value_gate | source paper and recovery service | 正价值源纸按有记录的上游清单识别既往真实共同生产及质量损失，不假设无限等质量循环或默认回收率。负价值交接区分前序废物管理阶段和实际产生有价值二次纸的工序；在该工序先细分/因果，最后才对剩余价值分配，包括处理服务功能及真实费用绝对值。全部前序阶段在负责任的第一系统中建模并保留桥接清单，不将所有前序处理转嫁二次纸或令其消失。零/未知价值须明确方法裁定，解决前保留上游证据阻断。 | ilcd-attributional-2010 |
| allocation_outputs | paper lots and separated matter | 混合纸出口是一份整料供货，来源分区不叠加且采用一个供方。可分开出售的OCC、图文纸等级、金属或聚合物出口具有独立实物卡、质量/状态和真实身份；按适当方法处理，仅在上述层级之后分配共享负荷。单纯厂内回用、拆下铁丝、收集服务或款项不自动产生共产品。 | un-cpc-2025; ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

保留未归一原始记录及阶段/批次/交换台账。物理数量、背景负荷向量和分配份额分别记录。仅规定采集并不构成工厂实测结果；本PCR提供协议，不编场址数值。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | recovery | mixed_paper_feed; prepared_mixed_paper | weighbridge and source genealogy | 批次; 持有者; 供方; 废物或产品状态; 净湿质量; 干固体; 水分; 纸种分区; 异物; 既往生产向量; 既往回收向量; 价值及费用; 供方阶段覆盖 | 使用经校准毛重/皮重称量；抽样测真实组成/水分并保存原持有者交接及上游清单记录；真实预混批料仅记录一次。 存原始进料湿/固体质量及继承交换向量；组成分区之和等于整料，不增采购；不相除。 | kg | 每次交接及批次 | 完整作业期，含失败和期初批次 | 所有原持有者及准备场址 | 每 1 kg 参考流 | 衡器校准; 监管链; 分析; 上游来源/价值凭据 |
| cp_release | recovery | mixed_paper_release | receiver quality release register | 批群; 批次; 首放时间; 接收方; 规格; 毛质量; 铁丝皮重; 薄膜皮重; 净混合纸质量; 实测水分; 干固体; 有条件或最终状态; 原放行ID; 撤销验收 | 经校准净称重，独立测包装皮重并代表性抽样测水分/异物；核对接收方验收、拒收和复检，包括全部/部分拒收。 唯一新增无条件放行净纸质量加总为Q；期末成品已包含仍存库的该部分Q，不得再加。分别存Q和干固体；此处不计算单位交换。 | kg | 每车及每次裁定 | 所有首次放行及零放行作业期 | 明确接收方碎浆前 | 每 1 kg 参考流 | 接收方签认结果; 抽样方案; 质量/皮重校准; 唯一放行谱系 |
| cp_utilities | recovery | electricity; diesel; hydraulic_oil; cleanup_water | meters and stock changes | 交换ID; 阶段; 批次; 期初存量; 收货; 期末存量; 外部退回; 起止表数; 原始单位; 速率或累计; 时间; 油密度温度; 燃料碳硫氢; 化石比例; 供电电压国家供方 | 读取经校准表计和罐/存量账，涵盖真实过程、闲置、清扫、启停与失败；需要质量换算时测该物料独立密度/状态。 按阶段存原单位未归一表计/存量变化；后用convert_units；不除Q、包数或运行次数。 | MJ; kg; m3 | 连续表计和每次收货/更换 | 完整作业期及期初期末存量 | 仅自营回收作业；排除外包路段 | 每 1 kg 参考流 | 表计证书; 燃料分析; 发票; 操作记录; 密度测试条件 |
| cp_transport | recovery | freight | route and provider ledger | 路段; 批次; 真实货重kg; 重载km; 空驶km; 回程km; 车型及载荷; 外包供方边界; 原始单位; 燃料覆盖 | 记录收集与接收方交付各路段，保留货重和距离证据；供方匹配真实载荷/空返约定；自营车辆燃料仍在cp_utilities。 按路段存原始货重kg、距离km和发票服务单位；分配前形成物理运输服务；此处不按产品归一。 | kg*km | 每路段，含失败/退回车辆 | 声明的全部路线和作业期 | 原持有者至堆场至接收方 | 每 1 kg 参考流 | 磅单; 路线日志; 货运发票; 供方边界图 |
| cp_packaging | recovery | wire; ldpe_cover | component stock and movement ledger | 组件; 真实组成; 期初空包材; 期初附着在制; 期初附着成品; 期初周转物; 外购P; 非采购外部首次收货I; 外部收货编号; 实物来源; 所有权; 继承负荷所有者; 外返接收ER; 期末空包材; 期末附着在制; 期末附着成品; 期末周转物; 实物毛发运S; 对外退回EO; 废物W; 内部回用 | 逐种包材按空、附着和周转状态独立称量。记录采购P、真实首次非采购外部收货I（含供方随来料附着的钢丝或覆盖膜以及首次借入或租入包材）、外返接收ER、毛发运及断损。拆下来料旧丝的实物接收记入I，不再采购一次。同一收货的P、I、ER互斥，内部回用不属三者。存原始组件质量，满足期初+P+I+ER=期末+S+EO+W，并将真实收货、所有权和继承交换向量配对一次。包材不进入净纸Q，采集不相除。实际收货未被既有接口表达时补建具体原子组件实物接口；实物子账不是第二次采购，也不是再加一份整批供货。 | kg | 每次收货/打包/发运及盘点 | 完整作业期，含期初期末附着存量 | 声明交接内的全部堆场、在途和接收方存量 | 每 1 kg 参考流 | 组件衡器; 组成/规格; 存量及退回凭据 |
| cp_residues | recovery | each named waste outlet | weighed disposition and assay ledger | 出口ID; 化学身份; 来源分区; 阶段; 批群; 湿质量; 干质量; 水; 碳; 实际处理方; 处理; 法律状态; 对外退回; 期初期末存量; 不合格批次 | 逐化学身份和去向称量真实分离废物；对真实混合残余批料和整份废水取样。新异物另行识别，不能称其他；要求真实处理方/处理记录。 整份出口原始质量只存一次，来源/阶段分区互斥且不可叠加，另设组成子账；按批群保留全部真实放行后增量；不相除。 | kg | 每次分离及外运 | 完整作业期，含清扫、失败批次和服务阶段 | 至最终声明交接及明确废物处理方的各阶段 | 每 1 kg 参考流 | 磅单; 化学测试; 处置联单; 去向凭据 |
| cp_species | recovery | each named elementary species | species measurement and fuel/air material balance | 物种; CAS; 介质; 粒径; 阶段; 批群; 来源; 化石生物分区; 浓度; 气体体积或速率; 时长; 温度; 压力; 干湿基; 生成水; 氧输入; 氮进出; 捕集及未捕集粉尘 | 独立测物种和真实气流/状态，或采用完整有据的特定燃料计算并独立闭合核对。分别记录真实NO/NO2、化石/生物碳、蒸发/燃烧水及互斥颗粒；新增每个真实排放化学物及物理闭合所需氧/氮交换。 存物种原始量或浓度及累计气体体积；仅对速率积分一次。分配前保留实物毛质量；不除产品Q。 | kg | 每项排放作业和代表性测试 | 完整作业期，含失败、启停与服务阶段 | 真实自营排放点及空气介质 | 每 1 kg 参考流 | 实验室方法; CAS/介质确认; 燃料分析; 不确定性; 独立C/H/O闭合 |
| cp_stock | recovery | WIP and FG genealogy | physical stock and inherited-exchange ledger | 阶段; 批次; 原批群; 期初在制质量; 期末在制质量; 期初在制交换向量; 期末在制交换向量; 期初成品质量; 期末成品质量; 原成品负荷; 新首次Q; 实物放行毛量V; 退回; 返工增量; 损失; 内部转移 | 按阶段、在途、接收待验和成品存量用校准称重及批群谱系核对；逐交换继承负荷，不用单一平均负荷或仅质量调整。 按阶段/批群分别存原始物理质量和未归一交换向量；内部转移两侧匹配后才抵消；不相除。 | kg; original exchange units | 每次转移及期末 | 期初至期末，含失败和Q=0作业期 | 碎浆前交接以内全部受控场址和在途 | 每 1 kg 参考流 | 盘点; 转移谱系; 原负荷凭据; 核对残差 |
| cp_service | cohort_service | service_electricity; service_diesel; service_cleanup_water; service_wire; service_hydraulic_oil; service_ldpe_cover; service_freight | post-release cohort service ledger | 原批群; 已存首次放行Qc; 服务H; 阶段; 原始交换; 原始单位; 期初期末成品; 包装; 损失; 退回; 原交付反向; 返工增量; 首次放行ID | 按真实批群及作业测放行后仓储/搬运/包装增量。保留原成品负荷；只对真实退回作原交付反向，并仅新增一次真实返工，不产生第二次首次放行。 按原批群存原始服务交换总量和H及已存Qc；H不是生产，此处不归一。服务废物/排放仅一次归cp_residues/cp_species。 | MJ; kg; m3; kg*km; original exchange units | 每次服务作业和期末 | 首次放行至声明的碎浆前交接 | 明确原放行批群和接收方仓储 | 每 1 kg 参考流 | 服务表计; 原放行台账; 成品谱系; 退回/返工记录 |
| cp_allocation | recovery | each shared exchange | attribution and value-gate evidence | 交换; 源头; 专属归属; 细分; 决定因素; 物理检验; 共同剩余; 产品及服务; 数量; 同门状态; 币种; 价格期; 真实价格费用; 上游回收模型; 份额及不确定性 | 获取实测因果/细分及同期同状态市场/入场费证据；独立定位既往真实共同生产阶段和真实回收价值跨越点。 保留相关各门原始交换总量的专属/因果/剩余分配，各份额和为一；此处不归一。 | original exchange units; documented currency | 每次路线/价值转换及报告期 | 与清单同期及真实源历史 | 源纸、真实回收工序及全部共同功能 | 每 1 kg 参考流 | 物理因果检验; 价格/费用凭据; 上游模型及范围; 敏感性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_units | all inventory rows | 分配前将各原始分子换算至卡片单位：electricity_MJ = electricity_kWh * 3.6；oil_m3 = oil_L * 0.001；freight_kgkm = freight_tkm * 1000或sum(actual_cargo_kg * actual_leg_km)。真实速率仅积分一次；实测累计体积已为总量。需密度时对该物质/状态独立测量，不从流辅助因子推导。 | raw_amount; raw_unit; actual_cargo_kg; actual_leg_km; measured_density; measured_state; cp_utilities; cp_transport | converted_raw_exchange | jrc-paper-bref-2015; ilcd-attributional-2010 |
| physical_gates | all physical stages | 逐物理阶段和组分：期初+真实外部接收=期末+真实外转+真实废物+真实排放；阶段间内部转移抵消。制造V为真实出站候选纸毛量，包括接受与拒收部分；Q只为唯一首次接受净纸，不是V。最终接收方成品门：opening_FG + Q + actual_external_returns = closing_FG + gross_outward_paper + external_return_out + losses + rework_to_WIP。closing_FG已含仍在库存中的Q部分，不是另一制造产出。合并各阶段门时，对相同内部Q/转移只抵消一次。仅当新增修正X用于去除同一侧同一OTHER项已存在且有证的完全重复项时才允许。 | cp_lots; cp_release; cp_stock; cp_residues; cp_species | independent_stage_and_combined_physical_balances | jrc-paper-bref-2015; cepi-quality-control |
| packaging_balance | wire; ldpe_cover; service_wire | 逐种包材独立满足：opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + purchases_P + nonpurchase_external_receipt_I + external_return_received_ER = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + gross_physical_shipments_S + external_return_out_EO + waste_W。在途按真实存量门记录。内部回用抵消，不产生新采购、净纸Q或共产品。一个整份废物出口可有不可叠加的包装/来料来源分区，不得再加一次。  I为独立实测的非采购外部实物进入量，含供方随货组件及首次借入或租入包材；排除已记入P或ER的同一收货。即使上游供方已承担负荷，实物收货和存量仍须保留。真实来料历史及所有权仅继承一次；采购负荷按已核实的实际供货范围与合格使用或领用归属，不能将P+I当新采购量。不得虚造第二供方或再计上游已含组件。 | cp_packaging; cp_service; cp_residues | component_physical_reconciliation | jrc-paper-bref-2015; cepi-quality-control |
| attribute_exchange | all inventory rows | 逐原始交换向量：A_i,c = inherited_opening_WIP_i,c + actual_current_dedicated_i,c + causally_assigned_i,c + residual_assigned_i,c - inherited_closing_WIP_i,c。按源历史与阶段/批次账核对每个继承向量，不能只结转质量。成品原生产负荷保留在原批群c；放行后服务增量另行累计一次至同一批群。真实失败/启停/闲置/清扫/返工负荷全部保留，不能因无合格产出而消除。实物毛交换与分配后的A分别保存。 | converted_raw_exchange; cp_lots; cp_stock; cp_allocation; cp_service | attributable_raw_exchange_vector_A | ilcd-attributional-2010 |
| calculate_inventory | all inventory rows | 对选定放行批群c且Q_c>0，a_i,c = A_i,c / Q_c；仅在convert_units和attribute_exchange之后执行一次。Q_c为已存唯一首次放行净纸质量，是唯一产品归一。服务增量采用同一原始已存Q_c，并先累计原始A_i,c再进行这一次计算；H绝不是分母。卡片和采集汇总只引用此结果，不再相除。参考Product产出为1 kg。Q_c=0时保留全部真实原始负荷与物理平衡，不报告单位结果；须明确记录向后续真实批群结转/归属，不编产出。 | attributable_raw_exchange_vector_A; Q_c; cp_release; cp_service | a_i,c 每 1 kg 参考流 | ilcd-attributional-2010 |
| independent_constituents | paper solids; water; carbon and actual species | 纸/填料/异物固体及总物理质量独立于水与相关元素平衡建立。每个独立未知量至少有独立实测约束，一个残差不能同时拟合水和固体损失。干式纸准备不假设化学产水、结构水释放或燃烧。真实发动机独立追踪燃料C/H/S、大气O2/N2通量和真实废气物种/水；游离水、蒸发水和燃烧生成水为不同来源，不是同一个H2O出口的额外复制。COD、BOD、TOC、VOC及NOx当量为指标，不是编造特定物种的质量。 | cp_lots; cp_utilities; cp_residues; cp_species; cp_stock | independent_mass_water_element_and_species_checks | jrc-paper-bref-2015; ilcd-attributional-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | mixed paper and receiver | 证明真实混合纸供货和接收相容性；分类标签、通用UUID、生产者网页或初步有条件验收均不能证明该批真实放行。检验排除条件，追溯一份整料采购及供方。 | 来源历史; 代表性抽样; 买方规格; 最终放行台账 |
| quality_temporal | all operations | 采集代表性完整报告作业期，含期初期末存量与服务批群，保留失败和全部非生产期。按表计、抽样、分配和供方范围量化不确定性，不以通用生产者比例替代。 | 原始记录; 校准; 抽样变异; 存量谱系; 敏感性 |
| quality_sources | upstream and shared burdens | 源纸继承负荷缺失、处理/价值门未解决或核心接收相容性未知，构成真实数据集完整性阻断。未来工厂用量未知、普通供方选择或辅助UUID待解，既不能编零、声称方法批准，也不自动使这些采集规则失效。 | 明确缺口台账; 谱系及源范围; 未归一记录 |
| quality_native | every UUID and unit | 逐一将主名称、所有语言名称、同义词/注释、CAS、路线、形态、地理、介质、类型及所有属性与真实交换核对；采用精确参考属性/单位组链和官方中文basename。辅助身份未解仍保留具体原子名称，不作家族绑定。 | 完整原生身份及属性/单位证据; 供方相容性; 本地化显示审计 |

## 9. 校验规则

同时评估所声明方法的一致性与真实证据完整性。投影语法有效或有限计量检查不构成科学、翻译、供方或分类批准。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | 核实真实混合纸料仍混合、未制浆且在制浆前与明确接收方相容；拒绝仅剩余垃圾/仅服务案例及分开交易39241/42/43等级。确认最终无条件接收验收，不以单纯交付或收集代替。 | un-cpc-2025; jrc-recycling-2020; cepi-quality-control |
| validate_complete_route | all rows and stages | 全部真实投入、损失、退回、失败、清扫与服务排放/废物均以原子身份记录真实去向。检查供方边界重叠及遗漏；上游来源历史和原批群负荷保持明确。缺证为未知，不是零或通过。 | jrc-paper-bref-2015; ilcd-attributional-2010 |
| validate_mass | physical and packaging gates | 独立闭合阶段、成品和合并实物毛质量、水、固体及相关元素；追溯每项在制继承交换和原成品负荷。期末成品已含Q；合并门时内部Q仅抵消一次。逐种独立检查包装等式、真实外返与毛转移，不得任意以X调整残差。 | cepi-quality-control; jrc-paper-bref-2015; ilcd-attributional-2010 |
| validate_normalization | all inventory rows | 核实原始单位转换、专属/细分/因果/剩余归属及向量结转先于唯一A/Q计算；Q仅首次放行，服务保留原Qc且H不变成产量。Q=0保留真实原始负荷但无单位结果；复检/退回/返工不重复放行。 | ilcd-attributional-2010 |
| validate_native | adopted and unresolved identities | 复核所有原生身份限制与单位量纲、真实供方相容性、官方中文名和必需限定信息。化学矛盾同义词或错误空气/水介质须审查，不能自动以分类豁免。无UUID辅助卡仍未解决，不能冒充平台已核身份。 | ilcd-attributional-2010 |
| validate_allocation | all multifunctional gates | 按选定来源证据核查归因层级及真实前生命周期/价值转换；不能把工业分选资料作为LCA分配依据、推断固定回收率或增加替代信用。分别报告真实检查、跳过范围、不确定性和阻断。 | ilcd-attributional-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 接收方制浆前真实混合纸投入，含原批群及上游负荷模型 |
| allowed_use | 匹配混合纸供货、真实组成/状态、验收接收方规格及所声明归因边界 |
| excluded_use | 纸浆或新纸；单独分级纸；剩余垃圾处理；危废；通用回收信用或假定零负荷进料 |
| required_metadata | 第3节全部限定信息；精确物理/供方门；源头；Q/在制品/成品/批群谱系；实测公用工程/属性单位；分配/价值证据；全部实际原子流及去向 |
| required_quality_disclosure | 时间/场址代表性；不确定性和未知；实测与计算数据；辅助身份待解；源历史/价值门阻断；科学及翻译审查状态 |
| update_trigger | 源混合料、接收规格、准备路线、价值/状态门、上游供方边界、公用工程、排放去向或计量配置变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes (30 June 2025), pp.201–202; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39249包含未分选回收纸；相邻39241/42/43边界；不提供过程用量。 |
| jrc-recycling-2020 | literature | Grant, Cordle and Bridgwater; Quality of recycling: Towards an operational definition, JRC122293 (2020), §4.2 pp.57–61 and Table 4-3; doi:10.2760/225236; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC122293/final_quality_of_recycling_report.pdf | 实际分开收集的混合纸投入和混合纸产出；接收方特定质量及未分级出口反例。场址观察不建立通用组成或数值验收限。 |
| jrc-paper-bref-2015 | official_guidance | JRC Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §6.1.1–6.1.2 printed pp.550–551 (PDF pp.588–589); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 源头交接、收集场、非纸物去除、追溯、捆扎丝和下游制浆排除。不能支持LCA分配或回收率。 |
| cepi-quality-control | extension_guidance | CEPI Paper for Recycling Quality Control Guidelines, retained publisher document, pp.2–9 and 12; https://www.cepi.org/wp-content/uploads/2022/02/PaperforRecyclingQuality-Control-GuidelinesWITHANNEX.pdf | 交付文件、包捆完整性、水分抽样、验收/有条件验收/拒收和杂质检查。建议与商业扣重不是通用物理产率或本PCR质量分母。 |
| smurfit-mixed-packaging | extension_guidance | Smurfit Kappa, 5.02 Mixed packaging, publisher page snapshot 2026-10-26; https://www.smurfitkappa.com/products-and-services/recycling/502-mixed-packaging | 独立生产者实例支持混合旧纸/纸板供货和收集设备；该特定等级排除报纸/杂志。不证明另一混料批次属于5.02或已认证，也不提供场址配方。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §7.9.2–7.9.3 and Annex14.4 (PDF pp.275–292 and 369–374); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型细分与逐交换决定性物理因果；剩余市场价值分配；真实前生命周期回收/价值边界。示例回收率与无限循环公式不是异质纸料默认值。 |
