---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wastes-from-chemical-or-allied-industries
language: zh-CN
status: candidate
content_maturity: draft_methodology
sync_with: pcr.en-US.md
---

# 钛铁矿硫酸法钛白生产的未中和水解母液

## 1. 范围与适用性

本 PCR 仅涵盖由干燥钛铁矿硫酸法钛白生产在水解及初次过滤后形成、可追溯来源的未中和液体母液，终点为向明确酸再浓缩接收门首次放行供料。物理路线止于蒸发、盐回收或中和之前。参考对象是整份残余液，不是纯硫酸、处理服务或跨化学品选择器。来源形成从整份矿石/酸/还原剂收货保留。JRC 图3.4/3.5及第3.3节支持这一顺序，并区分水合物、铜矾、弱酸及后续酸回收/石膏路线。这是透明定性技术综合，不是当代同厂实测质量平衡。

排除污水污泥、城市与临床/药品废物、废有机溶剂、富油流体、金属酸洗液、铁钢渣、金属/贵金属回收残余物、以铜矾或石膏为参考、颜料/水合物产品、钛渣路线或混合来源料液、洗涤后弱酸废液、中和污泥、再生/浓缩酸及历史混合堆存液。不规定通用酸强度、成分、密度、产率、反应排放、危险分类、法律阈值、接收等级或回收信用。

来源： `un-cpc3-2025`; `un-cpc21-hs2017`; `wco-hs2022-38`; `wco-hs2022-26`; `jrc-lvic-s-2007`.

## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.wastes-from-chemical-or-allied-industries |
| classification_refs | CPC 3.0 39950；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 规定钛铁矿路线形成、用作酸再浓缩供料的一股未中和无机强酸水解母液 |
| excluded_products | 排除污水污泥、城市与临床/药品废物、废有机溶剂、富油流体、金属酸洗液、铁钢渣、金属/贵金属回收残余物、以铜矾或石膏为参考、颜料/水合物产品、钛渣路线或混合来源料液、洗涤后弱酸废液、中和污泥、再生/浓缩酸及历史混合堆存液。不规定通用酸强度、成分、密度、产率、反应排放、危险分类、法律阈值、接收等级或回收信用。 |
| representative_product | 钛铁矿硫酸法钛白生产的未中和水解母液 |
| production_route | 整份来源投料 → 磨矿/酸解 → 铁还原 → 澄清/铜矾结晶 → 水解 → 初次过滤 → 实际冷却/必要精滤 → 首次再浓缩供料质量放行 |
| market_state | 首次放行时的整份酸性液体，溶解/悬浮相与热状态实测；有符号价值/费用、所有权及法律状态独立声明 |

## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 为明确再浓缩供料功能提供一批规定整份母液 |
| How much | 首次质量放行时整份液体净质量 1 千克；完整新生产批次采用实测 Q |
| How well | 根据实测游离酸、盐、悬浮物、水与温度，由接收方确认实际进口适用性；无默认验收阈值 |
| How long or cycle | 一个声明的来源生产/放行批次及期间；后续服务保留原批次 Q_c |
| reference_flow_link | released_acid |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 酸性浸出液 `cae33063-dfce-4ac0-b82c-d6d58846c897` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钛铁矿来源及矿相; 干料状态及整份来源收货史; 硫酸酸解与铁还原路线; 来源批号与原批次; 水解与初次过滤门; 未中和整份液体身份; 游离酸度及经验证基体适配测法; 溶解盐身份及化验; 悬浮固体及沉降状态; 独立实测水及相态证据; 取样与均化方法; 温度及体积转换时真实密度; 首次放行净质量 Q 及时间; 具名接收进口及供料验收; 声明门的真实价值或费用; 所有权及继承交换向量; 期初期末在制品与成品历史; 原生 Product 定位兼容性; 包装与容器事件史; 场址及时间覆盖 |

每项限定信息须在数据集元数据、参考备注或等效数据包字段声明。该 Product 参考仅表示钛铁矿硫酸法水解及初次过滤后剩余、具有明确来源限定的用后酸浸液：分离水合物后，游离酸、水与溶解盐仍保留在整液中。须保留实际残余 Ti、其他溶解组分及悬浮相，不能假定完全脱除或固定物种组成。规定首次再浓缩供料门位于蒸发、盐回收或中和之前。水解前 TiOSO4 原料液、纯/新鲜酸、回收浓酸、Waste 及处理服务仍属不同对象。该定位不确立具体批次的成分、接收验收或分配。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_release 所采首次放行整液净质量；实测游离酸、盐与水是子账，不能作为替代参考分母。 |
| raw_units | all inventory rows | actual row property | actual row unit | 保留原始单位，先执行 raw_to_inventory，再分配并执行 normalize_once。kWh × 3.6 = MJ 来自已核原生能量单位组；蒸汽仍按千克记录并独立保留热状态证据。 |
| liquid_volume | liquid rows | Mass | kg | 实测累计体积换质量须使用同一酸液、相应状态/温度下独立实测密度；累计体积不能再乘时间。仅真实速率才积分。不得套水密度于酸液或料浆。 |
| water_phases | material balance rows | Mass | kg | 以独立证据区分游离水、结构保留水、反应水与相态转移水；不能用一个残差拟合两个未知或套固定水合式。 |
| pack_mass | each component | Mass | kg | 每个实际组件均须称量；件数记录须有该构型独立实测单件质量，不能套种子袋或通用件数换算。数量与质量在核对前作为独立观测保留。 |
| service_basis | released cohort service | original reference Mass | kg | 保留原 Q_c 与继承向量；暴露量 H 仅描述贮存/搬运时长或强度。独立服务结果依 normalize_once 仅按原 Q_c 换算一次，不新增产量。 |

## 5. 系统边界

### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 来源收货门的整份干燥钛铁矿及实际外供酸解酸、还原剂和辅助物，承接兼容上游历史 |
| starting_condition_role | 前景原始来源形成边界；不是无负荷外购成品母液 |
| product_classification_scope | 第1节规定的单一来源限定无机液体残余物；CPC39950 为来源限定的较窄范围 |
| recursive_input_rule | 不得递归采用无负荷同类输入；按原交换向量及真实增量服务区分原批次内部转移、真退回与外来再生酸 |
| upstream_dataset_requirement | 核供货整物料及公用工程的路线/状态/等级/地区和已含范围，每项原始/当前负荷仅表示一次 |
| disclosure | 来源与接收门、物理过程模块、真实包装拓扑、所有权/批次、分配、库存、化验、原生限制、排除阶段、服务账及不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_chain | source_formation; acid_release | 纳入整份来源收货及其上游负荷、备料/磨矿、酸解、铁还原、澄清和实际助滤剂使用、铜矾结晶、水解前实际存在的料液浓缩、水合沉淀、初次过滤、实际母液冷却/必要精滤、取样、贮存、搬运以及向规定酸再生供料进口的交接。这是一条路线的定性技术综合，不是同厂实测配方。本配置采用干燥钛铁矿、外供蒸汽及外部废物处理。湿矿燃烧干燥、钛渣混配、厂内锅炉、厂内中和、煅烧/颜料后处理及酸再浓缩均不能隐藏在其中；若真实发生，须明确补充范围与原子记录。 | `jrc-lvic-s-2007` |
| b_reference_gate | released_acid | Q 为新近形成母液批次按明确再浓缩供料规格首次有据质量放行时的唯一整液净质量之和。须写明真实进口/槽及接收方；合格不意味着虚构市场等级或合法许可。排除包装、循环库存、不合格/取样损失、历史期初成品、复检、重复交付和已放行退回。首次放行后仍在期末成品库存的批次已计入 Q，不能再加期末成品作新输出。仅计划接收方而无真实供料兼容证据时，具体数据包不完整。 | `jrc-lvic-s-2007` |
| b_history | all inventory rows | 按物理批次保留原料、在制品、成品期初/期末及每项交换继承负荷向量、原供方已含范围和母过程分配决定。原形成投入向母液/水合物/铜矾去向各承接一次。来源/放行内部转移及自产晶种/酸/水回用在合并边界抵消，但不能抹除历史；外来再生酸回流须核真实原批次/供方边界及新增实测服务，不能当新鲜购酸。废物名称、所有权转移或缺失化验均不代表继承负荷为零。 | `jrc-ilcd-2010` |
| b_physical_gates | source_formation; acid_release | 分配前逐实测物理门闭合：来源期初原料库存及在制品加整份外部投料（含直接蒸汽及任何实际反应气体收货），等于期末原料库存及在制品加总母液转移、水合物/铜矾/残渣/废液和实际物种损失。放行门以期初未放行液加唯一内部母液转移及实际外加液，等于期末未放行液加 Q 及拒收/取样/清洗损失。成品/服务门以期初已放行成品加 Q 及真退回原批次，等于期末成品加实物总外发、对外返回及成品废物。合并时抵消内部转移和放行入成品的 Q，不能把 Q 与期末成品作为两份最终新增产出。独立保留物理质量、相关 Fe/Ti/S 及水/相态证据，不以负荷分配比例缩放物理总量。反应/相态水转化仅在独立有据子账内处理，不能作为新增质量加入整份物理门。 | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| b_composition | all material rows | 在真实供应状态下整份溶液/制剂仅计一次。游离酸度不是纯 H2SO4 采购量；溶解铁/硫酸根、水及杂质化验是非叠加子账。须采用考虑混合/沉降的代表性取样、经验证适配基体的游离酸及元素/物种测试、独立悬浮固体与游离/结构/反应水证据。不得假定非酸部分全为水、铁全为 FeSO4 或固定水合式。不规定通用反应式、浓度、产率、密度、毒性或许可阈值。一个平衡残差不能解出两个未知物种或反应水项。 | `jrc-lvic-s-2007` |
| b_species | emission and waste rows | 实际最终 H2、SO2、SO3、H2SO4、H2O 与逸出颗粒的身份及去向须分开。载气进出质量进入气体物理账，未改变的载气质量抵消，不能虚构为反应气体。治理前气体、捕集物与最终排放属于不同门。保留的液/固体废物不是基本排放。COD、酸度、总 SOx 或总固体不确立特定化学物质量。实际新增物种、液体出口及处理试剂须有独立行和实测量，数据才完整。 | `jrc-lvic-s-2007` |
| b_utilities | utility rows | 实际公用工程按物质和门拆分。外供直接/间接蒸汽分别保留质量、热状态及供方水能约定；真实冷凝液与外部冷却回水是具有独立数量/焓的 Product 接口。内部循环抵消，不预设回水或锅炉。计量分区须涵盖失败批、零产出时段、启停、待机、清洗、泄漏及返工；不能因 Q 为零或称为废物而消失。 | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| b_atomic_receipts | packaging and attached components | 每种实际包装/容器/附着组件均须确定材质、形态、流类型、方向及原子实测收货接口。以下采购卡仅采 P；独立 N_ext 接口采首次外部非购实收，包括供方随货、首次受托、借入或租入。ER 仅限有原先对外发运记录的真实退回。P、N_ext、ER 互斥；已在整份供货价中付款的组件，即使无单独发票仍为 P。期初库存不能替代当期收货。实际缺少组件/接口/数量时，具体数据包不完整；仅有符号或复制采购 UUID 不能修复。 | `jrc-ilcd-2010` |
| b_pack_balance | each component physical gate | 每个组件在同一物理门/期间满足：期初空件加在制品/成品附着件加可重复使用库存 + P + N_ext + ER = 期末空件加在制品/成品附着件加可重复使用库存 + grossS + EO + W。grossS 为全部实物总外发，包括失败/替换/退回批次移动的附着件，不是净酸液 Q。EO 为真实对外返回，W 为实际丢弃。仓库/在制品/成品内部领用及回用抵消。组件厂内形成 F 或装入 X 只有在有据、确切且同侧未重复时才能新增：F 未已计 P/N_ext 才加，X 未已计期末附着或 grossS 才加；不得用通用 OTHER 残差补缺收货。 | `jrc-ilcd-2010` |
| b_pack_burden | each packaging event | 独立保留所有权、原组件/批次身份、逐交换继承向量、真实采购负荷、供方已含范围及实际新增租赁/返还/清洗/维修服务。各真实负荷依第7节仅归属一次。物理非购不等于零负荷，ER 不是新采购、新 Q 或信用。整液/材料承载的联合负荷只归属一次，不能整份混合物加完整组分分区叠加，也不能同一供应组件附多个供方。 | `jrc-ilcd-2010` |
| b_later_service | released cohorts | 首次放行后，真实贮存、包装、搬运、发运、原交付反向移动及新增实测返工/清洗/租返服务归入原已放行批次。保留原 Q_c 及继承向量，服务暴露量 H 独立测量，不能作生产分母。复检/重复交付/退回不造新 Q。即使生产采用首次放行而非净交付，也须解决历史成品负荷与真实退回来源。服务记录须有具体材料/公用工程/废物接口，不能把服务改称参考 Product。 | `jrc-ilcd-2010` |
| b_classification | scope and receiver | CPC3.0 39950 的较窄关系仅适用于规定的、用于酸再浓缩的无机化工液体残余物。UN 提供类名，未列钛白母液具名实例。官方 CPC2.1–HS2017 仅在历史上将 3825.69 对应 39950；HS2022 保留无机其他化工废物分支及独立溶剂/污泥/临床物类别。这是有据范围解释，不是现行对照表或海关裁定。分类关系的验收不构成科学方法学、译文或实际供方的批准。凡按第26章排除而用于金属/贵金属回收或金属化合物制造的物料，不论来源工业均不在本范围。真实接收用途或物理归类不符合时，应停止适用，不能为填覆盖而强行纳入。 | `un-cpc3-2025`; `un-cpc21-hs2017`; `wco-hs2022-38`; `wco-hs2022-26` |


### 原子非购及返回接口

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_pack_interfaces | each actual component interface | 以下每行仅在该事件真实发生时成为必须填实的具体事件接口，不是代购记录。采集除法前原始实测千克、日期/事件ID、确切材质/形态、对方、所有权、原批次、继承交换向量、供方已含范围与新增服务。P 由采购卡采集，W 由废物卡采集。来料已附着组件按真实外部收货纳入；每种实际新增组件均须补同样完整接口，缺接口即具体数据包不完整。 | `jrc-ilcd-2010` |

| interface_id | specific_material_form | flow_type | direction | event_class | raw_quantity_field | event_evidence | unit | collection_protocol_id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pp_sack_first_nonpurchase | 聚丙烯编织供货袋 | product | inputs | N_ext | N_ext_pp_sack | 首次外部非购实收；证明不在采购价内且无原先对外发运 | kg | cp_pack |
| pp_sack_true_return_in | 聚丙烯编织供货袋 | product | inputs | ER | ER_pp_sack | 真实退回；关联原对外发运及同一组件/批次 | kg | cp_pack |
| pp_sack_gross_dispatch | 聚丙烯编织供货袋 | product | outputs | grossS | grossS_pp_sack | 所有真实附着或空件对外发运；不是净酸液 Q | kg | cp_pack |
| pp_sack_return_out | 聚丙烯编织供货袋 | product | outputs | EO | EO_pp_sack | 真实对外归还所有人/供方；保留所有权及原收货 | kg | cp_pack |
| pe_liner_first_nonpurchase | 聚乙烯薄膜内衬 | product | inputs | N_ext | N_ext_pe_liner | 首次外部非购实收；证明不在采购价内且无原先对外发运 | kg | cp_pack |
| pe_liner_true_return_in | 聚乙烯薄膜内衬 | product | inputs | ER | ER_pe_liner | 真实退回；关联原对外发运及同一组件/批次 | kg | cp_pack |
| pe_liner_gross_dispatch | 聚乙烯薄膜内衬 | product | outputs | grossS | grossS_pe_liner | 所有真实附着或空件对外发运；不是净酸液 Q | kg | cp_pack |
| pe_liner_return_out | 聚乙烯薄膜内衬 | product | outputs | EO | EO_pe_liner | 真实对外归还所有人/供方；保留所有权及原收货 | kg | cp_pack |
| wood_pallet_first_nonpurchase | 木板/木条供货托盘 | product | inputs | N_ext | N_ext_wood_pallet | 首次外部非购实收；证明不在采购价内且无原先对外发运 | kg | cp_pack |
| wood_pallet_true_return_in | 木板/木条供货托盘 | product | inputs | ER | ER_wood_pallet | 真实退回；关联原对外发运及同一组件/批次 | kg | cp_pack |
| wood_pallet_gross_dispatch | 木板/木条供货托盘 | product | outputs | grossS | grossS_wood_pallet | 所有真实附着或空件对外发运；不是净酸液 Q | kg | cp_pack |
| wood_pallet_return_out | 木板/木条供货托盘 | product | outputs | EO | EO_wood_pallet | 真实对外归还所有人/供方；保留所有权及原收货 | kg | cp_pack |

## 6. 过程清单结构

### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source_formation | 钛铁矿硫酸法来源形成与分离 | required | 规定干钛铁矿路线至水解及初次过滤 | 整份联合形成过程及水合物/铜矾伴生出口 | 实测来源批次；最终清单每 1 kg 参考流 |
| acid_release | 母液调制与首次供料放行 | required | 实际冷却/必要精滤及接收供料验收 | 保留来源向量并定义唯一 Q | released_acid; 1 kg 参考流 |

各卡为实测原子基线，有条件辅助物不是规定配方。每种实际新增外购制剂、化学品、燃料、制冷剂、滤材、包装组件、废物或物种均须具体独立行及真实数量/接口。真实相关操作不能隐藏于零、OTHER 或宽泛集合标签。未绑定行保留具体物理身份，不授权任意族 UUID。物理 V 与继承/可归属 A 账依第7节分开。


### 过程：来源形成 (`source_formation`)

#### 输入

##### 产品流

###### 干燥钛铁矿精矿 (`ilmenite`)

记录整份外来干燥钛铁矿精矿，包括实测水分与脉石；以有代表性的批次样品确认矿相、总钛/铁及相关杂质。不得用钒钛磁铁矿、合成钛渣或纯 TiO2 代替。磨矿、实际矿尘捕集回用及投料搬运均在边界内。

- 选定流: 干燥钛铁矿精矿
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 硫酸 (`fresh_acid`)

该 Product 身份仅用于外供、实测浓度 93–98%、工业级化学/接触法合成、工厂生产混合并经密闭容器或管道交付的液体 H2SO4，CAS 7664-93-9。正式浓度/路线限制优先于宽泛同义词和一般注释。整份溶液仅计一次，另保留独立实测的水与杂质子账。这是新鲜投料，不能作为母液参考流或循环酸；实际其他酸浓度须另设具体行和身份。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 用于三价铁还原的未涂覆低合金铁废料 (`reductant_iron`)

实测进入还原槽、已确认适用的金属铁废料，保留供方成分、物态与 Cr/Ni 污染检查。这是原始还原剂投料，不能从母液或铜矾中铁的化验量反推新增采购铁。不得采用要求不兼容熔炼路线的废钢身份。

- 选定流: 用于三价铁还原的未涂覆低合金铁废料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 自来水 (`process_water`)

仅指经管网供应、处理后符合饮用水要求的市政/公共供水，工厂生产混合；记录实际供水与水质。溶解、洗涤、水洗吸收和冷却补水分别计量后，才可按同一供方/物理门汇总。内部循环不得再次采购。原生次级体积系数不是场址独立实测密度，不能套用于酸液、料浆或冷凝液。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 去离子水 (`deionised_water`)

仅在实际外供时纳入：纯水，CAS 7732-18-5，工厂生产混合，正式路线为离子交换或反渗透。一般注释还提到蒸馏，但不能据此豁免正式路线。采集供方水质与实际数量；厂内制水应承接实际处理投入一次，不能再叠加外购水供方。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 蒸汽 (`injection_steam`)

实际用于化工生产的蒸汽，在外部供汽门按质量/千克实测。记录压力、温度、干度/焓、供方水能约定及实际直接喷入量。直接喷汽进入物料/水平衡，不得再叠加一项购热；不假定场内存在锅炉或燃料。

- 选定流: 蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 蒸汽 (`indirect_steam`)

化工生产间接加热的实际独立计量蒸汽，按质量/千克记录。声明进出热状态及供方对回水的处理约定，另以焓差作为能量诊断。除实测泄漏进入工艺液外，不进入工艺液水平衡。排除已计直接喷汽，不得再叠加同一热量供方。

- 选定流: 蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 交流电 (`source_electricity`)

该 UUID 仅适用于中国电网平均消费组合、到用户的 1–35 kV 交流电。保留原生净热值属性与 MJ 单位，实际电表 kWh 依已核单位组系数换算。记录磨矿、泵送、真空过滤、结晶、洗涤吸收、控制、待机、启停及清洗；工段与共用电表分区应无重复闭合。其他电压、地区或供电路线须核兼容身份与供方。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 澄清用硅藻土助滤剂 (`diatomite`)

仅在实际供方/工艺记录确认这一矿物助滤剂适用于酸性料液时纳入。实测整份供应物及其水分，保留等级与进入澄清残渣的去向。油脂或饮料专用原生候选不能证明兼容；实际其他助滤剂须另列原子行。

- 选定流: 澄清用硅藻土助滤剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 非离子聚丙烯酰胺粉末 (`pam`)

仅在实际酸性澄清配方与供方确认使用非离子聚丙烯酰胺粉末及其适用性时纳入。整份外购粉末实测一次。若实际供应为水性制剂，应另列整份制剂行，不能按粉末加再次采购载水处理。不规定剂量或通用聚合物选择。

- 选定流: 非离子聚丙烯酰胺粉末
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 聚丙烯滤布 (`source_filter_cloth`)

仅在文件确认聚合物及耐酸结构时纳入实际更换滤布。新滤布与旧滤布分别称量，并将所夹带液/固体与滤布基体区分。已装滤布循环使用不构成新收货；其他聚合物或实际附着组件须独立列行。

- 选定流: 聚丙烯滤布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 水合二氧化钛晶种悬浮液 (`external_seed`)

仅纳入水解实际使用、独立外供的整份水合二氧化钛晶种悬浮液。实测总质量，并独立确定固体/水及物态。自产晶种回用承接原逐交换向量并内部抵消，不属于本采购行。成品金红石/锐钛矿颜料不能确立水合晶种身份。

- 选定流: 水合二氧化钛晶种悬浮液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 未中和钛铁矿硫酸法水解母液 (`raw_mother_liquor`)

硫酸氧钛水解后、在水合物洗涤、中和或再浓缩前分离的整份液体母液；实测游离酸度、溶解盐、悬浮固体、水与温度。向 acid_release 的内部转移采用同一实测事件及同一逐交换继承向量，在合并系统中抵消两侧。本中间流不是已放行参考量 Q。

- 选定流: 未中和钛铁矿硫酸法水解母液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_balance`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 水合二氧化钛滤饼 (`hydrate_cake`)

在首次过滤门实测实际湿水合沉淀，游离水与结构结合水分别评估；不得指定固定水合式或成品颜料等级。所分配来源向量随其进入后续洗涤/漂白/煅烧/后处理；这些属于母液门外的专属伴生物流操作。本行为整份物理共出口诊断，不能再采购或给予替代颜料信用。

- 选定流: 水合二氧化钛滤饼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_balance`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 含实测附着母液的七水硫酸亚铁晶体 (`copperas`)

将实际分离铜矾晶体及附着母液作为一批供应物记录，核物相、水分与 Fe/S 化验。不得由总铁推定纯无水盐，也不得绑定无水 CAS 且具有磷酸铁矛盾同义词的原生记录。后续专属处理另记；此整份物理共出口不自动获得信用。

- 选定流: 含实测附着母液的七水硫酸亚铁晶体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_balance`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 返回供方的液态蒸汽冷凝液 (`condensate_return`)

仅指间接用汽后真实对外返回供方的冷凝液。记录质量、温度、压力、焓及水质，并核相应蒸汽供方约定。内部凝水回用应抵消；不得给已消耗的直接喷汽虚构回水，也不自动给予回收信用。

- 选定流: 返回供方的液态蒸汽冷凝液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 冷却水 (`cooling_return`)

仅在供水冷却回路真实对外返回时纳入。所绑定 Product 为 H2O 冷却水，原生质量/千克，无固定地区、等级、路线或温度；须核真实液体水质及热状态兼容性，不能授权污染的光学装配地下水。记录相应进水身份、总流量及热状态。内部循环不是对外回水；送处理的排污水属于水性废物，不能作供方 Product 返回。

- 选定流: 冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### 废物流

###### 未中和钛铁矿酸解澄清滤饼 (`clarification_residue`)

实测整份湿的未反应矿物/助滤剂残渣及夹带酸液，并记录有据的场外处理去向。其既非液体参考流，也非土壤排放。所含助滤剂与溶质是滤饼子账，不得再作为独立废物叠加。厂内中和须补实际试剂/物种行及处理范围后，数据包才完整。

- 选定流: 未中和钛铁矿酸解澄清滤饼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_waste_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 来源工段稀硫酸洗水 (`weak_acid_effluent`)

实际独立送处理的洗水/洗涤吸收排污或清洗液，按整股实测并记录游离酸度、硫酸根、金属与悬浮物。不能改称强酸母液、污水污泥或即时水排放。回入酸解的部分应内部抵消，仅保留实际排出。

- 选定流: 来源工段稀硫酸洗水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_waste_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 废酸污染的聚丙烯滤布 (`used_filter_cloth`)

记录实际拆下的滤布基体及实测附着残留物和处理去向。附着液/固体须与 clarification_residue 分区，防止同一湿物料重复计量。

- 选定流: 废酸污染的聚丙烯滤布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_waste_source`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### 基本流

###### 氢气向空气排放 (`hydrogen_air`)

实测铁还原通气口离开的 H2，包括启机与失败批次，保留取样/反应证据不确定性及空气受体。以 H+ 计酸度和煤制甲醇路线 Product 氢气均不是氢气向空气排放身份。不套用历史每吨系数。

- 选定流: 氢气向空气排放
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 二氧化硫 (`so2_air`)

仅记录最终实际向空气排出的 SO2；本原生记录为空气未指定子介质、CAS 7446-09-5、Elementary flow、质量/千克。岩矿钛铁矿酸解可能无 SO2，但须以证据确认，不能由表中最小值推零。进入吸收器前的气体不是第二次环境排放。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 三氧化硫 (`so3_air`)

仅指实际最终 SO3 物种，CAS 7446-11-9、Elementary flow、向空气未指定子介质、质量/千克。绑定前核物种；同义词出现亚硫酸根自由基不能改变正式 SO3 身份。不得套用于硫酸根、H2SO4 酸雾或总 SOx 指标。

- 选定流: 三氧化硫 `4d9a8790-3ddd-11dd-96ec-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 硫酸 (`acid_air`)

仅记录最终酸雾/空气排放中的实际 H2SO4 质量，CAS 7664-93-9、Elementary flow、向空气未指定子介质、质量/千克。宽泛废酸/酯类同义词不许可将其用于液体废物、购酸溶液、SO3 或含水气溶胶总质量。气溶胶水须独立测量，并避免与 so3_air 重复。

- 选定流: 硫酸 `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 水蒸气 (`source_vapour`)

仅记录实际向空气未指定子介质排放的 H2O 蒸气，CAS 7732-18-5、Elementary flow、质量/千克。实测或以独立证据确定蒸发/蒸汽损失，排除保留水合水、液滴与已返回冷凝液。宽泛同位素/冰类同义词不能授权替代这些不同物理身份。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 钛铁矿矿物颗粒向空气排放 (`ore_dust_air`)

实测捕集后逸出的矿尘，记录粒径分布、成分与空气介质。回收矿尘属内部物料，不是排放。颗粒总质量与其化学组分/粒径分区是非叠加诊断，不能虚构纯金属/氧化物或假定 PM 比例。

- 选定流: 钛铁矿矿物颗粒向空气排放
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_emissions`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`


### 过程：酸供料首次放行 (`acid_release`)

#### 输入

##### 产品流

###### 未中和钛铁矿硫酸法水解母液 (`mother_liquor_in`)

与 raw_mother_liquor 完全对应的内部事件，含温度、总质量、成分及每项继承交换数量。不得再附购酸供方，也不能将 H2SO4/FeSO4/水的化验子账作为新投入。

- 选定流: 未中和钛铁矿硫酸法水解母液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_balance`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 交流电 (`release_electricity`)

与 source_electricity 相同，仅限已核中国 1–35 kV 电网平均到用户消费组合及原生净热值/MJ。实测转移、冷却控制、实际精滤、检测、槽搅拌、待机/清洗及首次供料交接用电；与 source_electricity 工段分区闭合。已放行批次的后续服务进入原批次服务账。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_release`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 自来水 (`release_water`)

仅指实际经管网供应、处理后符合饮用水要求的市政/公共供水、工厂生产混合。放行区域清洗与外供冷却补水独立计量，不与 process_water 重复，也不假定清洗水进入合格酸液。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_utilities_release`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 聚丙烯编织供货袋 (`pp_sack_purchase`)

仅在这一组件真实新购 P 并跨来源/放行边界收货时纳入；即使无独立发票，已含在整份物料价内的组件仍属采购。独立称重，记录供方已含范围；本采购卡排除首次非购 N_ext 与已核真退回 ER。不采用种子专用袋容量或件转千克系数；须核实际工业袋结构。

- 选定流: 聚丙烯编织供货袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 聚乙烯薄膜 (`pe_liner_purchase`)

仅在这一组件真实新购 P 并跨来源/放行边界收货时纳入；即使无独立发票，已含在整份物料价内的组件仍属采购。独立称重，记录供方已含范围；本采购卡排除首次非购 N_ext 与已核真退回 ER。原生身份为生产混合聚乙烯薄膜，CAS 9002-88-4，不能以 PET 或未指定聚合物替代。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 木质托盘 (`wood_pallet_purchase`)

仅在这一组件真实新购 P 并跨来源/放行边界收货时纳入；即使无独立发票，已含在整份物料价内的组件仍属采购。独立称重，记录供方已含范围；本采购卡排除首次非购 N_ext 与已核真退回 ER。原生身份为木板/木条构造、木材厂生产混合的木托盘，须声明实际结构。

- 选定流: 木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 未中和钛铁矿硫酸法水解母液 (`released_acid`)

一种整份酸性液体残余物，由规定钛铁矿路线新近分离，按明确再浓缩供料规格首次验收，门位于中和、蒸发或盐回收之前。核实实际接收进口/槽、供料功能、取样、游离酸、盐、固体、水、温度与兼容性。仅本行定义 Q。该 Product 为水解及初次过滤后、具有明确来源限定的用后酸性浸出液子集，不是水解前 TiOSO4 原料液。保留整份酸/水/溶解盐混合物及独立实测的残余 Ti 与悬浮相；化验结果为非叠加子账，不能成为附加供方或纯酸分母。不得把 Waste 或服务身份改作 Product。

- 选定流: 酸性浸出液 `cae33063-dfce-4ac0-b82c-d6d58846c897`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_release`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

##### 废物流

###### 送处理的拒收钛铁矿硫酸法水解母液 (`rejected_acid`)

记录本门真实送处理的不合格/拒收液与破坏性取样物，并分别保留事件数量及去向。不得纳入首次放行 Q，也不得虚构销售、中和产品或水排放。内部返工保留原向量，反复检验不能产生新增产量。

- 选定流: 送处理的拒收钛铁矿硫酸法水解母液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_waste_release`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 硫酸污染的放行区域洗水 (`release_washwater`)

真实独立收集并送场外处理的槽/管线清洗液，包括失败生产与泄漏清理。整股液体及其组分均须测量，排除已计 rejected_acid 的酸液。处理供方负荷按所属原批次仅承接一次。

- 选定流: 硫酸污染的放行区域洗水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_waste_release`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 废弃聚丙烯编织供货袋 (`pp_sack_waste`)

实际丢弃的聚丙烯编织供货袋，去向为明确回收/处理方；基体与附着污染物分别测量。本行为组件账 W，不能作为负采购或自动回收产品信用。附着酸液应与液体废物行核对。

- 选定流: 废弃聚丙烯编织供货袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 废弃聚乙烯薄膜内衬 (`pe_liner_waste`)

实际丢弃的聚乙烯供货内衬，去向为明确回收/处理方；基体与附着污染物分别测量。本行为组件账 W，不能作为负采购或自动回收产品信用。附着酸液应与液体废物行核对。

- 选定流: 废弃聚乙烯薄膜内衬
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

###### 废弃木板/木条供货托盘 (`wood_pallet_waste`)

实际丢弃的木制供货托盘，去向为明确回收/处理方；基体与附着污染物分别测量。本行为组件账 W，不能作为负采购或自动回收产品信用。附着酸液应与液体废物行核对。

- 选定流: 废弃木板/木条供货托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用第8节唯一已归一可归属结果；原始分子、未分配物理总量 V 与原历史另存，不再除一次。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `jrc-lvic-s-2007`; `jrc-ilcd-2010`

## 7. 分配与共产品处理
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | source_formation; acid_release | 仅用于明确声明、需要分配的归因研究。先将专属酸液转移/检测/精滤活动直接归属，尽可能对来源操作作实测物理细分，再作有据虚拟细分。下游水合物/铜矾后处理专属对应出口，不能冒作母液调制。 | `jrc-ilcd-2010` |
| a_causality | remaining individual exchanges | 对每项剩余交换确定决定性物理因果：证明各交付功能的变化如何改变该交换，将产品所含原子与过程公用工程/排放分开。Fe/Ti/S 平衡约束物理去向，但不自动授权以同一个质量比例分配电、水及所有上游负荷。保留实际推导、反事实范围与测量证据。 | `jrc-ilcd-2010` |
| a_residual | genuinely unresolved common-process exchanges | 仅在上述步骤之后确实未解决的共同过程剩余交换，才可采用同一共同过程门、实际湿态共功能在同期的有据实际市场价值。记录数量、价格基准、币种、地区/期间、已含成本及费用/服务解释。不能用未来成品颜料或再生酸价格混配未完成水合物/母液，不能任意在物理/经济间选份额、设固定比例或把有符号废物费截为零。非正值/含糊价值须对剩余多功能性作明确经审查处理；此前具体数据包不完整。 | `jrc-ilcd-2010` |
| a_once | all inventory and physical co-outputs | 每项上游/当前继承交换向量在真实功能间仅分配一次，保留总量与闭合。整份物理总量 V 与可归属清单量 A 分开。水合物/铜矾共出口卡保留物理诊断及已分配历史：在已分配母液数据集中，不作为可叠加替代产品交换或额外完整负荷供方。联合来源数据集可保留这些出口及明确分配元数据，但两种表示不能叠加发布。内部转移抵消，不作第二次分配或附加完整供方。 | `jrc-ilcd-2010` |
| a_no_automatic_credit | residual, returns and services | 废物状态、所有权、首次非购收货、内部回用、真退回、门费或计划回收均不自动产生零负荷、替代信用或负采购。原批次负荷与真实增量服务分开；后续回收利益须属于明确另界定的研究，不能插入本方法。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source_formation | source inputs | supplier_batch_and_meter | lot_id; material_form; supplier; supplied_whole_mass; moisture; assay_method; mineral_phase; Ti; Fe; S; impurities; inherited_vector; included_scope | 以校准仪器逐项称量整份投入，追溯真实酸解/还原/结晶/水解记录；对真实供应混合物取样，独立测量组分/相态。 每参考流；采未归一原始总量并保留历史，再引用 normalize_once，不再除一次。 | kg | 每次收货及每批 | 完整生产期间含失败及 Q 为零 | 声明来源场址 | 每参考流 | 校准；供方证明；整份混合物追溯；化验不确定性 |
| cp_balance | source_formation | gross physical gates and inherited vector | lot_stock_and_transfer | gate_id; event_id; opening_raw; closing_raw; opening_WIP; closing_WIP; gross_V; mother_transfer_id; hydrate_mass; copperas_mass; water_phases; Fe; Ti; S; inherited_vector; allocation_decision | 按批次匹配对向事件与库存，独立称湿出口并测液/固相；分配前保留完整原始及去向交换向量。 每参考流；物理总量 V 不缩放用于 physical_gates，先归属 A 再引用唯一 normalize_once 结果。 | kg | 每次转移及库存截点 | 同一来源/放行期间及历史桥接 | 来源与放行各门 | 每参考流 | 称量记录；配对事件；独立相态化验；向量闭合 |
| cp_utilities_source | source_formation | utility input and real returns | meter_and_supplier_contract | meter_id; stage; raw_unit; raw_total; rate_interval; voltage; geography; supply_route; steam_mass; pressure; temperature; dryness; enthalpy_in; enthalpy_out; return_mass; return_state; density_method; supplier_included_scope | 读取工段/总表及真实合同，分区不得重叠；直接/间接汽及真实凝水/冷却回水独立计量，保留真实热状态与供方水能约定。 本协议仅拥有 source_formation 事件；与另一工段核对而不重叠其数量。 每参考流；采未归一读数，在 raw_to_inventory 换算、归属 A 并复用 normalize_once。 | kg; kWh; MJ | 连续计量及生产期核对 | 完整运行与无产出期间 | 真实场址供应门 | 每参考流 | 仪表校准；发票；回水合同；热状态证据 |
| cp_utilities_release | acid_release | utility input and real returns | meter_and_supplier_contract | meter_id; stage; raw_unit; raw_total; rate_interval; voltage; geography; supply_route; steam_mass; pressure; temperature; dryness; enthalpy_in; enthalpy_out; return_mass; return_state; density_method; supplier_included_scope | 读取工段/总表及真实合同，分区不得重叠；直接/间接汽及真实凝水/冷却回水独立计量，保留真实热状态与供方水能约定。 本协议仅拥有 acid_release 事件；与另一工段核对而不重叠其数量。 每参考流；采未归一读数，在 raw_to_inventory 换算、归属 A 并复用 normalize_once。 | kg; kWh; MJ | 连续计量及生产期核对 | 完整运行与无产出期间 | 真实场址供应门 | 每参考流 | 仪表校准；发票；回水合同；热状态证据 |
| cp_emissions | source_formation | final species emission | species_stack_and_fugitive_test | species; CAS_if_known; medium; stage; concentration; wet_dry_basis; gas_state; integrated_volume; true_rate; interval; carrier_in; carrier_out; capture_mass; aerosol_water; particle_partition; uncertainty | 代表性测量最终排放，覆盖酸解周期峰及还原通气；浓度匹配真实气体状态/体积，载气与捕集物另采；保留物种身份及检出限，不把未检出当确切零。 每参考流；先原始质量/速率换算与归属，再仅用 normalize_once 一次。 | kg; mg/m3; m3 | 来源特定取样并覆盖完整事件 | 全部生产期含启动清洗与失败 | 最终空气边界与独立捕集门 | 每参考流 | 取样计划；物种测法；气体状态证据；不确定性 |
| cp_release | acid_release | reference whole liquid | weighing_and_receiver_acceptance | source_lot; cohort_id; first_release_id; release_time; receiver_inlet; net_liquid_mass; free_acid; salt_assays; suspended_solids; water; temperature; density_if_used; original_Qc; opening_FG; closing_FG; gross_dispatch; true_returns; original_delivery_reverse | 采用校准净称重或可追溯质量流量累计；以考虑均化/沉降的代表性样品及经验证游离酸/元素/相态测法，逐唯一首次放行匹配接收规格与签署供料决定；真实退回原批次独立追溯。 每参考流；Q 采为未归一唯一首次放行净质量，仅引用 normalize_once。 | kg | 每次首次放行及库存截点 | 声明放行批次及历史成品桥接 | 具名来源及接收进口 | 每参考流 | 秤校准；取样计划；接收测试；签署决定；成品历史 |
| cp_waste_source | source_formation | specific whole waste | transfer_and_treatment | event_id; stage; lot; whole_wet_mass; material_form; free_acid; salts; solids; water; attached_substrate; destination; provider_scope; original_cohort; inherited_vector | 称量每股整份废物并独立测组分；追溯真实接收处理，分区重叠附着液/固体；不得把未经处理的转移量改称环境排放。 本协议仅拥有 source_formation 事件；与另一工段核对而不重叠其数量。 每参考流；原始总量 V 与已归属 A 分开，再复用 normalize_once。 | kg | 每次移除及转移 | 完整期间含清洗失败及 Q 为零 | 具体废物转移门 | 每参考流 | 称重单；交接单；成分；处理范围 |
| cp_waste_release | acid_release | specific whole waste | transfer_and_treatment | event_id; stage; lot; whole_wet_mass; material_form; free_acid; salts; solids; water; attached_substrate; destination; provider_scope; original_cohort; inherited_vector | 称量每股整份废物并独立测组分；追溯真实接收处理，分区重叠附着液/固体；不得把未经处理的转移量改称环境排放。 本协议仅拥有 acid_release 事件；与另一工段核对而不重叠其数量。 每参考流；原始总量 V 与已归属 A 分开，再复用 normalize_once。 | kg | 每次移除及转移 | 完整期间含清洗失败及 Q 为零 | 具体废物转移门 | 每参考流 | 称重单；交接单；成分；处理范围 |
| cp_pack | acid_release | each packaging component interface | component_event_ledger | component_material; form; type; direction; event_id; opening_empty; opening_attached_WIP_FG; opening_reusable; purchase_P; first_nonpurchase_N_ext; return_ER; closing_empty; closing_attached_WIP_FG; closing_reusable; grossS; return_out_EO; waste_W; owner; original_cohort; earlier_dispatch; inherited_vector; provider_included_scope; new_service | 逐真实组件与事件称重，包括首次随货/受托/借入/租入实收；分别核价格包含范围与原先发运，采用明确独立接口及配对组件物理门。 每参考流；除法前保留原始组件账，执行 pack_ledger 并复用唯一 normalize_once 结果。 | kg | 每次收货发运退回丢弃及库存截点 | 同一组件门/期间及原历史 | 来源与放行包装边界 | 每参考流 | 称量；计价范围证据；保管/发运关联；组件账闭合 |
| cp_service | acid_release | original cohort post-release service | cohort_service_records | original_cohort; original_Qc; inherited_vector; opening_FG; closing_FG; gross_dispatch; actual_return; original_delivery_reverse; H; actual_incremental_material; actual_electricity; actual_water; actual_waste; rental_return_scope; provider_included_scope | 逐真实贮存/搬运/退回/返工/清洗/租返事件追溯原放行；为真实服务事件建立具体实测公用工程/材料/废物接口，保留原交付真实反向量，不能重抄生产清单。 每参考流；采未归一服务总量，保留原 Q_c，独立服务结果仅执行 normalize_once 一次。 | kg; kWh; MJ; h | 每个真实服务事件 | 声明服务期间内原已放行批次生命周期 | 真实批次贮存及发运门 | 每参考流 | 批次来源；服务计量；真实退回及保管单据 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_to_inventory | all inventory rows | 将真实原始单位及仅真实速率换成未归一行单位。液/气累计量不再乘时间；体积转质量须该物质/状态独立实测密度，电力 kWh 转 MJ 用原生系数 3.6，蒸汽采用实测质量并另保留焓状态证据。游离酸/盐/水化验保持子账，不能双购或虚构反应水闭合。 | cp_source; cp_utilities_source; cp_utilities_release; cp_emissions; cp_waste_source; cp_waste_release | unnormalised_V | `jrc-lvic-s-2007` |
| physical_gates | all inventory rows | 分配前对整份总量 V 执行 b_physical_gates，保留独立 Fe/Ti/S、水相证据及真实载气进出抵消；配对 raw_mother_liquor 与 mother_liquor_in。Q 放行与成品/服务移动账分开，合并物理门再抵消内部接口。 | unnormalised_V; cp_balance; cp_release; cp_service | physical_closure | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| inherit_and_assign | all inventory rows | 核对期初/期末批次及每项继承/当前交换向量，内部事件仅抵消一次。执行第7节专属/细分、决定性因果及仅有据剩余共同门价值归属，得到新首次放行批次可归属未归一 A_i。伴生物流物理诊断 V 另存，明确联合/已分配表示，不给避免出口信用；保留全部失败/Q为零负荷及原服务向量。 | unnormalised_V; cp_balance; cp_source; cp_release; cp_pack; cp_service | A_i | `jrc-ilcd-2010` |
| pack_ledger | all packaging component interfaces | 每个具体组件在同一物理门执行 opening + P + N_ext + ER = closing + grossS + EO + W；opening/closing 均包含空件、在制品/成品附着及可重复使用库存。P 为真实新购，N_ext 为不在已付供货范围内的首次外部非购，ER 须有原先发运史。事件互斥，内部领用/回用抵消。有据不重叠 F/X 事件依 b_pack_balance，各原始/当前向量及真实增量服务依 b_pack_burden。实际缺接口或数量仍属不完整，不能残差补平。 | cp_pack; cp_service | component_physical_and_burden_ledger | `jrc-ilcd-2010` |
| normalize_once | all inventory rows | Q > 0 时 a_i = A_i / Q；A_i 为 raw_to_inventory、库存/继承向量核对及第7节归属后的未归一可归属行数量；Q 为 cp_release 所采唯一整液首次放行净质量。此为唯一归一除法，卡片及采集汇总引用同一结果。独立后续服务结果采用原 Q_c 作为同一次归一分母，绝非 H 或虚构新增产量。Q = 0 时保留全部原始继承/当前负荷，不出单位结果。参考输出按定义为 1 千克。 | A_i; Q; Q_c; cp_release; cp_service | a_i | `jrc-ilcd-2010` |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | 每个绑定行保留真实物理身份/类型及完整原生限制，区分来源综合、身份证据与未来工厂实测。 | 供货规格；完整原生记录；真实构型 |
| dq_measurement | all gates | 记录校准、取样覆盖、相分离、所用状态特定真实密度、速率/累计体积区别、不确定性及检出限；不得虚构工厂数值。 | 仪表/秤记录；实验室测法与不确定性；代表样品 |
| dq_history | stocks and services | 跨截点保留原料/在制品/成品及组件事件史与逐交换继承向量，保留失败、待机、清洗和真实原批次服务。 | 批次账；分配推导；所有权/供方范围；事件桥接 |
| dq_completeness | atomic receipts and outlets | 任何真实化学品、公用工程、物种、包装收货或出口不能留在集合占位中。缺实测接口或接收/核心身份未核均应明确不完整；普通辅助身份缺口保持具体。 | 原子行/接口清单；来源/接收比较；未解决登记 |
| dq_relevance | sources and assignment | 定性历史工业证据仅支持路线结构，具体数量/分配须当期实测及共同门市场证据；不能把颜料厂平均值按千克母液套用。 | 来源上下文；时间/地区/技术匹配；敏感性与缺口 |

## 9. 校验规则
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference and source | 来源非规定钛铁矿硫酸法水解路线、液体母液状态/接收用途无证据，或采用所排除污泥/溶剂/临床物/金属回收范围时，不得判适用。须按实际来源限定的用后酸浸液子集、整份成分及首次再浓缩供料门核验所绑定 Product。不能以物理上处于水解前的 TiOSO4 投料液、Waste、服务、新鲜浓硫酸、回收酸或颜料替代。通用 Product 身份本身不能确立来源、状态或接收功能。 | `un-cpc3-2025`; `wco-hs2022-38`; `wco-hs2022-26`; `jrc-lvic-s-2007` |
| v_qualifiers | released_acid | 须具备全部参考限定信息、真实首次放行接收测试/决定、批次追溯、净称重及所声明液体热状态/成分。来源平均值、发票名称或运输签收本身不能证明再生供料兼容性。 | `jrc-lvic-s-2007` |
| v_balance | physical gates | 按未分配物理总量 V 检查来源/放行/成品/组件各门、独立元素和水证据及明确不确定性。缺流、用一个残差拟合两个未知、重复内部转移或缺期初/期末在制品/成品历史均不得通过。不能虚构公差或用分配强迫物理闭合。 | `jrc-lvic-s-2007`; `jrc-ilcd-2010` |
| v_single_denominator | all inventory rows | 参考输出为整份湿液 1 千克。先采未除原始总量，先作单位/速率转换及有据分配/库存核对，再仅执行 normalize_once。卡片与采集汇总复用同一结果。Q 为零时保留全部当前及继承原始负荷而不出单位结果。期末成品不能再加 Q，服务 H 绝不是生产除数。 | `jrc-ilcd-2010` |
| v_native | every bound UUID | 每个绑定 UUID 须核完整原生名称、类型、路线/形态、CAS、地区/等级、全部注释/同义词及所有流属性，以及精确引用的属性至单位组/参考单位链。选供方前须采用卡片内全部原生限制；宽泛名称或分类标签不能豁免物理硬矛盾。普通辅助及内部转移身份未定须在元数据中具体保留；每项真实交换仍须有兼容身份/供方证据。 | `jrc-lvic-s-2007` |
| v_pack_receipts | each actual component | 每种实际组件均须有原子 P、首次非购 N_ext、真 ER 的实测数量/接口及互斥事件，并有同门期末/总发运/EO/W 数量。非购包括首次受托/借租及不在真实采购价内的供方随货组件。ER 须有原先发运史。实际缺接口或实测量不得判完整；旧 P+ER 闭合式、期初替代、复制采购 UUID 或虚构退回均不能通过。 | `jrc-ilcd-2010` |
| v_burden_once | all parent and component histories | 须具备原所有权/批次、逐交换继承向量、供方已含范围、每个不重叠供应对象的唯一供方及真实增量服务。检查混合物与组分、母过程与残余物表示是否重复。缺负荷不得暗置零，包括 Q 为零或非购收货。 | `jrc-ilcd-2010` |
| v_methods | allocation and evidence | 任何有据剩余共同门价值分配前，须有专属归属/细分及逐交换因果分析，披露实际市场状态/期间与费用。工业工艺证据不是分配证据。拒绝固定质量比、挑选混合当前/未来价格及未经审查的有符号价值处理。 | `jrc-ilcd-2010` |
| v_species_utility | material, energy and outlet records | 检查真实物种/出口类型与原生介质、质量与速率转换、该物质状态下独立实测密度、气溶胶/冷凝液/结构水区分、供汽约定与真实回水量。累计体积不能再乘时间，化验指标不是化学交换。实际新增试剂/出口/容器缺失时，须先明确扩充原子接口才完整。 | `jrc-lvic-s-2007` |
| v_services | original released cohorts | 将放行后保留的贮存/搬运/发运/原交付反向及真实返工/清洗/租返记录，与原 Q_c 和继承历史核对。仅计有据增量服务一次，不能用当前生产替代原负荷、由退回虚构新首次放行，或以暴露量 H 作除数。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 在处理前作为规定母液再浓缩过程输入；选择一种已核联合或已分配表示并明确原批次服务链接 |
| allowed_use | 在满足所述身份、完整性及审查要求后，作为来源与接收限定的归因供料清单 |
| excluded_use | 通用化工废物选择器；纯/再生硫酸；废水处理服务；法律/危险声明；金属回收料；自动信用或无负荷废物输入 |
| required_metadata | 全部第3节限定信息；来源/接收物理门；供货状态及真实类型；库存/批次向量；上游已含范围；分配及包装接口；真实服务与返回拓扑 |
| required_quality_disclosure | 实测与归属负荷；整份 V 与可归属 A；方法证据与工厂记录；来源限定 Product 的适用性及剩余普通辅助/内部转移身份；化验及密度不确定性；市场/费用适用性；排除操作与 Q 为零处理 |
| update_trigger | 矿石/路线、盐/相态或接收规格、调制操作、原生身份限制、真实包装/保管拓扑、供方已含范围、分配证据或排放处理变化 |

## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Ver.3.0 Structure CSV and complete Explanatory Notes, 30 June 2025, pp203–205; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39950 类名及相邻 39920/39940/393 排除；不提供具名母液实例或已接受映射。 |
| un-cpc21-hs2017 | official_guidance | UNSD, CPC2.1–HS2017 official correspondence CSV, online snapshot 27 October 2026; https://unstats.un.org/unsd/classifications/Econ/tables/CPC/CPCv21_HS2017/CPC21-HS2017.csv | 仅作历史 3825.69/39950 对应旁证，不冒称 CPC3.0–HS2022 对照表。 |
| wco-hs2022-38 | official_guidance | WCO, HS Nomenclature 2022, Chapter38 notes1(d),4–6 and subheading note4, heading3825 pp7–8; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf?la=en | 无机化工废物归属推理、与污泥/溶剂/临床物的区别及金属残余物排除。 |
| wco-hs2022-26 | official_guidance | WCO, HS Nomenclature 2022, Chapter26 note3 and exclusions; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | 排除为提取金属、制造金属化合物或回收贵金属而供应的残余物；必须确认接收用途。 |
| jrc-lvic-s-2007 | official_guidance | European Commission, LVIC-S BREF, August2007, §3.3.2–3.3.3, printed pp142–160, figures3.4/3.5, PDF pp187–205; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | 钛铁矿酸解/还原/结晶/水解/过滤及酸回收供料接口的定性工艺，伴生物流与排放区分；历史案例数值及宽泛平均值不作默认值或分配依据。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March2010, §7.9 especially pp257–268 and Annex14; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因研究的细分、逐交换决定性物理因果及有依据的剩余市场价值分配；库存/批次和服务解释；不自动给废物截断或信用。 |
