---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.pharmaceutical-waste
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 药品废物：药房自有过期对乙酰氨基酚片剂的首次内部废物流移交

## 1. 范围与适用性

本归因型方法只覆盖一种物料：药房自有库存中已过期的单方对乙酰氨基酚成品片剂，按原产品和批次保留身份，有实际弃置决定，并有首次向药房隔离销毁流实物移交的记录。参考对象为整片净质量，不是活性成分当量、治疗服务或处置服务。每个数据集固定一个可核对的成品制剂身份、标示规格、片剂形态、批号、包装状态、场址和期间。本路线不接收患者退回药品。

过期须足以证明药品已不适于原用途，库存转出及接收保管记录须证明实际废物指定和实物隔离。单凭未使用、质量暂扣、临近过期但仍可销售或处方未领取，不能证明这两个关口。内部接收保管人与地点可以仍在同一药房；外部接收方签字不是该内部关口的先决条件。这也不能证明场外收集或处置已发生。（`wco-hs30-2022`；`psi-medicine-disposal`）

爱尔兰原始审计区分了药房产生的废药与患者退回药品，并将过期列为前者的原因之一；其方法记录了场内指定和收集。原文未公开“单方对乙酰氨基酚片剂、过期、自有库存来源”的交集，也没有同批成品片剂质量。本方法的单产品限制是明确的方法推导，不声称研究中已观察到该子组或已完成公斤数据集。单位数量、批发价格和混合废物桶毛重均不能补足缺失的净质量。（`oleary-pharmacy-audit-2026`）

另一项原始片剂研究明确包括过期对乙酰氨基酚片剂。它仅支持该过期成品片剂实物状态的存在，不证明本路线的具体成品制剂身份、药房自有库存来源、弃置决定、相同规格、内部移交或危险属性资格。不能将其样品与爱尔兰审计拼接。不采用其实验条件、质量或效力结论以及过期后使用建议。（`waghmare-expired-tablets-2026`）

本路线要求批次合法、非生物性、非感染性，并取得实际场址和期间的非危险废物资格依据。排除生物药品、混合或感染性医疗废物、锐器、受控药品、细胞毒性或细胞抑制性及放射性物料、危险废物批次、其他药品或剂型、单独原料药、空包装、废溶剂、化工污泥、制造拒收品和社区退药。本方法不提供病原体处理、有目的的活性物质回收、临床使用、配方制造或处理运行条件。来源、分类、危险属性或保管证据未明时不能判定适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.pharmaceutical-waste |
| classification_refs | CPC 3.0:39931，废药品；较窄映射已获接受，见 docs/adr/2026-11-22-accept-cpc-39931-expired-pharmacy-owned-paracetamol-tablets.md |
| covered_products | 已过期的药房自有单方对乙酰氨基酚整片成品，每队列固定一种成品配方和原批次，首次有记录地转入内部销毁流 |
| excluded_products | 其他药品及剂型；患者退药；制造拒收品；未证明不适用及弃置的可销售或暂扣库存；生物性、感染性或危险废物；原料药；空包装；溶剂；污泥；处置服务 |
| representative_product | 一个具有库存至销毁流移交记录的实际过期单方对乙酰氨基酚片剂批次；不声称公开资料已提供合格样本或数量 |
| production_route | 追溯原采购及库存历史；核实过期与弃置决定；记录库存转出、净质量确定及首次内部隔离移交；后续保管工作另行关联 |
| market_state | 保留记录中的原有盛装状态、停止药用供应的整片废药；不假定拆泡罩或重新配方 |

冻结的 UNSD 2025 年 6 月说明第 205 页列出 39931 及相邻 39939、39940、39950，但没有 39931 的详细段落。2026 年 10 月 CPC3 第 1940 行将 39931 对应至 HS 2022 的 3006.92；第 30 章注释 4(k) 以不适于原用途界定药品废物，并以过期为例。这些资料支持分类，不能证明批次危险属性。其他医疗废物、废有机溶剂和化工废物分别属于相邻类别。新版说明不替换冻结分类坐标。（`unsd-cpc3-notes-2025`；`unsd-cpc3-notes-2026`；`wco-hs30-2022`）

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可追溯的过期单方对乙酰氨基酚片剂物料首次从药房自有库存移交至隔离销毁流 |
| How much | 1 kg 整片净质量，排除全部包装和容器 |
| How well | 同一成品制剂身份及批号、过期与弃置决定、实际内部移交，并有实际场址和期间合法、非生物性、非感染性及非危险属性依据；不声称治疗等效 |
| How long or cycle | 一次唯一的首次废物流移交记录；后续保管沿用原队列，不产生新生产量 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 过期单方对乙酰氨基酚片剂 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 可核对的成品制剂身份（品牌及许可或产品规格标识、唯一活性成分和剂型），不要求制造配方比例；标示规格；整片形态与批号；原供方、自有库存归属及排除患者退药或制造拒收来源；过期与弃置决定；实际场址、国家和期间；废物及危险属性判定所需的既有文件；原包装及全部实际组件；非破坏性净质量实测，或独立实测的同批成品单片质量及片数、方法和不确定性；首次移交事件、内部接收保管人和指定地点；期初期末库存及历史外发退回；供方已含范围和承接负担；实际公用工程、盛装、残余物去向及后续保管扩展 |

每项限定信息须在数据集元数据、过程说明、参考流备注或等效字段中声明。目前未建立该整片过期物料的精确原生 Product 流。医疗废物 Product 流、通用 Waste 流或纯对乙酰氨基酚基本排放流均不能替代。质量和能量支持身份不构成供方或参考商品绑定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q 是首次有记录的合格内部废物流移交处同批整片净质量。cp_release 使用经校准的毛重减独立证实的逐组件皮重，或片数乘独立实测的同批成品单片质量。保留方法、不确定性和代表性，不得仅为本模型打开废药。标示活性成分规格、费用、包装件数及混合桶重量均不是药品净质量。 |
| raw_units | 所有清单行 | 实际声明属性 | kg; MJ | 采集原始总量与事件记录。先换算原单位，再归属及唯一一次除以 Q。体积转质量须独立实测相应状态密度；真实速率仅积分一次，已积分总量不再乘时间。 |
| electricity_unit | electricity | Energy | MJ | 采集实测 kWh，采用 1 kWh = 3.6 MJ。Energy 是计量属性；实际供方流、其原生参考属性及提供方仍须独立核实，不能预先绑定。共用能量单位组不能证明净热值属性。 |
| composition | expired_tablets_in; tablet_fragments; tablet_washwater | Mass | kg | 整片质量包括辅料及实际水分。实测活性成分质量是非加和分账。不从标签规格、COD/BOD、总尘或不明平衡残差推断配方、降解、密度或具体化学排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在有记录弃置决定处的自有库存过期成品片剂，关联采购、库存及包装历史 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC 3.0:39931；更窄的单产品自有过期库存路线 |
| recursive_input_rule | 同批内部移动相消。移交、所有权变化、转售、复检及先前外发品退回不形成第二次参考放行，也不重建药品生产过程。 |
| upstream_dataset_requirement | 保留原药品及包装供方与系统模型来源、库存负担和已含服务；声明原负担归属方法，不能假定废药无负担或重新制造药品。 |
| disclosure | 具体弃置及首次内部接收关口；实际包装、公用工程、库存和承接负担；可选保管边界及原队列；缺失的资格与前景证据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | segregation | 分别证实自有库存来源、过期、不适于原用途、弃置及实际有记录内部接收。接收保管人和指定区域仅在实际记录存在时足以界定内部关口。工厂拒收记录或社区退药研究均不能证明本路线。 | `psi-medicine-disposal`; `oleary-pharmacy-audit-2026`; `wco-hs30-2022` |
| b_operations | segregation | 在声明关口内纳入实际库存核对、隔离、称重、搬运、必要盛装、可归属照明与暖通、清理、失败或零放行操作和待机，保留真实阶段记录。本路线不包含拆泡罩、研磨、干燥、化学转化、病原体处理或活性物质回收。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_release | reference_product | Q 仅在首次合格内部移交计一次。放行前库存加来料库存等于放行前期末库存加 Q 加互斥的其他流出。隔离库存加 Q 和真实退回等于隔离期末库存加实物外发和互斥的其他流出。合并关口时内部 Q 相消；期末库存和外发都不新增 Q。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_pack | 所有清单行 | 对同一实物关口的每种实际包装、容器或托盘组件，opening + P + N_ext + ER = closing + grossS + EO + W。包括空件、放行前随附、隔离后随附及复用库存。P 为真实购买，包括整包价格内组件；N_ext 为首次外部非购买接收，包括随来料、借用、租用、无偿调拨，无论供方数据是否覆盖；ER 必须追溯同一件此前的外发。各类互斥；内部领用和复用相消。 | `ilcd-lca-detailed-2010` |
| b_interfaces | 所有清单行 | 条件性卡片不是完整场址物料清单。实际原药品包装组件及专用桶身、桶盖、内衬、封口或托盘均须分别确定；在声称数据集完整前安装具体原子接收、输出或库存接口及实测数量。聚乙烯袋不证明有合格废物桶，也不能代替桶。不能将缺失原包装藏入净 Q、通用集合行或符号平衡。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| b_custody | 所有清单行 | 关联实物接收、所有权、原件或原队列和逐交换承接负担。实际采购、运输、租赁或其他服务负担仅计一次；缺少供方已含范围的证据就是缺口。退回或首次非购买接收不自动等于新制品、零负担或抵扣。实物周转与环境供应需求向量分账。 | `ilcd-lca-detailed-2010` |
| b_destination | segregation | 基础边界终止于内部隔离。明确声明的后续储存、包装、外发扩展保留原队列质量 Qc，仅加实际新增工作；H 是服务活动而非产量。收集、处理和最终处置是另行关联的下游服务，不能由内部指定证明。不假定销毁性能、外部接收或替代产品抵扣。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| segregation | 自有库存过期指定至首次内部销毁流移交 | required | 实际合格的单产品自有库存队列 | foreground | reference_product |

在该汇总过程中分开保留库存、关口及声明的保管扩展记录。不从公开审计推断数量或辅料实际存在。水、聚乙烯袋和纸质标签仅在实际存在且兼容时适用；原包装与专用容器须逐一确定。整项外购清洁制剂只作为一个采购交换，其组分分析非加和；实际场内配制须列出真实分项投入。盛装片剂不预设常规直接排放。实际泄漏、清洁制剂、公用工程、残余物或具体物种及介质排放，均须新增原子交换并独立计量后才能声称完整。

### 过程：过期指定与内部废物流移交（`segregation`）

#### 输入

##### 产品流

###### 过期自有库存整片药品（`expired_tablets_in`）

记录同批过期片剂从药房自有库存转出，保留原采购及逐交换承接负担。这是库存移交，不是重新采购原料药或辅料。保留可核对的成品制剂身份、对应上游数据集及原包装历史；本交接门不要求制造配方或成分比例。依据既有产品与安全资料分类；产品身份或原生流适用性无法核对时继续明确未决。

- 选定流：过期单方对乙酰氨基酚片剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_history`
- 来源：`psi-medicine-disposal`

###### 计量电能（`electricity`）

按实际总表或分表记录隔离、称重、可归属照明与暖通、待机及清理耗电。保留电压、国家、供方和供应边界。电表 Energy 不等于尚未核实的供方原生属性；额定功率本身不是耗电实测值。

- 选定流：实际药房所用电网电力
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`ilcd-lca-detailed-2010`

###### 实际清理用水（`tap_water`）

仅用于实际管道供应的处理水，不代表药用纯化水、原水取水或蒸汽。原生参考属性是 Mass；其附属 Volume 换算不能代替场址独立实测密度。核对供方与处理边界；已含在外购清洁制剂中的水仅作非加和组分记录。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`ilcd-lca-detailed-2010`

###### 条件性聚乙烯袋接收（`pe_bag_receipts`）

仅代表实际存在的聚乙烯袋制品。原生 Product 身份及 CAS9002-88-4 不规定牌号、尺寸、层结构、供方或适用资质。每笔外部实物接收分入 P、N_ext 或 ER，记录库存和供方范围。不能将全部实物退回或复用都连接到新制袋生产供方。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

###### 条件性印刷纸质标签接收（`paper_label_receipts`）

仅代表实际整张印刷纸质贴标。原生工厂生产混合、全球身份不能证明实际供方或胶黏剂化学组成。记录所有实物接收，包括随来料且无单独发票的标签；外购制品已含印刷与胶层时只计一次，除非这些投入确实另行购入加工。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次内部移交的过期片剂物料（`reference_product`）

唯一参考输出为首次有记录地实物移交至隔离销毁流的整片药品净质量，排除全部包装。必须有实际弃置决定、内部接收保管人及地点、库存转出和质量记录；内部指定不能证明外部接收或已销毁。复检及后续外发不形成第二个 Q。

- 选定流：过期单方对乙酰氨基酚片剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`psi-medicine-disposal`

###### 实际外发随附聚乙烯袋（`pe_bag_dispatch`）

仅在明确声明且实际发生外发的保管扩展中适用。记录同种袋制品的 grossS，与药片净质量 Q 分开，已承接供应负担只保留一次。这是包装移动，不是另一共产品或新制袋生产。基础内部关口仍保管的袋计入期末库存。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

###### 向外部所有者退还聚乙烯袋（`pe_bag_external_return`）

记录实际 EO，与 grossS、W 互斥，保留先前接收、去向以及真实新增运输、清洗或租赁服务。以后入站 ER 必须能追到同一件实物此前的外发。所有权不能抹除实物流或建立抵扣。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

###### 实际外发随附纸质标签（`paper_label_dispatch`）

仅代表声明的保管扩展中实际 grossS。随附承接标签与新贴标签按事件分开，不再次采购原制品。基础内部关口仍保管的标签留在期末库存。真实向所有者退还时须另建互斥的具体去向接口。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

##### 废物流

###### 另行移出的同配方片剂碎片（`tablet_fragments`）

仅记录实际另行称量并交给有记录废物接收方的残余物。已包含在同一参考批 Q 中的碎片不是新增输出。保留成品制剂身份、整股碎片质量、污染状态和去向；纯对乙酰氨基酚排放身份不能代表整片配方碎片。

- 选定流：过期对乙酰氨基酚片剂碎片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：`ilcd-lca-detailed-2010`

###### 实际受片剂污染的清理废水（`tablet_washwater`）

仅代表实际整股水性废水，须有实测质量及处理接收方。独立分析的水和化学物质保留为非加和分账。这里不规定清洗、溶解药品或场内处理；若声明边界内确实存在，须完整记录其具体投入与输出后才能声称覆盖。

- 选定流：对乙酰氨基酚片剂清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：`ilcd-lca-detailed-2010`

###### 使用后受污染聚乙烯袋（`pe_bag_waste`）

仅记录实际组件 W。袋材质量与附着药品分别计量并关联真实废物去向。新袋 Product UUID 不是受污染 Waste 流身份；附着药品仅在药品分账计一次。不设默认回收抵扣。

- 选定流：受片剂污染的聚乙烯袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

###### 移除的使用后纸质标签（`paper_label_waste`）

仅记录实际弃置标签，保留整张制品质量、实际污染和接收方。供方已含印刷及胶层不能再次采购。仍附着保管或已外发的标签不能同时计入 W。新标签 Product 身份不能证明其 Waste 身份。

- 选定流：使用后印刷纸质黏贴标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测可归属数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`ilcd-lca-detailed-2010`

##### 基本流

实物接收、外发及残余物卡片保留实测总接口量和原件及原队列关联，不自动连接新生产供方。这是独立于逐交换环境供应需求向量的非加和保管视图。没有外部交换时，库存变化仍保留在实物分账中。

公开证据没有建立实际物种及环境介质排放。盛装药品不是排放；真实释放须有独立识别的原子行和实测依据，不采用默认损失因子。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | 所有清单行 | 采用归因型前景核算。本过程没有有意共产品；包装移动和保管不是新片剂生产。原采购价格或会计核销不能决定环境负担分配。 | `ilcd-lca-detailed-2010` |
| a_separate | segregation | 优先归属专用记录并实施物理或虚拟细分。剩余共享交换须证明其对实际共同功能的决定性物理因果关系。仅真正未解的余项才采用同一过程关口、物态和期间的实际市场价值。共同质量或收入本身不是因果证据，不能任意选择分配比例。 | `ilcd-lca-detailed-2010` |
| a_history | expired_tablets_in | 按原声明上游系统模型保留药品及包装生产采购负担。过期与弃置既不证明全部负担自动转移，也不证明零负担。每项承接交换向量仅绑定一次；缺失上游历史或分配依据须明确为不确定性，不能重新采购原料代替。 | `ilcd-lca-detailed-2010` |
| a_cohorts | 所有清单行 | 保留放行前及隔离库存的期初期末向量，包含全部失败、零放行、待机与清理记录。后续服务及退回沿用原 Qc，不新增 Q。Q=0 队列保留原始负荷而不产生每公斤结果，不能转嫁给无关成功队列。 | `ilcd-lca-detailed-2010` |
| a_services | 所有清单行 | P/N_ext/ER 仅分类实物接收，与环境负担分开。保留所有者、供方范围和原队列；实际采购、运输、清洗、租赁及其他新增服务仅计一次。无发票接收和供方漏项都须核查。不将包装总复用量乘新制品供方，也不重复供方已含服务。 | `ilcd-lca-detailed-2010` |

## 8. 前景数据采集、计算与质量规则

以下是采集要求，不是已报告观测值。协议保留未归一化总量与事件库存记录；汇总字段只标识最终参考基准。协议均不除以 Q，c_normalize 是唯一归一化。不从审计、分类或一般 LCA 手册推断实测运行范围或场址数值因子。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_history | segregation | expired_tablets_in | stock_history | product; finished_formulation_identity; authorisation_or_specification_id; upstream_dataset_ref; existing_safety_documents; labelled_strength; tablet_form; original_lot; supplier; ownership; original_receipt; expiry; discard_decision; patient_return_exclusion; opening_stock; closing_stock; inherited_vector_i; provider_scope_i | 获取原采购、库存及药师弃置记录，保留原包装、成品制剂身份和逐交换上游来源。依据既有记录及兼容上游数据核对品牌、许可或规格标识、唯一活性成分和剂型；不要求定量制造配方比例。采集每 1 kg 参考流所需的原始总量，此处不相除。 | kg | 每批和每次移动 | 原采购历史至报告期末 | 实际药房与原供方 | 每 1 kg 参考流 | 原始记录；实际场址及期间废物判定；关联上游系统模型 |
| cp_release | segregation | reference_product | internal_handover_weighing | lot; expiry; discard; stock_removal; receiving_custodian; designated_location; event_time; first_event_id; gross; each_component_tare; count_if_used; same_lot_finished_unit_mass_if_used; net; Q; Qc; opening_stock; closing_stock; grossS; actual_return; prior_dispatch; calibration; uncertainty | 核对实际库存转出与内部接收及经校准非破坏性净质量记录。亦可用片数乘独立实测同批成品单片质量，保留代表性采样与不确定性。不能从活性规格、费用或桶毛重推导净质量。采集每 1 kg 参考流所需的原始总量，此处不相除。 | kg | 每次首次移交及保管事件 | 期初至期末，包括零放行期间 | 实际药房库存及隔离接收关口 | 每 1 kg 参考流 | 内部事件记录；药师弃置决定；过期；经校准毛重皮重或同批成品质量依据；实际资格 |
| cp_pack | segregation | individual component interfaces | component_custody | component_id; material; form; direction; event; owner; lot; opening_empty; opening_attached_pre_release; opening_attached_segregated; opening_reusable; P; N_ext; ER; prior_outward_dispatch; closing; grossS; EO; W; measured_mass; supplier_scope_i; inherited_vector_i; incremental_service_i | 逐一确定实际原包装及每种盛装组件。以经校准质量或可追溯实测 BOM 核对全部接收，包括不论供方覆盖与否的首次非购买接收，以及同件退回。安装所有实际原子接口。采集每 1 kg 参考流所需原始总量，内部领用复用相消，此处不相除。 | kg | 每次接收、移动、弃置及盘点 | 期初至期末；退回须保留原件完整历史 | 同一组件实物关口及声明的保管扩展 | 每 1 kg 参考流 | 实测 BOM；接收；所有权及发票或整价范围；历史外发；供方已含范围和缺失披露 |
| cp_utilities | segregation | electricity; tap_water | metered_activity | stage; lot; meter_start; meter_end; raw_unit; rate_time_if_used; density_if_needed; provider; voltage; geography; included_scope; standby; failed_operations; cleanup; service_H; original_Qc | 记录实际仪表、供方活动及有依据的专用或共享阶段归属。区分电表 Energy 与供方流原生属性。不能用额定功率或通用密度替代。采集每 1 kg 参考流所需的原始总量，此处不相除。 | kWh; kg | 每阶段及计量期间 | 完整作业期及声明的保管扩展 | 实际药房和供应关口 | 每 1 kg 参考流 | 仪表校准；供方及场景兼容；分配证据；需要时实测密度 |
| cp_residuals | segregation | tablet_fragments; tablet_washwater | residual_transfer | material; lot; event; whole_mass; measured_water; actual_assay_and_basis; contamination; receiver; treatment_boundary; sample_mass; inherited_vector_i | 独立称量每种真实残余物并识别实际接收方，核对非加和的整物料及分析组分视图。仅 COD/BOD 或总尘不是具体化学排放。采集每 1 kg 参考流所需的原始总量，此处不相除。 | kg | 每次实际残余物移交 | 全部相关操作及清理至期末 | 实际来源及残余物接收关口 | 每 1 kg 参考流 | 衡器；分析方法与基准；移交文件；去向及完整性依据 |
| cp_services | segregation | later custody | cohort_service | original_first_event; Qc; H; raw_exchange_i; prior_dispatch; actual_return; opening_stock_i; closing_stock_i; inherited_vector_i; included_scope_i | 仅用于明确声明的扩展：保留原队列以及真实新增储存、搬运、外发或退回工作。承接供应不是第二次采购。采集原 Qc 每 1 kg 参考流所需的原始总量，此处不相除。 | 实际服务单位; kg | 每次实际服务事件 | 首次内部移交至声明保管终点 | 实际保管方及声明扩展 | 每 1 kg 参考流 | 首次事件来源；真实服务记录；供方已含范围；新增计量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_raw | 所有清单行 | 换算原单位；1 kWh = 3.6 MJ。真实速率只积分一次。体积转质量需要独立实测实际状态密度。保留原始总量与不确定性。 | raw_records; unit_chain; density_if_used | raw_totals_i | `ilcd-lca-detailed-2010` |
| c_mass | reference_product | 每次首次合格事件的 q_event = 毛重减全部独立实测组件皮重，或片数乘独立实测同批成品单片质量；记录所选方法，不能将两种估计相加。Q 为规定同产品队列唯一首次事件净质量之和。标示规格和费用均不能将片数换成药品 kg。 | cp_release; cp_pack | Q | `psi-medicine-disposal` |
| c_tablets | expired_tablets_in; reference_product | 放行前关口：opening_pre + incoming_stock = closing_pre + Q + other_pre_out。隔离保管关口：opening_seg + Q + true_return = closing_seg + grossS + other_seg_out。其他流出为互斥的真实残余物，组成须实测。合并时 Q 相消。已放行品退回及复检不新增 Q；保留原队列和全部实物质量。 | cp_history; cp_release; cp_residuals; cp_services | medicine_reconciliation | `ilcd-lca-detailed-2010` |
| c_components | 所有清单行 | 对每种组件：opening + P + N_ext + ER = closing + grossS + EO + W，包括空件、随附及复用库存。接收类与去向类分别互斥；ER 要求同件此前真实外发。内部领用复用相消。缺失实际接口或数量即不完整，不能设平衡补项或漏掉非购买实物。 | cp_pack; cp_release; cp_services | component_reconciliation | `ilcd-lca-detailed-2010` |
| c_vectors | 所有清单行 | 每原队列、每交换 i：期初承接向量 + 实际转入向量 + 真实新增可归属向量 = 期末向量 + 分配至参考的向量 A_i + 已识别其他去向向量。供方已含范围去重一次。先专用或细分记录，再决定性物理因果，最后仅对同关口、物态、期间未解余项采用市场价值。实物周转不自动等于新增采购负担。 | cp_history; cp_pack; cp_utilities; cp_residuals; cp_services | A_i | `ilcd-lca-detailed-2010` |
| c_normalize | 所有清单行 | Q>0 时在原始换算、归属和核对后唯一一次 a_i = A_i / Q。参考输出为 1 kg。Q=0 保留原始负担，不形成单位结果。后续保管画像采用原 Qc，将实际新增工作在这次相除前加入或单独报告一次增量；H 从不是产量。实物接口的分子在同一归一化步骤中以实测原始 G_i 代替 A_i，单独保留 g_i = G_i / Q，与环境需求 a_i 分开。两个视图不得相加，也不能将总周转连接新制品供应；已归一化数值不得再除。 | A_i; G_i; Q; Qc; cp_release; cp_services | a_i; g_i | `ilcd-lca-detailed-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference_product | 要求实际单产品、批次、过期、弃置和自有库存至隔离流的交集。审计大类不能证明该药品满足交集。 | 原采购、过期和内部保管记录；`oleary-pharmacy-audit-2026` 局限 |
| dq_gate | reference_product | 要求场址及期间的合法废物和非危险资格；CPC、非生物性名称或有限计量检查均不提供危险或安全批准。内部接收不等于外部收集。 | 实际有权判定与内部关口记录；`psi-medicine-disposal`; `wco-hs30-2022` |
| dq_mass | reference_product | 经校准整片净质量或独立支持的同批成品质量换算；排除全部包装并保留不确定性。不提供公开公斤案例。 | cp_release 原记录；`oleary-pharmacy-audit-2026` 数量局限 |
| dq_complete | 所有清单行 | 每种实际原包装、专用盛装、公用工程、清洁制剂、残余物和真实物种都须有独立原子接口或明确实测库存分账。初始清单不是截断规则。 | 实际完整 BOM 与事件清单；组件及物料闭合 |
| dq_lineage | 所有清单行 | 将原库存、实物及供方负担承接至各关口和真实退回，保留真实新增服务、失败、待机与清理，避免重复采购。 | 交换向量及原外发来源；`ilcd-lca-detailed-2010` |
| dq_native | 所有清单行 | 核实实际类型、物态、供应场景、属性和单位链；有正式原生中文名时须准确采用。计量身份不确定供方原生参考属性。 | 原生原件和独立供方场景 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_applicability | reference_product | 要求同产品过期自有库存队列、实际弃置、内部隔离接收及场址期间资格。仅未使用、临近过期、质量暂扣或未领取不能通过。排除来源及生物性、感染性或危险物料不得使用本方法。 | `psi-medicine-disposal`; `wco-hs30-2022`; `oleary-pharmacy-audit-2026` |
| v_reference | reference_product | 要求唯一关联的 Product 输出，每 1 kg 整片净质量及唯一首次事件分母。声称数据集完成前须确定精确原生身份；医疗废物、通用废物及原料药基本排放均不能替代。任何片数换算都须核实同批成品质量依据。 | `wco-hs30-2022`; `oleary-pharmacy-audit-2026` |
| v_stock | 所有清单行 | 核对放行前、隔离及合并实物关口，内部 Q 相消。期末库存及实物外发不是额外生产；退回复检保留原队列且不新增 Q。独立核对分析组分，不用单一残差拟合多个未知数。 | `ilcd-lca-detailed-2010` |
| v_pack | 所有清单行 | 核对每种原包装、容器及托盘组件和具体原子接口，包括 P、不论供方覆盖与否的首次 N_ext，以及同件可追溯 ER。要求 opening+P+N_ext+ER=closing+grossS+EO+W，覆盖空件、随附及复用库存，内部转移相消。缺失数量或接口不能靠符号通过。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |
| v_burden | 所有清单行 | 核对供方范围、承接向量以及真实新增采购、运输、服务负担只计一次。不自动零负担、不按总周转连接新制品，也不默认抵扣。核对细分、决定性物理因果及仅对余项进行的同关口、物态、期间经济分配。 | `ilcd-lca-detailed-2010` |
| v_calculation | 所有清单行 | 原始采集、单位、速率、密度换算及归属先于唯一 A_i/Q 相除。Q=0 保留负荷；服务扩展采用原 Qc，H 从不是产量。供方原生属性及单位兼容与电表计量分开核查。 | `ilcd-lca-detailed-2010` |
| v_destination | 所有清单行 | 内部关口、场外外发及下游处理分别保留。整股废水与组分分析非加和，每项真实交换只关联一个供方。真实残余物及释放须有实际去向、物种和介质；不能推断处置效率或默认排放。 | `psi-medicine-disposal`; `ilcd-lca-detailed-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset；background_dataset 仅在全部适用性、原生身份和证据要求满足后使用 |
| allowed_use | 同产品自有库存过期片剂在首次有记录内部销毁流移交处的物料，声明原负担模型及新增工作范围 |
| excluded_use | 其他药品、剂型及来源；治疗使用；安全或合法操作认证；生物性、感染性或危险废物；处理处置及活性物质回收服务；自动零负担或替代产品抵扣 |
| required_metadata | 成品制剂身份、许可或规格、批号及过期、对应上游数据及既有分类资料，不要求制造配方比例；库存来源及弃置；内部保管人、地点、时间；实际资格；净质量方法及不确定性；完整包装、BOM 和保管；Q 及后续原 Qc；原始与归一化分开；场址、期间、供方及上游分配来源 |
| required_quality_disclosure | 公开证据未证明该产品子组或净 kg；参考 Product UUID 和实际场址数据未决；条件性组件身份不能证明实际存在；原包装及真实服务须完整覆盖；候选指导不等于科学或翻译批准 |
| update_trigger | 新的原始子组、批次、质量、包装或保管证据；废物判定、场址期间或供方变化；修正原生身份及属性链；新增实际交换或上游系统模型修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD，CPC Ver.3.0 Explanatory Notes，2025 年 6 月 30 日，第 205 页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结 39931 身份及相邻类别；仅名称条目不能证明危险属性 |
| unsd-cpc3-notes-2026 | official_guidance | UNSD，CPC explanatory notes，2026 年 10 月 23 日，CPC3!A1940:D1940；https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 最新原始 39931 对应 HS2022 3006.92；仅分类佐证，不改变冻结坐标 |
| wco-hs30-2022 | official_guidance | WCO，HS2022 第 30 章，注释 4(k)，PDF 第 2 页，及 3006.92，第 4 页；https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0630_2022e.pdf | 不适于原用途，包括过期，用以区分药品废物与药用商品；不代替危险属性或实际弃置判定 |
| psi-medicine-disposal | official_guidance | 爱尔兰药学会，Guidelines on the Disposal of Medicinal Products for a Retail Pharmacy Business，引言及 §§3.1.3–3.1.5；https://www.psi.ie/practice-supports/guidance-and-guidelines-pharmacists-and-pharmacies/guidelines-disposal-medicinal | 药房库存隔离、指定保管及评估的定性背景；支持推导有记录内部关口，不证明实际移交或 LCA 质量因子；核实实际适用地点及日期义务 |
| oleary-pharmacy-audit-2026 | literature | O'Leary 等，Unused and expired medicines waste in Ireland – an audit of medicines returned to and generated in community pharmacies，Irish Journal of Medical Science 195，2853–2864，2026，方法、结果及图 3、图 4；https://doi.org/10.1007/s11845-026-04436-6 | 2025 年 4 月至 5 月原始审计区分自有库存废药、过期与退药并记录场内指定；未识别该产品交集、成品片剂质量或完整公斤数据集；费用及单位计数不是 LCA 因子 |
| ilcd-lca-detailed-2010 | handbook | 欧盟委员会 JRC，ILCD Handbook，General guide for LCA，Detailed guidance，2010 年 3 月，§§7.9.2–7.9.3，印刷第 255–272 页；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 一般归因型细分、决定性物理因果及同关口物态经济余项分配层级；本方法平衡和协议是明确推导，不是已报告药房因子或废物豁免 |
| waghmare-expired-tablets-2026 | literature | Waghmare Rohit 与 Bharatee Chaudhari，Comparative Evaluation Test of Fresh & Expired Pharmaceutical Tablets，Asian Journal of Pharmaceutical Research and Development 14(5)，8–13，2026，出版方摘要；https://doi.org/10.22270/ajprd.v14i5.1860 | 仅作为过期对乙酰氨基酚片剂实物状态的独立原始证据；不证明具体成品制剂身份、相同药房、批次、规格、自有库存弃置或处置；不采用试验条件、临床结论、残留回收或使用建议 |
