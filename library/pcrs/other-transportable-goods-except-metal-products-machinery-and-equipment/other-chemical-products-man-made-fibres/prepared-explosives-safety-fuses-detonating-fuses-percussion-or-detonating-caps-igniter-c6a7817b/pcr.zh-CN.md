---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.prepared-explosives-safety-fuses-detonating-fuses-percussion-or-detonating-caps-igniter-c6a7817b
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原厂密封民用配制爆炸物成品首次欧盟市场投放的环境核算

## 1. 范围与适用性

本产品核算适用于已制成、保持原厂密封并首次在欧盟市场商业提供的完整民用配制爆炸物成品。不描述制造或使用。整件产品及上游清单保持为不可拆解的封闭产品数据集。资格及质量依据已有非技术行政和环境记录确定，无需开封、操作规程或实物试验。

边界是每件已制成产品首次对外商业提供，包含无偿提供。内部验收、未制成产品的预订、发运、报关、转售、退回或单独换包不形成另一次首次事件。核算对象是产品；单独包装或贸易服务不能满足本方法。来源：`eu-first-market-2014`、`eu-blue-guide-2022`、`ec-evaluation-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.prepared-explosives-safety-fuses-detonating-fuses-percussion-or-detonating-caps-igniter-c6a7817b |
| classification_refs | CPC 3.0:35450，限定范围的 narrower 映射已获接受，见 docs/adr/2026-11-22-accept-cpc-35450-first-eu-placement-sealed-civil-finished-product.md |
| covered_products | 首次欧盟市场投放的原厂密封完整民用配制爆炸物成品 |
| excluded_products | 在制品或非密封品；军用品；引信和引发装置；烟火制品（35460）；35440产品；独立包装（85400）、批发及运输服务；后续市场事件 |
| representative_product | 一件有凭证的完整密封民用成品；不指定品牌或技术设计 |
| production_route | 既有成品A1–A3封闭清单桥接至首次欧盟市场事件；不指定技术路线 |
| market_state | 已制成，保持原厂密封，首次欧盟对外商业提供 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 成品首次欧盟市场投放的环境核算 |
| How much | 1千克完整成品净质量，排除有凭证的外包装 |
| How well | 匹配产品身份、原厂密封证明及唯一首次市场行政凭证；不声称性能等效 |
| How long or cycle | 声明期间内每件成品一次首次市场事件 |
| reference_flow_link | first_market_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原厂密封民用配制爆炸物成品 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非技术产品标识；已制成单件或批次关联；原厂密封证明；首次欧盟提供凭证及日期；市场队列及期间；整品净质量与包装桥接；封闭来源身份及边界；覆盖台账；归属及不确定性 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_product_basis | 参考产品 | Mass | kg | 使用可追溯的既有整品净质量记录，明确排除有凭证的外包装质量，同时保留其已覆盖的环境负担。带包装毛千克、内部内容物质量及销售量千克不能未经凭证桥接互换。贸易记录可选，须匹配同件产品、事件和单位；不要求跨境。来源：eurostat-net-mass；eurostat-manual-2026。 |
| same_denominator | 所有清单行 | Mass | kg | 每个交换均按每1千克参考流报告。保留原始分子单位，使用同一唯一首次市场净质量队列。缺报、估算或舍入质量须说明不确定性并核对；基准未解决时研究不完整。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已制成、保持原厂密封且由已核实封闭A1–A3清单表示的完整民用成品 |
| starting_condition_role | background_dataset |
| product_classification_scope | CPC 3.0:35450; narrower |
| recursive_input_rule | 仅一次关联整品上游数据集；不得递归拆解整品或重构其来源 |
| upstream_dataset_requirement | 已签署、边界兼容、未表征的整品LCI，具有产品及期间身份与可审计覆盖/排除台账；仅EPD分数不足 |
| disclosure | A1–A3覆盖、边界至事件桥接、包装基准、全部新增及不可归属负担、排除及不确定性；不声称符合完整NPCR或全生命周期 |

- `opaque_coverage`: 选定整品数据集承担其已含的公用资源、包装及废物。不得再次添加工厂负担。另列普通交换须有精确的已签署上游排除、实际环境记录及独立的同队列归属。无法建立时标明缺失覆盖，不得以影响指标填充。来源：nepd-4019-environmental；nepd-9418-environmental。

- `event_bridge`: 明确桥接A1–A3声明边界至首次市场投放。A4/A5声明不自动归属本事件。仅实际有凭证且在声明环境边界内可归属此队列的普通新增项目有资格；无关后续包装或运输排除。披露首次市场事件与已覆盖环境负担的时间差异。不规定运输方法。来源：npcr-product-stage-2021。

- `packaging_bridge`: 通过凭证定义区分完整密封整品与各项可分离普通外包装。不得将产品固有部分视为可移除包装或推断内部比例。适用期间使用eu-packaging-2025，早期期间使用当时定义。逐项核对统计净千克与环境声明千克。

- `market_eligibility`: 已制成的逐件产品须为欧盟市场分销、消费或使用而提供。仅有欧盟境内账单、付款、所有权、持有或统计记录不能证明该目的或首次投放。合格事件可早于、等于或晚于实际交接；分别记录日期。来源：`eu-first-market-2014`、`eu-blue-guide-2022`。

- `custody_perimeter`: 声明匿名实物保管核算周界及环境清单实际覆盖的期间，与市场事件台账分开。发生在周界外的首次市场事件，不在申报人实物存量记录中虚设收货或发货。仅在适用时将事件队列与实际保管记录核对，明确列示未匹配的所有权与保管状态。

- `burden_mass_distinction`: 整品净质量与环境负担覆盖是不同边界。从分母排除外包装质量，不删除封闭清单中已含的真实产品交付包装负担。该已覆盖负担保留一次，仅消除有证据的重复。依据非技术凭证区分首次密封原包装与可分外包装，不检查产品结构。后期记录中可归属原队列的负担另列时间台账；仅纳入声明环境边界内有依据的原队列义务，更新同一队列一次，不形成第二次首次市场事件。未知后期份额保持为明确研究缺口。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| first_market | 整品首次市场环境核算 | required | 有资格的已制成密封整品及已核实首次欧盟提供 | foreground | 1千克首次市场成品净质量 |

这是核算过程而非制造操作。整品输入承载封闭上游清单。以下普通新增项目仅在证据成立时适用；不适用须有明确理由，不得虚构为零。其他普通交换须在研究完成前以具体独立卡片及证据记录。不得加入敏感产品清单或运行数据。

### 过程：整品首次市场核算（`first_market`）

#### 输入

##### 产品流

###### 原厂密封民用配制爆炸物成品 (`sealed_product_input`)

必需：前序声明边界处的一次整品上游覆盖关联，在首次市场边界物理状态不变。这是环境清单关联，不证明申报人实际收到实物并纳入保管。采用cp_coverage核实覆盖；不得通过一对一桥接掩盖损失、不合格队列库存或缺失负担。

- 选定流：原厂密封民用配制爆炸物成品
- 流属性/单位：Mass / kg
- 数量规则：经核对的封闭上游数据集所表示的同一完整成品1千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：method_formula
- 采集协议：`cp_cohort`
- 来源：`eu-blue-guide-2022`, `npcr-product-stage-2021`

###### 瓦楞纸板外箱 (`outer_carton`)

有条件：仅此队列实际新增、未含于封闭清单的普通可分外箱。不得用此外箱替代原厂产品密封或假定所有产品均使用。

- 选定流：瓦楞纸板外箱
- 流属性/单位：Mass / kg
- 数量规则：每参考流有凭证的可归属外箱质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_additions`
- 来源：`eu-packaging-2025`

###### 外购电力 (`event_electricity`)

有条件：仅上游清单排除且可独立归属此队列的实际普通外包装电力。不得添加工厂已含电力。

- 选定流：外购电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流有凭证的可归属普通包装电力
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_additions`
- 来源：`nepd-4019-environmental`, `nepd-9418-environmental`

##### 废物流

不预设废物输入。

##### 基本流

不预设直接基本流输入。

#### 输出

##### 产品流

###### 原厂密封民用配制爆炸物成品 (`first_market_product`)

必需：唯一首次欧盟市场事件处物理状态不变的同一完整成品。本核算参考不声称实物发运或保管转移。本输出不是服务、另一生产收率或重复放行。

- 选定流：原厂密封民用配制爆炸物成品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：method_formula
- 采集协议：`cp_cohort`
- 来源：`eu-first-market-2014`, `eu-blue-guide-2022`

##### 废物流

###### 废瓦楞纸板 (`carton_waste`)

有条件：同一事件可归属、尚未计入且未接触产品的实际普通外箱废物。产品相关废物保持在已核实封闭系统内，本卡不代表该废物。保留实际废物服务覆盖，防止处理负担重复。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：每参考流有凭证的可归属普通外箱废物
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_additions`
- 来源：`eu-packaging-2025`

##### 基本流

不预设直接基本流输出。环境影响指标不能填入本节。

- `ordinary_addition_coverage`: 实际外箱流转不自动成为新增环境负担。分别记录普通瓦楞纸板外箱千克、可归属外购电力kWh及普通废瓦楞纸板千克。对每项区分实物流转、既有上游环境覆盖及真正新增的未覆盖负担。既有厂内/包装覆盖未知时，不得添加：另行保留原单位总量及未决归属/覆盖状态，不假定为零，也不删除已覆盖负担。后期可归属新增或更正保留原队列及原正分母，不重新打开上游技术清单。

## 7. 分配与共产品处理

- `attribution_first`: 先直接归属有依据的普通新增项目，再分配剩余共用数量。要求原始场址及期间会计证据、适用产品及匹配分母。场址总量本身不确定此首次市场队列的份额。

- `shared_mass_case`: nepd-4019-environmental所见质量分配是个案而非通用默认。采用时须论证共用负担随匹配整品净产出变化，核对分配总量并检验有依据的替代归属。nepd-9418-environmental独立处理，不转移份额、场址条件或年份。已核实上游分配保持封闭，不在此重新分配。

- `stock_periods`: 跨期保持原制造负担归属相关整品。核对期初存量、新增、首次市场投放、期末存量、退回及后续流转，不给同一整品分配第二次上游负担。在制及失败产出不得进入首次市场质量分母；说明其环境负担归属。以Q表示本期合格首次市场净千克。Q = 0不产生新队列每千克结果。另有证据证明原队列正分母Qc时，可报告后期可归属普通交换补充：仅将新增或更正交换除以原Qc，不除以Q，不重复原整品或上游清单。Qc不可证时，保留原单位交换总量为未决，不得丢弃或虚构归一化结果。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | first_market | 整品队列 | administrative_records | 非技术单件/批次身份；欧盟分销/消费/使用目的；实际保管周界及日期；事件/交接时间桥接；已制成及原厂密封证明；首次欧盟提供凭证/日期；唯一事件键；整品净千克；外包装千克/基准；期初/期末存量；退回；后续流转 | 使用已有签署的非技术记录；每件已制成整品仅一次关联首次市场事件及记录净质量。明确桥接使用的贸易统计；不要求报关事件。不得拆包或试验。 | kg | 每事件；期间核对 | 声明研究期间 | 同一队列及责任核算实体 | 每 1 kg 参考流 | 凭证来源；质量基准；唯一事件核对；估算/舍入不确定性 |
| cp_coverage | first_market | 封闭清单覆盖 | environmental_records | 签署LCI身份/哈希；来源产品/期间；单位/边界；已含公用资源/包装/废物；排除；换算桥接；完整性；归属证据 | 仅检查非操作性签署环境范围及整品交换证据；核对A1–A3负担归属和精确事件新增项目。不得从影响分数重构隐藏投入。 | kg；交换原生单位 | 每次来源修订及队列 | 匹配来源及研究期间 | 有凭证的来源环境系统 | 每 1 kg 参考流 | 签署来源、覆盖台账、无重复负担 |
| cp_additions | first_market | 普通外部新增 | environmental_records | 具体交换；实物流转证据；既有覆盖状态；新增负担证据；原生数量/单位；期间；本期Q；原队列键及正Qc证据；修订版本及先前报告量；归属；精确上游排除；包装基准；适用队列；共用总量；分配依据；不确定性 | 仅使用已有普通包装/公用资源环境记录；核实实际新增并与同一队列核对直接或有依据的共用归属。不可归属数量保持为披露缺口。 | 各原子行分别使用kg或kWh | 每核算期间及事件关联 | 同队列期间或有凭证的结转 | 声明普通环境账户 | 每 1 kg 参考流 | 原始记录；排除证明；总量核对；敏感性 |

以下会计恒等关系适用于同一声明队列。期末实物保管存量等于期初实物保管存量加有凭证的实际收货、减有凭证的实际离库，并计入签署的更正；首次市场台账另行核对，不得虚构这些实物流转。合格首次市场千克对每件已制成整品仅合计一次。可归属普通交换总量除以这些合格千克，得到保留原生分子单位的每千克值。可选的剩余质量分配以各有凭证产品净质量除以匹配的产品净质量总和；核对全部份额至共用环境总量并检验有依据的替代方案。这些是会计规则，不是观测值或通用分配默认。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_denominator | first_market_product | 合计唯一合格首次市场队列的凭证整品净千克；排除重复事件及不适用存量。不得扣除产品内部比例。 | cp_cohort | 合格净千克 | eu-first-market-2014; eu-blue-guide-2022; eurostat-net-mass |
| normalise_ordinary | outer_carton; event_electricity; carton_waste | 各独立可归属普通交换总量除以合格净千克，保留原生分子单位。须同一队列及覆盖台账；无合格净千克则无新队列归一化结果；有凭证的原队列补充遵循original_cohort_revision。 | cp_cohort; cp_additions; cp_coverage | 每1千克参考流的交换 | eurostat-net-mass; nepd-4019-environmental; nepd-9418-environmental |
| opaque_bridge | sealed_product_input | 经核对整品净质量基准的签署整品清单仅使用一次。记录来源单位换算，不推断隐藏产品内容；桥接未解决时不能形成完整结果。 | cp_coverage; cp_cohort | 每参考流一个已覆盖整品输入 | npcr-product-stage-2021 |
| original_cohort_revision | outer_carton; event_electricity; carton_waste | 本期Q = 0且原Qc > 0有证据时，仅将可归属新增/更正普通交换总量除以Qc，按原生分子单位每原队列千克报告。不再输出整品输入/输出，不重复上游清单。记录替换与差额语义及原账户版本，使更正仅替换先前数量一次。Qc不可证时，单独保留原单位总量为未决。 | cp_cohort; cp_additions; cp_coverage | 原队列补充或未归一化未决总量 | eu-blue-guide-2022; nepd-4019-environmental; nepd-9418-environmental |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| first_event | cp_cohort | 区分方法可建立与研究资格：研究须证明其已制成密封产品身份、唯一首次欧盟事件及排除包装的质量。建立方法不要求公开企业交易原件。 | eu-first-market-2014; eu-blue-guide-2022 |
| basis_conflicts | cp_cohort | 不得未经匹配桥接混用贸易净千克、生产销售量千克及EPD千克。某些生产统计含常规零售包装，声明单位可能不同。不得假定每次市场事件均有贸易记录。 | eurostat-net-mass; eurostat-manual-2026; cp_cohort |
| coverage_quality | cp_coverage; cp_additions | 各声明、场址及年份独立；由实际记录量化数据不确定性。缺失签署交换覆盖、不可归属份额及未核实身份保持为明确研究缺口。不得使用通用零值、因子或影响转清单替代。 | nepd-4019-environmental; nepd-9418-environmental |

## 9. 校验规则

- `validate_identity`: 若无已制成、原厂密封、唯一首次欧盟提供、整品净质量及参考输出关联证据，拒绝完整结果声明。发运或包装服务均不能替代此边界。

- `validate_coverage`: 要求签署封闭上游覆盖、明确包装核对、同队列新增及无重复上游负担。缺失覆盖时结论不充分；EPD影响分数不是交换。

- `validate_period`: 跨期核对队列存量及负担归属，包含退回、重复流转、失败产出及零投放期间。不接受零分母、虚构数量、UUID或分配份额。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | 经资格核实的非操作性整品首次欧盟市场环境核算 |
| excluded_use | 制造、组成、操作、性能、运输指令、采购、完整EPD符合性、功能比较声明或后续事件数据集 |
| required_metadata | 产品/队列身份；市场事件凭证；净质量桥接；期间；来源LCI身份及覆盖；原包装/可分包装；可归属新增；分配及存量台账 |
| required_quality_disclosure | 研究完整性、缺失交换/UUID、不兼容基准、不确定性、不可归属负担及来源审阅限制；方法状态不批准具体研究 |
| update_trigger | 产品身份、市场范围、来源清单边界、包装基准、分配、来源期间或首次事件定义变化 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| eu-first-market-2014 | official_guidance | Directive 2014/28/EU, Article 2(7)–(8); https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32014L0028 | 首次商业提供的行政定义，不引用操作要求。 |
| eu-blue-guide-2022 | official_guidance | Blue Guide 2022, §2.3, OJ C247/20–21; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52022XC0629%2804%29 | 逐件已制成产品、唯一首次投放与物理交付的区分。 |
| ec-evaluation-2025 | official_guidance | SWD(2025)266, Annex II note 167; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A52025SC0266 | 民用成品销售边界的现实意义；汇总统计不提供本研究质量或清单。 |
| eurostat-net-mass | official_guidance | Eurostat international trade in goods metadata, unit of measure; https://ec.europa.eu/eurostat/cache/metadata/en/ext_go_detail_sims.htm | 统计净千克排除包装，但须与同一产品队列建立凭证桥接。 |
| eurostat-manual-2026 | handbook | Eurostat user manual 2026, net mass, printed p.33; https://ec.europa.eu/eurostat/documents/3859598/23178546/KS-01-26-012-EN-N.pdf/a502437f-c3d2-b1c8-df8b-95ed12e992a0?t=1772723967663&version=1.0 | 统计质量缺报、估算及舍入的限制。 |
| eu-packaging-2025 | official_guidance | Regulation (EU) 2025/40, Article 3(1)(1), Article 71; https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng/pdf | 整品固有部分与普通外包装的凭证边界；自2026年8月12日起适用，早期研究使用当时定义。 |
| npcr-product-stage-2021 | standard | NPCR 024:2021 v2.0, §§6.2, 7.2.1–2, 7.3.2; https://digi.epd-norge.no/pcr/epd-norges-pcr-register/ | 仅使用筛选后的环境模块说明：区分A1–A3与后续A4/A5；不声称符合完整计划。 |
| nepd-4019-environmental | dataset | NEPD-4019-3055-EN, environmental Allocation paragraph p.3; https://digi.epd-norge.no/ | 场址公用资源及废物质量归属的个案依据，不是默认因子；仅使用行政和环境摘录。 |
| nepd-9418-environmental | dataset | NEPD-9418-9023, environmental Allocation / Data quality p.4; https://digi.epd-norge.no/ | 包含包装及能源的独立2021年实耗归属个案；不得与另一声明合并。 |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory workbook, 23 October 2026, CPC3 row 1567 (35450); https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | 仅分类元数据：35450对应HS2022的3601–3603；35460对应3604；代客包装另列。 |
| jrc-ilcd-mass | official_guidance | JRC ILCD reference identity: Mass, JRC68404; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC68404/lbna25198enn.pdf ; Units of mass, UUID 93a60a57-a4c8-11da-a746-0800200c9a66, default kg; https://eplca.jrc.ec.europa.eu/EF-node/datasetdetail/unitgroup.xhtml?uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | 仅质量属性和kg单位组身份；不证明整品UUID或研究适用性。 |
