---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.matches
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原厂闭合家用安全火柴零售整盒：制造方首次放行环境核算

## 1. 范围与适用性

本方法核算普通家用安全火柴零售整盒在原制造方首次成品放行时的环境清单；商品须原厂已装、闭合且保持原状。代表产品类别为 Hushållsask，不据此认定当前 SKU 或已实测批次。功能性内外零售盒及原装全部内容物共同构成不可拆分的声明产品。闭合不代表气密、防拆或单盒密封；单盒密封须有原始 SKU/批次证据，连包封膜不能代替。仅核对外部标识、完整商品称重和环境记录。[smi-solstickan-family-2006; solstickan-household-receipts; smi-packaging-count-faq]

内部商品生产和受托制造保持为不展开的供方黑箱。研究须取得适用且可供独立审阅的汇总环境覆盖，不重建配方、内部材料、点火化学、操作参数、制造或使用步骤。缺失供方覆盖是阻断性数据缺口，不是零负担。已首次放行商品的采购、转售、调拨、增加外箱或二次装盒服务均不创造产品生产。消费使用及其寿命终结在首次放行数据集之外；场内放行前损失和实际独立的放行后处理仍需核算。[ilcd-allocation-2010]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.matches |
| classification_refs | CPC 3.0 38998 Matches，家庭装完整零售盒与该代码的较窄映射已获接受，见 docs/adr/2026-11-22-accept-cpc-38998-original-filled-household-safety-match-box.md。HS 2022 3605 提供分类依据。 |
| covered_products | 原厂闭合家用安全火柴零售整盒，含功能性原厂盒，且有原制造方首次放行证据。 |
| excluded_products | 散装或已打开商品；口袋盒、长盒、蜡烛用盒、高档圆筒及促销变体；纸板式成册火柴；空盒；单独供应的内部物品；将已放行采购商品算作新生产；打火机及部件（38994/38995）、演示模型（38996）、仿首饰（38997）、蜡烛和其他引火商品（38999）及废物（第39类）。近邻标题不代表已对每项排除对象另作映射裁定。 |
| representative_product | Solstickan Hushållsask 家用整盒类别；实际 SKU、规格形态、日期、批次和首次放行须采集。 |
| production_route | 原制造及确有记录的受托供应以黑箱表示，止于唯一制造方首次放行事件；仅限闭合商品环境核算。 |
| market_state | 原厂已装、完整、闭合、原状零售盒；不推定单盒密封；运输外包装另计。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整原厂家用零售整盒的制造阶段供给声明单位，不是点火性能功能单位。 |
| How much | 首次放行的 1 kg 完整闭合零售整盒，含内容物及功能性内外盒；排除连包膜、运输纸箱和托盘。 |
| How well | 有原状 SKU/批次及制造方放行验收证据；不推定性能等效、测试步骤或新认证。 |
| How long or cycle | 每一实体盒仅一次原始首次放行；不假定零售商品寿命或重复使用。 |
| reference_flow_link | reference_product_closed_box |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原厂已装闭合家用安全火柴零售整盒 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造方及实体场址周界；SKU 与 Hushållsask 规格；日期/批次；原厂闭合状态；单盒密封证据或未核实状态；完整零售商品质量测量方法；首次放行盒数 Q 及质量 W；另列连包膜/外箱/托盘 BOM；原制造/受托供方覆盖；先前放行及交接谱系；队列归属和报告期。 |

数据集元数据或等效字段必须声明全部限定信息；属性/单位支撑链不提供产品流 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| complete_retail_mass | 参考产品 | 质量 | kg | 用 cp_release_mass 取得同一声明批次中 Q 个唯一首次放行完整原状零售整盒的总质量 W。不得为测量内容物而开盒。运输包装皮重须由独立可追溯包装记录分开；皮重未决则不能换算。 |
| count_bridge | 整盒计数 | 质量 | kg | 盒数 Q 为伴随观察量，不是分母。W 为实际合格队列质量之和，W/Q 仅描述该范围。不得以标称支数代替实测记录，也不得从目录盒数推算 W。不提供默认单盒质量或支数。 |
| energy_meter | 电力 | 能量 `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | 电表 kWh 与选定供方流的原生属性分开。已核实的 Energy 属性指向能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`；1 kWh = 3.6 MJ。此为单位换算，不证明未决供方流的原生属性为净热值。 |
| no_default_amount | 所有清单行 | 逐行实测属性 | as declared | 各行采用归属该队列后每 1 kg 参考流的数量。实物总账、剩余历史环境负担与新增采购/服务为相互关联的独立量；未知不等于零，实物退回不等于新增采购。 |
| later_service_basis | released_custody 及实际放行后包装服务 | 质量 | kg | 当期 W 可为零。按原放行队列保留全部期间服务、公用工程及包装原量。独立后续阶段强度仅用独立核实正值 W_original（该原队列首次放行完整零售商品质量）归一化，不用当期 W 或虚构替代值。原质量未知则强度未决。 |
| transport_units | road_freight_pre；road_freight_post | 货物运输（质量乘距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 已核实属性指向质量乘长度单位组 `838aaa21-0117-11db-92e3-0800200c9a66`，基准为 t*km；1 kg*km = 0.001 t*km。仅支持量纲换算；实际承运服务流、车辆/载荷、路线边界、分配及空驶约定仍须独立取证，未证前保持未决。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 此前未成品放行的原制造队列，或有记录且仍在首次放行前的受托原制造方交接；内部生产保持黑箱。 |
| starting_condition_role | 首次放行环境核算关口；通过适用黑箱供方清单保留上游负担，不转移为下游再包装。 |
| product_classification_scope | CPC 3.0 38998 中较窄的家用整盒状态及关口；官方叶级与 HS 对应不是制造证据。 |
| recursive_input_rule | 同类外部输入保留实际原产、放行状态及已包含环境覆盖。已放行采购/退回进入放行后账并承接负担，绝不创造 Q。首次放行前的黑箱原制造供应仅一次包含已完成上游覆盖。 |
| upstream_dataset_requirement | 固定实际供方数据集、参考量、日期、地域、场址、技术及覆盖阶段；不展开内部制造地核对原生产、功能零售盒、不合格品、运输、公用工程和供方排除项。未区分的公司足迹不足以支持。 |
| disclosure | 披露实体周界、原制造及受托制造责任、产权/保管、交接与首次放行证据、报告期、两本库存账、供方覆盖、普通包装池及全部未决数量/身份。外地产权不等于场内库存。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_original_gate | factory_release | Q 只计原制造方本队列的首次合格成品放行。核实实际原制造及受托供方交接。已放行采购商品加二次装盒、换标或转售不具生产资格。 | smi-environment-2021 |
| b_opaque_coverage | factory_release | 供方生产及商品内部投入保持黑箱；取得已核实汇总清单覆盖并核对重复/排除，不得换用无依据产品因子或环境零值。无论供方清单是否已覆盖，都要核对普通外包装实物流转和公用工程实际计量记录。只单独计入可归属且处于已核实供方边界之外的环境负担份额。 | ilcd-allocation-2010 |
| b_two_ledgers | factory_release; released_custody | 在同一计数/质量周界保持相邻的放行前及已放行商品实物账。同一 Q/W 从前账流出、后账流入，合并抵销。期初已放行库存、外来已放行接收、真实退回及后续发运均不创造 Q。仍在场留样和登记状态变化不虚增流转。 | ilcd-allocation-2010 |
| b_pack_pool | carton; film; pallet | 对每种实际存在的包装分别记录期初/期末、采购、首次非购买外部接收（随来料、借入或无偿调拨，无论供方覆盖是否已知）及可追至本站同件先前外发的真实退回；接收类别互斥。对外转移、发运、废弃记总量，内部重用抵销。外地自有件是外发，不得同时记边内存货。 | ilcd-allocation-2010 |
| b_embodied_burden | all cohorts and article pools | 逐原件、队列、交换闭合：期初承接负担 + 本期外部带入的剩余已发生负担 + 真正新增负担 = 当期归属 + 期末承接 + 互斥外转/其他归属。真实退回和首次外部接收保留商品及包装历史负担；同一制造、采购、运输或服务不重复计费。供方覆盖未知仍为缺口。 | ilcd-allocation-2010 |
| b_nonoperational | all processes | 本关口为文件及环境核算边界。不得打开商品或提供配方、内部成分、点火材料、参数、制造、测试或使用步骤。对外不合格品/废弃卡仅代表完整已识别商品及有记录的合资格接收方；其他实际破损/丢失按 b_actual_anomalies 处理账务。不规定处置方法。 | smi-solstickan-family-2006 |
| b_zero_release_period | released_custody; all article pools | 当期 W = 0 时，此前已放行整盒仍可能实际发生服务电力、货运、仓储或新增外包装。按期间、原件及原放行队列保留原始数量，包括实物库存/流转和剩余/新增负担。不得除以当期零 W、丢弃记录、创造 Q 或滚入新制造。只有原放行队列正值实测 W_original 已独立核实时，才可计算独立后续阶段队列服务强度；否则保留原量，强度未决。 | ilcd-allocation-2010 |
| b_return_once | all original articles and cohorts | 每次再次入场均关联此前外发负担分录。已核实剩余份额只恢复一次：冲回匹配的外转归属或记录退回承接，二者不能并做。转出份额已抵扣/冲回时，不再加一遍。此前已完全归属份额不作新采购或制造。 | ilcd-allocation-2010 |
| b_actual_anomalies | pre-release, released and packaging ledgers | 有记录的破损或丢失若不满足完整件对外交接，不是 D，也不得推断排放。另设有据异常/库存重分类账，关联原件、数量/单位、位置、状态和负担责任；场内重分类在周界内成对记录。数量、去向或剩余负担未明时保留未闭合差额。不得静默抹去库存、强制配平、虚构废物身份或规定处理步骤。 | ilcd-allocation-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| factory_release | 黑箱原制造及首次放行环境核算 | required | 原制造方队列；仅环境供方覆盖及文件关口 | 单一原产品输出；条件性外部包装/公用工程增量 | 首次放行完整零售商品 1 kg |
| released_custody | 已放行库存核对 | conditional | 实际存在已放行库存、外来接收、真实退回、后续外发或废弃 | 补充实物/历史账；不产生新生产参考量 | 同一 1 kg 参考流；旧队列另列 |

以下条件卡为证据核对项，不声明这些交换已发生。来源支持核算规则，不支持发生性或数量。只有独立证明且未被覆盖的增量进入可加环境清单。商品/包装库存实物流转为补充不可加账项，不得作为重复生产、采购或共产品收益送入求解器。黑箱供方清单保持关联的汇总过程，不虚构服务/产品交换。全部包装及负担记录标记放行前/后阶段。factory_release 包装卡核对实物池，但任何实际放行后包装、运输、仓储或服务增量归属独立后续阶段清单，不得加进首次放行制造结果。其他实际公用工程/材料服务须在采纳前另列明确原子卡。[ilcd-allocation-2010]

### 过程：原始首次放行核算 (`factory_release`)

#### 输入

##### 产品流

###### 未首次放行的原厂闭合家用安全火柴零售整盒 (`pre_external_box_in`)

仅限真实外部受托原制造方首次成品放行前交付，或同件此前未放行外转后的可追溯退回；互斥记录子类型、保管、整盒质量及供方覆盖。已放行采购商品不得进入此行，内部制造不虚构采购。

- 选定流：未首次放行的原厂闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pre_ledger 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pre_ledger`
- 来源：`ilcd-allocation-2010`

###### 购入电力 (`electricity`)

仅限黑箱供方覆盖之外、可归属本队列的独立计量生产环境电力。电压、地域、时间和供方原生属性分别记录；不引入假设电网、燃料、锅炉或工序。

- 选定流：购入电力
- 流属性/单位：能量 `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：保留 cp_electricity 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_electricity`
- 来源：`ilcd-allocation-2010`

###### 瓦楞运输纸箱 (`carton_in`)

以实际存在且材料/形态已核实为条件。实物接收总量互斥分为购买、首次非购买外部接收及同件真实退回，无论供方覆盖情况均记录。采购/服务环境负担另行关联且不重复，退回不重置历史。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 聚乙烯连包外膜 (`film_in`)

以实际存在且材料/形态已核实为条件。实物接收总量互斥分为购买、首次非购买外部接收及同件真实退回，无论供方覆盖情况均记录。采购/服务环境负担另行关联且不重复，退回不重置历史。

- 选定流：聚乙烯连包外膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 可周转实木托盘 (`pallet_in`)

以实际存在且材料/形态已核实为条件。实物接收总量互斥分为购买、首次非购买外部接收及同件真实退回，无论供方覆盖情况均记录。采购/服务环境负担另行关联且不重复，退回不重置历史。

- 选定流：可周转实木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 道路货运服务 (`road_freight_pre`)

仅限原始首次放行前有真实记录的完整商品或普通外包装道路货运，须有实际供方、车辆/载荷规格及独立运输活动证据。排除供方已覆盖路段；其他方式须另列原子卡，不用假设道路代理。放行后服务仅归属独立后续阶段清单。

参考单位组：质量乘长度单位组 `838aaa21-0117-11db-92e3-0800200c9a66`；基准 t*km，1 kg*km = 0.001 t*km。此已核实支撑不选定实际运输服务流。

- 选定流：道路货运服务
- 流属性/单位：货物运输（质量乘距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：保留 cp_transport 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`ilcd-allocation-2010`

#### 输出

##### 产品流

###### 原厂已装闭合家用安全火柴零售整盒 (`reference_product_closed_box`)

唯一参考产品，为唯一首次放行时实测的完整原厂零售商品。首次放行实物原样进入已放行库存，不构成额外销售或第二次产品收益。

- 选定流：原厂已装闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release_mass`
- 来源：`smi-environment-2021`

###### 未首次放行的原厂闭合家用安全火柴零售整盒 (`pre_external_box_out`)

仅限真实记录的放行前退给原供方或对外转移，子类型互斥；该件及其剩余负担移出本周界。后续真实退回可追溯，不是新增制造。

- 选定流：未首次放行的原厂闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pre_ledger 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pre_ledger`
- 来源：`ilcd-allocation-2010`

###### 瓦楞运输纸箱 (`carton_out`)

仅记真实对外发运/退还/转移总量，流转类型互斥并有原件谱系。此为补充实物核算，不作共产品收益或再次上游收费。周界内重用不作外部交换。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 聚乙烯连包外膜 (`film_out`)

仅记真实对外发运/退还/转移总量，流转类型互斥并有原件谱系。此为补充实物核算，不作共产品收益或再次上游收费。周界内重用不作外部交换。

- 选定流：聚乙烯连包外膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 可周转实木托盘 (`pallet_out`)

仅记真实对外发运/退还/转移总量，流转类型互斥并有原件谱系。此为补充实物核算，不作共产品收益或再次上游收费。周界内重用不作外部交换。

- 选定流：可周转实木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

##### 废物流

###### 放行前不合格完整家用安全火柴零售整盒 (`pre_box_reject`)

仅限首次放行前确实移交合资格废物接收方的完整商品；不创造 Q。不拆盒地记录整件质量及实际接收方，不再加内部成分废物。留样或仅冻结库存不是此流出。

- 选定流：放行前不合格完整家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pre_ledger 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pre_ledger`
- 来源：`ilcd-allocation-2010`

###### 废弃瓦楞运输纸箱 (`carton_waste`)

仅记该件真实对外废物移交，保留质量/状态及接收方。不推定回收路线、避免生产收益、周转寿命或废弃比例。实物退出与环境负担销账仅关联一次。

- 选定流：废弃瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 废弃聚乙烯连包外膜 (`film_waste`)

仅记该件真实对外废物移交，保留质量/状态及接收方。不推定回收路线、避免生产收益、周转寿命或废弃比例。实物退出与环境负担销账仅关联一次。

- 选定流：废弃聚乙烯连包外膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

###### 废弃可周转实木托盘 (`pallet_waste`)

仅记该件真实对外废物移交，保留质量/状态及接收方。不推定回收路线、避免生产收益、周转寿命或废弃比例。实物退出与环境负担销账仅关联一次。

- 选定流：废弃可周转实木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_pack_pool 原始量。首次放行队列强度仅用一次归属量除以已核实正值 W；W 为零或未知时保留原记录，不产生制造强度。实物总量与历史/新增环境份额分开。实际放行后包装仅用已核实正值 W_original 算独立后续阶段强度，否则该强度未决。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_pool`
- 来源：`ilcd-allocation-2010`

### 过程：已放行库存核对 (`released_custody`)

#### 输入

##### 产品流

###### 购入电力 (`post_release_electricity`)

仅限独立声明的放行后库存服务实际计量或其他有据测量电力，包括当期没有新增首次放行的情况。按期间及原队列保留 kWh/MJ 原量，与原生产及供方已含电力分开。核实归属、实际供方及原生属性；仅用该队列已核实正值 W_original 归一化独立服务清单，否则保留原量及未决强度。

- 选定流：购入电力
- 流属性/单位：能量 `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- 数量规则：保留 cp_post_electricity 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_post_electricity`
- 来源：`ilcd-allocation-2010`

###### 原厂已装闭合家用安全火柴零售整盒 (`released_external_first_in`)

此前已在别处放行商品的首次外部接收，购买、借入、无偿调拨子类型互斥；不是本站退回或新 Q，承接剩余历史负担并仅一次计真实新增运输/服务。

- 选定流：原厂已装闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_post_ledger 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_post_ledger`
- 来源：`ilcd-allocation-2010`

###### 原厂已装闭合家用安全火柴零售整盒 (`released_true_return`)

仅限可追至本周界同件先前外发的真实退回。承接剩余原始负担，仍为已放行商品，不再次创造 Q。来源不可追溯时列未决，不自动判为真实退回。

- 选定流：原厂已装闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_post_ledger 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_post_ledger`
- 来源：`ilcd-allocation-2010`

###### 道路货运服务 (`road_freight_post`)

仅限原始首次放行后（包括当期 W = 0）有真实记录的完整商品或普通外包装道路货运，须有实际供方、车辆/载荷规格及独立运输活动证据。排除供方已覆盖路段；其他方式须另列原子卡，不用假设道路代理。放行后服务仅归属独立后续阶段清单。

参考单位组：质量乘长度单位组 `838aaa21-0117-11db-92e3-0800200c9a66`；基准 t*km，1 kg*km = 0.001 t*km。此已核实支撑不选定实际运输服务流。

- 选定流：道路货运服务
- 流属性/单位：货物运输（质量乘距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：保留 cp_transport 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`ilcd-allocation-2010`

#### 输出

##### 产品流

###### 原厂已装闭合家用安全火柴零售整盒 (`released_dispatch`)

真实后续发运、退供或对外转移，子类型互斥并关联原首次放行谱系。整盒实物总质量与历史/新增负担分开记录，不作第二次生产输出收益。

- 选定流：原厂已装闭合家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_post_ledger 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_post_ledger`
- 来源：`ilcd-allocation-2010`

##### 废物流

###### 放行后废弃完整家用安全火柴零售整盒 (`released_box_disposal`)

仅限已放行完整整盒真实移交合资格废物接收方。保留历史生产负担，另计有据增量处理且仅一次。不打开或规定处理方式；仍留场的损坏库存尚非对外废物流。

- 选定流：放行后废弃完整家用安全火柴零售整盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留 cp_post_ledger 期间原量；独立后续阶段仅用已核实正值 W_original 相除；缺失则强度未决，不除以当期 W。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_post_ledger`
- 来源：`ilcd-allocation-2010`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_direct | all processes | 优先按队列直接测量及细分供方。原制造与放行后储存/处理分开；专用投入/损失归属实际队列，不将无关商品或旧货转入 W。 | ilcd-allocation-2010 |
| a_residual | shared environmental burdens | 真正不可细分的剩余部分采用有记录的决定性物理因果，以实际记录论证电表/时间/质量驱动。关系无法建立时，采用前须独立审阅同关口同状态经济价值及敏感性。不设通用质量比例、捐款收入驱动、笼统代理或未经审阅因子。 | ilcd-allocation-2010 |
| a_article_history | product and packaging cohorts | 每件/队列/交换独立按 b_embodied_burden 结转。周转件保留有据剩余份额；即使借入或无偿接收，实际承担新增运输/服务也仅计一次。取得供方覆盖或保留缺口。实物入库质量不自动等于新增采购负担。 | ilcd-allocation-2010 |
| a_no_credit | all outputs | 功能零售盒是参考商品组成，不是共产品。补充首次放行调拨及外发包装/商品账项不作第二次产品收益。废物处理关联实际供方，不假设避免原生生产或回收收益。 | ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release_mass | factory_release | reference_product_closed_box | 放行登记及完整商品称重 | SKU；规格；批次；场址；期间；唯一首次放行事件；Q；单个完整盒质量或整队列直接称重；运输包装皮重；W；秤校准；原状证据；单盒密封证据/状态；留样库存状态 | 核对外部 SKU/批次标识及原制造方放行原件；经校准秤称量闭合原状零售商品，或使用可追溯完整商品质量记录。不打开或操作测试。外包装无法凭已核实记录分开时，W 保持未决。 | kg; box | 每个实际首次放行批次 | 同一报告期及原制造队列 | 声明的原制造/首次放行周界 | 每 1 kg 参考流 | 原放行登记；秤证；完整商品质量记录；外包装皮重证据；无重复事件 |
| cp_provider | factory_release | opaque original manufacture | 供方环境覆盖 | 供方 ID/版本/哈希；SKU/批次/场址/日期；参考基准；首次放行责任；原制造/受托交接；覆盖阶段/交换；排除负担；运输及包装覆盖；审阅身份 | 仅核对供方环境清单及外部交接/放行证据；不展开内部制造地闭合总覆盖及重复项。公司平均值或单独的闭合整盒采购发票不足以证明原生产覆盖。 | provider reference basis | 每个供方版本及队列 | 匹配环境统计期 | 实际原制造/受托制造方 | 每 1 kg 参考流 | 固定供方证据；独立方法审阅；覆盖矩阵 |
| cp_pre_ledger | factory_release | pre_external_box_in; pre_external_box_out; pre_box_reject | 放行前实物账 | 期初/期末未放行完整库存；内部原制造完整队列新增 F；受托外部首次交付 I；未放行真实退回 R；互斥退供/外转 T；合资格完整件废弃 D；Q/W；保管；事件 ID；留样位置；队列/剩余负担 | 核对真实文件流转及闭合商品质量/盒数。退回匹配同件此前外转，明确受托方放行责任。不采集假设场内制造步骤。 | kg; box | 每次真实流转及期末 | 统一期初/期末截点 | 同一放行前实体周界 | 每 1 kg 参考流 | 流转原件；未放行状态；同件谱系；完整件合资格交接 |
| cp_post_ledger | released_custody | released_external_first_in; released_true_return; released_dispatch; released_box_disposal | 已放行商品实物账 | 期初/期末已放行库存；前账转入 Q/W；外来已放行首次接收 J 及购买/借入/无偿子类型；同件真实退回 R；真实外发/退供/转移 S 子类型；合资格废弃 D；原放行事件；新旧队列；剩余/新增负担 | 核对闭合商品盒数/质量及真实外部交接，接收及流出类别互斥。退回保留原首次放行身份。登记状态变化及仍在场留样不作实物进出。 | kg; box | 每次真实流转及期末 | 与放行前账同期间 | 同一已放行库存周界并衔接 Q/W 关口 | 每 1 kg 参考流 | 原放行及发运/退回原件；队列负担结转 |
| cp_pack_pool | factory_release | carton_in; carton_out; carton_waste; film_in; film_out; film_waste; pallet_in; pallet_out; pallet_waste | 每种实物分别建账 | 放行前/后阶段；材料/形态；原件/队列 ID；期初/期末数量和质量；购买 P；首次非购买 N 及随货/借入/无偿子类型且不因覆盖未知遗漏；同件真实退回 R；外发 S；废弃 D；实际运输/服务；产权/保管/位置；供方覆盖；剩余负担及此前归属 | 使用实际包装 BOM、进出原件、校准质量记录及池谱系。薄膜卡须核实 PE，不从照片推定薄膜或将其当作单盒密封。采纳前将其他实际材料逐项新增为原子行。不设默认周转次数或寿命。 | kg; article | 每次收发及库存截点 | 统一场址期间 | 声明的实体池，不是全球产权范围 | 每 1 kg 参考流 | BOM；购买与非购买接收；同件退回关联；供方/运输覆盖；库存及负担核对 |
| cp_electricity | factory_release | electricity | 电表及供方环境记录 | 电表 ID；期初/期末 kWh；期间；电压；电网/地域；供方身份及原生属性；供方覆盖/排除；实测归属驱动；不确定性 | 仅读环境电表记录，不读操作设定。核对账单及计量供应，仅归属可独立确认且未被覆盖的增量。kWh 观察量与 MJ 换算分开；绑定流 UUID 前核实供方原生属性。 | kWh; MJ | 每个电表区间及报告期 | 匹配生产环境统计区间 | 实际电表及原制造周界 | 每 1 kg 参考流 | 电表校准；账单；供方重复矩阵；归属审阅 |
| cp_transport | factory_release; released_custody | road_freight_pre; road_freight_post | 实际道路货运活动 | 货运/路段 ID；放行前/后阶段；实际承运方及车辆/载荷规格；原商品或包装原件/队列；实载吨数；实际载运距离；确承担的有据空返；供方覆盖；运费发票/服务责任；原生运输属性/单位 | 使用实际运载质量、路段距离及承运证据；仅按对应约定计算吨公里。供方已含运输与实际另承担服务核对且只计一次；费用本身不是运输活动量。不假设车辆、装载率、距离或空返。 | t*km | 每个实际货运路段 | 同一声明阶段/期间/队列 | 实际供方及实体交接 | 每 1 kg 参考流 | 承运原件；质量/距离；阶段及供方覆盖审阅 |
| cp_post_electricity | released_custody | post_release_electricity | 放行后电表记录 | 报告期；当期 W（含零）；电表/期初/期末 kWh；实测服务归属；原放行队列；已核实 W_original 或缺口；供方/原生属性；此前供方覆盖；MJ/kWh 原量；承接及新增负担 | 读取真实非操作性服务电表及供方记录；没有当期制造也保留旧货期间原量。只有原队列正值放行质量已核实，才可按相同 1 kg 原参考基准表达独立服务强度，否则强度未决。不得除以零当期 W 或挂入新生产。 | kWh; MJ | 实际服务区间 | 期间及原队列分别标记 | 实际放行后库存服务周界 | 每 1 kg 参考流 | 电表证据；服务归属；原队列正值质量；原量及归一化记录分开 |
| cp_anomaly | factory_release; released_custody | pre_box_reject; released_box_disposal; packaging pools | 异常及重分类登记 | 真实事件 ID/日期；原件/队列；原放行/状态；实见破损/丢失数量/质量及不确定性；实际位置/保管；完整件交接判定；原/接收库存类别；匹配重分类；差额；原剩余负担及审阅决定 | 仅用实际盘点、流转及文件证据，不规定处理、打开或处置步骤。完整件对外 D 与场内破损库存、有据丢失、成对内部重分类及未决差异分开。记录已知量，不赋予未核实废物身份、排放或零负担。不为配平而虚构异常。 | kg; box; article | 每个真实异常及期末 | 实际事件及库存期间 | 同一商品或包装实体周界 | 每 1 kg 参考流 | 盘点/事件证据；成对账项；剩余负担；未闭合差额审阅 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_mass | reference_product_closed_box | W = 合格原状首次放行队列质量之和，单位 kg；Q = 对应唯一首次放行盒数。新首次放行制造强度须 W > 0；W = 0 时仍须保留实际库存及后续服务原始记录。独立核实并分开运输包装皮重。不规定实际 W 或 Q。 | cp_release_mass | W；Q | smi-environment-2021 |
| normalize_cohort | factory_release pre-release inventory rows | y_i = a_i / W，其中 a_i 为仅一次归属该原始首次放行队列的实际交换量，W 为其完整零售商品实测质量。其他队列及补充实物总量另列；本除法仅适用于 W 为正的首次放行制造，不适用于零放行期的后续服务。a_i 或 W 缺失时未决，不取零。 | a_i; W; cp_provider | 每 1 kg 参考流的 y_i | ilcd-allocation-2010 |
| pre_balance | factory_release | 以 kg 计 U0 + F + I + R = W + T + D + U1，并按 Q 对应单独闭合盒数账。U0/U1 为放行前库存；F 为黑箱内部原制造完整件新增；I 为外部受托未放行首次交付；R 为未放行真实退回；T 为互斥退供/外转；D 为真实完整件废弃。库存变化或有据质量差异单独列明，不作制造 Q。 | cp_pre_ledger; cp_release_mass | 放行前账差额 | ilcd-allocation-2010 |
| post_balance | released_custody | 以 kg 计 L0 + W + J + R = S + D + L1，另按同式闭合数量账。L0/L1 为已放行库存；J 为外来已放行首次接收；R 为本站此前外发真实退回；S 为互斥后续发运/退供/外转；D 为真实完整件废弃。W 与 Q 是同一跨账转移，合并抵销；J、R、L0、S 均不创造 Q。 | cp_post_ledger; cp_release_mass | 已放行账差额 | ilcd-allocation-2010 |
| pack_balance | carton_in; film_in; pallet_in | 对每种包装分别以件数及 kg 闭合 K0 + P + N + R = S + D + K1。P 购买、N 首次非购买外部接收、R 同件真退回互斥；真实外发 S 与废弃 D 互斥。供方覆盖不决定实物是否纳入。内部重用抵销，外地自有件不计 K1。 | cp_pack_pool | 包装库存差额 | ilcd-allocation-2010 |
| burden_balance | all cohorts and article pools | H0 + H_in_remaining + H_new = H_current + H1 + H_external_other。各项为同一方法同一单位的环境清单向量。H_external_other 为互斥外转去向/其他队列。每项负担关联原件/队列/交换及覆盖；不重复加入此前已完全归属份额、采购/运输/服务。来源份额缺失阻断完整性。 | cp_provider; cp_pre_ledger; cp_post_ledger; cp_pack_pool | 逐交换负担差额 | ilcd-allocation-2010 |
| electricity_units | electricity; post_release_electricity | 仅依已核实 Energy/能量单位组链换算 E_MJ = 3.6 × E_kWh；实际队列归属及供方原生属性另行核实。 | cp_electricity; cp_post_electricity | MJ；保留原始 kWh | ilcd-allocation-2010 |
| freight_activity | road_freight_pre; road_freight_post | A_tkm = 按货运路段求和的实际运载吨数 × 实际载运 km；另行承担的空驶服务按实际供方约定识别，不虚构实载吨公里。放行前/后归属互斥：放行前活动仅用已核实正值 W；后续服务仅用已核实正值 W_original，否则保持期间活动原量及未决强度。 | cp_transport; W; W_original | 每 1 kg 参考流的 t*km | ilcd-allocation-2010 |
| later_service_intensity | released_custody; actual post-release packaging | 即使当期 W = 0，也保留每个实际期间/队列服务 a_period,original 原量。只有 W_original > 0 已独立核实，才可按 z_service = a_period,original / W_original 表达独立后续阶段；否则 z_service 未决。不创造 Q、制造参考量或除以当期零值；原有及新增负担各保留一次。 | cp_post_electricity; cp_post_ledger; cp_pack_pool; cp_transport; W_original | 期间原量；后续服务强度或未决 | ilcd-allocation-2010 |
| actual_anomaly_reconciliation | pre_balance; post_balance; pack_balance | 已列流转等式描述普通完整件流转。若确有独立证据的异常/重分类，在恒等式旁核对有符号有据账项并关联实际库存类别及负担账，不改称 D。数量/去向/负担未明时保留显式未闭合差额。留场破损库存仍在周界内；丢失不证明排放或处置过程。 | cp_anomaly; cp_pre_ledger; cp_post_ledger; cp_pack_pool | 有据异常/重分类及差额 | ilcd-allocation-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_original | factory_release | 原厂家用整盒、实际制造方及首次放行须独立于宣传或产品族证据确立。 | SKU/批次；外标；原放行及合同/交接原件 |
| dq_complete | all processes | 保留实际不确定性、覆盖/排除决策及库存/负担差额；不虚构零值、损失或系数强行配平。不同实物/环境单位不得作伪质量平衡。 | 闭合商品称重；完整流转及供方覆盖账；未决值 |
| dq_native | all applicable rows | 精确类型/状态/属性/单位及供方适用性审阅后才选原生 UUID。历史支撑 XML 不证明当前数据可用性，选定流中文名须来自同一已核实记录。 | 固定直读身份及支撑链；实际供方/接收方规格 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_scope | reference_product_closed_box | 核实实际原厂家用整盒 SKU、原状闭合、制造方、日期/批次及首次放行证据。独立品类证据不等于批次实测，也不允许将连包当成单盒密封。 | smi-solstickan-family-2006; solstickan-household-receipts |
| v_quantity | all inventory rows | 新制造强度须具备正值 W、Q、完整商品质量/皮重证据，所有行及双语分母一致。零放行期原量及独立后续服务按 later_service_basis 记录，不虚构当期制造。不以标称支数、公司平均足迹或运输箱数作批次实测。换算未决时数据集不得合格。 | smi-packaging-count-faq; smi-environment-2021 |
| v_coverage | factory_release | 核实适用的原制造方黑箱环境覆盖及外部公用工程/包装增量不重复。即使有实物盒证据，原制造负担、供方交接或首次放行缺失也阻断资格。 | ilcd-allocation-2010 |
| v_ledgers | factory_release; released_custody | 两本实物账闭合且 Q/W 关口相同；实际放行前退供/外转、外来已放行首次接收、真实退回及废弃均须互斥子类型并关联卡片/协议。留场样品及仅状态变化不创造实物流。 | ilcd-allocation-2010 |
| v_pool_history | all article/cohort pools | 实物及历史环境负担恒等式各自闭合；每次真实购买、首次非购买及可追真退回均记录。即使供方覆盖缺失，实际承担采购/运输/服务也只计一次。外地产权不得同时作已发出及边内存货。剩余份额未知须待审。 | ilcd-allocation-2010 |
| v_atomic_identity | all inventory rows | 每个适用行只含一个原子交换。采纳 UUID 前核实原生流类型、状态、供方路线、属性/单位及中文 baseName。固定历史支撑行仅确立 Mass/kg、Energy/MJ/kWh 及 Goods transport/t*km/kg*km，不证明当日产品身份、原生净热值或当前平台读数。 | ilcd-allocation-2010 |
| v_no_defaults | all processes | 不得虚构实际数量、UUID、定量范围、场址结论或适用性。条件性缺席须有证据，未知流保持未决。完成前将其他实际识别的普通包装/公用工程交换新增为独立双语原子卡，不静默省略或扩展到内部制造。 | ilcd-allocation-2010 |
| v_zero_release_service | released_custody; all article pools | 当期零放行时，实际服务电力、货运、包装及库存原始记录仍保留期间/原队列标记，不得除以 W = 0 或抹去。后续阶段强度仅在正值 W_original 已独立核实且独立归属时接受。退回负担已与外转抵扣的部分不得再次加入。 | ilcd-allocation-2010 |
| v_anomaly | all physical and burden ledgers | 完整件 D 之外的实际破损/丢失须有据异常/重分类或显式未闭合差额，不得让库存静默消失或推断废物/排放。保留原剩余负担责任直至有据归属；记录不导出处理步骤。 | ilcd-allocation-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；background_dataset 仅限经独立来源及研究资格审阅后 |
| downstream_use | 同一完整家用整盒原制造方首次放行供给；后续物流另建模并承接历史负担 |
| allowed_use | 在已核实原生产关口及实际 SKU/批次/场址/期间的闭合商品环境核算 |
| excluded_use | 制造、打开、测试或使用火柴的步骤；全叶覆盖；性能等效；单盒密封声称；采购已放行成品再装盒冒充新生产；从历史照片、捐款总额或公司平均值声称当前批次/认证 |
| required_metadata | 全部限定信息；W/Q；两本实物账；每种实际包装池；原制造/受托供方固定身份及覆盖；实际原生交换及单位；负担结转及分配；研究方法/地域/时间 |
| required_quality_disclosure | 供方/身份缺口、未证批次延续、称重/皮重/计数不确定性、库存/负担差额、条件缺席证据及独立方法/翻译审阅状态 |
| update_trigger | SKU/形态、原制造方、首次放行关口、实体周界、包装材料/池、供方覆盖/原生身份、分配基准或证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0, explanatory notes, 30 June 2025, PDF p.198. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 冻结分类的 38998 Matches 及近邻子类；仅支持分类，不支持生产或定量结论。 |
| unsd-cpc3-2026 | official_guidance | UNSD, CPC Version 3 explanatory notes, 23 October 2026, CPC3!A1856:D1856. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 确认 38998 及 HS 2022 的 3605；相邻 1853–1857 行支持排除边界，不改变六月冻结分类分母。 |
| smi-solstickan-family-2006 | literature | Swedish Match, Inside 3/2006, Swedish edition, p.8, labelled Solstickan product-family photograph. https://www.swedishmatch.com/globalassets/documents/inside-magazine/2006_inside3_sv.pdf#page=8 | 制造方历史产品对照照将 Hushållsask 与 Bruksask、长盒和其他商品分开；照片不证明当前 SKU/批次延续、质量、支数、单盒密封或环境投入。 |
| solstickan-household-receipts | literature | Stiftelsen Solstickan, Ören blir miljoner, Hushållsask line. https://www.stiftelsensolstickan.se/om-stiftelsen/oren-blir-miljoner | 独立受益方将商业家用整盒与其他规格、商品分列；捐款收入不是环境交换或工厂首次放行计数。 |
| smi-packaging-count-faq | literature | Swedish Match Industries, FAQ, packaging-material and stated-quantity questions only. https://www.st-ab.se/about-us/faq | 仅采用生产商关于内外盒使用再生纸板、标称支数可能变化的两项说明；不提供批次 BOM、包装质量或实测支数，其他 FAQ 内容不在本方法内。 |
| smi-environment-2021 | literature | Swedish Match, Sustainability reporting 2021, printed p.57 (PDF p.24), production-unit footnote and environmental tables. https://www.swedishmatch.com/globalassets/documents/sustainability/sustainability-reporting-archive/2021_sustainability_swedish-match-annual-report_en.pdf | 仅支持按火柴盒进行生产环境统计；产品族及跨分部汇总值不能填入具体家用整盒清单或其增量足迹。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–265 (PDF pp.275–285). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅作为需分配的归因型核算依据：细分、物理因果及剩余部分同交接点经济价值；不提供整盒实测量、通用系数或完整 ILCD/PEF 合规结论。 |
