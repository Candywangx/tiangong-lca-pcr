---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.beet-pulp-and-other-waste-of-sugar-manufacture
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 甜菜粕及其他糖业废物——鲜态未加糖蜜压榨湿粕

## 1. 范围与适用性

本PCR保留甜菜粕及其他糖业废物的既有canonical身份，但本稿仅构建一个较窄终端：蔗糖浸出后的糖用甜菜粕，经机械压榨、未加糖蜜、未干燥造粒、未青贮及未经有意发酵，作为一种饲料原料鲜态放行。功能是向声明接收方提供一次合格供货，不是动物生产或营养功能等效服务。制造者家族与历史独立工序证据在此透明综合，不冒充同SKU或同厂清单。本叶其他残余物仍不在本方法范围。

实物前景始于声明的浸出粕或已压榨粕交接，纳入直至首次整体质量放行仍实际需要的作业。供方甜菜供应、洗切浸出及真实共同负荷连同原方法承接一次；只有交接尚未包含压榨时才实际压榨。放行后直至厂门发运的持留、搬运及装车仍以独立服务账保留，并链接实际受服务批次。不假定实施干燥、加糖蜜、造粒或青贮。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.beet-pulp-and-other-waste-of-sugar-manufacture |
| classification_refs | CPC 3.0:39149，鲜态压榨湿粕范围以正式分类裁定为准 |
| covered_products | 糖用甜菜浸出残余物经机械压榨后作为一种未加糖蜜的鲜态湿饲料原料供货；未经有意青贮或发酵 |
| excluded_products | 甘蔗渣（39141）；糖蜜；原甜菜根或根叶碎料；以未压榨浸出粕为成品；干粕或颗粒粕；加糖蜜粕；青贮粕；发酵基质；碳酸饱充滤泥；淀粉残渣；配合饲料；一般有机废物 |
| representative_product | 供声明饲料接收方的未加糖蜜压榨湿甜菜粕；首次质量放行时的鲜态散装物料 |
| production_route | 甜菜供应及洗切浸出通过一次经核对的上游交接承接；尚未完成时实施真实压榨；输送；取样；首次放行；另列厂门储存装卸服务 |
| market_state | 湿态压榨纤维物料；实际温度与湿质量；逐批实测干物质；不假定含水率或动物营养功能等效 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应一种真实合格的鲜态压榨甜菜粕饲料原料 |
| How much | 首次整体放行时1千克净湿质量 |
| How well | 满足声明接收方及供方饲料规格；证明全部必需限定信息；不假定营养功能等效 |
| How long or cycle | 声明榨季及可实现鲜态供货时限内的一次首次质量放行 |
| reference_flow_link | reference_pressed_pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 未加糖蜜鲜态压榨湿甜菜粕 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 糖用甜菜来源; 浸出供方及榨季; 浸出粕身份; 压榨履历; 未加糖蜜证明; 未干燥和未造粒证明; 未青贮及未经有意发酵证明; 接收方及单一饲料原料用途; 供方规格及版本; 湿态净质量与皮重; 干物质结果与方法; 含水结果与方法; 残糖结果与基准; 异物和卫生放行; 助压剂身份及残留; 实际温度; 放行与发运时间; 允许储运时限; 法律上的产品或废物状态; 包装状态; 首次放行批次编号; 期初期末WIP与FG; 继承负荷向量; 分配交接与共同门; 地理及时间范围 |

每项限定信息均须在数据包中声明并给出真实证据。参考名称是尚无经核验UUID的物理候选，不声称已完成Tiangong绑定。供方特定鲜用短时限须区别于干颗粒或青贮产品储存指导。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference` | 参考产品 | Mass | kg | 以首次整体饲用质量放行时的1千克净湿压榨粕为参考。Q为H期间该精确状态的实测首次放行量之和；干物质不是Q。包装及在规定称量点前另行排出的游离水不计入净质量。 |
| `mu_dry_bridge` | 每种湿粕流 | Mass | kg | 记录相同状态的湿质量W及独立取样的干物质分数d；干质量D = W × d及持留水 = W × (1 − d)均为非叠加子账。不得把D加到W上或按假定水分倒算W。 |
| `mu_raw_units` | 所有清单行 | Declared numerator property | kg or kWh or MJ | 保留各原始计量单位。需要时按1000将吨换算为千克、按3.6将千瓦时换算为兆焦，并保留实际属性。真正速率只按记录区间积分一次；累计体积已经完成积分。体积换质量须有该物质在实测状态的独立密度。 |
| `mu_press_water` | 压榨液及持留水 | Mass | kg | 实测湿粕投入、压榨产出和含溶出固形物的压榨液。分别核对水及干物质守恒；返回浸出的压榨液是配对内流或明确对外交接的Product回流，不是新水消耗，也不得同时作废水。一个残差不能确定两个未知量。 |
| `mu_energy` | 热与电 | Energy | MJ or kWh | 电力单独计量。若清洗真实使用外购蒸汽，须采质量、压力、温度、干度、焓、冷凝回流及供方水能约定。热能和载热体质量是相互关联的视图；不得重复计入供热或虚构锅炉燃料。 |
| `mu_once` | 所有清单行 | Declared numerator property | per 1 kg reference flow | 区分实物总跨越量V与已归属继承负荷A。采集保留原始F及存量向量；第8节仅在Q > 0时计算一次A/Q。H只是观察期。Q = 0仍保留真实负荷及存量归属，但不输出单位结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 起点二选一并明确声明：浸出交接点的鲜态未压榨糖用甜菜粕，或供方交接点已压榨的合格粕。上游甜菜种植供应、洗切浸出及糖/粕/糖蜜共同负荷承接一次。 |
| starting_condition_role | 经核对的中间制造交接；明确实物状态及上游负荷 |
| product_classification_scope | CPC 3.0:39149内较窄的合格鲜态压榨饲料原料终端；本叶其他残余物不在范围内 |
| recursive_input_rule | 已购压榨粕及真实退货保留原批号并承接一次继承向量；不得重做不存在的压榨、重复上游供应或将重复放行算入新Q。 |
| upstream_dataset_requirement | 取得一个实际供方交接，含状态、批次、上游过程清单、细分分配方法、共同门数量和负荷向量；链接种植及各真实公用工程和材料供方。流名称本身不证明背景供方适配。 |
| disclosure | 披露全部物理门、继承向量、首次放行Q、存量变动、真实放行后服务、损失、失败批、退货、质量时限、来源限制及未绑定身份。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_scope` | 路线 | 纳入真实接收、必要时压榨、输送、短暂持留、称量、取样、饲用质量放行、清洗及实际厂门服务。在声明厂门交接处终止；上游供应链接一次，并披露不含下游运输、储存、饲喂及青贮。 | `sudz-pressed-pulp`; `sudz-feed-route`; `epa-ap42-beet-1997`; `vdz-beet-pulp-2005` |
| `sb_state` | 合格参考状态 | 证明糖用甜菜浸出来源、压榨、未加糖蜜、未干燥造粒、未青贮及未经有意发酵。仅称糖业制造或一般废物不足。真实发生的排除工序仍保留实绩负荷，并触发独立范围判断，不得删去。 | `sudz-pressed-pulp`; `sudz-feed-route`; `nord-beet-pulp`; `sudz-bisz-pressed`; `vdz-beet-pulp-2005` |
| `sb_joint` | 供方交接 | 区分产品资格、法律处置状态和分配。湿态、低价、饲料买方或waste名称均不证明零继承负荷。不得把糖专属结晶干燥或碳酸饱充滤泥虚构为粕专属过程；供方证据须界定共同及专属阶段。 | `epa-ap42-beet-1997`; `ilcd-allocation-2010` |
| `sb_loops` | 压榨液及内流 | 只有匹配端点的内流才能抵消。返回外部浸出机的压榨液须实测交接并约定固形物、水和负荷；不得再计为外部新水、废水、第二产品收入或自动信用。实际排放压榨液走独立废物路线。 | `epa-ap42-beet-1997`; `ilcd-allocation-2010` |
| `sb_physical` | 存量及全部物料出口 | 制造、FG服务及合并物理账使用同一湿态。纳入期初期末WIP、待验、失败、启停、空转、清洗、返工、样品、腐败、泥砂、实际排水和蒸发。实物质量绝不乘环境负荷份额。 | `epa-ap42-beet-1997`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010` |
| `sb_expansion` | 其他真实交换 | 条件卡是具体身份的可能交换，不声称现场使用。模型完成前，须将实际存在但未列的每种试剂、外购制剂、载能体、备件、包装、残余物及环境物种各自补为实测交换；不得藏入other或zero集合。外购制剂整份采购一次，组分分析及载水仅作非叠加子账。 | `epa-ap42-beet-1997`; `vdz-beet-pulp-2005` |
| `sb_classification` | 分类范围 | 甘蔗渣归39141，淀粉制造残渣归39130；糖蜜及未加工甜菜根仍是独立产品。本记录不声称覆盖39149所有残余物或任何混合饲料配方。 | `un-cpc3-notes-2025` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pressing` | 浸出湿粕机械压榨 | conditional | 仅用于真实未压榨浸出粕起点；已压榨供货不再压榨 | 前景制造 | pressed_pulp_transfer |
| `release_handoff` | 输送与首次饲用质量放行 | required | 所有合格路线；保留真实准备及清洗 | 前景制造 | reference_pressed_pulp |
| `gate_service` | 已放行粕厂门持留及发运服务 | conditional | 直至声明门的真实服务；链接旧批及本期FG | 独立放行后批次服务 | gross_dispatch_pulp |

以下卡片均采用同一每1千克参考流基准。采集保留原始分子，卡片数量引用cr_inventory_once的唯一结果。实物内流配对可分别出现在单元过程，但在合并边界抵消。不得把参考放行及服务总发运相加为两份制造产品。条件项缺省须有记录；真实未列交换须新增原子卡。

### 过程：浸出湿粕机械压榨 (`pressing`)

#### 输入

##### 产品流

###### 压榨前浸出粕接收 (`extracted_pulp`)

仅用于已结束糖浸出而尚未压榨的真实投入。称量完整湿粕并测定干物质及持留水；供方上游负荷向量承接一次。它不是成品参考产品。

- 选定流：未压榨湿态糖用甜菜浸出粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pulp_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pulp_pressing`
- 来源：`sudz-feed-route`; `epa-ap42-beet-1997`

###### 压榨驱动电力 (`press_electricity`)

计量压榨驱动及其可归属附属设备，包括真实启机、失败批及空转耗电；不预设电压、发电组合或供方适配。 实际交流电按kWh采集；绑定前须核验具体流身份及属性/单位链，供方适配另行确认。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_energy_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_pressing`
- 来源：`epa-ap42-beet-1997`

###### 硫酸钙助压剂 (`press_aid`)

仅真实使用时纳入。整份供货制剂采购一次，记录水合状态、组成、载体及投加；活性硫酸钙及制剂水是子账，不是另一次外购投入。不假定固定品级或使用许可。

- 选定流：整份外购硫酸钙助压制剂
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_pressing`
- 来源：`sudz-bisz-pressed`; `vdz-beet-pulp-2005`

###### 设备润滑剂 (`lubricant`)

仅声明机械实际使用的供货制剂；核对组成和适配。分别记录补充、回收、泄漏及废弃，不假定全部领用油均排放。

- 选定流：供货态食品接触适配齿轮润滑油
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_pressing`
- 来源：`vdz-beet-pulp-2005`

###### 替换压榨螺杆件 (`steel_spare`)

仅该路线真实可归属的维修更换。测定实物件质量及服务分配，不假定每件质量。拆下件另列废物交换。

- 选定流：钢制压榨螺杆替换件
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_pressing`
- 来源：`ilcd-allocation-2010`

#### 输出

##### 产品流

###### 待质量放行压榨粕 (`pressed_pulp_transfer`)

真实压榨排料是向release_handoff的内流，批号、湿质量、干物质及负荷向量逐项匹配；不是第二参考产出或新销售。保留期初期末压榨WIP。

- 选定流：放行前未加糖蜜压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pulp_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pulp_pressing`
- 来源：`sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### 返回浸出的压榨液 (`press_liquor_return`)

仅用于真实配对内回流或明确对外Product交接；保留溶出固形物、水、温度、接收方及供方约定。同一流不得同时申报新水或弃置废水；不自动记信用。

- 选定流：供浸出回用的甜菜粕压榨液
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_water_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_pressing`
- 来源：`epa-ap42-beet-1997`; `ilcd-allocation-2010`

##### 废物流

###### 弃置压榨液 (`press_liquor_discard`)

仅在真实弃置而未返回浸出时纳入；独立称量计量并取样其水及溶解有机物；链接实际处理去向。不得把COD当成化学物质量。

- 选定流：弃置糖用甜菜粕压榨液
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_water_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_pressing`
- 来源：`epa-ap42-beet-1997`

###### 回收废润滑油 (`used_oil`)

仅向真实废物接收方交付的收集废油，区别于泄漏至已知环境介质的油。选择背景身份前表征完整收集废物。 采集真实单一废润滑油流及去向；具体流身份仍待核验，不预设处理信用。

- 选定流：废润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_pressing`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### 拆下压榨螺杆 (`removed_steel`)

仅真实拆下件；实物质量、污染及去向独立于替换件及其已分配负荷记录。

- 选定流：拆下钢制压榨螺杆件
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_pressing。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_pressing`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

### 过程：输送与首次饲用质量放行 (`release_handoff`)

#### 输入

##### 产品流

###### 来自真实压榨机的压榨WIP (`pressed_pulp_internal`)

与pressed_pulp_transfer精确匹配内流；仅合并两个已纳入过程时抵消。保留期初WIP负荷和本期压榨负荷，不再采购一次上游。

- 选定流：放行前未加糖蜜压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pulp_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pulp_release_handoff`
- 来源：`sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### 已压榨合格粕供应 (`purchased_pressed_pulp`)

这是extracted_pulp的替代起点。核对既有压榨及鲜态未加糖蜜硬面，承接已含压榨的一次上游向量；不得虚构再次压榨。不同供应路线按批次分开。

- 选定流：供货态未加糖蜜压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pulp_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pulp_release_handoff`
- 来源：`sudz-pressed-pulp`; `sudz-feed-route`

###### 输送放行电力 (`release_electricity`)

计量输送、取样称量设备及可归属空转清洗负荷；核对厂级电表，并另列放行后服务。 实际交流电按kWh采集；绑定前须核验具体流身份及属性/单位链，供方适配另行确认。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_energy_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_release_handoff`
- 来源：`sudz-pressed-pulp`; `epa-ap42-beet-1997`

###### 清洗水 (`wash_water`)

仅纳入真实外部清洗水投入；记录供水品级及全部质量。内部压榨液不作为该采购；已购清洗制剂中的水不得再次采购。 采集真实液态清洗供水的品质和质量；具体流身份仍待核验。

- 选定流：工艺用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_water_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_release_handoff`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 氢氧化钠清洗制剂 (`sodium_hydroxide_cleaner`)

仅真实使用该清洗剂时纳入；按一份整制剂采购质量及实测活性组分、载体子账采集。若厂内配制，以逐种外购原料、配制能耗及损失替代该采购，不得叠加两条路线。

- 选定流：整份外购氢氧化钠水溶液清洗制剂
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_release_handoff`
- 来源：`vdz-beet-pulp-2005`

###### 次氯酸钠清洗制剂 (`hypochlorite_cleaner`)

仅真实使用时纳入该消毒剂；记录整制剂、浓度、真实适配及去向。一般卫生来源不证明实际采用或允许该化学品。

- 选定流：整份外购次氯酸钠水溶液清洗制剂
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_release_handoff`
- 来源：`vdz-beet-pulp-2005`

###### 外购清洗蒸汽 (`cleaning_steam`)

仅实际供应时纳入；保留压力、温度、干度、比焓及同一载热体质量。链接唯一供方热账及其用水约定；不得虚构干燥器、锅炉或另一份购热。

- 选定流：外购清洗用水蒸汽
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_heat。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`epa-ap42-beet-1997`

#### 输出

##### 产品流

###### 首次放行合格鲜态压榨粕 (`reference_pressed_pulp`)

唯一参考行。Q按声明饲料接收方的首次整体合格放行计完整批次一次，包括合格期末FG；排除期初已放行FG、重复检验放行、内部转移及不合格批。后续储存装卸作为服务，不作新增生产。

- 选定流：未加糖蜜鲜态压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`sudz-pressed-pulp`; `sudz-feed-route`; `vdz-beet-pulp-2005`

###### 清洗蒸汽冷凝水回流 (`condensate_return`)

仅真实对外Product回流，配对cleaning_steam并按实际温度焓计量；记录损失及供方约定。若实际排放，以独立去向废物卡记录，不得两者并计。

- 选定流：返还供方的液态清洗蒸汽冷凝水
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_heat。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：`epa-ap42-beet-1997`

##### 废物流

###### 不合格或腐败湿粕 (`rejected_pulp`)

逐批记录所有真实不具饲用资格的湿粕、原因、湿干质量及实际处置。不合格排除Q资格，但不删除实物或上游负荷；另作有用产品须另有规格及分配判断。

- 选定流：不合格湿态糖用甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_release_handoff`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 弃置粕样品 (`quality_sample_waste`)

破坏性样品按实际去向记录一次，不算放行供货。若退回WIP，则记匹配内流而非废物产出。

- 选定流：弃置糖用甜菜粕质量样品
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_release_handoff`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 分离泥砂 (`separated_soil`)

仅真实物理分离的污染泥砂，独立称量；灰分分析是非叠加指标。不得虚构饱充滤泥或将全部矿物残余认作碳酸钙。

- 选定流：从湿态甜菜粕分离的泥砂
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_release_handoff`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 清洗废液 (`cleaning_effluent`)

计量完整水相废液及其溶解悬浮部分，记录实际处理接收方。COD、氮、TOC及总固形物是监测分区，不是附加分子流；真正物种只在其环境出口另列。

- 选定流：湿粕设备清洗废液
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_release_handoff`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

##### 基本流

###### 向空气蒸发的粕中水 (`water_vapour_release`)

仅实际发生的水蒸发；独立计量，或在其他未知量均已测定时采用受约束守恒。它不证明实施干燥；记录温度，区分冷凝水与持留水。 此绑定为水蒸气，CAS 7732-18-5，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。

- 选定流：water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_release_handoff。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_release_handoff`
- 来源：`epa-ap42-beet-1997`

### 过程：已放行粕厂门持留及发运服务 (`gate_service`)

#### 输入

##### 产品流

###### 进入厂门服务的已放行粕 (`released_pulp_service_in`)

配对首次放行内流；期初FG及对外退回的旧批另行保留。这不是采购或新Q。合格首次放行量已包含于期末FG。

- 选定流：未加糖蜜鲜态压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_fg。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`sudz-pressed-pulp`

###### 外部退回鲜态压榨粕 (`returned_pulp`)

仅真实外部退货；追溯原交付及负荷冲回、质量和真实增量返工。接收、重称或重验旧放行不产生新Q。腐败或发酵退货保留实物，不得重新成为本范围合格产品。

- 选定流：退回未加糖蜜压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_fg。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`

###### 厂门搬运电力 (`service_electricity`)

实际放行后输送、储存及装车电力进入所服务批次的独立服务账，包括期初FG。向相关批次承接一次；储存不得形成新产品放行。 实际交流电按kWh采集；绑定前须核验具体流身份及属性/单位链，供方适配另行确认。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_energy_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_gate_service`
- 来源：`sudz-pressed-pulp`; `ilcd-allocation-2010`

###### 装载机柴油 (`diesel_loader`)

仅真实厂内柴油装载机，不是粕干燥器或假定公路货运服务。记录整份燃料及分析，核对燃料存量并采真实物种尾气。 此绑定识别按质量计量的整份柴油，牌号、配方、密度、热值、炼制路线、供应地域及供方均未特指。另行核对唯一实际燃料供应及碳来源；它不是已燃烧燃料服务、生物来源声明、燃料体积密度或默认热值因子。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_material_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material_gate_service`
- 来源：`epa-ap42-beet-1997`

###### 聚乙烯运输衬膜 (`polyethylene_film`)

仅真实防护衬膜；鲜态散装若记录未使用则不纳入。不得从网页图标推断纸箱或把青贮膜引入合格制造。按独立包装存量账核对。 此绑定为聚乙烯薄膜，CAS 9002-88-4，其聚乙烯片膜同义名及PE膜说明相互一致。原生CPC 29220箱包分类与这些一致物理身份字段不符，应披露此孤立分类缺陷，不把它作为运输衬膜或食品接触品级证明。备注将PET描述为竞争的独立聚酯，而非所选PE物料。须核对真实单一衬膜组成、厚度、品级及供方；不得绑定PET膜、混合聚合物层压膜、挤出加工服务或青贮作业。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pack。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`sudz-pressed-pulp`

###### 聚丙烯运输袋 (`polypropylene_bag`)

仅同一合格鲜态产品实际装袋时纳入；保留皮重与组成。散装示例来源不证明该包装。重复使用不再算采购，袋质量不加到Q。

- 选定流：湿粕运输用编织聚丙烯袋
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_pack。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`sudz-pressed-pulp`

##### 基本流

###### 装载机消耗大气氧 (`combustion_oxygen`)

仅条件柴油装载机真实化学耗氧；保留燃料分析与氧及物种守恒。穿过设备的未反应大气氮氧保留在非叠加气体背景账，不是第二份燃料或购能。 此绑定为分子氧，CAS 7782-44-7，作为取自空气的资源输入，而非氧排放或外购氧商品。仅记录真实化学消耗；穿过设备的空气不增加为第二份燃料或购能。不得使用排向空气的氧变体。

- 选定流：oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`

#### 输出

##### 产品流

###### 已放行粕实物总发运 (`gross_dispatch_pulp`)

发运质量仅是服务实物出口，可含期初FG及再交付；须用批次履历并对退货冲回原交付。不得把它加到首次放行参考行作为另一份制造产出。

- 选定流：未加糖蜜鲜态压榨湿甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_fg。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`sudz-pressed-pulp`; `ilcd-allocation-2010`

##### 废物流

###### 厂门持留腐败 (`service_spoilage`)

真实放行后损失按原批次保留原制造及增量服务负荷，不抹去已经记录的实物放行，也不产生负生产。

- 选定流：厂门持留腐败湿态甜菜粕
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_gate_service`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### 弃置聚乙烯衬膜 (`used_film`)

仅实际膜处置；分别记录对外退回、可复用存量及随粕发运附着物。不在未经独立论证时记回收信用。

- 选定流：弃置聚乙烯运输衬膜
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_gate_service`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

###### 弃置聚丙烯袋 (`used_bag`)

记录该袋废物、去向及残余污染；保留复用袋仍是存量，不作废物或负采购。

- 选定流：弃置编织聚丙烯运输袋
- 流属性/单位：Mass / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_residue_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_gate_service`
- 来源：`sudz-pressed-pulp`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010`

##### 基本流

###### 向空气排放的化石来源二氧化碳 (`fossil_co2`)

仅在真实柴油燃烧发生该物种时纳入。保留分物种计量模型、来源及空气介质；不得将NOx或VOC总量虚构成某物种，也不得套用粕干燥器因子。 此绑定为二氧化碳（化石源），CAS 124-38-9，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。 此UUID仅在整项所表示交换有证据属于化石碳来源时使用，不得仅凭一般柴油名称或路线推定碳来源；否则保留原实物行而不使用此绑定，并逐一解决真实碳来源流。

- 选定流：carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`

###### 向空气排放的一氧化碳 (`carbon_monoxide`)

仅在真实柴油燃烧发生该物种时纳入。保留分物种计量模型、来源及空气介质；不得将NOx或VOC总量虚构成某物种，也不得套用粕干燥器因子。 此绑定为一氧化碳（化石源），CAS 630-08-0，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。 此UUID仅在整项所表示交换有证据属于化石碳来源时使用，不得仅凭一般柴油名称或路线推定碳来源；否则保留原实物行而不使用此绑定，并逐一解决真实碳来源流。

- 选定流：carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`

###### 向空气排放的一氧化氮 (`nitrogen_monoxide`)

仅在真实柴油燃烧发生该物种时纳入。保留分物种计量模型、来源及空气介质；不得将NOx或VOC总量虚构成某物种，也不得套用粕干燥器因子。 此绑定为一氧化氮，CAS 10102-43-9，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。

- 选定流：nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`

###### 向空气排放的二氧化氮 (`nitrogen_dioxide`)

仅在真实柴油燃烧发生该物种时纳入。保留分物种计量模型、来源及空气介质；不得将NOx或VOC总量虚构成某物种，也不得套用粕干燥器因子。 此绑定为二氧化氮，CAS 10102-44-0，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。

- 选定流：nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`

###### 装载机燃烧向空气排出的水蒸气 (`combustion_water`)

仅实际发生该物种时纳入。按燃料氢分析及物种守恒保留真实燃烧水，区别于粕蒸发和蒸汽冷凝水。 此绑定为水蒸气，CAS 7732-18-5，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 装载机燃烧向空气排出的二氧化硫 (`sulfur_dioxide`)

仅实际发生该物种时纳入。仅该装载机燃料及路线支持的真实测量或模型二氧化硫，不套糖厂硫炉或干燥器排放。 此绑定为二氧化硫，CAS 7446-09-5，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。

- 选定流：sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 向空气排放的化石来源甲烷 (`fossil_methane`)

仅实际发生该物种时纳入。仅有路线证据的真实燃料未燃甲烷，来源身份独立于腐败生物甲烷。 此绑定为甲烷 (化石源)，CAS 74-82-8，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。 此UUID仅在整项所表示交换有证据属于化石碳来源时使用，不得仅凭一般柴油名称或路线推定碳来源；否则保留原实物行而不使用此绑定，并逐一解决真实碳来源流。

- 选定流：methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 向空气排放的生物来源二氧化碳 (`spoilage_co2`)

仅实际发生该物种时纳入。仅腐败粕实际生物排放，保留碳来源及时间。变质是真实损失，不是合格发酵制造或自动碳中和。 此绑定为二氧化碳（生物源），CAS 124-38-9，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。 生物来源必须对应真实变质甜菜粕的碳，不是避免化石排放或固碳信用。

- 选定流：carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

###### 向空气排放的生物来源甲烷 (`spoilage_methane`)

仅实际发生该物种时纳入。仅具有独立状态证据的腐败物料真实甲烷，不假定厌氧份额或替代燃料信用。 此绑定为甲烷 (生物源)，CAS 74-82-8，仅用于实际排向空气且空气子介质未特指的排放；不是资源摄取、排向水土或室内、城区、高烟囱、平流层、长期排放变体。保留真实来源及介质证据；若实际要求其他原生变体，应保留完整实物交换并选择经核实的相应身份，不得抹去或缩减其质量。 生物来源必须对应真实变质甜菜粕的碳，不是避免化石排放或固碳信用。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`（所核原件中文名称不可用）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节规定的本行唯一归一化结果；原始记录来自cp_species_gate_service。不再作第二次除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_gate_service`
- 来源：`epa-ap42-beet-1997`; `vdz-beet-pulp-2005`

## 7. 分配与共产品处理

以下规则仅适用于确需分配的归因多功能过程；先技术分离再划分环境负荷，绝不改变实物账。真实产品废物状态及回流端点均需各自证据。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_context` | 归因共同负荷 | 此层级仅用于明确的归因建模且确需分配的情形。先按实测细分专属过程，再作技术上有据的虚拟细分。粕专属压榨、输送及合格供货负荷归粕一次；糖或糖蜜专属后处理不进入该专属账。 | `ilcd-allocation-2010` |
| `al_causality` | 每个剩余共同交换 | 对每个剩余共同交换识别决定性物理因果关系，并说明各共功能变化如何改变该交换。物理存在、湿质量、干物质、能量含量或一般偏好物理法均不是因果证明。保留未决关系证据及敏感性。 | `ilcd-allocation-2010` |
| `al_residual` | 确实未解决的共同负荷 | 仅对上述步骤确实无法解决的残余共同负荷，采用所有真实联产品在同一共同过程门、实际状态、同期间的市场价值。下游价格须剔除其后专属运输调理成本；披露数量、价期、币种、门价格还原及敏感性。不规定默认比例。 | `ilcd-allocation-2010` |
| `al_vectors` | 实物V及继承A | 负荷份额仅作用于共同环境清单向量。糖、粕、糖蜜及压榨液的全部实物产出及守恒独立保留。供方已分配负荷连同方法承接一次；粕接收后不得再次分配或按负荷份额缩小湿粕实物。 | `ilcd-allocation-2010` |
| `al_status` | 联产品或回流或废物 | 依据真实规格、有效接收方、加工履历、适用处置证据及供方方法判断状态。真实弃置物及处理归属保留；负价或零价本身不抹去生产。内部回流不是联产品。不得默认精饲料、肥料、燃料、回收或替代信用。 | `sudz-pressed-pulp`; `epa-ap42-beet-1997`; `ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

raw_fields及collection_method规定尚未归一化的原始记录。aggregation_rule单元格仅标识最终共同报告基准，不执行除法。原始单位换算及存量核对后，仅对已归属分子执行一次cr_inventory_once。本PCR不声称已取得未来前景数值。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pulp_pressing` | pressing | 湿粕及WIP | 前景原始记录 | 批号; 供方; 原始湿质量; 干物质分数及取样法; 温度; 状态; 上游向量; 期初WIP; 期末WIP; 配对转移端点 | 经校准地磅或皮带秤及代表性逐批取样；供方工序压榨履历和清单交接；在任何分母或经济份额作用前记录原始值。 | kg; kg/kg | 每批及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_pulp_release_handoff` | release_handoff | 湿粕及WIP | 前景原始记录 | 批号; 供方; 原始湿质量; 干物质分数及取样法; 温度; 状态; 上游向量; 期初WIP; 期末WIP; 配对转移端点 | 经校准地磅或皮带秤及代表性逐批取样；供方工序压榨履历和清单交接；在任何分母或经济份额作用前记录原始值。 | kg; kg/kg | 每批及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_release` | release_handoff | 首次整体放行 | 前景原始记录 | 批号; 首次放行标识与时间; 湿态净质量; 皮重; 干物质; 水分; 残糖; 异物; 卫生; 产品规格; 未加糖蜜声明; 干燥造粒青贮发酵状态; 接收方; 储存时限; 结果 | 称量票据匹配整体质量放行及接收规格，同时采失败检验。核对真实鲜态及可实现的交付使用时限；不得用典型得粕率替代称量。 | kg; timestamp | 每次首次放行及失败批 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_energy_pressing` | pressing | 电力 | 前景原始记录 | 仪表号; 单位; 读数; 速率或累计量; 区间; 过程; 启机; 空转; 失败; 服务批次; 厂级核对 | 使用真实分表，或对已核对总量作有据的因果工程拆分；保留分配归一化前区间总量，区分已积分量与功率。 | kWh; MJ | 仪表区间及榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_energy_release_handoff` | release_handoff | 电力 | 前景原始记录 | 仪表号; 单位; 读数; 速率或累计量; 区间; 过程; 启机; 空转; 失败; 服务批次; 厂级核对 | 使用真实分表，或对已核对总量作有据的因果工程拆分；保留分配归一化前区间总量，区分已积分量与功率。 | kWh; MJ | 仪表区间及榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_energy_gate_service` | gate_service | 电力 | 前景原始记录 | 仪表号; 单位; 读数; 速率或累计量; 区间; 过程; 启机; 空转; 失败; 服务批次; 厂级核对 | 使用真实分表，或对已核对总量作有据的因果工程拆分；保留分配归一化前区间总量，区分已积分量与功率。 | kWh; MJ | 仪表区间及榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_material_pressing` | pressing | 一种供货制剂或燃料或零件 | 前景原始记录 | 行号; 供方; 产品组成; 整份采购; 领用; 对外退回; 期初存量; 期末存量; 分析; 真实使用; 损失; 配制路线 | 逐种具体制剂、柴油、润滑剂及备件核对收发和实存。整制剂仅外购一次；厂内配制另列逐种外购组分和真实配制损失能耗。 | kg | 每次收发使用及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_material_release_handoff` | release_handoff | 一种供货制剂或燃料或零件 | 前景原始记录 | 行号; 供方; 产品组成; 整份采购; 领用; 对外退回; 期初存量; 期末存量; 分析; 真实使用; 损失; 配制路线 | 逐种具体制剂、柴油、润滑剂及备件核对收发和实存。整制剂仅外购一次；厂内配制另列逐种外购组分和真实配制损失能耗。 | kg | 每次收发使用及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_material_gate_service` | gate_service | 一种供货制剂或燃料或零件 | 前景原始记录 | 行号; 供方; 产品组成; 整份采购; 领用; 对外退回; 期初存量; 期末存量; 分析; 真实使用; 损失; 配制路线 | 逐种具体制剂、柴油、润滑剂及备件核对收发和实存。整制剂仅外购一次；厂内配制另列逐种外购组分和真实配制损失能耗。 | kg | 每次收发使用及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_water_pressing` | pressing | 具体水或水相流 | 前景原始记录 | 行号; 千克或累计立方米; 密度与物质状态; 时间; 接收方; 溶解固形物; 水分数; 内流配对; 对外交接; 实际排放 | 每流独立称量计量并取样固形物、记录配对回流端点。任何体积换算均独立测密度。压榨回流、清洗取水、粕中持留水与最终废液分开。 | kg; m3 | 流区间及批次 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_water_release_handoff` | release_handoff | 具体水或水相流 | 前景原始记录 | 行号; 千克或累计立方米; 密度与物质状态; 时间; 接收方; 溶解固形物; 水分数; 内流配对; 对外交接; 实际排放 | 每流独立称量计量并取样固形物、记录配对回流端点。任何体积换算均独立测密度。压榨回流、清洗取水、粕中持留水与最终废液分开。 | kg; m3 | 流区间及批次 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_heat` | release_handoff | 蒸汽及冷凝水配对 | 前景原始记录 | 蒸汽质量; 压力; 温度; 干度; 焓基准; 冷凝水质量及焓; 对外损失; 供方约定 | 计量真实蒸汽冷凝水配对，按实际状态及供货约定核对交付热能。保持唯一载热体供热账，不加假设燃烧或购热。 | kg; MJ | 每个交付区间 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_fg` | gate_service | FG服务及真实退货 | 前景原始记录 | 批号; 期初期末已放行FG; 本期Q流入; 总发运; 外部退货接收; 原交付冲回; 重复放行; 损失; 增量返工; 新旧负荷向量; 持留时间 | 逐次实物存量变动核对批号；历史制造负荷承接一次，仅增加真实增量服务返工。重验不产生制造。 | kg; h | 每次变动及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_pack` | gate_service | 各具体包装材料 | 前景原始记录 | 材料号; 空包存量; 附着WIP及FG存量; 复用存量; 采购; 外部退回接收; 期末存量; 随总实物发运外出; 对外退回; 废弃; 内部复用; 单件质量 | 逐种称量真实PE衬膜与PP袋；件数换质量仅使用实测同配置单件质量。执行独立封闭包装账，并在散装供货中证明真实未使用。 | kg; item | 每次包装变动及存量盘点 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_residue_pressing` | pressing | 各具体不合格或弃置流 | 前景原始记录 | 行号; 批号; 湿质量; 干分数; 组成; 原因; 去向; 法律处置; 保留制造向量; 处理; 退回或收集状态 | 实测失败清洗在内的损失及拒收；逐废物记录。废液指标作为非叠加分区，另行识别环境出口。 | kg | 每次损失交接及完整榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_residue_release_handoff` | release_handoff | 各具体不合格或弃置流 | 前景原始记录 | 行号; 批号; 湿质量; 干分数; 组成; 原因; 去向; 法律处置; 保留制造向量; 处理; 退回或收集状态 | 实测失败清洗在内的损失及拒收；逐废物记录。废液指标作为非叠加分区，另行识别环境出口。 | kg | 每次损失交接及完整榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_residue_gate_service` | gate_service | 各具体不合格或弃置流 | 前景原始记录 | 行号; 批号; 湿质量; 干分数; 组成; 原因; 去向; 法律处置; 保留制造向量; 处理; 退回或收集状态 | 实测失败清洗在内的损失及拒收；逐废物记录。废液指标作为非叠加分区，另行识别环境出口。 | kg | 每次损失交接及完整榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_species_release_handoff` | release_handoff | 一种真实环境物种 | 前景原始记录 | 物种; 化学身份; 来源; 介质; 浓度; 累计气液体积; 适用时真实流速及时间; 独立密度; 不确定性; 监测基准 | 采用分物种测量或有据路线模型，保留原始信号及取样覆盖。真实速率积分一次，累计体积不再乘时间。不得假定COD、NOx或VOC等同某单一物种。 | kg; m3; h | 每个排放区间 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_species_gate_service` | gate_service | 一种真实环境物种 | 前景原始记录 | 物种; 化学身份; 来源; 介质; 浓度; 累计气液体积; 适用时真实流速及时间; 独立密度; 不确定性; 监测基准 | 采用分物种测量或有据路线模型，保留原始信号及取样覆盖。真实速率积分一次，累计体积不再乘时间。不得假定COD、NOx或VOC等同某单一物种。 | kg; m3; h | 每个排放区间 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_allocation_pressing` | pressing | 专属及共同负荷向量 | 前景原始记录 | 供方; 共同门; 真实联产品; 数量; 专属清单; 逐交换因果; 残余向量; 同期价格; 价格状态; 负荷份额; 敏感性; WIP及FG继承向量 | 取得可追溯供方记录，按细分、因果归属、残余同门价值顺序处理；跨期间及交接点核对向量，实物量独立保留。 | native exchange units; currency | 每次供方交接及代表性榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_allocation_release_handoff` | release_handoff | 专属及共同负荷向量 | 前景原始记录 | 供方; 共同门; 真实联产品; 数量; 专属清单; 逐交换因果; 残余向量; 同期价格; 价格状态; 负荷份额; 敏感性; WIP及FG继承向量 | 取得可追溯供方记录，按细分、因果归属、残余同门价值顺序处理；跨期间及交接点核对向量，实物量独立保留。 | native exchange units; currency | 每次供方交接及代表性榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |
| `cp_allocation_gate_service` | gate_service | 专属及共同负荷向量 | 前景原始记录 | 供方; 共同门; 真实联产品; 数量; 专属清单; 逐交换因果; 残余向量; 同期价格; 价格状态; 负荷份额; 敏感性; WIP及FG继承向量 | 取得可追溯供方记录，按细分、因果归属、残余同门价值顺序处理；跨期间及交接点核对向量，实物量独立保留。 | native exchange units; currency | 每次供方交接及代表性榨季 | 完整声明H；全部零产出及失败期间 | 真实供方场址及服务批次 | 每 1 kg 参考流 | 校准；原始票据；实验室方法；存量批次追溯；不确定性 |

完整厂级期间总实物账保留所有批次。形成与本期Q对应的数据集时，仅选择该批群独立追溯的实物跨越量及负荷，绝不按环境或经济份额估算实物批群量。期初FG及旧退货的服务仍附着原制造和独立本期服务记录，不转嫁给本期新Q。本期期末FG携原制造向量结转，后续服务在真实发生时附加。阶段数量Qc可记录实测服务或转移，但不加到Q，也不得让同一结果再次归一化。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_q` | reference_pressed_pulp | Q = H内声明合格状态的实测首次整体放行净湿质量之和；每完整批一次。合格期末FG已含于Q，期初FG及重复放行不计。Q = 0仍保留实物负荷账，不生成单位结果。 | first_release_wet_mass; eligible_state; cp_release | Q | `sudz-pressed-pulp`; `vdz-beet-pulp-2005` |
| `cr_physical` | 全部实物流 | 逐过程：期初实物存量 + 真实总边界流入 = 期末实物存量 + 真实总边界流出 + 独立有据的转化。合并前匹配内流端点，两侧均不乘任何负荷份额；湿质量的水、固形物及相关元素账另行独立校验。 | opening_physical_stock; gross_inflows; closing_physical_stock; gross_outflows; transformation; cp_pulp_pressing; cp_pulp_release_handoff; cp_water_pressing; cp_water_release_handoff; cp_fg | physical_balance | `epa-ap42-beet-1997` |
| `cr_dry_bridge` | 每种实测湿态流 | D = W × d；持留水 = W × (1 − d)。W为主实物账，D及水分区不再叠加；压榨液及残余物的溶解固形物独立取样。 | W; d; cp_pulp_pressing; cp_pulp_release_handoff; cp_water_pressing; cp_water_release_handoff | D and water partition | `epa-ap42-beet-1997` |
| `cr_burden` | 每个环境交换向量 | A = F + 期初WIP继承向量 − 期末WIP继承向量 + 可归属上游向量 + 专属负荷 + 残余共同负荷份额 − X。F为真实新增活动；F中已含的上游或专属部分不得重加。X仅限同一交换在同侧已证明的重复，不得扣新增修复水料、失败生产或作信用。按批次核对清单向量；放行后FG及服务保留各自历史及当期归属。 | F; opening_WIP_vector; closing_WIP_vector; upstream_vector; dedicated_vector; common_vector; X; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | A | `ilcd-allocation-2010` |
| `cr_inventory_once` | 所有清单行 | 仅在Q > 0时计算a_i = A_i / Q一次。先换算原始单位及归属真实负荷，再作该除法。实物交换采用未乘环境联产品份额的完整核对实物分子V_i / Q。卡片及采集汇总均引用同一个结果；已归一化卡不得再除Q或H。内流配对仅在合并模型抵消。 | A_i; V_i; Q; cp_release; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | a_i | `ilcd-allocation-2010` |
| `cr_fg` | gate_service | 期初已放行FG + 本期首次放行实物流入 + 外部退货接收 = 期末已放行FG + 总发运 + 真实损失 + 逐项识别的其他外部出口。本期Q已是该流入，不再作为第二份期末FG加项。分别保留原交付负荷冲回及真实新增服务返工，再交付或重验绝不成为新Q。 | opening_FG; current_first_release; external_return; closing_FG; gross_dispatch; loss; cp_fg | FG and service ledger | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `cr_pack` | 每种包装材料 | 期初空包 + 期初附着WIP及FG + 期初复用包 + 外购 + 外部退回接收 = 期末空包 + 期末附着WIP及FG + 期末复用包 + 随总实物发运外出材料 + 对外退回 + 废弃。内部复用抵消；附着包装质量不计Q或粕实物质量。 | opening_packaging; procurement; external_return_received; closing_packaging; gross_shipped_packaging; external_return_outward; packaging_waste; cp_pack | packaging_balance | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `cr_market` | 仅残余共同向量 | 仅在al_context及al_causality之后，联产品k残余负荷份额 = k同期共同门价值 / 所有真实联产品同期共同门价值之和。报告实测状态数量、价值及敏感性；仅作用于残余负荷向量，不得作用于V或Q。 | common_gate_values; residual_common_vector; cp_allocation_pressing; cp_allocation_release_handoff; cp_allocation_gate_service | residual_burden_shares | `ilcd-allocation-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品及供方 | 保留真实原始产品声明及压榨浸出履历，独立于一般家族名称证明未加糖蜜鲜态及有效饲料接收方。 | 规格；可追溯供方交接；逐批质量放行 |
| `dq_temporal` | 榨季及存量向量 | 覆盖完整期间的启停、空转、失败、清洗、退货及Q = 0；期初存量保留原制造日期及负荷向量。 | 仪表覆盖；质量及FG/WIP滚动；新旧批次链接 |
| `dq_measurement` | 各原始分子 | 保留校准、取样、不确定性、物态及独立换算证据；区分总量与速率、整份湿质量及非叠加组成。 | 秤及仪表票据；实验室方法；原始文件 |
| `dq_sources` | 证据及缺口 | 制造者路线状态家族支持范围，不证明同厂清单或通用组成；历史EPA/VDZ证据不批准当代药剂或法律饲用状态。ILCD支持分配方法，不证明工业技术。披露现场缺测，不编数字。 | 逐来源适用性；带日期原件；缺口记录 |

## 9. 校验规则

须连同完整章节及祖先上下文判断以下规则。核心证据未知是阻断，不是通过；机械检查不批准方法学、翻译或映射。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | 合格状态 | 要求完整限定信息及原始产品路线证据。供方名称、分类、UUID名称、下载成功或Schema本身均不证明鲜态未加糖蜜压榨粕适用；真实身份缺口必须未决。 | `sudz-pressed-pulp`; `sudz-feed-route`; `sudz-bisz-pressed` |
| `vr_uuid` | 每个拟采用UUID | 绑定任一UUID前，以当前直读或明确固定的公共原件核实完整记录、原生家族状态路线化学限制，以及所引属性→单位组→参考单位链和可用的声明版本。固定历史原件不代表当前平台读数。区分实物流身份与真实供方背景适配。未经核验的绑定保持缺省。 |  |
| `vr_quantity` | 参考量及存量 | 双语Q须是同一首次放行门和湿态基准。核查全部失败零产出期间、WIP及FG滚动和新旧负荷向量。总发运、干物质、糖质量、营养量或热值均不得替代Q。 | `sudz-pressed-pulp`; `ilcd-allocation-2010` |
| `vr_conservation` | 过程及合并守恒 | 核对湿态实物质量、独立实测水及干物质和相关元素；真实物种和介质另行识别。不得任意设反应水、套水密度、以单残差拟合两个未知或将COD/VOC当分子。 | `epa-ap42-beet-1997` |
| `vr_scope` | 条件交换 | 真实干燥、加糖蜜、造粒或青贮是范围冲突，不是删掉活动的理由。普通现场数量、辅助UUID或供方细节缺失是前景采集缺口；核心产品状态或分配基准缺证仍是真实阻断。 | `sudz-pressed-pulp`; `sudz-feed-route`; `vdz-beet-pulp-2005`; `ilcd-allocation-2010` |
| `vr_once` | 归一化及分配 | 先核对原始单位换算、专属归属、共同残余份额及继承向量，再执行唯一A/Q。残余共同向量的份额须合计为一；不得以环境份额缩小湿粕、水、废物或排放的实物质量。保留敏感性及不确定性。 | `ilcd-allocation-2010` |
| `vr_quality` | 饲料放行及真实损失 | 核对供方特定饲料规格、残糖、异物、卫生及可实现的鲜态储运时限。带日期的制造者示例不是通用限值或法律许可。记录变质退货及真实环境排放，不得删去观测。 | `sudz-pressed-pulp`; `sudz-bisz-pressed`; `vdz-beet-pulp-2005` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 向声明接收方供应合格单一饲料原料；另行链接真实运输及使用 |
| allowed_use | 仅限具有经核对上游交接、首次放行Q及有据厂门服务的本压榨鲜态未加糖蜜湿态 |
| excluded_use | 整叶覆盖；干颗粒；加糖蜜粕；青贮；未压榨湿粕；避免饲料信用；营养功能等效；饲料安全认证 |
| required_metadata | 全部必需限定信息；供方状态；精确边界；原始单位；Q与H；WIP/FG及退货履历；专属共同负荷方法；真实包装及服务归属 |
| required_quality_disclosure | 身份依据与未决UUID；原始来源限制；真实取样及仪表覆盖；上游供方适用性；不确定性及价格敏感性；Q = 0期间 |
| update_trigger | 浸出压榨状态改变；加入糖蜜；干燥造粒青贮；更换供方或规格；共同门或价格变化；质量失败；新增材料或实际排放；出现经核实UUID |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sudz-pressed-pulp` | literature | Südzucker, Pressed Sugar Beet Pulp, publisher HTML, accessed 2026-11-20. https://www.suedzucker.com/product/pressed-sugar-beet-pulp/ | 一级产品家族：浸出后压榨的湿饲料原料、鲜态散装供应及供方特定短储时限。不采用通用水分、得率或分配因子。 |
| `sudz-feed-route` | literature | Südzucker, Animal Feed Products from sugar beet, publisher HTML, accessed 2026-11-20. https://www.suedzucker.com/products/animal-feed/ | 一级路线：清洁甜菜经浸出及鲜态压榨；后续加糖蜜干燥造粒是不同路线。 |
| `nord-beet-pulp` | literature | Nordzucker, Sugar beet pulp, publisher HTML, accessed 2026-11-20. https://www.nordzucker.com/en/sugar-expertise-products/animal-feed/sugar-beet-pulp | 独立制造者对压榨、干燥及加糖蜜粕的家族对照；其可变干物质示例不是参考默认值。干颗粒储存建议不适用于湿粕。 |
| `sudz-bisz-pressed` | literature | Südzucker BISZ, Pressschnitzel, publisher HTML, accessed 2026-11-20. https://bisz.suedzucker.de/futtermittel/pressschnitzel/ | 脱糖压榨甜菜的单一饲料原料、鲜态与青贮区别、产品分析及脚注。产品特定数值不证明营养功能等效或通用规格。 |
| `epa-ap42-beet-1997` | official_guidance | US EPA, AP-42 §9.10.1.2 Sugarbeet Processing, March 1997, pp.1–5 and Figures 9.10.1.2-1/2. https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1b.pdf | 独立浸出压榨工序及压榨水回浸出；相邻加糖蜜干燥路线作反例。不引入干燥排放因子、固定水分或当代药剂使用假定。 |
| `vdz-beet-pulp-2005` | handbook | Verein der Zuckerindustrie, Concept Animal Constituents in Sugar Beet Pulps, October 2005; English printed pp.23–28 and process annex pp.34–36. https://www.zuckerverbaende.de/wp-content/uploads/2021/08/vdz-konzept_tierische_bestandteile_2005.pdf | 历史单一饲料压榨鲜用区别及污染控制过程背景；干燥加糖蜜粕和根叶碎料各有区别。不作当代法律批准或普遍零污染声明。 |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March 2010, §7.9.2–7.9.3, printed pp.255–265. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分及虚拟细分、逐交换决定性物理因果、仅残余实际状态共同门经济价值；独立方法证据，不是甜菜糖厂清单或固定分配份额。 |
| `un-cpc3-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.104 and 199. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39149包含甜菜粕及其他糖业废物，明确排除39141蔗渣；相邻39130淀粉残渣与23319配制饲料各有区别。分类不证明工艺状态或方法批准。 |
