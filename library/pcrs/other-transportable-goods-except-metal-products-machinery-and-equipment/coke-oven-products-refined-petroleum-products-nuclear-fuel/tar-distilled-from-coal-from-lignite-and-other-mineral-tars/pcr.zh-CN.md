---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.tar-distilled-from-coal-from-lignite-and-other-mineral-tars
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 回收粗煤焦油

## 1. 范围与适用性

本PCR规定副产回收式煤焦炉所产生焦油—水冷凝液中的粗煤焦油回收、实际适用的脱水、验收、储存与散装交付方法。起点为集气管、初冷及电捕焦油系统实际汇集的冷凝液接收边界，终点为验收粗煤焦油厂界交付。不假设存在某一具体场址或工艺参数；生产数据包必须实际采集。焦油/水分离、煤水去向与厚焦油回送依据BREF 5.1.4.3–5.1.5；附加脱水或加热只在实际发生时纳入，技术、取样与效能须声明，不给出通用配方、产率或水分阈值。`jrc-iron-steel-bref-2013`

本方法的独立成品参考是焦油，不是焦炭或煤气；不重复编写煤炭干馏、湿熄焦或完整煤气净化。对应焦化与煤气方法可提供上游联合清单、实物联产和分配证据，却不能把固定煤气参考冒充焦油参考。脱水后仍为未按馏程分级的粗焦油；独立蒸馏得到的油馏分、洗油、蒽油、沥青及沥青焦不在本方法范围，不能遗漏这些实物后再使用本PCR。WCO 2706和2707/2708的分离与CPC 34540提供分类边界背景，不是焦油制造配方。`wco-hs-2022-ch27`; `un-cpc-3-2025`

不覆盖泥炭焦油、尚未审查的褐煤/其他矿物焦油路线、调配再造焦油、木焦油、焦油砂开采、石油焦化蜡油、下游化学精制或燃烧。仅支持CPC 33210中的煤干馏回收粗焦油子集，建议narrower，分类映射仍需主控独立接受。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.tar-distilled-from-coal-from-lignite-and-other-mineral-tars |
| classification_refs | CPC 3.0 33210; narrower |
| covered_products | 副产回收式煤焦炉分离的粗煤焦油，含实际采集限定的残余水；可含实际脱水但不分馏 |
| excluded_products | 泥炭焦油；未审查褐煤/其他矿物焦油；再造焦油；木焦油；馏分油；沥青；沥青焦；石油焦化蜡油 |
| representative_product | 厂界散装验收粗煤焦油 |
| production_route | 焦油—水冷凝液分离；实际脱水；储存、取样和交付 |
| market_state | 无独立游离水相的散装粗焦油；残余水、固体及质量限值实际声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为下游原料或已声明燃料原料供应粗煤焦油 |
| How much | 1 千克验收交付状态粗煤焦油 |
| How well | 煤干馏来源；无独立游离水相；实际水分、固体、元素C/H/O/N/S、验收规格及接收方 |
| How long or cycle | 声明的完整报告期内一次交付；不作使用寿命声明 |
| reference_flow_link | reference_tar |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 煤焦油 `7b09995f-2ee9-4584-b244-c2d84ea75585` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址；报告期；煤与焦炉路线；冷凝液界面；交付水分与取样方法；游离水与固体判定；实测C/H/O/N/S及有机硫；交付温度；验收规格；槽罐及库存；所有联产实物流向；上游清单及分配阶段；能源供方基准；废水/沉渣接收方；排放覆盖 |

必需限定信息在实际数据包中逐项声明；缺失时该数据包不完整。采集实际SKU/等级、组成、验收规格、供应与接收方、完整元素C/H/O/N/S检测及计量基准。广义煤焦油流只用于本PCR明确限定的煤干馏粗焦油，不代表任意数据库供方、密度、热值或产率已验证。另一煤焦油记录若限定固定热值等级，必须独立证明该等级兼容；广义记录没有热值限定不豁免另一记录的限定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference_tar | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_tar计量交付净质量，排除包装及独立游离水相；残余分散水是交付质量的一部分，水分作为补充字段。所有清单按每1千克同状态参考流归一。 |
| moisture_basis | condensate; reference_tar | Mass | kg | 保留冷凝液与成品实测含水、焦油和固体质量。若另报干焦油量，以实测水分和明确固体定义换算，仍保留交付状态分母；不得改成1千克干焦油分母。 |
| power_basis | electricity_low; electricity_medium; electricity_high | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 各电压接口采用原记录CN电网平均消费组合的净热值属性及MJ基准；按1 kWh = 3.6 MJ换算实测电量。供方地域、年份与损耗范围须匹配，内部表计不能与厂界交付重复合计。 |
| heat_basis | steam; recovered_heat; condensate_return | Mass; Energy | kg; MJ | 蒸汽行记录实际交付质量；回凝水另计。补充净热由同一报告期供汽与返回状态的实测焓差、回收率和损失核算，与背景参考量核对；蒸汽流带MJ属性本身不证明净交付热。独立热服务以供方定义一致的净交付MJ计量，不与载热蒸汽双计。 |
| species_basis | condensate; reference_tar; coal_water_recycle; coal_water_purge; tar_sediment_recycle; tar_sludge_waste; methane_air; co2_air; benzene_air; naphthalene_air; phenol_air; bap_air; ammonia_air; h2s_air; water_air | Mass | kg | 水及元素C/H/O/N/S的物种与元素基准分开保留；以实测物种和组成换算，不假设COD等于碳或氨氮等于NH3。空气基础流为厂界环境空气、未特指子介质；若实际子介质已知应使用兼容精确基础流，不能重复两份同一排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际汇集焦油—水冷凝液的接收边界；保留来源支路、水/焦油/固体/气体组成、质量、温度及上游清单 |
| starting_condition_role | 带上游负荷的真实混合中间物，非无负荷废物，非虚构外购已分离粗焦油 |
| product_classification_scope | CPC 33210中的煤干馏粗焦油子集；不覆盖34540独立蒸馏产品 |
| recursive_input_rule | 内部焦油循环保留实物图与库存；不作外购同物重新生产。同一冷凝液或残渣接口两端质量、组成及分配阶段相同，回送焦化必须闭合实际循环且不得循环重复上游负荷。 |
| upstream_dataset_requirement | 取得未分配焦化与煤气冷却联合清单及完整实物联产、按本方法一次分配，或取得阶段明确且分配完整的冷凝液供给；煤、焦炭、煤气、焦油、水及其他实际产品与废物均不得遗漏 |
| disclosure | 起点/终点、计量边界、单元重叠、实际脱水与加热、所有回用/排污/沉渣去向、C/H/O/N/S/水平衡、独立分馏排除及数据缺口 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_recovery | tar-recovery-delivery | 纳入分离器、实际脱水/沉渣清除、焦油储罐、取样和装车及实际控制装置；适用清洗、保温和能源均按实际独立计量。冷凝液形成、煤焦化与煤气主流程通过上游接口链接，不重复现场清单。 | `jrc-iron-steel-bref-2013` |
| boundary_outputs | all inventory rows | 任何去向的水、厚焦油、污泥、气体损失和所有实际实物共产品均保留；内部回用不等于环境排放。实际排放若不在预列物种中，必须增列一个经审计的原子流，不得丢弃或塞入总VOC/总PAH替代具体物种。 | `jrc-iron-steel-bref-2013` |
| boundary_distillation | reference_tar | 若实际产生独立馏分油或蒸馏沥青/沥青焦，必须使用适用分馏方法并保留所有馏分及残渣，本PCR不得冒充该交付范围。仅去除游离水/沉渣而不分级时可用本方法，并实测声明交付状态。 | `wco-hs-2022-ch27`; `un-cpc-3-2025` |
| boundary_interfaces | condensate; coal_water_recycle; tar_sediment_recycle | 上游全过程图保留真实煤、焦炭、煤气、焦油、苯类回收、硫/氨产品和全部实际气液固物流；只核算本前景跨界交换，不把上游联产品伪列成本单元输出。接口两端同量、同状态，未分配物理图与环境负荷账分别提供。 | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| tar-recovery-delivery | 焦油分离、适用脱水与交付 | `required` |  | 前景生产 | 每 1 kg 参考流 |

分离、储罐和装车聚合为一个前景单元，阶段仍独立计量；保留每个实际接收、分离、脱水、除渣、储存、验收与装车阶段、设备/表计覆盖、内部转移链接和期初/期末库存。同物内部转移不另列焦油产品输出，也不隐藏已知身份。热公用工程供给与返回独立于冷凝液物料水，源图两端保留同量；厂外处理链接接收过程。拒收交付、客户退货、返工、罐底残留与溢洒均按实际路径记录；退货不增加合格销量，内部循环不虚列采购。实际包装和维护须逐项采集材料/化学品、容器皮重、装载毛/净重、复用容器库存/返回、清洗/维修更换与废物，含实际使用的润滑剂或密封件；未使用时证明不存在。散装装载设备不能仅因盛装焦油就当作消耗性运输包装。

### 过程：焦油分离、适用脱水与交付（`tar-recovery-delivery`）

#### 输入

##### 产品流

###### 焦炉焦油—水冷凝液（`condensate`）

接收集气管、初冷和电捕焦油系统实际汇集的混合冷凝液。计量总管数量与组成；不得以已分离煤焦油代替，也不得重复合计总管与支路表计。

- 选定流：焦炉焦油—水冷凝液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_condensate采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_condensate`
- 来源：`jrc-iron-steel-bref-2013`

###### 交流电（`electricity_low`）

仅用于中国（CN）电网平均消费组合外部交付的低于1千伏电力。同一交付只计一次；内部变压不形成另一份外购电力。其他供给国家或路线须另选并验证兼容流，不能通过更改供方名称泛化此CN身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_electricity采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`jrc-iron-steel-bref-2013`

###### 交流电（`electricity_medium`）

仅用于中国（CN）电网平均消费组合外部交付的1–35千伏电力；保留供应方地域、年份、电压和损耗边界。其他供给国家或路线须另行验证兼容流。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_electricity采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`jrc-iron-steel-bref-2013`

###### 交流电（`electricity_high`）

仅用于中国（CN）电网平均消费组合外部交付的35–330千伏电力。电压边界重叠按实际供应方定义裁定；不得重复同一表计交付。其他供给国家或路线须另行验证兼容流。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用cp_electricity采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`jrc-iron-steel-bref-2013`

###### 供煤焦油回收使用的蒸汽（`steam`）

仅纳入实际安装的调质、保温或清洗供汽。记录质量、绝对压力、温度、干度及供方参考基准；任何固定压力等级记录均须与实测供汽等级匹配。由表压换算绝对压力须使用对应实测大气压力。

- 选定流：供煤焦油回收使用的蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_steam采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steam`
- 来源：`jrc-iron-steel-bref-2013`

###### 供煤焦油回收使用的回收工艺热（`recovered_heat`）

仅在实际运行且未由蒸汽行表示时纳入独立交付的热服务。按实际载热介质、返回状态及供方定义计量净交付热；不假设回收热无负荷。

- 选定流：供煤焦油回收使用的回收工艺热
- 流属性/单位：Energy / MJ
- 数量规则：采用cp_heat采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat`
- 来源：`jrc-iron-steel-bref-2013`

###### 工艺用水（`wash_water`）

记录实际分离器、储罐或装车管线清洗使用的经处理工业水，声明水质与供方。本前景之外的初冷用水在上游核算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_water采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-iron-steel-bref-2013`

#### 输出

##### 产品流

###### 煤焦油（`reference_tar`）

分离、实际脱水及厂界取样后的一份验收粗煤焦油交付。排除独立游离水相和运输包装；分散残余水须实测声明。

- 选定流：煤焦油 `7b09995f-2ee9-4584-b244-c2d84ea75585`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tar`
- 来源：`jrc-iron-steel-bref-2013`

###### 回送焦炉氨水循环的含氨煤水（`coal_water_recycle`）

计量分离后回送工艺回用的水相。它不是试剂级氨水，也不自动成为有市场共产品；记录溶解焦油、氨、酚及含硫物种。

- 选定流：回送焦炉氨水循环的含氨煤水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_water采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-iron-steel-bref-2013`

###### 煤焦油加热器返回的蒸汽凝结水（`condensate_return`）

将实际公用工程回水与煤水分开，测量质量、温度、压力及污染情况。若改为排污，应记录实际废物流向，不得又计供方回水。

- 选定流：煤焦油加热器返回的蒸汽凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_steam采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steam`
- 来源：`jrc-iron-steel-bref-2013`

###### 回送装煤系统的厚煤焦油沉渣（`tar_sediment_recycle`）

计量实际回送装煤的含多环芳烃厚焦油及夹带煤固体。保留接收方和组成；它不是蒸馏沥青，同一份残渣不得又计入处置行。

- 选定流：回送装煤系统的厚煤焦油沉渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_residue采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`jrc-iron-steel-bref-2013`

##### 废物流

###### 煤焦油回收含氨废水（`coal_water_purge`）

仅计量实际送蒸氨或废水处理的排污；清洗水只有确实进入同一已计量总管时才合并。保留污染物及处理链接；它不是向淡水排放的基础流。

- 选定流：煤焦油回收含氨废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_water采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-iron-steel-bref-2013`

###### 送厂外处理的煤焦油回收污泥（`tar_sludge_waste`）

记录实际移出厂界处理而未回送装煤的煤焦油回收污泥；声明水、煤粉、焦油、多环芳烃与元素组成并核实接收方。限定热值等级的残渣流必须独立证明等级兼容；不得假设热值。

- 选定流：送厂外处理的煤焦油回收污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_residue采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`jrc-iron-steel-bref-2013`

##### 基本流

###### 甲烷 (化石源)（`methane_air`）

仅纳入经计量或有根据的、控制措施后从本分离器、储罐或装车边界逸出的化石甲烷；不重复上游焦炉泄漏。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 二氧化碳（化石源）（`co2_air`）

仅当实际冷凝液脱气或已声明放空测量识别出二氧化碳并证明化石来源时纳入。进入载气的空气背景须另测；数据库碳系数、存在化石焦油或碳平衡差额均不证明CO2排放。所定义前景不含燃烧；公用工程生产排放归供给数据集。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 苯（`benzene_air`）

筛查并定量实际来自分离水相、焦油储存和装车的苯损失。区分气态与捕集液体数量；不采用历史挥发性有机物因子作为默认值。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 萘（`naphthalene_air`）

纳入回收或控制后实际排出边界的萘，并声明取样相态与排放位置。

- 选定流：萘 `fe0acd60-3ddc-11dd-a682-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 苯酚（`phenol_air`）

将实际苯酚空气损失与废水溶解苯酚及焦油保留苯酚分开；保留物种特定分析证据。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 苯并[a]芘（`bap_air`）

焦油气溶胶或含多环芳烃释放发生时须特定筛查苯并[a]芘。本行不是总多环芳烃或总颗粒物质量；保留相态与化学检测，不得重复计入汇总量与组分总量。

- 选定流：苯并[a]芘 `08a91e70-3ddc-11dd-9221-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 氨（`ammonia_air`）

定量煤水或冷凝液操作中的实际氨损失；使用NH3质量，不得未经明确换算采用氨氮指标。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 硫化氢（`h2s_air`）

定量控制后实际释放的硫化氢。在液体和固体检测中保留有机硫；检测到其他含硫排放物种时逐种另记，不得以硫或SO2替代H2S。

- 选定流：硫化氢 `08a91e70-3ddc-11dd-94a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

###### 水蒸气（`water_air`）

仅记录本前景实际蒸发与放空水。以一致气量、温度、压力和干湿基准计量入口载气湿度与出口含水；实物账保留入口/出口总水，仅将工艺净新增水归为蒸发。实际凝结或湿空气输入保留真实去向，不虚填零或强制正蒸发。交付焦油、回用水相、废水或公用工程回凝水中含水不得又作为蒸发量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用cp_air采集；报告每 1 kg 参考流的实物交换数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-iron-steel-bref-2013`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared upstream and foreground burdens | 优先细分直接归属的计量单元；系统扩展仅在研究目的与额外功能明确且可验证时采用。无法避免分配时证明有关物理因果关系；否则以同阶段、同期的实测数量与价格论证经济分配，并保留选择理由与敏感性。焦油不是因作为副产品就无负荷，也不默认按燃料热值分配。 | `eu-environmental-footprint-2021` |
| allocation_stages | condensate | 未分配联合清单路线须提供焦化、煤气冷却及回收分离的完整分配树与全部实物输出，证明每阶段共有负荷仅分配一次且各份额合计为1。已分配冷凝液路线须保留确切边界、分配方法、份额及包含的单元；不得再次分配其上游负荷，重叠单元必须消除。 | `eu-environmental-footprint-2021` |
| allocation_physical | all inventory rows | 质量/水/C/H/O/N/S平衡和内部接口先保留未分配实物量；报告每千克焦油的实物输出时仅除以验收焦油量，不能机械乘焦油负荷份额。环境负荷账对实际需要分配的输入与排放另作归属，并标记账本性质。真实回送煤水/沉渣不是替代信用，也不自动纳入经济共产品集合。 | `eu-environmental-footprint-2021` |
| allocation_waste | coal_water_purge; tar_sludge_waste | 废物保留实际组成、数量、接收与处理负荷；只有经证实可销售的实际共产品参与相应分配。源图内部回用必须闭合，不能同时报外排和回用，也不得借环境分配隐藏实物产品。 | `jrc-iron-steel-bref-2013`; `eu-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_condensate | tar-recovery-delivery | condensate | 实测与可追溯原始记录 | 冷凝液总管/支路计量与组成；水、焦油、固体、气体、C/H/O/N/S；温度；库存；上游源图与分配树 | 称重或经校准流量计并以同温度实测密度换算；代表性取样检测水分、焦油、固体与C/H/O/N/S，核对来源支路；取得完整上游清单或经说明的分配供给 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_tar | tar-recovery-delivery | reference_tar | 实测与可追溯原始记录 | 各交付净质量；水分；游离水；煤粉/固体；C/H/O/N/S；温度；取样代表性；验收规则；储罐初终库存 | 校准地磅或质量流量计计量净交付，扣除容器/包装与独立水相；分离器/储罐/装车阶段留存独立记录；经声明的代表性取样和经验证检测方法核对交付状态，不假设统一水分规格 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_electricity | tar-recovery-delivery | electricity_low; electricity_medium; electricity_high | 实测与可追溯原始记录 | 厂界供电表计；分表；电压；供方；地域/年份；损耗边界；kWh或MJ；设备工时 | 对泵、实际脱水设备、储存及装车分表计量或证明归属；用电压对应接口与供方基准换算，不加总整厂电量和其已包含分表 | MJ | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_steam | tar-recovery-delivery | steam; condensate_return | 实测与可追溯原始记录 | 供汽与回凝质量；压力/温度/干度；焓表或验证测量；供方参考量；回凝去向；吹扫/直接注汽；泄漏 | 校准计量供汽和回凝，同期采集供回状态并与供方质量/热量基准核对；直接注汽进入物料水平衡，间接供汽与回凝保持独立热回路 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_heat | tar-recovery-delivery | recovered_heat | 实测与可追溯原始记录 | 实际热服务及载热介质；供/回温压与流量；净交付焓；供方参考基准；上游回收热归属 | 经校准热量表或可追溯载热流量与焓差核算净交付热，并与供方定义逐项核对；不得与已记录蒸汽热同量重复 | MJ | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_water | tar-recovery-delivery | wash_water; coal_water_recycle; coal_water_purge | 实测与可追溯原始记录 | 每一实际用水/回用/排污表计；水相质量及组成；NH3、酚类、焦油、元素C/H/O/N/S和各含硫物种；水源；接收方；合流点 | 分别计量来源和去向，以现场温度密度换算水相质量；代表性检测水、溶解与悬浮成分；分离水只按实际流向一次核算。无合流的清洗排污另增原子废水行 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_residue | tar-recovery-delivery | tar_sediment_recycle; tar_sludge_waste | 实测与可追溯原始记录 | 沉渣/厚焦油称重；干湿基准；煤粉/焦油/水组成；C/H/O/N/S/PAH；库存；煤料回送/厂外接收凭证 | 称重并代表性取样；分开每一回用和处置流向及临时库存，匹配接收端实际组成与数量；不得用蒸馏沥青身份替代厚焦油 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |
| cp_air | tar-recovery-delivery | methane_air; co2_air; benzene_air; naphthalene_air; phenol_air; bap_air; ammonia_air; h2s_air; water_air | 实测与可追溯原始记录 | 排口与无组织源；释放环境；设备工况；控制前后；实际气量；组分浓度；温压/湿干基准；采样相态；方法检出限/校准；完整覆盖 | 建立分离器、储罐和装车排放源清单；以经验证的适用采样/分析方法、气量和工况时段实测物种排放或声明可审核估算，针对相态保留气/气溶胶采样。测量入口环境湿度和CO2背景及出口浓度与对应气量；保留进出总量后核算工艺净新增水蒸气；检出限不是零。量化缺失或遗漏物种时数据包不得声称完整 | kg | 每次转移/验收；连续表计；代表性工况取样；报告期库存核对 | 同一完整报告期 | 声明的焦油回收、储存与交付边界 | 每 1 kg 参考流 | 校准、代表性、原记录、供应/接收证明、库存与测量不确定度 |

选用经济分配时采集同阶段经济原记录：验收数量、等级、含水/固体基准、同期单价、币种、发票日期、税费、运输费、折扣、退货和排除项。价格换算为明确披露的一种货币及同一厂界；产品i的收入为同阶段验收数量乘可比净单价，其份额为该收入除以所有合格实际共产品收入总和。废物处理费与产品收入分开，各阶段份额须证明合计为1。先核对生产、交付和库存再构造分配数量，不能从单一销售发票推断分配，也不能把收入份额乘到实物转移量。`eu-environmental-footprint-2021`

实物组成账除全部工艺气液固物流外，还保留入口与出口载气总量，包括湿度、背景CO2及N2/O2。实际耗氧或含氮转化须有证据；环境载气穿过边界不等于新产生的污染。水是湿物流组成，不能再额外加到同一物流总质量。已在排放物种、溢洒或废物输出中记录的损失，不再另加平衡损失；未解释差额保留缺口，不虚构交换。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 将同一报告期每一实物交换数量除以同期验收交付焦油净质量；reference_tar固定为1千克。保留库存增减作为实物图核对项，不将库存变化虚列成另一份交付；环境负荷归属在独立账本实施。 | cp_tar; relevant collection protocol | 每 1 kg 参考流实物交换 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_physical_balance | all inventory rows | 在分配前按整个报告期核对：输入加期初库存等于全部气液固输出加期末库存及经证明损失。分别对水及每个元素C/H/O/N/S闭合；所有气体/液体/固体组分和库存采集同一基准，不用COD代替C，不用总硫替代实际排放物种。与声明测量不确定度比较差异并调查，不能设虚构平衡容差。间接供汽/回凝单列热回路，直接注汽计入物料水。 | 实物图、采样、库存和接口两端原记录 |
| quality_energy | all inventory rows | 在同一完整边界和报告期核对供电与净交付热、载热介质进出焓、物料显热/潜热、库存能量变化及有证据损失。声明参考状态和实测属性；实测供回差与实际除水量支撑脱水能量账。化学能仅在独立论证的实测组成/热值基准上纳入，不用通用焦油或污泥系数。不能将载热介质与其热服务双计，也不能用虚构数量平衡未解释损失。 | 阶段表计、焓方法、库存与能量账 |
| quality_upstream | condensate | 取得完整焦化—煤气冷却实物与环境负荷账，含焦炭、煤气、焦油、实际苯类/氨/硫产品、所有废水/固废和能量。验证既有数据包是否已包含本分离器或交付单元；删去重复单元需原始证据，不能以供应名称猜测。 | 上游过程清单、分配树与操作图 |
| quality_identity | all inventory rows | 空UUID保留物理具体性并在数据包中解决确切流与供应/处理链接；不能把基础设施连接失败记成无匹配。身份已确定也须另核现场质量、组成、压力、电压、介质与供方参考量，不能以数据库次级因子代替现场数据。 | 流原件、供方/接收数据与实际采集 |
| quality_coverage | all inventory rows | 记录每项适用、实际不存在、未量化或身份待定；无证据不得填零。所有实际化学品、直接燃料、包装或控制装置消耗若出现须逐项扩展原子清单并核实来源；实际锅炉需单独有证据的供热单元，不能隐入本分离单元且只报供汽。 | 完整计量覆盖图、方法与缺口披露 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_tar | 必须恰有一个本前景焦油成品输出，1千克交付状态，与参考链接、双语分母和协议一致；若为独立蒸馏馏分或沥青则拒绝适用。 | `wco-hs-2022-ch27`; `un-cpc-3-2025` |
| validate_material | all inventory rows | 核对未分配质量/水/C/H/O/N/S图和库存、上游真实所有联产与接口两端同量。内部回用、回凝、废水及沉渣不能被分配份额缩小后作为实物平衡；差异、未知组分或缺失计量保留未决。 | `jrc-iron-steel-bref-2013` |
| validate_allocation | condensate; shared burdens | 核对上游未分配/已分配路线、阶段范围、份额合计和直接归属证据，确保共有负荷不重复分配；无分配证据不得报告完整焦油供货环境负荷。 | `eu-environmental-footprint-2021` |
| validate_species | all inventory rows | 逐行核对原子性、UUID、中文原名、流类型、参考属性/单位及空气介质；排放物种、煤水污染物和上游气液固边界需覆盖。缺失检测、身份或供方条件不因静态方法检查通过而解决。 | `jrc-iron-steel-bref-2013` |
| validate_heat | steam; recovered_heat; condensate_return; electricity_low; electricity_medium; electricity_high | 核对实际供汽压力及焓基准、回凝去向、净交付热和电压/供方范围；阻止载热蒸汽与热服务、电压层级与内部表计双计。数量或背景基准未知时数据包链接不完整。 | `jrc-iron-steel-bref-2013` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 原始前景焦油供给过程；附独立实物与归属负荷账 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在实测交付状态、上游分配与供方基准兼容时，供应煤干馏回收粗煤焦油 |
| excluded_use | 独立蒸馏产品；未审查矿物/泥炭/木焦油；无负荷副产品；以煤气参考代替焦油；完整PEF符合性声明 |
| required_metadata | 全部参考限定信息；实际过程边界和工艺；实物平衡及分配树；原记录与接口 |
| required_quality_disclosure | UUID待定、供方基准、未量化排放、采样覆盖与不确定度、实测/估算区分及所有缺口 |
| update_trigger | 煤与焦炉路线、冷凝液来源、分离/脱水/交付技术、产品状态、上游分配或供方/接收方发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-iron-steel-bref-2013 | `official_guidance` | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 2013; EUR 25521 EN; DOI 10.2791/97469; 5.1.4.3–5.1.5，PDF247–249/印刷219–221；5.2.2.3，PDF261/印刷233。分离、煤水与厚焦油/残渣定性边界；欧洲技术证据，不采用历史产率、排放或残渣因子。 |
| eu-environmental-footprint-2021 | `official_guidance` | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 2021; Annex I 4.5，PDF/印刷63–64；通用多功能分配层级作为方法选择，不采用4.5.1畜牧或造纸专用规则，不声明完整PEF符合性。 |
| wco-hs-2022-ch27 | `official_guidance` | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0527_2022e.pdf?la=en | 2022; Chapter27 PDF2，2706/2707/2708；脱水/部分蒸馏焦油与独立馏分/沥青分类边界；仅分类背景，不证明特定工艺、数量或CPC-HS正式对应。 |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2025-06-30; 原始CSV按LF计数1351、1353、1458行，33210/33220/34540；类别识别，不是制造证据或映射接受。 |

方法不提供通用数量默认值；每一实物交换依据明确现场采集协议。源文件中的历史单厂或行业表仅用于限定定性上下文，不移植为配方或校验区间。
