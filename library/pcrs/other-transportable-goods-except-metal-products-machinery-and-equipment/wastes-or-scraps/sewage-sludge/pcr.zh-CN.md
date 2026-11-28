---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.sewage-sludge
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 首次接收交接的未稳定化城市污水原污泥

## 1. 范围与适用性

本方法描述卫星城市污水厂以散装形式向另一持证污水处理厂供应的实物残余物，以接收场址混合、筛分、浓缩或生物处理之前的首次验收为计量点。限定实例为 Leigh 接收的外来原污泥，与本站初沉污泥和剩余活性污泥分开。仅纳入有来源证明、废物代码为 19 08 05 的城市污水污泥；许可接收的其他物料不在本方法范围内。这是残余物交接数据集，不代表新生产污泥或处理服务。[leigh-permit-2024]

2026 年 10 月说明工作簿将 CPC 39920 关联至 HS 3825.20；冻结的 2025 年 6 月分类坐标保持不变。HS 第 38 章注 5 纳入未稳定化城市污泥，排除适合肥料用途的稳定污泥。仅凭填埋去向不能完成此项排除检验。必须取得实际未处理状态和来源证明，不能从名称推断肥料适用性。排除适合肥料用途的稳定污泥、消化脱水泥饼、堆肥、干污泥、灰、工业或饮用水污泥、城市混合垃圾（39910）、医药废物（39931）、其他临床废物（39939）、溶剂（39940）、化工废物（39950）及未指明废物（39990）。[unsd-cpc3-2025; unsd-cpc3-2026; wco-hs38-2022]

运营方 2024/25 年度原表将 Glazebury 列为未与污泥处理中心共址的外部来源，并记录向 Leigh WwTW 实际公路转运原液态污泥。该年度去向证据支持路线，全年干吨、场均干固体及去向份额均不能替代同车湿净质量、固体检测或实测距离；STC 表的处理后产品不是本参考物。[uu-bioresources-2024-25]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.sewage-sludge |
| classification_refs | CPC 3.0 39920，已接受本方法的较窄范围，见 docs/adr/2026-11-22-accept-cpc-39920-raw-urban-sewage-sludge-at-first-receiver-handover.md |
| covered_products | 首次接收交接的未稳定化城市污水原污泥 |
| excluded_products | 接收厂本地污泥、工业污泥、饮用水处理污泥、消化或脱水泥饼、干化污泥、堆肥、灰烬、适合作肥料的稳定化污泥、城市混合垃圾（39910）、药品废物（39931）、其他临床废物（39939）、废有机溶剂（39940）、化学工业废物（39950）、其他未列明废物（39990）和处理服务 |
| representative_product | 首次接收交接的未稳定化城市污水原污泥 |
| production_route | 源头城市污水固体分离；原污泥散装外发，经公路罐车转运至首次接收方，尚未处理 |
| market_state | 供持证处理的湿态未稳定化残余物；不假定正商品收入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在接收处理界面交付可追溯城市原污泥 |
| How much | 1 kg 接收状态湿污泥净质量 |
| How well | 城市来源、原污泥状态及接收验收证明；实测固体和实际接收检测 |
| How long or cycle | 一个声明的来源场址与接收场址报告期，逐批追溯交接 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次接收交接的未稳定化城市污水原污泥 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 来源厂及集水区；19 08 05 来源；未稳定化原污泥状态及稳定化历史；肥料适用性评估；来源首次放行编号；接收方及验收；批次日期；所有权及费用；湿净 kg；游离液；固体检测方法及不确定性；报告期；运输供方、载荷、距离及空返；上游边界及分配；分批期初期末来源及在途存量；首次有效受理与拒收退回损失事件编号；受理、结转、终端及未决绝对负担台账；完整性 |

所有必需限定信息须在元数据、过程说明或等效字段中声明，缺失则数据包不完整。原生商品绑定前须解决参考身份；模型中的产品输出角色不将法律上的废物重新定义为商品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| wet_basis | reference product | Mass | kg | 采用经校准的接收状态净质量，排除车辆、罐体和不相关液体。若采用体积，m_wet = V_measured * rho_lot，以实际计量的污泥体积 m3 乘同批独立实测密度 kg/m3，得到 kg。采样、物态、温度、固体分层、夹带气体及游离液纳入范围须与实际体积计量一致。状态变化时按匹配体积增量与密度积分；不采用罐体标称容量、通用密度或不匹配采样基准。 |
| solids_basis | reference product | Mass | kg | 湿质量与配对的操作性干固体分开。干燥失重不能证明为纯游离水；不得假设含水率或固体范围。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 来源外发口的可追溯原污泥及其声明的继承负担历史 |
| starting_condition_role | intermediate_product |
| product_classification_scope | CPC 39920; HS 3825.20 |
| recursive_input_rule | 实际来源形成过程仅连接一次；不递归采购泛称污水，不将转运倍增为生产 |
| upstream_dataset_requirement | 来源特定残余物历史及运输供方采用不重叠边界；历史缺口须披露 |
| disclosure | 边界、状态、所有权、分配、供方重叠及缺失数据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| bound_handover | handover | 终点为接收方处理或混合前首次实测验收的散装交接。本站污泥、后续热水解、消化、脱水和土地施用排除。来源首次放行与接收验收分别记录；调拨、转售和退回不产生新生产。 | leigh-permit-2024 |
| bound_provider | all inventory rows | 来源供方负责外发前分离、贮存和装载；运输供方负责实际公路运输及其燃料排放。核实所选界面卸载是否包含。已完整供方范围不得重复列本站电力、柴油或排放。供方数据缺失为未知，不是零。 | jrc-ilcd-2010 |
| bound_bulk | handover | 散装污泥排除运输罐与车辆皮重；两者不是购入包装。不假设袋或托盘池。若实际包装跨界，须扩展方法，按组件及事件逐项列原子行：购买、首次外部非购买接收（包括随货或借入）及追溯既往外发的真实退回。核对全部存量、外发及废弃，采购运输服务负担各计一次。 | jrc-ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handover | 原污泥供应至接收方 | required | 有第 1 节范围证明 | foreground | 1 kg |

### 过程：原污泥交接（`handover`）

#### 输入

##### 废物流

###### 来源外发口未稳定化城市污水原污泥 (`raw_sludge`)

该单一物料在来源外发口计量并连接实际来源供方历史。

- 选定流: 来源外发口未稳定化城市污水原污泥
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_mass 中可归属于首次有效受理批次的原始来源入账湿质量，按第 8 节计算为每 1 kg 参考流。未结批次单独结转；重发转移同一来源向量，不再次采购或形成污泥。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_mass
- 来源: leigh-permit-2024; jrc-ilcd-2010

##### 产品流

###### 城市污水原污泥公路罐车货运 (`tanker_transport`)

该单一运输服务连接来源与接收界面，采用匹配的实测湿载荷及实际距离。

- 选定流: 城市污水原污泥公路罐车货运
- 流属性/单位: 运输功 / t km；原生支持未决
- 数量规则: 采用 cp_haul 中可归属于首次有效受理批次的全部实际路段，包括其先前失败尝试及载货退运，按第 8 节计算为每 1 kg 参考流。未结和终端拒收运输保留分项绝对账；披露空返、装卸及洗罐范围。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_haul
- 来源: jrc-ilcd-2010

#### 输出

##### 产品流

###### 首次接收交接的未稳定化城市污水原污泥 (`reference_product`)

- 选定流: 首次接收交接的未稳定化城市污水原污泥
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_mass
- 来源: leigh-permit-2024

本核算界面不主张发生直接转化或环境排放。验收前实际溢洒、拒收污泥或泄漏须实测，保留于运输或来源供方清单，并与 Q 分开核对。若供方遗漏该活动，须先增列其具体原子流及采集再声明完整。原生 Waste 与 Product 身份仍为绑定缺口。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_history | raw_sludge | 声明研究废物边界。追溯来源负担向量，尽可能将分离装载与污水处理细分；剩余多功能交换采用有证据的因果分配。不默认为零历史。废物处理费用不是污泥共产品正收入；不得采用肥料价值、养分替代或避免处置信用。分配未决阻止形成完整上游结果。 | jrc-ilcd-2010 |
| alloc_haul | tanker_transport | 采用供方实际载荷和路线记录，隔离其他货物。共用运输按有依据的物理因果分配并披露空返处理。不将污泥混合物再拆成水和固体产品。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

采集保留未归一化原始总量；汇总规则列表示最终报告基准，原始数据仅按计算规则归一化一次。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | handover | 污泥批次及来源 | 称重及验收台账 | gross; tare; retained tank heel; original source-entry wet mass; dispatch attempt ID; parcel lineage; first valid acceptance ID/date; accepted net mass; rejection event; actual return event; terminal destination; free liquid; measured volume/density/state/sample IDs if used; opening/closing unaccepted source and transit stocks; losses; source ID; receiver; date; original release; ownership | 在实际交接点用校准秤配对前后称重，核实罐底残留及验收。保留批次链接、来源原污泥状态证明与实际接收检测规范。 | kg | 每批 | 完整报告期及跨期批次 | 来源外发至接收混合前界面 | 每 1 kg 参考流 | 秤校准、接收签字、存量损失核对 |
| cp_solids | handover | 配对干固体 | 代表性实验室记录 | lot; dish; wet dish; dried dish; method edition; sampling; free liquid; uncertainty | 同批代表性采样、均质化、实际验证的重量法及质控。EPA 草案示例不代表英国合规要求。 | kg; % | 每一合格批次 | 同交接期 | 混合前同批 | 每 1 kg 参考流 | 样品链、方法范围、实验室质控 |
| cp_haul | handover | 罐车运输 | 供方行程台账 | lot/parcel ID; leg ID/date; dispatch attempt; wet payload; loaded km; mode; provider; loaded return; empty return; cleaning; included scopes; original source vector; opening absolute vector; new actual increments; accepted/carry/terminal/unresolved disposition; allocation | 实测货物载荷与实际行程距离和供方范围配对，负担历史另行记录。 | kg; km | 每次行程 | 完整报告期含失败交付 | 实际来源接收路线 | 每 1 kg 参考流 | 行程凭证、供方清单及重叠核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | reference_product | Q = 本期首次有效接收的各实物分批湿净质量之和，单位 kg，保留原批次及分批谱系、受理编号和日期。受理前拒收与退回不贡献 Q；退回的未受理分批可在后期首次有效受理时贡献一次 Q。重发、重复受理及已有效受理后的退回不产生新 Q。受理后退回及服务事件另设总量账，链接原已受理批次。Q = 0 时保留分项绝对账，不给出每 kg 结果。 | cp_mass | Q | leigh-permit-2024 |
| solids_mass | reference_product | f_DS = (dried_dish - dish) / (wet_dish - dish)；DS_lot = wet_lot * f_DS。逐批固体质量求和，不无权平均百分比。互补干燥失重为操作性指标，不等于纯游离水身份。 | cp_solids; cp_mass | f_DS; DS_lot | epa-solids-1684-draft-2001 |
| transport_work | tanker_transport | T = sum(payload_kg * loaded_km / 1000)，单位 t km，逐一计入有唯一编号的实际路段。载荷为排除罐体车辆的湿污泥。载货退运与后续重发是不同实际路段，既不相互抵消，也不形成新来源生产。每段绑定批次及已受理、结转、终端或未决绝对账；结转本身不新增 t km。实际供方空返负担仅计一次，不为空车虚构载货运输功。 | cp_haul | T | jrc-ilcd-2010 |
| normalize_inventory | all inventory rows | Q > 0 时 a_i = A_i / Q，仅一次。A_i 仅含经有据换算分配后结算给本期首次有效受理分批的绝对交换向量，包括其前期结转来源历史及既往实际运输和本期增量。期末未结、终端拒收损失及归属未决批次的向量从该分子排除，另行报告，不摊给当期 Q。已归一化供方结果不得再次相除。有效受理后实际归属的后续服务仅作为另行标注日期的增量，绑定其原受理批次数量 Qc，不归给无关当期 Q；不新增来源向量或 Q。Q = 0 时保留所有分项绝对账及结转链接。 | cp_mass; cp_haul; A_i; Q | a_i | jrc-ilcd-2010 |
| physical_closure | all inventory rows | 逐期以湿 kg 核对两本实物账：O_transit + D_gross = E + R + J_transit + L_transit + C_transit；O_source + N + R = D_gross + J_source + L_source + C_source。O/C 为期初期末未受理存量；来源存量包含可重发的退回批次，在途存量包含接收方尚未受理的暂存。N 为首次进入本链的原始来源实物，仅计一次；D_gross 为每次实际外发，R 为实际返源，E 为首次有效受理，J 为转入独立终端拒收管理的实物，L 为实测损失。J、R、E、L 与期末在途结局互斥，拒收事件本身不是额外质量项。退回且待重发计 R 及来源存量，不计 J；分流则采用有称重证明的不同分批。合并两账时 D_gross 与 R 抵消：O_source + O_transit + N = E + J_source + J_transit + L_source + L_transit + C_source + C_transit。后续已受理批次退回采用 accepted_mass 的独立总量账，不重新进入此首次受理账。 | cp_mass | wet_mass_ledgers | jrc-ilcd-2010 |
| cohort_accounts | all inventory rows | 对每一原批次及可追溯分批逐交换记录绝对向量 H，逐项守恒：H_open + H_new = H_accepted + H_carry + H_terminal + H_unresolved。该平衡仅覆盖首次有效受理或终端结局之前的链；受理后服务增量按 normalize_inventory 另记带日期的原批次账，不进入此平衡。H_new 仅含首次入账来源历史与新发生的实际运输或服务；退回重发转移同一历史，只增加实际新增路段和服务。H_accepted 对应本期首次有效受理分批；H_carry 对应未受理来源及在途存量，逐交换精确结转至下期期初；H_terminal 单列终端拒收及损失处理；归属不明留 H_unresolved，禁止用余额补齐或摊入受理批次。部分分流须以实测质量及有据因果分配拆分向量，共用过程先完成有据分配；证据不足保持未决。湿 kg、各项交换和 t km 分别闭合，不能互作平衡项。Q = 0 时全部分项绝对账仍保留。 | cp_mass; cp_haul | absolute_cohort_vectors | jrc-ilcd-2010 |
| cohort_example | all inventory rows | 以下为人为设定的台账验算，不是 Glazebury/Leigh 实测、参数或数量范围；假设不损失、不稀释、无其他载货路段。第 1 期新入账 A=600 kg、B=300 kg、C=100 kg，均载货行驶 10 km。A 首次有效受理；B 拒收后载货 10 km 返源并留待重发；C 跨期在途。实物账为 1000 = 600 + 300 + 100；合并来源与在途账为 1000 = 600 + 300（来源结存）+ 100（在途结存）。Q1=600 kg。载货运输功为 6 + 3 + 1 + 3（B 返运）=13 t km；归 A 受理账 6，结转 B 的 6 及 C 的 1，共 7 t km。来源向量 S_A、S_B、S_C 各入账一次，仅 S_A 归本期受理。 第 2 期无新来源生产。B 载货重发 20 km，新增 6 t km，随后首次有效受理；C 继续载货行驶 10 km，新增 1 t km，随后终端拒收并转交独立管理，不再另计返源。湿质量期初 400 = 本期首次受理 300 + 终端转出 100，Q2=300 kg。运输功期初结转 7 + 本期新增 7 = B 受理 12 + C 终端 2 =14 t km；两期实际载货功 13+7=20= A 6+B 12+C 2。S_B 只从结转账移入受理账，S_C 留终端账；B 每 kg 运输功为 12/300=0.04 t km/kg，而非把期内所有运输或 C 的终端负担分摊给 Q2。原始形成质量总账为 1000=600+300+100，尽管两期毛外发合计 1300 kg。受理、终端、结转或归属证据缺失均保持未决。 | physical_closure; cohort_accounts | constructed_ledger_check |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | dataset | 核实来源、接收方、原污泥状态、报告年和确切供方边界；许可是示例，不是运输实测。 | 实际许可、转移验收凭证 |
| dq_closure | all inventory rows | 采用 physical_closure，按每次外发尝试的互斥实物结局核算。拒收是事件：拒收后实际返源的分批仅计实际退回，不同时计终端拒收。拒收后尚待裁决的物料保留于期末未受理存量。保持来源存量、在途及重发之间的分批谱系；核对实测差异，不倒算缺失水或气。绝对负担采用 cohort_accounts 分项记录。 | 配对批次台账及不确定性 |
| dq_identity | all inventory rows | 分类标题不暗示原生流或供方数量；身份历史缺口须可见。 | 原件、原生属性类型单位核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_scope | dataset | 核实实际接收界面的城市 19 08 05 来源和未处理状态；拒绝适合肥料用途的稳定污泥及第 1 节各项排除物。实际最新许可另行核实。 | wco-hs38-2022; leigh-permit-2024 |
| val_mass | all inventory rows | 核对双语同一湿 kg 参考量、输出链接、配对固体、采用体积时实际计量体积乘匹配采样密度，以及不重复计入拒收事件的 physical_closure。核对 cohort_accounts、首次有效受理 Q 和仅以已结算受理向量作分子的单次 A_i/Q 归一化。验算跨期示例算术，不作运行数据。游离水、操作性固体和运输功不能替代湿净 Q。 | epa-solids-1684-draft-2001; jrc-ilcd-2010 |
| val_provider | all inventory rows | 核对来源首次放行、实际外包交接、保留负担历史、分配及运输重叠。不预设零负担、服务费收入或信用。原生参考身份缺失阻止原生绑定，计量缺失阻止完整性声明。 | jrc-ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 匹配处理前接收界面的原污泥残余物输入 |
| allowed_use | 原生身份经审阅、上游废物边界明确的同状态实测交接 |
| excluded_use | 处理绩效、肥料安全、消化泥饼、避免处置、新生产或通用摇篮到厂门主张 |
| required_metadata | 第 3 节全部限定信息、供方边界和身份状态 |
| required_quality_disclosure | 缺失数量身份历史、实验室限制、分配及实测不确定性 |
| update_trigger | 来源状态接收路线许可变化；新原生身份或实测证据 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Ver.3.0 Explanatory Notes, 30 June 2025, PDF p.205. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结标题及相邻废物类别；不提供工艺运行规则。 |
| unsd-cpc3-2026 | official_guidance | UNSD 23 October 2026 explanatory workbook, CPC3!A1938:D1938. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 仅支持 HS 2022 3825.20 对应；不改变共享分类。 |
| wco-hs38-2022 | official_guidance | WCO HS 2022 Chapter 38, note 5, PDF p.2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | 城市污泥定义及适合肥料用途稳定污泥的排除。 |
| leigh-permit-2024 | official_guidance | Environment Agency, Leigh WwTW STF permit EPR/NP3601LR, issued 28 June 2024, pp.2–3 and Table S2.2 p.22. https://assets.publishing.service.gov.uk/media/668ffa0c0808eaf43b50ce13/Application_Bespoke_Permit_Issued_-_28062024.pdf | 处理前外来原污泥、本站流分离及 19 08 05 接收；不提供研究运输数量，不声称当前许可。 |
| epa-solids-1684-draft-2001 | official_guidance | US EPA Method 1684, Draft January 2001, sections 1–4, 8–12. https://www.epa.gov/sites/default/files/2015-10/documents/method_1684_draft_2001.pdf | 重量法固体示例及干扰质控限制，不是英国法定方法或可移用固体含量。 |
| jrc-ilcd-2010 | handbook | European Commission JRC ILCD Handbook, Detailed guidance, March 2010, sections 7.9.2–7.9.3, printed pp.256–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 细分、因果分配及废物收费限制；PCR 综合方法定义实测交接台账，不提供固定分配系数。 |
| uu-bioresources-2024-25 | official_guidance | United Utilities, Bioresources Market Information 2024/25, WwTW!D3, D63, U63, AB63:AD63; contrast STC!I28:L28. https://www.unitedutilities.com/globalassets/documents/corporate-documents/united-utilities---bioresources-market-information---2024-25.xlsx | 实际年度外部原液态污泥公路去向；不移用年度均值、干吨、份额或处理后产品。 |
