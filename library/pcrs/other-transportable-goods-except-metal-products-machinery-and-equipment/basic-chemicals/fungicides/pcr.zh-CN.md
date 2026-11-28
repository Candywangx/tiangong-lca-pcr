---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fungicides
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 70%代森锰锌可湿性粉剂：成品接收、包装与首次放行

## 1. 范围与适用性

本方法限定于已登记民用70%代森锰锌可湿性粉剂成品的环境核算，涵盖已制成完整制剂的接收、有记录的外包装以及声明场址门口的首次合格商业放行。供方制造保留为上游黑箱要求，不规定配方、原药制造、操作参数、田间使用或药效模型。声明单位为1 kg成品净质量，不是1 kg有效成分或等效病害防治服务。

ICAMA PD20091282确认成品身份及四川先易达持有人，不提供实测生产批次、供方交接或环境清单。另两项不同持有人登记印证独立成品形态，不证明厂址或许可相同。SAMR元数据区分原药与可湿性粉剂并记录标准替代关系；采用研究所记录的版本及产品质量资格，元数据不提供验收限值。这些证据不证明国际通行许可，加拿大卫生部门的司法辖区特定变更阻止此类推断。

所引《农药管理条例》2022年合并文本第十九、二十一至二十二条，为委托加工分装的主体、合格出厂销售及产品批次数量质量日期记录、包装标签提供凭证依据。核实研究适用版本、登记持有人责任及实际受托持证场址；此处不要求联系方式或检验操作步骤。这是凭证关口，不证明具体批次已合格。

所选路线要求证明来料尚未在上游经历相同的最终商业放行。已放行外购商品、分销、转售、换标和调拨不构成本方法的新生产。若供方已承担最终放行，应将放行事件及参考门界定位于该处，或采用另行界定的分销模型。本门界方法本身不构成完整摇篮到门或PEF研究。

排除杀虫剂（34661）、除草剂及防萌芽产品和植物生长调节剂（34663）、消毒剂（34664）、归入34666的危险农药制剂、归入34669的其余产品、原药、其他浓度或剂型及混合有效成分产品。UNSD冻结的2025年6月版第167页分别列出这些子类；2026年10月版CPC3!A1496:D1496通过HS2022 3808.92定义34662。须核对实际产品分类，不能以原生数据库标签或日常“危险”含义替代分类判断。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fungicides |
| classification_refs | CPC 3.0 34662，登记成品可湿性粉剂的较窄映射已接受，见 docs/adr/2026-11-22-accept-cpc-34662-finished-mancozeb-wettable-powder-at-first-release.md |
| covered_products | 首次合格放行的已登记民用70%代森锰锌可湿性粉剂成品 |
| excluded_products | 原药；其他剂型或浓度；混合有效成分；邻近农药子类；已放行的转售商品 |
| representative_product | PD20091282表头识别的完整粉剂成品；独立记录实际批次与许可 |
| production_route | 接收外部已制造、尚未最终商业放行的完整制剂；记录包装与首次合格放行；制造保留为上游黑箱 |
| market_state | 首次放行场址门口、实际有记录包装中的可湿性粉剂成品；参考质量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个身份明确的合格杀菌剂成品，不建立使用服务等效性 |
| How much | 1 kg完整成品净质量 |
| How well | 研究特定的登记产品身份、供应状态及签署的合格放行，不推定药效 |
| How long or cycle | 每一实物批次只计一次首次放行，不假设保质期或施用周期 |
| reference_flow_link | finished_wp |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 70%代森锰锌可湿性粉剂 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 登记与持有人；实际制造商及交接；产品浓度和剂型；适用规格版本；批次谱系与首次放行证据；场址及报告日期；受托场址许可及合格凭证；产品净质量；包装结构与所有权；存量及负担结转；供方过程覆盖；公用投入及运输接口 |

所有必需限定信息均应在数据集元数据、产品说明或等效字段声明。产品流身份必须匹配完整登记成品与门界。通用代森锰锌、有效成分质量、未特定杀菌剂和区域仓库商品不能互换。Mass/kg支持记录不建立产品UUID或背景供方过程。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 完整成品净质量排除袋、箱和托盘。标签70%识别等级，不把成品千克换作有效成分千克。 |
| matched_basis | 所有清单行 | Mass | kg | 使用同一正的首次合格成品净质量 B 归属，先把原始分子换为该行单位，再除以 B 一次。包装件数须用实测单件质量转换，不能采用默认包装质量。 |
| electricity_meter | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 电表差值保持电能含义。Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66以MJ为参考，1 kWh = 3.6 MJ。该支持链不确定尚未选择的供方流原生属性，绝不据此推定净热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从有记录的外部制造商接收尚未首次最终商业放行的完整成品，声明继承环境负担及随货包装 |
| starting_condition_role | 上游整品交接，不是内部原药制造或无负担起点 |
| product_classification_scope | CPC 3.0 34662内较窄的已登记70%可湿性粉剂身份 |
| recursive_input_rule | 完整来料产品配一个相容上游过程只记录一次，不拆解内部组成重复采购；已最终放行的同类商品不能产生新输出 B。 |
| upstream_dataset_requirement | 匹配完整制剂、实际制造商、门界、时段及地域，披露已含包装、运输与公用投入；上游覆盖不足须保留为明确缺口。 |
| disclosure | 前景接收、包装、放行门界；排除的内部作业与下游使用；实际供方交接；未放行批次与存量负担；所有包装来源；运输服务及环境覆盖缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_identity | received_wp, finished_wp | 将产品绑定到登记、实物形态、实际制造商及首次放行。标签和设计产能均不是实测生产量，也不证明场址许可或排放。 | icama-pd20091282; samr-mancozeb-2020; cn-pesticide-regulation-2022 |
| boundary_accounting | release | 纳入可归属的接收、外包装、质量资格服务、暂存、退回、清洁及废物管理。制造负担留在上游并核实覆盖，避免重复公用投入或运输；排除内部细节不代表环境负担为零。 | eu-pef-2021 |
| boundary_pack | primary_bag_in, carton_in, pallet_in | 每种包装分别记录购买 P、首次非购买外部接收 N，以及可追溯到同一件此前从本站外发的真实退回 R。N 包括随来料、另行借入和无偿调拨，无论供方清单是否列出；核对全部存量与去向。 | eu-pef-2021 |
| boundary_extension | release | 纸箱、托盘、水及废物条件行须有实际发生证据。不适用须有支持记录，缺证据不是零。声称完整前须把实际外部公用投入、服务、废物与基本排放逐项添加为独立交换，不提供默认直接排放因子。 | eu-pef-2021 |
| boundary_exclusions | finished_wp | 本门界方法排除田间使用、药效与归趋；中国产品身份证据不意味着另一司法辖区授权。 | hc-mancozeb-2024; unsd-cpc3-2025; unsd-cpc3-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| release | 成品接收、外包装与首次放行 | required | 最终首次放行前的完整制剂，核实实际场址及供方交接 | foreground | finished_wp |

### 过程：成品接收、外包装与首次放行（`release`）

以下卡片定义原子实物交换，不是默认消耗量。包装输入输出包含实际实物流动，其环境负担按来源及使用另行归属。参考输出仅为净粉剂，外发包装不产生共产品信用。存量衔接区分生产放行与发运，销售和退回均不增加 B。

#### 输入

##### 产品流

###### 最终放行前的70%代森锰锌可湿性粉剂（`received_wp`）

按实际制造商交接记录核对完整供应制剂，净产品与所有包装独立计量；不拆解内部组成。

- 选定流：最终放行前的70%代森锰锌可湿性粉剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_product`

###### 已放行70%代森锰锌可湿性粉剂退回本站（`returned_released_wp`）

仅在同一已放行整品实际客户退回时适用。将此前放行及剩余负担绑定原批次，不新增生产 B。该实物接收与最终放行前的 received_wp 分开。

- 选定流：已放行70%代森锰锌可湿性粉剂退回本站
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_product`

###### 外购电力（`electricity`）

计量本接收、包装、放行边界的可归属电量，保留未放行作业负担；供方流及其原生属性未绑定。

- 选定流：外购电力
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`

###### 完整农药粉剂直接包装袋（`primary_bag_in`）

对该具体完整袋件记录全部 P、N 及核实的 R 接收，必须查明实际结构；独立购入的内衬另设卡片，不假设污染袋可复用。

- 选定流：完整农药粉剂直接包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 瓦楞纸板箱（`carton_in`）

仅在实际使用时适用。即使纸箱随货到达且供方清单未列出，也须记录 P、N 与核实的 R。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 木托盘（`pallet_in`）

仅在实际存在木托盘池时适用。另行借入或无偿调拨托盘的首次接收计入 N，无本站先前外发记录不得计入 R；不设默认周转次数。

- 选定流：木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 外购自来水（`tap_water`）

仅在包装区域清洁实际另行用水时适用；供货内含水不重复作为采购，须有计量质量或实测换算，不设默认密度。

- 选定流：外购自来水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`

#### 输出

##### 产品流

###### 70%代森锰锌可湿性粉剂（`finished_wp`）

首次最终合格放行的唯一参考输出；通过成品存量衔接放行净产品与之后实物发运，同一产品只计一次。

- 选定流：70%代森锰锌可湿性粉剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_output`

###### 退回供方的70%代森锰锌可湿性粉剂（`returned_wp`）

最终放行前实际整品退供时适用，核对去向及随附负担；已放行产品的客户退回为独立存量事件，不形成新生产。

- 选定流：退回供方的70%代森锰锌可湿性粉剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_product`

###### 完整农药粉剂直接包装袋（`primary_bag_out`）

记录随外发产品或其他转移出界的袋件，去向子账互斥；不含废袋。

- 选定流：完整农药粉剂直接包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 瓦楞纸板箱（`carton_out`）

记录随货外发、退还所有者等实际出界纸箱，同一件不得同时计为报废。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 木托盘（`pallet_out`）

按件号和去向记录实际外发托盘，包括归还借用物；运输分段及服务覆盖范围另行只计一次。

- 选定流：木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

##### 废物流

###### 废弃70%代森锰锌可湿性粉剂（`discarded_wp`）

计量作为废物外运的完整成品质量，不含包装；退供和内部存量不计该外运，不规定处置操作。

- 选定流：废弃70%代森锰锌可湿性粉剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

###### 废弃受污染农药粉剂包装袋（`spent_bag`）

按完整废袋记录一个废物交换，以空袋及附着产品作组成子账，不重复叠加废物总质量。

- 选定流：废弃受污染农药粉剂包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

###### 废弃瓦楞纸板箱（`discarded_carton`）

记录实际废纸箱，独立查明污染及去向；无偿转移不自动等于废物或替代原生生产。

- 选定流：废弃瓦楞纸板箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

###### 废弃木托盘（`discarded_pallet`）

记录实际废托盘及其状态和去向，不设推测性回收或替代信用。

- 选定流：废弃木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

###### 包装区域清洁废水（`zone_wastewater`）

实际外送清洁废水时适用，不作为直接基本排放；保留真实处理覆盖范围及未决组分。

- 选定流：包装区域清洁废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际可归属的已换算原始期间实物数量，除以正的首次合格整品净千克一次，见第8节。包装实物流动与环境负担归属分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | release | 先隔离直接可归属负荷，分配前考察过程细分或合理系统扩展。不可分共享负荷采用有因果依据的实测物理驱动；不可得时说明排除原因及其他关系，披露敏感性并保留审阅。不默认按质量或收入分配。 | eu-pef-2021 |
| allocation_once | 所有清单行 | 产品接收、存量转移、真实退回、复检和转售均不产生共产品信用或第二次生产。未成功放行、返工相关环境服务及其损失保留在匹配报告池内。 |  |
| allocation_pack | primary_bag_in, carton_in, pallet_in | 制造、采购、运输、清洁、修理及周转池服务按实际来源和覆盖范围只归属一次。可追溯 R 携带原件剩余负担，不新增制造。首次 N 不因未购买或供方清单漏列而无负担。供方覆盖未知须待查，不得填零；不使用无依据寿命、周转假设或替代生产信用。 | eu-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | release | finished_wp | 首次放行与存量账 | 质量负责人；登记；持有人；制造商；剂型；批次号；场址；期间起止；放行决定及日期；合格凭证；制造商及受托场址许可；生产日期；销售发运日期；校准毛重、皮重、净重；此前放行；期初期末未放行及已放行存量；失败批；退回；负担结转 | 质量负责人跨供方与场址将唯一首次最终验收同净称重及批次谱系核对。B 是匹配池中首次合格完整产品净千克，不能用发运、设计产能或销售代替。此前最终放行、调拨、复检不计 B，失败及零产出期间保留在负担池。期初随附负担计入、期末结转负担转出各一次。B 非正或未定时不得归一化 | kg | 每事件及期末 | 完整匹配报告期间 | 声明放行场址及实际制造商接口 | 每 1 kg 参考流 | 签署放行；校准；存量平衡；供方交接；随附负担核对 |
| cp_product | release | received_wp, returned_released_wp, returned_wp | 整品交接账 | 采购负责人；制造商；供方批号；登记；净千克；此前放行状态；交接日期；退回；拒收及废弃千克；供方过程身份和环境覆盖；运输覆盖 | 各外部整品接收及退供与 cp_output 谱系、校准质量及匹配存量衔接核对。逐批次逐交换记录真实外部带入承接环境向量、来源去向、取得时间、剩余未分配份额及一次性入口销账键及期初期末、外转份额，与新发生负担分开；供方覆盖将各交换只链接到一个来源账项。不披露内部配方而保留全部上游环境负担；覆盖缺口阻止形成完整数据集 | kg | 每交接 | 与 cp_output 同池 | 实际供方及场址边界 | 每 1 kg 参考流 | 称重；交接退回单；相容上游过程；不重复覆盖矩阵 |
| cp_pack | release | primary_bag_in, carton_in, pallet_in, primary_bag_out, carton_out, pallet_out | 逐包装类型实物与负担账 | 包装负责人；件号及类型；结构；单件千克；件数；期初期末存量；P；N；R；此前本站外发；所有权；随货接收；另借或无偿调拨；外发去向；报废；未决损失；供方覆盖；制造运输服务记录；批群逐交换外部带入剩余向量；入口销账键；历史已分配份额；新增负担标记；随附负担 | 每类型独立称重或用实测单件质量换算。记录全部首次外部 N，包括供方漏列的随货包装及另行借入、调拨；R 须有同件此前本站外发链接。用 pack_balance 核对所有输入、输出和存量；记录每次转移对方及池、配对的外发及接收销账，使重新带入的仅为剩余向量。独立于接收来源审核供方覆盖。用 pack_burden 按批群及实际服务使用核对负担归属，真实退回保持原批群并只核实剩余未分配份额，不默认制造负担全部回流或归零；供方缺数据须待查 | kg | 每流转及期末 | 与 cp_output 同池，含期初批群 | 场址池，含借用及供方所有包装 | 每 1 kg 参考流 | 件号追溯；实测单件质量；所有权交接；发票；退回单；盘点；覆盖矩阵 |
| cp_utilities | release | electricity, tap_water | 计量与覆盖账 | 公用投入负责人；表号；起止；倍率；单位；日期；场址边界；分表或共享驱动；已积分标记；供方；选定后的原生属性；清洁水质量或实测换算；供方服务覆盖 | 读取接收、包装、暂存、质量支持的校准表差值。尽可能细分实测负荷，保留失败、零产出及存量负担。核对共享驱动和供方覆盖；服务已含电力时不得重复。电能 kWh 与供方原生身份分开 | kWh; kg | 每计量间隔及期末 | 与 cp_output 同池 | 纳入场址及支持服务 | 每 1 kg 参考流 | 校准表；账单；实测驱动；属性单位链；覆盖核对 |
| cp_waste | release | discarded_wp, spent_bag, discarded_carton, discarded_pallet, zone_wastewater | 逐项废物交接账 | 环境负责人；流身份；净千克；包装及组分子账；日期；批次；现场存量；去向；处理供方及公用投入覆盖；实际排放测量；缺失覆盖 | 各实际废物流独立称重并绑定来源存量。完整废物质量与组成子账不能同时成为新增输出。真实退回与内部流动不计废物外运。实际运输及处理只计一次；每项实际直接排放须独立身份、介质及测量，禁止拟合质量残差 | kg | 每事件及期末 | 与 cp_output 同池 | 场址废物管理及真实外部接口 | 每 1 kg 参考流 | 校准称重；交接联单；去向处理证据；环境覆盖评估 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalize | 所有清单行 | q_i = 可归属已换算原始数量_i / B；B 是 cp_output 中唯一首次合格完整产品净千克。finished_wp 保持1 千克；已归一化量不再除一次。期初负担计入、期末负担转出各一次，保留失败及零产出负荷且不得转嫁不相关输出。B 或负担归属未决时阻止归一化数值。 | 原始数量_i；B；cp_output；匹配存量及负担池 | 每 1 kg 参考流的 q_i |  |
| product_balance | received_wp, returned_released_wp, finished_wp, returned_wp, discarded_wp | 原始期间交接账：期初整品质量 + 外部接收（含已放行客户退回） = 期末整品质量 + 实际产品发运 + 退供 + 废物外运 + 独立有据损失。首次放行只改变存量状态、不改变质量；以已放行存量衔接 finished_wp 与发运。附着产品在废物组成账只计一次，不从残差推断未知排放或内部组成。 | 交接存量千克；首次放行状态；有据废物及损失千克 | 整品核对 |  |
| pack_balance | primary_bag_in, carton_in, pallet_in, primary_bag_out, carton_out, pallet_out | 每种包装在相同实测质量基准：S_open + P + N + R = S_close + O + W + L。O 为所有非废物外发，W 为实际报废，L 为独立证实损失；内部移动抵消。调查残差而非捏造 L。P、首次 N、真实 R 互斥且不受供方覆盖影响；无本站先前同件外发追踪不得计 R。 | 各类型原始千克；件号；全部存量流转 | 包装实物核对 |  |
| pack_burden | primary_bag_in, carton_in, pallet_in | 逐包装批群逐交换向量：期初随附负担 + 真实外部带入剩余承接负担 + 核实新发生负担 = 本池归属负担 + 期末结转负担 + 转至其他有记录池的负担。外部带入包括期中 P、首次 N 或 R 随附的此前已发生且尚未分配向量。记录来源、时间戳、原批群、此前已分配份额及剩余向量；同一交换的外部承接与新增条目互斥。发票、供方过程、运输服务共用一次性来源入口销账键，防止双重入账。实物 R 保持原批群，既不默认全部原制造负担回流，也不默认零；供方已覆盖向量只链接一次，不能同时作为承接和新增。实物 R 不新增制造。各 P 及首次 N 均须独立覆盖判断；研究实际承担的采购运输服务负担只计一次，缺少的上游制造另行核实。供方覆盖未知须待查。已核实的使用或周转分配可分摊随附负担，不能抹去实物存量或假设复用。 | 来源；逐交换外部剩余向量；入口销账键；此前分配；覆盖决定；实际新增负担；实测使用；存量结转 | 不重复可归属包装负担 | eu-pef-2021 |
| product_burden | received_wp, returned_released_wp, finished_wp, returned_wp, discarded_wp | 逐整品批次逐环境交换：期初承接向量 + 核实外部带入剩余向量 + 新发生向量 = 本报告池归属向量 + 期末承接向量 + 转至其他有记录池的向量。用一次性来源入口销账键区分供方带入覆盖与本场址新增，同一交换不能兼为承接及新增。此前放行状态决定 B，不决定继承环境负担是否存在。退供、产品存量及废物保留实际剩余负担，处理和供方覆盖不重复；每次外部转移均配对发送池及其外发、接收销账，真实退回也仅确认剩余向量；无依据向量不得编造或填零。 | 批次谱系；实际交接向量；期初期末份额；一次性键；cp_product；cp_output；cp_waste | 整品负担核对 |  |
| energy_conversion | electricity | E_MJ = 3.6 × E_kWh；表差与倍率仅应用一次。保留原始 kWh，换算不验证供方流，也不改变其原生参考属性。 | 电表差值；倍率；核实能量单位链 | 相容计量电能 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | received_wp, finished_wp | 双语采用相同整品、剂型、真实交接及首次放行，不用原药UUID替代或原生分类覆盖官方分类。 | 登记表头；研究特定许可及批次谱系 |
| dq_denominator | 所有清单行 | 清单、协议和计算采用相同正 B 及报告池；不从产能或销售捏造产出，保留失败、期初期末存量及负担结转。 | cp_output; cp_product; period_normalize |
| dq_pack | primary_bag_in, carton_in, pallet_in | 独立于负担覆盖核对每种 P/N/R 来源及所有存量、去向；首次免费接收不是退回或零负担。 | cp_pack; pack_balance; pack_burden |
| dq_complete | release | 评估实际上游、运输、外部资格服务、废物处理、附加公用投入及排放；缺证据报告为不完整，不推定不存在。 | 供方覆盖矩阵；cp_utilities; cp_waste |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_wp | 要求 reference_flow_link 指向唯一终端产品输出，1 千克完整净产品，匹配首次放行身份和相容支持属性链。整品UUID未决不授权替代供方过程。 | icama-pd20091282 |
| validate_release | release | 核实实际制造商、适用的受托场址许可、此前放行状态、供方交接、签署首次验收及合格凭证、数量批次质量日期存量衔接。转售、退回及复检不增加 B，缺记录则不能形成可用生产数据集。 | cn-pesticide-regulation-2022 |
| validate_pack | primary_bag_in, carton_in, pallet_in | 检验每种实物平衡，包括不受供方清单限制的首次非购买接收、同件退回追踪、废物去向拆分及独立负担账只计一次；缺供方覆盖须明示。 |  |
| validate_coverage | 所有清单行 | 核实单次归一化、无负值或捏造残差、实际环境覆盖、供方边界及英中一致；条件不适用须有证据。未知排放、包装、公用投入和上游制造不得填零。 | eu-pef-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在独立核实上游与前景完整性后作为合格整品供应模型 |
| allowed_use | 已制成完整制剂接收、外包装及首次放行的限定收集设计；只有相容供方过程后才可用于采购建模 |
| excluded_use | 单凭本门界声称完整制造或PEF；原药；把已放行转售当新生产；田间使用、药效与归趋；跨司法辖区许可 |
| required_metadata | 登记持有人；实际制造商及交接；净产品与批次首次放行；场址时段；规格版本；包装来源及池；原始存量与负担存量；公用投入；运输和供方覆盖 |
| required_quality_disclosure | 产品与交换身份缺口；上游黑箱覆盖；供方和包装不确定性；条件适用性；环境测量与缺失范围；独立审阅状态 |
| update_trigger | 登记产品或剂型、放行责任、供方门界过程、包装池、公用投入、标准或司法辖区适用性改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3说明，冻结2025-06-30，PDF第167页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结身份及邻近子类，不是生产证据。 |
| unsd-cpc3-2026 | official_guidance | UNSD 2026-10-23说明表，CPC3!A1495:D1500，34662在1496行。https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | HS2022 3808.92及邻近税目，补充而不替换冻结坐标。 |
| icama-pd20091282 | official_guidance | ICAMA PD20091282，仅表头：四川先易达、代森锰锌、可湿性粉剂、70%。https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20091282 | 同持有人完整成品身份，不推定配方、使用指引、实测清单或场址许可。 |
| icama-comparators | official_guidance | ICAMA PD20040011及PD20082317，仅表头。https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20040011 ; https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20082317 | 不同持有人印证成品形态，不视为相同厂址或条件。 |
| samr-mancozeb-2020 | standard | SAMR GB/T39672-2020元数据，2021-07-01实施，替代原药GB/T20699-2006及粉剂GB/T20700-2006。https://std.samr.gov.cn/gb/search/gbDetailed?id=B691BB778715D126E05397BE0A0AF3B3 | 仅产品区分及版本沿革，不推定标准全文要求。 |
| hc-mancozeb-2024 | official_guidance | 加拿大卫生部门，代森锰锌农药登记变更，2024年1月。https://www.canada.ca/en/health-canada/services/publications/product-safety/changes-registration-mancozeb-pesticides.html | 对通用许可的反证，仅司法辖区特定状态，不采用施用说明。 |
| cn-pesticide-regulation-2022 | official_guidance | 司法部国家行政法规库《农药管理条例》，2022-03-29合并版，第十九、二十一至二十二条。https://xzfg.moj.gov.cn/mobile/law/detail?LawID=1565 | 委托加工分装主体、合格出厂销售及批次数量质量日期记录、包装标签的凭证依据；不证明实际批次合格、场址许可或环境数量。 |
| eu-pef-2021 | official_guidance | 建议(EU)2021/2279，2022-05-23勘误版，附件I §§3.2.1–3.2.2、4.4.9.1–4.4.9.4、4.5，PDF第32–34、78–81、87–88页。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | 声明参考量、透明边界、复用负担拆分及分配层级；包装台账将其落实为核算规则，不借用数值周转率或声称完整PEF符合性。 |
