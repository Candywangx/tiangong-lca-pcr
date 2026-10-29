---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-mortars-and-concretes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 集中搅拌新拌无钢筋硅酸盐水泥混凝土

## 1. 范围与适用性

本归因型PCR覆盖一个明确的普通密度、无钢筋硅酸盐水泥混凝土配合比的完整工厂制造：整份外购干水泥、天然细砂、天然粗砾石、单独计量拌合水；接收贮存；校准称量及含水调整；中央搅拌机完成湿拌；新拌产品检查及唯一首次厂内质量放行。纳入真实搬运能耗、除尘、清洗、试验、失败批、启停、闲置、清理和获准返工。这是EPA工艺指导与NRMCA生产质量指导的透明技术综合，不声称对应同一订单、SKU或工厂。不规定配方、水灰比、强度、密度、水化程度、寿命、回收收率或碳信用。`epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`

本前景不含熟料或水泥制造；不含砂浆及干混料、耐火或沥青混合物、发泡或轻重骨料及增强制品、预制或硬化混凝土构件、只在运输车内拌合或需门后完成的部分预拌、现场浇筑振实养护及已安装工程；所选路线也不含厂内专门另加辅助胶凝材料或化学外加剂和专门温控工序。真实路线改变须取得证据并重新评估适用性，将每份新增外购制剂、原料、能耗及损失逐项列入。相容的上位PCR未来可扩展方法；本路线不覆盖整个分类叶。购入成品混凝土不能替代制造。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-mortars-and-concretes |
| classification_refs | CPC 3.0 37510；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 由整份水泥、天然砂、天然粗砾石和水集中湿拌的一个明确普通密度无钢筋新拌硅酸盐水泥混凝土配合比 |
| excluded_products | 本前景不含熟料或水泥制造；不含砂浆及干混料、耐火或沥青混合物、发泡或轻重骨料及增强制品、预制或硬化混凝土构件、只在运输车内拌合或需门后完成的部分预拌、现场浇筑振实养护及已安装工程；所选路线也不含厂内专门另加辅助胶凝材料或化学外加剂和专门温控工序。真实路线改变须取得证据并重新评估适用性，将每份新增外购制剂、原料、能耗及损失逐项列入。相容的上位PCR未来可扩展方法；本路线不覆盖整个分类叶。购入成品混凝土不能替代制造。 |
| representative_product | 集中搅拌新拌无钢筋硅酸盐水泥混凝土 |
| production_route | 整份供货→接收贮存→称量含水调整→中央完成湿拌→新拌质控唯一首次放行；保留治理及资产服务 |
| market_state | 明确厂内出料质控门的新拌湿态未硬化水硬性混凝土；无已安装结构或已证实硬化强度声称 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在厂门供给所声明新拌水硬性混合物用于下游；不假定配方强度等级或已安装结构功能等价 |
| How much | 1 kg |
| How well | 场址和报告期; 普通硅酸盐水泥胶凝材料规格及整份供货水泥负荷所有权; 天然细砂和粗砾石的来源及级配; 实际各项单独采购配料及供货形态; 所选路线不单独添加辅助胶凝材料或化学外加剂; 首次放行前在中央搅拌机完成湿拌; 无钢筋或制成构件; 实际配合比标识及获准调整; 骨料自由含水及吸水; 实测首次放行湿态净质量和时刻; 按实际规格要求开展的新拌坍落度及含气量及温度及密度试验; 后续强度试验状态且不在销售时声称已证实硬化强度; 水相及水化证据; 唯一首次放行批次及原批次Q_c; 期初期末原料和WIP逐交换继承向量; 已放行FG库存及真实返回状态; 毛发运及不重复产量; 服务观测时段h和实际增量服务; 电力电压及供电地域; 实际使用的每种燃料及各大气物种; 包装入流及上游负荷所有权; 资产及在装流体存量; 实际供应方及接收介质 |
| How long or cycle | 真实批组一次唯一首次新拌质量放行；不假定寿命或固定可操作时长 |
| reference_flow_link | `first_release_concrete` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 混凝土 `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 场址和报告期; 普通硅酸盐水泥胶凝材料规格及整份供货水泥负荷所有权; 天然细砂和粗砾石的来源及级配; 实际各项单独采购配料及供货形态; 所选路线不单独添加辅助胶凝材料或化学外加剂; 首次放行前在中央搅拌机完成湿拌; 无钢筋或制成构件; 实际配合比标识及获准调整; 骨料自由含水及吸水; 实测首次放行湿态净质量和时刻; 按实际规格要求开展的新拌坍落度及含气量及温度及密度试验; 后续强度试验状态且不在销售时声称已证实硬化强度; 水相及水化证据; 唯一首次放行批次及原批次Q_c; 期初期末原料和WIP逐交换继承向量; 已放行FG库存及真实返回状态; 毛发运及不重复产量; 服务观测时段h和实际增量服务; 电力电压及供电地域; 实际使用的每种燃料及各大气物种; 包装入流及上游负荷所有权; 资产及在装流体存量; 实际供应方及接收介质 |

每项限定均须在元数据、过程说明、产品描述或参考流备注中声明。参考UUID为工厂搅拌制造的宽泛混凝土Product族，参考属性为Mass/kg。通用说明也提及沥青及后续硬化；本PCR将其限定为后续硬化前的水硬性水泥新拌混合物，排除沥青和预制成形终端。其分类标签指向预制结构构件；此孤立分类差异不确立预制物理身份，须披露而非复制为适用范围。该族没有原生指定CAS、固定强度、密度、钢筋、几何或地域。供货混合物和本工厂门须独立证明；硬化构件或现场浇筑供应过程不相容。全部必需限定信息均适用于参考流及每张使用该族的清单卡。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为唯一首次放行批次独立称量湿态净混凝土总量，由cp_first_release_concrete记录。全部清单卡为每1kg参考流，first_release_concrete=1千克。期末已放行FG已计一次。干物、名义载量体积、净发运、包装、放行前移出的样品和重复验收不入Q。 |
| native_numerators | 每个清单交换 | 实际原生广延属性 | 按行声明kg或MJ或m3或item | 不把Mass/kg强加于电力MJ或机器件数item。保留原生广延单位，并分账燃料载体质量热量、物理湿质量及在装流体存量。单位换算和真实分配先于normalize_once。 |
| fresh_volume_conversion | 参考产品及水 | 质量及独立实测体积 | kg及m3 | 参考为质量。真实原始体积须用校准体积净质量独立实测同一混合物流体在温压含气含水状态的密度，保留方法样品范围不确定性。任何原生2400kg每立方米混凝土、1000kg每立方米水或其他次级系数均不是测量。累计读数不得体积再乘时间。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 负荷承载的整份水泥、天然细砂、天然粗砾石及真实公用维修供货入厂；声明湿态及供应方入厂段边界 |
| starting_condition_role | supplied_material |
| product_classification_scope | CPC 3.0:37510; narrower |
| recursive_input_rule | 不可购入成品混凝土替代制造。内部回收混凝土源水骨料保留源向量且抵消一次；真实外部同类别进料须独立边界适用性决定 |
| upstream_dataset_requirement | 每项整份供货及真实废物处理服务须有唯一相容上游供应过程与负荷所有方，匹配配方形态路线地域年份及包装运输覆盖 |
| disclosure | 场址和报告期; 普通硅酸盐水泥胶凝材料规格及整份供货水泥负荷所有权; 天然细砂和粗砾石的来源及级配; 实际各项单独采购配料及供货形态; 所选路线不单独添加辅助胶凝材料或化学外加剂; 首次放行前在中央搅拌机完成湿拌; 无钢筋或制成构件; 实际配合比标识及获准调整; 骨料自由含水及吸水; 实测首次放行湿态净质量和时刻; 按实际规格要求开展的新拌坍落度及含气量及温度及密度试验; 后续强度试验状态且不在销售时声称已证实硬化强度; 水相及水化证据; 唯一首次放行批次及原批次Q_c; 期初期末原料和WIP逐交换继承向量; 已放行FG库存及真实返回状态; 毛发运及不重复产量; 服务观测时段h和实际增量服务; 电力电压及供电地域; 实际使用的每种燃料及各大气物种; 包装入流及上游负荷所有权; 资产及在装流体存量; 实际供应方及接收介质 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_route | all processes | 每项整份供货材料承接一次相容上游负荷，并补入尚未包含的真实入厂运输段。整份水泥只采购一次，熟料、石膏、CaO和水泥分析组分不是额外采购。供应方已含包装入流须有唯一上游负荷所有方。纳入真实试验质控资源及治理；不可用成品混凝土搬运替代制造。数据包完成前须为每项实际遗漏的单一材料、制剂、燃料、水相、包装组件、废物和实测排放物种补卡。 | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| fresh_first_release | mix; services | Q为本生产批组在明确厂内出料质控接口唯一首次放行的独立称量湿态净混凝土。放行前记录获批配合比、拌合完成及适用新拌试验。强度属于后续试件结果，不假定新拌Q已证实强度。放行前移出的取样及废品质量不入Q，但其负荷保留。期末已放行FG已在Q中，不能另加产量，也不能把其制造向量作为WIP扣去。复验、交付、调拨、返回和获准门后作业均不产生新Q。 | `nrmca-quality-2022`; `jrc-ilcd-2010` |
| cohort_vectors | 所有清单行 | 每个交换、原料、WIP和未分配非WIP存量须分别保留期初期末继承负荷。A_i包含期初继承、当期真实归属负荷和真实向内负荷转移，减去仍未放行期末存量及有依据的一次性向外转移。失败、零产出、闲置、启停、清理、返工及废物处理负荷全部保留。废物出售或外运本身不构成转移给其他功能的依据。已用库存修正的消耗不得二次修正。已放行FG不参与该制造期末扣除。 | `jrc-ilcd-2010` |
| actual_services | services | 首次放行后真实厂内暂存搅动、装载发运、返回接收、后续质控及获准返工按原批组Q_c和观测时段h保留增量服务，不猜未来服务。FG留库不能扣掉已实施服务，只有未用未分配服务存量结转。厂外客户运输、浇筑和养护不在本厂门数据集中；单独运输模块须有真实路线及燃料排放逐项流。不用净交付作分母。合并模块时抵消内部首次放行Q和匹配的内部返回返工转移。 | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| returns_permission | mix; controls; services | 每车退回料按真实湿态、龄期、追加物、污染、损失和水化状态计量，并保留原发运批次联系，不能假定返回质量等于原交付质量。再用或门后调整须有厂家及规格许可、追加记录、完整搅拌及作业后试验验收处置。不能假定硬化或污染材料可恢复新拌状态。实际内部回收水和骨料须有实测组成及继承向量，内部转移只抵消一次，不重新采购或给予避免生产信用。 独立记录实际已过时间、温度、水化凝结塑性以及观察期间同配方继续使用许可，不给通用可工作储存时间。已凝结、超过真实规格许可或硬化者不得仍标可用新拌FG，也不能假定加水搅动恢复；记录真实变状态存量、检测拒收回收处置及所有增减水料，原首次放行Q和历史负荷保持。 许可/规范、后测、验收及处置只决定作业授权和继续保持合格的资格，不能抹去真实已发生的未授权、失败或被拒作业的水料/能源/损失/处理及历史负荷。F_to/F_back和各具体实物出口记录全部真实作业，不因未获准或未通过而省略；按真实原/新批次一次归属，原首次Q不重开。留库FG与独立repair-WIP库存口径互斥一次；合格资格仍按真实龄期/水化/塑性/规范及处置证据判断，不推定加水或搅拌恢复。 | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| water_species_physical | all processes | 物理湿质量及相关C/H/O/N/S/Ca/Si平衡独立于LCI归属。整份湿砂砾及供货制剂已含载水，吸附水、自由水和干物为子账。拌合水、清洗水、水蒸气、液体排出、湿残余保留水、自由水及化学结合水分别观测。水化将内部水转入相结构，不产生外来水；不设固定水化程度，不用一个残差拟合两个未知。每种真实废气或空气物种及接收介质分别列出，NOx/VOC/COD或总PM不冒充特定化学物种。外购电力与柴油分别保留能量和质量单位，燃料热量为关联子账而非二次采购。不假定锅炉、蒸汽或冷凝液出口；实际引入蒸汽热量须另有载体质量、状态焓、供方所有权及真实液体回流卡。 若真实存在外供热/蒸汽/热水或工艺/冷却水返还，分别实测载体/返还毛kg、液汽相、实际温压/焓及各真实Product返还，不按MJ套质量、默认密度/状态或净返差。热MJ和水/蒸汽质量是同一真实供应交易的关联视图，一个上游负荷所有者；未发生不造锅炉/供热。制造实物来返用V/Q，实际放行后服务才用原Qc/h；来返卡不再增加一次水/热采购/处理负荷或负抵扣，污染废液与直接环境释放另用真实Waste/基本流接口。 | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| packaging_assets | all processes | 对实际纸袋、PE-LD内衬及木托盘分别核对：期初空件+附着WIP/FG+周转库存+外部供货+收到的外部归还=期末对应库存+随毛实物发运外出+对外归还+废弃。供应方已含真实包装入流即使留在期末也须保留，唯一上游所有方承担一次负荷。内部周转抵消，不新增采购或产品Q。资产、新旧维修件、备件及在装流体同样保留完整湿态物理期初+真实供货+X_in=期末+退役归还废弃+X_out；X仅去重另一个流入流出项，不取消留库存的新增实物流。经济份额不缩减物理量，资本服务负荷与物理库存分账，不假定寿命或每千克分摊一整机。 每种材料将实际采购P、首次非采购外部接收I、外退收ER、总发运S、空包外退EO和废物W独立列方向。真实维修Radd/Rremove和水H2Oin/H2Oout各具体交换：互斥期初池+P+I+ER+Radd+H2Oin=期末池+S+EO+W+Rremove+H2Oout。仅对本桥同侧另一流项已携同一水料去重；期末湿库存、相反方向或另一原子卡均不能抹去真实留存入流。整湿制品内含水料只计一次。独立测干材、自由吸附水、真实增减部件水及资产流体实物收存，不假定包装维修、寿命或件重。  每次真实P/I/ER接收均按packaging_receipt_basis区分。| `nrmca-quality-2022`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | 对每个真实包装制品，将每次完整外部接收且仅接收一次归类。P为有偿采购，包括虽无单独发票但已随其他供货付费的包装。I为全部首次非采购外部入流，包括单独赠与、借用、租赁或周转池接收，以及未采购的供方随附包装；随附仅是I的子集。ER必须是本场所先前已向外发出、且能以同一制品或可审计同构型批次匹配原外发记录的真实退回；仅有保管权或他方使用史不证明退回。P、I、ER互斥。已有I卡及其原始协议按相同物理制品覆盖这些I来源，不预设新材料、UUID或数量。X_in/X_out仍仅为互斥的材料或水变化项，不能代替整制品接收。保留毛实物量、所有者/保管者、付费或非采购依据、来源、所需原外发链接、原生状态单位和继承的制造/服务向量。非采购不等于新制造或自动零负荷：实际已用服务和新增运输搬运按正确原批群及其分母归属一次，未用服务另留，不设默认寿命或抵扣。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名称。 | `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix | 接收、校准配料、中央湿拌及首次新拌质量放行 | required | 完整所选路线；仅真实发生的条件公用工程及供方包装 | 前景制造链 | 每 1 kg 参考流；服务采用原Q_c |
| controls | 清洗料粉尘围控及真实回收处置 | required | 真实清理治理接口含服务批组清洗；分离回收须许可 | 污染治理及内部回收过程 | 每 1 kg 参考流；服务采用原Q_c |
| assets | 设备维修及在装流体服务 | required | 真实服务及库存；仅真实发生新增供货退役 | 分账归属资本及维修 | 每 1 kg 参考流；服务采用原Q_c |
| services | 原批组首次放行后厂内服务及毛发运 | required | 观测时段h内真实服务；不假定厂外交付或未来作业 | 按原Q_c的增量服务 | 每 1 kg 参考流；服务采用原Q_c |

合并制造门包括mix、controls及assets。内部回收清洗是匹配的物理转移，仅唯一链接产品输出确定参考。全部上位规范条件、限定信息及来源限制适用于每卡。所列条件交换不声称已经发生；真实新增配料、实验室资源、包装组件、流体及物种须在数据集完成前逐项补入。

### 过程：接收、校准配料、中央湿拌及首次新拌质量放行（`mix`）

#### 输入

##### 产品流

###### 整份供货硅酸盐水泥（`cement`）

整份灰色硅酸盐水硬性水泥粉，原生为工厂生产混合，进入接收贮存配料。原生未固定品级、地域和供应过程，须匹配真实出厂证书及交货边界。已含石膏、熟料和其他组分只记组成子账，不重复采购。声明散装或真实供应方已含纸袋内衬托盘入流和唯一上游所有方。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：水泥，硅酸盐水泥 `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_cement关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cement`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 天然细骨料（`fine_sand`）

一种符合本混凝土级配的未涂覆天然细砂，以真实含水整份供货。矿物组成、来源、级配、自由水及吸水分别记录，不推定纯石英身份或机制砂路线。UUID未解决，不能用砾石粒级或韩国土壤修复案例砂补位。

- 选定流：天然细砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_fine_sand关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fine_sand`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 天然粗骨料（`coarse_gravel`）

一种天然粗砾石供货组分，保留完整湿质量和实际规定级配。原生砂砾说明为比砂粗、通常大于2毫米的圆状天然岩屑，并用于水泥配合；它不是细砂输入。原生也提及碎砾石替代，本卡仅取天然砾石。须匹配真实来源、岩性、级配、清洗和供应过程，不编密度。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：砂砾 `73f1241c-e77d-4e9e-b290-e755a40acf81`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_coarse_gravel关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_coarse_gravel`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 单独供入拌合水（`mixing_water`）

仅为已处理可饮用市政自来水Product供货，不代表原水取用、回收碱性清洗水、蒸汽或热量。原生参考为Mass/kg，次级Volume系数为0.001立方米每千克；该系数不是实际密度测量，不作为换算依据。须匹配真实水源处理供应过程，本用途单独计量且不得重复计入另一水表。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_mixing_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mixing_water`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 搅拌机及采样工具清洗水（`mixer_wash_water`）

仅为已处理可饮用市政自来水Product供货，不代表原水取用、回收碱性清洗水、蒸汽或热量。原生参考为Mass/kg，次级Volume系数为0.001立方米每千克；该系数不是实际密度测量，不作为换算依据。须匹配真实水源处理供应过程，本用途单独计量且不得重复计入另一水表。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_mixer_wash_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mixer_wash_water`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`

###### 拌合接收用电（`mix_electricity`）

原生为中国低于1千伏电网平均用户侧交流电Product，仅用于该真实接口，并匹配年份和供应过程，不代表高压或电厂发电。参考属性为净热值，参考单位MJ；原始千瓦时只以3.6MJ每千瓦时换算一次。包括真实输送机、搅拌机、空压机、控制及试验用电，不把自产电和其发电燃料重复计量。真实电压地域不同时须有独立相容原子身份。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66` → 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` → 参考单位MJ。须保留上述实际形态、路线、介质和供应限制。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用第8节与cp_mix_electricity关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mix_electricity`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 条件发生的装载机柴油（`loader_diesel`）

仅真实柴油装载搬运使用此质量参考的整份柴油Product。原生未特指牌号、配方、密度、热值、炼制路线、地理供货和供应过程，须按真实供货记录。独立保留燃料能量组成及燃烧物种，不套通用升公斤或热值系数。无实际燃烧时记录不适用证据，不虚设柴油负荷。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_loader_diesel关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_loader_diesel`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 条件发生的水泥纸袋（`paper_sack`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。原生Paper bag族中的一只真实完整牛皮纸开口/阀口水泥袋，工厂生产混合Mass/kg，无固定CAS/地域/供方。原生/再生纤维、层数、涂层、胶和防潮需真实规格，一般可回收性不证明场址处置或认证。供方整袋/整水泥背景已含内衬胶仅实物子账，不再采购，真实独立供货内衬才另有上游。 本卡仅记录真实有偿包装采购P，包括单独或随货付费的相容新件或旧件；随供货收到I和外部退收ER分别列行，整湿量与上游所有者只计一次，不假定包装必然存在。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的PE-LD水泥袋内衬（`ldpe_liner`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。一份真实低密度聚乙烯箔膜内衬，原生Product Mass/kg，无固定品级/厚度/处理/地域/供方。匹配实测PE-LD组成和膜形态，不是树脂粒子、PET/PP/PVC、多层整袋或整水泥袋。供方整袋/水泥已含内衬仅实物子账，不再重复上游采购；真实独立供货内衬另有一次所有者。 本卡仅记录真实有偿包装采购P，包括单独或随货付费的相容新件或旧件；随供货收到I和外部退收ER分别列行，整湿量与上游所有者只计一次，不假定包装必然存在。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的木供货托盘（`wood_pallet`）

本P卡记录这一相同物理制品的有偿采购，含单独或随货付费；首次非采购接收及真实退回分别用I和ER。原生完整成品已制造木质便携承载平台Product族，工厂生产混合Mass/kg，无固定地域/CAS。其他成员含柱式/围板/侧栏/端栏平台及独立铰接围板；只选真实整只供货托盘，实测木构造/处理、内含紧固件、含水、所有权及相容供方。不推欧标几何、每只kg或寿命；整制品已含物只计一次，独立维修投入各具体身份。 本卡仅记录真实有偿包装采购P，包括单独或随货付费的相容新件或旧件；随供货收到I和外部退收ER分别列行，整湿量与上游所有者只计一次，不假定包装必然存在。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 内部回收清洗水配料接收（`recovered_water_in`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收碱性混凝土清洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_water_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_water_in`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 内部回收细骨料配料接收（`recovered_fine_in`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收混凝土细骨料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_fine_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_fine_in`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 内部回收粗骨料配料接收（`recovered_coarse_in`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收混凝土粗骨料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_coarse_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_coarse_in`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 纸袋 (`paper_sack_with_supply`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅真实首次非采购接收的完整包装I，含单独接收或未付费供方随附；与有偿单独/随货采购P和真实外退收ER互斥，保留完整实物接收及一次明确上游负荷归属。 原生Paper bag族中的一只真实完整牛皮纸开口/阀口水泥袋，工厂生产混合Mass/kg，无固定CAS/地域/供方。原生/再生纤维、层数、涂层、胶和防潮需真实规格，一般可回收性不证明场址处置或认证。供方整袋/整水泥背景已含内衬胶仅实物子账，不再采购，真实独立供货内衬才另有上游。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack_with_supply关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack_with_supply`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 纸袋 (`paper_sack_return_received`)

仅真实外部退回收到的同一完整包装ER，与采购P和随货I互斥；保留当前湿状态/所有权/原发运及历史负荷，不重购、不新制、不自动信用。 原生Paper bag族中的一只真实完整牛皮纸开口/阀口水泥袋，工厂生产混合Mass/kg，无固定CAS/地域/供方。原生/再生纤维、层数、涂层、胶和防潮需真实规格，一般可回收性不证明场址处置或认证。供方整袋/整水泥背景已含内衬胶仅实物子账，不再采购，真实独立供货内衬才另有上游。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack_return_received关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack_return_received`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_liner_with_supply`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅真实首次非采购接收的完整包装I，含单独接收或未付费供方随附；与有偿单独/随货采购P和真实外退收ER互斥，保留完整实物接收及一次明确上游负荷归属。 一份真实低密度聚乙烯箔膜内衬，原生Product Mass/kg，无固定品级/厚度/处理/地域/供方。匹配实测PE-LD组成和膜形态，不是树脂粒子、PET/PP/PVC、多层整袋或整水泥袋。供方整袋/水泥已含内衬仅实物子账，不再重复上游采购；真实独立供货内衬另有一次所有者。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner_with_supply关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner_with_supply`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_liner_return_received`)

仅真实外部退回收到的同一完整包装ER，与采购P和随货I互斥；保留当前湿状态/所有权/原发运及历史负荷，不重购、不新制、不自动信用。 一份真实低密度聚乙烯箔膜内衬，原生Product Mass/kg，无固定品级/厚度/处理/地域/供方。匹配实测PE-LD组成和膜形态，不是树脂粒子、PET/PP/PVC、多层整袋或整水泥袋。供方整袋/水泥已含内衬仅实物子账，不再重复上游采购；真实独立供货内衬另有一次所有者。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner_return_received关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner_return_received`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`wood_pallet_with_supply`)

本I卡记录这一相同物理制品的首次非采购接收，包括单独赠与、借用、租赁/周转池或未付费供方随附接收，排除P和真实ER。仅真实首次非采购接收的完整包装I，含单独接收或未付费供方随附；与有偿单独/随货采购P和真实外退收ER互斥，保留完整实物接收及一次明确上游负荷归属。  原生完整成品已制造木质便携承载平台Product族，工厂生产混合Mass/kg，无固定地域/CAS。其他成员含柱式/围板/侧栏/端栏平台及独立铰接围板；只选真实整只供货托盘，实测木构造/处理、内含紧固件、含水、所有权及相容供方。不推欧标几何、每只kg或寿命；整制品已含物只计一次，独立维修投入各具体身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet_with_supply关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet_with_supply`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`wood_pallet_return_received`)

仅真实外部退回收到的同一完整包装ER，与采购P和随货I互斥；保留当前湿状态/所有权/原发运及历史负荷，不重购、不新制、不自动信用。  原生完整成品已制造木质便携承载平台Product族，工厂生产混合Mass/kg，无固定地域/CAS。其他成员含柱式/围板/侧栏/端栏平台及独立铰接围板；只选真实整只供货托盘，实测木构造/处理、内含紧固件、含水、所有权及相容供方。不推欧标几何、每只kg或寿命；整制品已含物只计一次，独立维修投入各具体身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet_return_received关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet_return_received`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

##### 基本流

###### 真实燃烧卷气的大气氧输入（`oxygen_in`）

仅实际柴油燃烧、气力输送或搅拌卷气跨门时适用。氧CAS7782-44-7为来自空气的Elementary资源，不是外购工业氧Product。保留进入真实燃烧及卷气物料子账的气态分子氧，不再叠加空气集合输入。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_oxygen_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_oxygen_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 大气分子氮入流（`nitrogen_in`）

仅实际柴油燃烧、气力输送或搅拌卷气跨门时适用。二氮CAS7727-37-9为来自空气的资源节点，仅为分子N2气体，不是总氮指标或工业液氮采购。保留实际毛入流及卷入份额，与化学转化分开。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_nitrogen_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_nitrogen_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 大气氩入流（`argon_in`）

仅实际柴油燃烧、气力输送或搅拌卷气跨门时适用。氩CAS7440-37-1为来自空气资源，仅取天然气态氩；同位素同义词不授权放射性示踪剂采购。保留实际入流，不假定未说明的干空气质量。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_argon_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_argon_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 进气湿度（`air_humidity_in`）

真实燃烧输送卷入空气中的H2O蒸气入流，保留独立湿度状态含水观测。排入空气的蒸气UUID不是空气资源身份，不以反向使用补位，身份留待解决。

- 选定流：大气水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_air_humidity_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air_humidity_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 进气环境二氧化碳（`ambient_co2_in`）

实测进气所含一个环境CO2物种，不是新增化石CO2或假设固碳信用。穿透量及任何独立证明吸收量分开，不冲掉物理毛量。

- 选定流：大气二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ambient_co2_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ambient_co2_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

#### 输出

##### 产品流

###### 条件发生的水泥纸袋对外归还（`paper_sack_return`）

一种真实水泥用牛皮纸开口袋或阀口袋；原生纸袋族含牛皮纸及原生回收纤维，但不确立真实层数、纤维来源、胶粘涂层和供应过程。仅为纸袋本体，独立真实PE内衬和托盘分别保留；散装气力水泥不虚设必有纸袋。 本卡为向供方所有方归还的同一实物包装，不是产品Q或自动共产品。保留毛质量和一次所有权库存转移。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack_return关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack_return`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的PE-LD水泥袋内衬对外归还（`ldpe_liner_return`）

仅一种真实低密度聚乙烯薄膜内衬，须测组成及薄膜形态。原生未指定品级、厚度、处理、地域和供应过程，须与真实制品匹配；不代表PE树脂粒或混合聚合物袋。内衬质量不含纸袋托盘。 本卡为向供方所有方归还的同一实物包装，不是产品Q或自动共产品。保留毛质量和一次所有权库存转移。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner_return关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner_return`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的木供货托盘对外归还（`wood_pallet_return`）

 原生完整成品已制造木质便携承载平台Product族，工厂生产混合Mass/kg，无固定地域/CAS。其他成员含柱式/围板/侧栏/端栏平台及独立铰接围板；只选真实整只供货托盘，实测木构造/处理、内含紧固件、含水、所有权及相容供方。不推欧标几何、每只kg或寿命；整制品已含物只计一次，独立维修投入各具体身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet_return关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet_return`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 唯一首次放行新拌混凝土（`first_release_concrete`）

参考UUID为工厂搅拌制造的宽泛混凝土Product族，参考属性为Mass/kg。通用说明也提及沥青及后续硬化；本PCR将其限定为后续硬化前的水硬性水泥新拌混合物，排除沥青和预制成形终端。其分类标签指向预制结构构件；此孤立分类差异不确立预制物理身份，须披露而非复制为适用范围。该族没有原生指定CAS、固定强度、密度、钢筋、几何或地域。供货混合物和本工厂门须独立证明；硬化构件或现场浇筑供应过程不相容。全部必需限定信息均适用于参考流及每张使用该族的清单卡。 本唯一选定参考输出为中央搅拌厂出料完成适用首次新拌质控决定的湿态净水硬性混凝土，不含测试废品移出及全部包装；首次放行的期末FG已计一次。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：混凝土 `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_first_release_concrete`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

##### 废物流

###### 条件发生的水泥纸袋废弃（`paper_sack_waste`）

一种真实废弃包装制品。测量完整湿质量，附着水泥和水分为组成子账；实际未分离时不重复算分离水泥。保留原负荷及真实处理，出售外运不产生信用。精确废物身份及处理供应过程未解决。

- 选定流：废牛皮纸水泥袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack_waste关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack_waste`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的PE-LD水泥袋内衬废弃（`ldpe_liner_waste`）

一种真实废弃包装制品。测量完整湿质量，附着水泥和水分为组成子账；实际未分离时不重复算分离水泥。保留原负荷及真实处理，出售外运不产生信用。精确废物身份及处理供应过程未解决。

- 选定流：废PE-LD水泥袋内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner_waste关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner_waste`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的木供货托盘废弃（`wood_pallet_waste`）

一种真实废弃包装制品。测量完整湿质量，附着水泥和水分为组成子账；实际未分离时不重复算分离水泥。保留原负荷及真实处理，出售外运不产生信用。精确废物身份及处理供应过程未解决。

- 选定流：废弃木供货托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet_waste关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet_waste`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 围控搅拌清洗料转移（`washout_to_controls`）

一个真实湿混凝土水泥砂清洗浆液物理流，按收集点及实测湿固体自由水相态界定。它是单一混合物流，不是纯水、硫酸盐渣或造纸污泥。向治理过程的真实内部转移须关联并在合并时抵消，已含水和固体不重复外部输入；无固定水化回收比例。

- 选定流：水泥基混凝土清洗浆液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_washout_to_controls关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_washout_to_controls`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`

###### 废弃新拌批次及未硬化样品（`rejected_fresh_concrete`）

一个真实新拌废混凝土流，包括失败试拌及放行前试件移出，按真实湿态测量。内部处理转移或外部接收方只关联一次，不因外运出售扣制造负荷。后续硬化试件及实验室化学废物须有真实独立出口。

- 选定流：废弃新拌硅酸盐水泥混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_rejected_fresh_concrete关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejected_fresh_concrete`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### 基本流

###### 真实化石二氧化碳（`fossil_co2`）

CO2 CAS124-38-9，为化石源气体、排入未特指空气的Elementary流。仅取实际化石碳形成量，独立区分环境穿透、碳酸盐粉尘及生物碳，不假定CO2信用或总碳换算。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_fossil_co2关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fossil_co2`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 真实化石一氧化碳（`fossil_co`）

CO CAS630-08-0，为化石源气体、排入未特指空气的Elementary流。仅记录实际不完全燃烧CO，不代表CO2、VOC或碳残差。原生宽泛同义词含冷冻液态，不改变本卡选定的实测气态排放。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_fossil_co关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fossil_co`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 真实二氧化硫（`sulfur_dioxide`）

SO2 CAS7446-09-5，为排入未特指空气的单个气态Elementary物种；原生名称同义词含二氧化硫及亚硫酸酐。不代表总硫SOx指标或溶解硫酸盐，须用真实物种观测及燃料材料硫证据，不能假定所有硫均为SO2。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_sulfur_dioxide关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_sulfur_dioxide`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 毛排出分子氮（`nitrogen_out`）

N2 CAS7727-37-9，为排入未特指空气的Elementary流。保留毛实测气体质量及真实氮转化卷入，不由NOx推定分子氮，不把空气资源输入UUID复制为输出。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_nitrogen_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_nitrogen_out`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 毛排出氩（`argon_out`）

氩CAS7440-37-1，为排入未特指空气的Elementary流，是实际空气通量门的气体出口。保留真实进出卷入数量，不代表采购纯气供应。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_argon_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_argon_out`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 拌合燃烧水蒸气（`mix_vapour`）

H2O CAS7732-18-5，为排入未特指空气的实际气态水Elementary流。原生水冰同位素宽泛同义词不授权替代液体排水、重水、水化结合水或外供蒸汽。以独立证据区分环境湿度、蒸发及燃料生成水，不定固定水化水或通用密度。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_mix_vapour关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mix_vapour`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 实际排放不大于2.5微米粉尘（`dust_fine`）

单个实际排放PM2.5粒径组分，为排入未特指空气的Elementary流，在实际排放点测量。它是物理粒径分数，没有特定化学CAS，不称为二氧化硅、水泥氧化物或总PM。排除捕集粉尘，重叠PM10仅为上位子账。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_dust_fine关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dust_fine`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 实际排放2.5至10微米粉尘（`dust_mid`）

一个实际不重叠PM2.5至PM10粒径组分，为排入未特指空气的Elementary流。须有独立粒径观测，仅相容嵌套采样可从PM10减PM2.5并传播不确定性。不选长期或土壤节点，不再叠加总PM及PM10。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_dust_mid关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dust_mid`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 毛残余氧（`oxygen_out`）

真实出口气态O2与空气资源输入、固体水CO2氧化物中的化学结合氧不同。保留独立实测毛过剩氧及物料卷气，不反向使用资源UUID作为排放。

 原生普通中性气态O2 CAS7782-44-7，当期未细分空气排放Mass/kg。完整液态/医用/离子/激发/同位素别名不授权这些状态、室内/长期替代或外购纯氧。独立实测总出口与空气资源入口、燃烧耗用及净生成分开。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_oxygen_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_oxygen_out`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 毛环境二氧化碳穿透（`ambient_co2_out`）

独立区分的一项环境CO2穿透流，与新增化石CO2及任何实测碳酸盐反应吸收分开，不作为负化石排放或自动信用。真实新增化学物种须另原子卡。

- 选定流：环境二氧化碳穿透排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ambient_co2_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ambient_co2_out`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 真实一氧化氮（`nitrogen_monoxide`）

真实NO气体须逐物种测量，不以按NO2当量表示的NOx代替。选定原生记录的同义词还列有HNO亚硝基氢；这些化学上不同的物种排除在此仅代表NO的交换之外。

 原生分子NO CAS10102-43-9，当期未细分空气排放Mass/kg。主体名称/CAS/介质为NO，HNO/硝酰/亚硝基氢或NO2误译别名不授权异化学。仅独立识别的真实NO，不用总NOx或NO2当量质量，保留气态监测条件和不确定性。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_nitrogen_monoxide关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_nitrogen_monoxide`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 真实二氧化氮（`nitrogen_dioxide`）

真实NO2气体须与NO及N2O4分别采样，不能由NOx推断。候选同义词指向四氧化二氮，CAS名称单独不足以消除结构歧义，因此UUID未解决。

- 选定流：气态二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_nitrogen_dioxide关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_nitrogen_dioxide`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

###### 真实粗颗粒排放（`dust_coarse`）

一个真实不重叠大于10微米的排放颗粒组分，不以PM10节点代替。真实粒径证据与化学分析分开，上位总PM仅为子账而非新增可加流。

- 选定流：排放大于10微米的混凝土配料粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_dust_coarse关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dust_coarse`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

### 过程：清洗料粉尘围控及真实回收处置（`controls`）

#### 输入

##### 产品流

###### 围控治理补水（`control_water`）

仅为已处理可饮用市政自来水Product供货，不代表原水取用、回收碱性清洗水、蒸汽或热量。原生参考为Mass/kg，次级Volume系数为0.001立方米每千克；该系数不是实际密度测量，不作为换算依据。须匹配真实水源处理供应过程，本用途单独计量且不得重复计入另一水表。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_control_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_control_water`
- 来源：`epa-concrete-batching-2012`; `epa-concrete-washout-2012`

###### 回收围控用电（`control_electricity`）

原生为中国低于1千伏电网平均用户侧交流电Product，仅用于该真实接口，并匹配年份和供应过程，不代表高压或电厂发电。参考属性为净热值，参考单位MJ；原始千瓦时只以3.6MJ每千瓦时换算一次。包括真实输送机、搅拌机、空压机、控制及试验用电，不把自产电和其发电燃料重复计量。真实电压地域不同时须有独立相容原子身份。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66` → 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` → 参考单位MJ。须保留上述实际形态、路线、介质和供应限制。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用第8节与cp_control_electricity关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_control_electricity`
- 来源：`epa-concrete-batching-2012`; `epa-concrete-washout-2012`

##### 废物流

###### 接收搅拌清洗料（`washout_received`）

一个真实湿混凝土水泥砂清洗浆液物理流，按收集点及实测湿固体自由水相态界定。它是单一混合物流，不是纯水、硫酸盐渣或造纸污泥。向治理过程的真实内部转移须关联并在合并时抵消，已含水和固体不重复外部输入；无固定水化回收比例。

- 选定流：水泥基混凝土清洗浆液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_washout_received关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_washout_received`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`

#### 输出

##### 产品流

###### 内部回收清洗水交配料（`recovered_water_out`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收碱性混凝土清洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_water_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_water_out`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 内部回收细骨料交配料（`recovered_fine_out`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收混凝土细骨料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_fine_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_fine_out`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 内部回收粗骨料交配料（`recovered_coarse_out`）

仅含本厂内真实分离回收，记录整份湿料、固体自由水相组成、来源批组及继承交换向量。厂家规格许可及真实污染质量试验须允许其用于本配合比；无回收时明确记录缺席。不得推定外部再生料进料。合并时匹配进出口抵消一次，不再采购上游、抵扣原生料或新增首次放行混凝土Q。

- 选定流：回收混凝土粗骨料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_recovered_coarse_out关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovered_coarse_out`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### 废物流

###### 分离液体排出（`washwater_purge`）

一个实际送至指定处理接收方的分离碱性水溶液，保留湿液质量、悬浮溶解组分、pH、流态及接收边界。COD是试验指标，不是特定化学质量，不得又把已含水作为相同废物或基本排水重复记账。

- 选定流：碱性混凝土清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_washwater_purge关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_washwater_purge`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 沉降湿固体（`settled_sludge`）

一种实际分离的湿水泥基污泥。完整湿质量及独立干物自由水水化相子账均保留，不绑定造纸污泥或硫酸盐电石渣。处理外运保留负荷，不自动给予骨料替代信用。

- 选定流：沉降水泥基混凝土清洗污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_settled_sludge关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_settled_sludge`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 硬化残余及已测试件（`hardened_residue`）

一种来自本批组的真实硬化混凝土残余，存在时包括后续测试件；保留实测额外养护水、损失及真实相龄期。破碎回收须是真实有能耗和检验的作业，不推定逆转成新拌混合料，不自动抵扣填埋。

- 选定流：硬化无钢筋混凝土残余
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_hardened_residue关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hardened_residue`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 捕集配料粉尘（`captured_dust`）

一种捕集的水泥为主配料粉尘流，保留真实矿物含水及收集边界。再用须有真实获准组成质量及关联内部转移；捕集料不是已排放基本物种。实际弃尘及处理负荷保留。

- 选定流：捕集硅酸盐水泥配料粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_captured_dust关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_captured_dust`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### 基本流

###### 真实清洗料蒸发（`control_vapour`）

实际围控清洗料处理产生的H2O气体CAS7732-18-5，排入未特指空气。将实测自由水蒸发与水化、液体外运、保留水分开；不默认蒸发处置，不与搅拌蒸气重复。原生水冰同位素宽泛同义词不改变本气态用途。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_control_vapour关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_control_vapour`
- 来源：`epa-concrete-washout-2012`

### 过程：设备维修及在装流体服务（`assets`）

#### 输入

##### 产品流

###### 条件发生的碳钢料斗维修板（`repair_steel`）

一种真实料斗搬运设备用碳钢维修板，属于工厂铁碳钢Product宽族；原生同义词也含合金钢及不锈钢替代，此处不选。须匹配真实板材形态牌号加工及供货边界。整份外购加工件按完整制品记录，不再算板材及其已含金属。实物记录新件备件在装旧件存量，服务负荷另分。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：钢材 `b5e4fcbb-ad3f-4511-b007-67131b98866a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_repair_steel关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_repair_steel`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的整份矿物润滑油（`lubricating_oil`）

一种实际设备维护用整份石油馏分润滑油配方，包含供货已含添加剂。原生显示热值40.5MJ每千克，但参考为Mass/kg，该显示不是实测燃料因子，本方法不采用。不推定合成油、液压液化学或制冷剂。分别保留在装油、补入及退役，不重复采购添加剂。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_lubricating_oil关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_lubricating_oil`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的新固定式搅拌机资产（`central_mixer_asset`）

实际入厂时的一台完整固定式混凝土搅拌机资产，不用压路机或混凝土产品UUID替代。保留件数配置和独立称量的机器净质量，以及真实流体附着水分子账。供货总成只采购一次。原有设备留资产台账，不虚设当期采购；真实服务负荷按asset_service归属，绝不每千克算一整机。

- 选定流：固定式中央混凝土搅拌机
- 流属性/单位：件数 / item
- 数量规则：复用第8节与cp_central_mixer_asset关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_central_mixer_asset`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`; `jrc-ilcd-2010`

###### 条件发生的维修清洗水（`maintenance_water`）

仅为已处理可饮用市政自来水Product供货，不代表原水取用、回收碱性清洗水、蒸汽或热量。原生参考为Mass/kg，次级Volume系数为0.001立方米每千克；该系数不是实际密度测量，不作为换算依据。须匹配真实水源处理供应过程，本用途单独计量且不得重复计入另一水表。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_maintenance_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance_water`
- 来源：`nrmca-quality-2022`

###### 实测维修电力（`maintenance_electricity`）

原生为中国低于1千伏电网平均用户侧交流电Product，仅用于该真实接口，并匹配年份和供应过程，不代表高压或电厂发电。参考属性为净热值，参考单位MJ；原始千瓦时只以3.6MJ每千瓦时换算一次。包括真实输送机、搅拌机、空压机、控制及试验用电，不把自产电和其发电燃料重复计量。真实电压地域不同时须有独立相容原子身份。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66` → 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` → 参考单位MJ。须保留上述实际形态、路线、介质和供应限制。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用第8节与cp_maintenance_electricity关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance_electricity`
- 来源：`nrmca-quality-2022`

#### 输出

##### 废物流

###### 真实废油排出（`spent_oil`）

仅真实单个废弃制品流体按实测湿态污染状态离门。保留原资产部件流体关系及真实处理，不因废料出售删除负荷。附着混凝土水在真实分离前只为子账。物理退役与当期资产服务负荷分账。

- 选定流：废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_spent_oil关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_spent_oil`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 真实旧维修板（`spent_repair_plate`）

仅真实单个废弃制品流体按实测湿态污染状态离门。保留原资产部件流体关系及真实处理，不因废料出售删除负荷。附着混凝土水在真实分离前只为子账。物理退役与当期资产服务负荷分账。

- 选定流：移出的碳钢料斗维修板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_spent_repair_plate关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_spent_repair_plate`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 真实退役搅拌机（`retired_mixer`）

仅真实单个废弃制品流体按实测湿态污染状态离门。保留原资产部件流体关系及真实处理，不因废料出售删除负荷。附着混凝土水在真实分离前只为子账。物理退役与当期资产服务负荷分账。

- 选定流：退役固定式混凝土搅拌机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_retired_mixer关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_retired_mixer`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 真实维修清洗废水（`oily_washwater`）

一种真实分离的设备维修水性废水，油固水须实测子账，不假定等同碱性混凝土清洗料。保留真实接收处理。实际另行分离的油固体须另实物出口，不与本湿混合物内含量重复。

- 选定流：含油设备清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_oily_washwater关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_oily_washwater`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

### 过程：原批组首次放行后厂内服务及毛发运（`services`）

#### 输入

##### 产品流

###### 内部首次放行FG接收（`released_fg_received`）

参考UUID为工厂搅拌制造的宽泛混凝土Product族，参考属性为Mass/kg。通用说明也提及沥青及后续硬化；本PCR将其限定为后续硬化前的水硬性水泥新拌混合物，排除沥青和预制成形终端。其分类标签指向预制结构构件；此孤立分类差异不确立预制物理身份，须披露而非复制为适用范围。该族没有原生指定CAS、固定强度、密度、钢筋、几何或地域。供货混合物和本工厂门须独立证明；硬化构件或现场浇筑供应过程不相容。全部必需限定信息均适用于参考流及每张使用该族的清单卡。 接收匹配的内部首次放行Q及其制造向量一次，合并时与first_release_concrete抵消；期初已放行FG保留原批向量。不产生新上游采购或新产量。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：混凝土 `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_released_fg_received关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_released_fg_received`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 真实外部退回湿料（`returned_wet_concrete`）

一车真实退回湿料，按当前实测状态记录，不视作原交付混凝土的直接逆向。记录经过时间、额外水配料、水化污染损失并保留原交付关系。身份及厂家规格许可未确认前不套合格新拌参考UUID。不产生新拌产量Q，真实回收处置可追溯。

- 选定流：退回湿态硅酸盐水泥混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_returned_wet_concrete关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_returned_wet_concrete`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 真实增量FG服务用水（`service_water`）

仅为已处理可饮用市政自来水Product供货，不代表原水取用、回收碱性清洗水、蒸汽或热量。原生参考为Mass/kg，次级Volume系数为0.001立方米每千克；该系数不是实际密度测量，不作为换算依据。须匹配真实水源处理供应过程，本用途单独计量且不得重复计入另一水表。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_service_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_water`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`

###### 真实暂存发运电力（`service_electricity`）

原生为中国低于1千伏电网平均用户侧交流电Product，仅用于该真实接口，并匹配年份和供应过程，不代表高压或电厂发电。参考属性为净热值，参考单位MJ；原始千瓦时只以3.6MJ每千瓦时换算一次。包括真实输送机、搅拌机、空压机、控制及试验用电，不把自产电和其发电燃料重复计量。真实电压地域不同时须有独立相容原子身份。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200c9a66` → 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` → 参考单位MJ。须保留上述实际形态、路线、介质和供应限制。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：复用第8节与cp_service_electricity关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_electricity`
- 来源：`nrmca-quality-2022`

###### 包装托盘维修木板 (`pallet_repair_wood`)

仅原批群真实包装服务的独立维修木板收货；实测树种处理、干木、自由吸附水、供方和所有权。不是整托盘或整供货已含部件的重复购买；另供钉胶各具体身份。新增水料留库仍保留真实入流，不假寿命或维修发生。

- 选定流：包装托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_pallet_repair_wood关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pallet_repair_wood`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 自来水 (`pack_repair_water`)

仅原批群实际包装清洗维修外购处理饮用市政自来水，原生Product Mass/kg，无固定地域/CAS，真实供方处理品质须相符；不是混凝土额外加水/原水资源/循环水。实测加入状态、留存湿材及废水蒸气去向；次级Volume系数不是实测密度，整供货已携水不重复。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_pack_repair_water关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_repair_water`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`

##### 基本流

###### 包装吸收环境水蒸气 (`pack_humidity_in`)

仅原批群包装真实吸收的环境气态H2O CAS7732-18-5，独立实测湿度温压/吸水质量，不用固定空气比例、密度或湿重残差猜干材和水两个未知。与P/I/ER/维修材已携水互斥；留库吸水仍保留真实入流，不因另一原子卡存在而置零。

- 选定流：包装吸收环境水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_pack_humidity_in关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_humidity_in`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

#### 输出

##### 产品流

###### 已放行混凝土毛实物发运（`gross_dispatched_concrete`）

参考UUID为工厂搅拌制造的宽泛混凝土Product族，参考属性为Mass/kg。通用说明也提及沥青及后续硬化；本PCR将其限定为后续硬化前的水硬性水泥新拌混合物，排除沥青和预制成形终端。其分类标签指向预制结构构件；此孤立分类差异不确立预制物理身份，须披露而非复制为适用范围。该族没有原生指定CAS、固定强度、密度、钢筋、几何或地域。供货混合物和本工厂门须独立证明；硬化构件或现场浇筑供应过程不相容。全部必需限定信息均适用于参考流及每张使用该族的清单卡。 本卡为原批组仍合格新拌混凝土的真实毛实物发运，核对发运时状态龄期规格；不是第二个参考输出或净交付Q。厂外运输及工地养护独立在本厂门外。 原生参考链：流属性 `93a60a56-a3c8-11da-a746-0800200b9a66` → 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` → 参考单位kg。须保留上述实际形态、路线、介质和供应限制。

- 选定流：混凝土 `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_gross_dispatched_concrete关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gross_dispatched_concrete`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 纸袋 (`paper_sack_gross_shipped`)

仅真实原批群服务期间随总实物发运携出的完整包装S，包括实际重复发运；与空包装外退EO和废物W互斥，实测完整湿量不按经济份额缩量，不创造额外产品Q或采购。若此方向未发生须真实缺席证据，不推新拌混凝土必用袋装。 原生Paper bag族中的一只真实完整牛皮纸开口/阀口水泥袋，工厂生产混合Mass/kg，无固定CAS/地域/供方。原生/再生纤维、层数、涂层、胶和防潮需真实规格，一般可回收性不证明场址处置或认证。供方整袋/整水泥背景已含内衬胶仅实物子账，不再采购，真实独立供货内衬才另有上游。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_paper_sack_gross_shipped关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_paper_sack_gross_shipped`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_liner_gross_shipped`)

仅真实原批群服务期间随总实物发运携出的完整包装S，包括实际重复发运；与空包装外退EO和废物W互斥，实测完整湿量不按经济份额缩量，不创造额外产品Q或采购。若此方向未发生须真实缺席证据，不推新拌混凝土必用袋装。 一份真实低密度聚乙烯箔膜内衬，原生Product Mass/kg，无固定品级/厚度/处理/地域/供方。匹配实测PE-LD组成和膜形态，不是树脂粒子、PET/PP/PVC、多层整袋或整水泥袋。供方整袋/水泥已含内衬仅实物子账，不再重复上游采购；真实独立供货内衬另有一次所有者。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_ldpe_liner_gross_shipped关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ldpe_liner_gross_shipped`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`wood_pallet_gross_shipped`)

仅真实原批群服务期间随总实物发运携出的完整包装S，包括实际重复发运；与空包装外退EO和废物W互斥，实测完整湿量不按经济份额缩量，不创造额外产品Q或采购。若此方向未发生须真实缺席证据，不推新拌混凝土必用袋装。  原生完整成品已制造木质便携承载平台Product族，工厂生产混合Mass/kg，无固定地域/CAS。其他成员含柱式/围板/侧栏/端栏平台及独立铰接围板；只选真实整只供货托盘，实测木构造/处理、内含紧固件、含水、所有权及相容供方。不推欧标几何、每只kg或寿命；整制品已含物只计一次，独立维修投入各具体身份。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_wood_pallet_gross_shipped关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wood_pallet_gross_shipped`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`


##### 废物流

###### 废弃原批组已放行混凝土（`discarded_released_concrete`）

一种真实原批组废弃混凝土，测当前湿固体相态并指定去向。原制造保留一次，新增服务处理归属原批。不冲回原Q，也不假定门后加工能恢复硬化料。真实额外分离水固体出口须另卡。

- 选定流：废弃已放行硅酸盐水泥混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_discarded_released_concrete关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_discarded_released_concrete`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 真实首次放行后服务清洗料（`service_washout_to_controls`）

一个真实湿混凝土水泥砂清洗浆液物理流，按收集点及实测湿固体自由水相态界定。它是单一混合物流，不是纯水、硫酸盐渣或造纸污泥。向治理过程的真实内部转移须关联并在合并时抵消，已含水和固体不重复外部输入；无固定水化回收比例。 将本真实服务产生转移关联原批组及治理接收；不作为另一制造产量。

- 选定流：水泥基混凝土清洗浆液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_service_washout_to_controls关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_washout_to_controls`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### 包装维修移除废木板 (`removed_pallet_wood`)

原批群实际包装维修移除的旧木板，独立称干材/水/污染和真实去向；不是整托盘报废或重复W，外送销售不自动扣制造/处理负荷或建立信用。

- 选定流：包装维修移除废木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_removed_pallet_wood关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_removed_pallet_wood`
- 来源：`nrmca-quality-2022`; `jrc-ilcd-2010`

###### 包装清洗维修外送处理废水 (`pack_repair_wastewater`)

仅实际原批群包装清洗维修外送处理废水，保留实测液量、木屑/污染和接收去向；与湿木包装留水、蒸气和其他出口互斥。不是混凝土内部洗出浆转移或直接环境液态排放，不把COD/总元素当分子。真实其他处理路线须另列匹配接口，不推固定清洗量。

- 选定流：包装清洗维修外送处理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_pack_repair_wastewater关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_repair_wastewater`
- 来源：`nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### 基本流

###### 水蒸气 (`pack_water_vapour`)

仅原批群包装维修储存真实气态H2O CAS7732-18-5，当期未细分空气Mass/kg。冰/重水/离子别名不授权异相态/同位素；蒸发与干材损失独立测量，不从同一残差拟二未知。不重复其他同侧出口流项已携水，实际留库吸水仍在入口和期末湿质量两边保留。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：复用第8节与cp_pack_water_vapour关联的唯一归一结果；不得再除分母。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_water_vapour`
- 来源：`epa-concrete-batching-2012`; `nrmca-quality-2022`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attributional_hierarchy | 所有清单行 | 本层级仅用于已声明的归因型分配场景。先归属专属观测，并实质或虚拟细分以分离功能。剩余多功能交换须建立逐交换决定性物理因果及量化驱动，不可为方便任取质量或能量。只有确实剩余的共同过程按实际共同功能在同一过程门、真实状态及相同数量基准的同期市场价值处理，并说明价格调整和不确定性。不设固定份额，不任意选择物理或经济，也无自动系统扩展信用。 | `jrc-ilcd-2010` |
| waste_is_not_credit | mix; controls; services | 返回混凝土、回收水、粉尘、废品及测试混凝土不自动成为共产品。保留源制造和真实回收处理负荷、物理毛出口及结转。只有独立的其他批组功能与正当分配移交决定才允许一次向外负荷向量转移，废料有售价不足以成立。门内回用仅为一次内部循环，不是再次采购或负的原生料投入。 | `epa-concrete-washout-2012`; `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

协议仅采集原始未归一观测。汇总标签标识normalize_once的唯一报告结果，不在采集时再计算。原始分母Q及原批组Q_c与所有分子分开保留。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cement | mix | 整份供货硅酸盐水泥 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 整份供货湿质量; 供应方及品级; 配料票; 干物分析; 自由水; 真实入口状态; 上游及入厂运输段所有权 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_fine_sand | mix | 天然细骨料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 整份供货湿质量; 供应方及品级; 配料票; 干物分析; 自由水; 真实入口状态; 上游及入厂运输段所有权 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_coarse_gravel | mix | 天然粗骨料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 整份供货湿质量; 供应方及品级; 配料票; 干物分析; 自由水; 真实入口状态; 上游及入厂运输段所有权 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_mixing_water | mix | 单独供入拌合水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_mixer_wash_water | mix | 搅拌机及采样工具清洗水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_mix_electricity | mix | 拌合接收用电 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 原始累计千瓦时; 电表起止及时段; 分表总表核对; 实际电压; 供电国家电网年份; 过程用量及未分配结转 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | MJ | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_loader_diesel | mix | 条件发生的装载机柴油 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 燃料接收及油箱库存; 累计质量体积; 实际状态实测燃料密度及低位热值; 装载服务日志; 实际牌号及硫碳氢分析 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack | mix | 条件发生的水泥纸袋 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack_return | mix | 条件发生的水泥纸袋对外归还 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack_waste | mix | 条件发生的水泥纸袋废弃 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner | mix | 条件发生的PE-LD水泥袋内衬 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner_return | mix | 条件发生的PE-LD水泥袋内衬对外归还 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner_waste | mix | 条件发生的PE-LD水泥袋内衬废弃 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet | mix | 条件发生的木供货托盘 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet_return | mix | 条件发生的木供货托盘对外归还 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet_waste | mix | 条件发生的木供货托盘废弃 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_first_release_concrete | mix | 唯一首次放行新拌混凝土 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 唯一批次及首次放行ID时刻; 获批配合比; 中央湿拌完成; 校准湿态净出料称量; 取样废品移出; 实际新拌试验; 原生产批组; 首次放行Q; 期初期末FG; 重复放行标志 | 在明确放行状态使用校准荷重传感器或可追溯毛重皮重观测称量合格新拌净出料，仅求和唯一首次放行批次。体积生产票须有同配合比新拌状态独立实测密度，不假定普通混凝土密度。新拌质控及后续试件结果分开保留。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_washout_to_controls | mix | 围控搅拌清洗料转移 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗; 实际已过时间温度; 实测水化凝结塑性; 原交货独立记录; 真实新旧水料; 实际许可测试处置; 实际已过时间温度; 实测水化凝结塑性; 原交货独立记录; 真实新旧水料; 实际许可测试处置; 实际已过时间温度; 实测水化凝结塑性; 原交货独立记录; 真实新旧水料; 实际许可测试处置 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_washout_received | controls | 接收搅拌清洗料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_rejected_fresh_concrete | mix | 废弃新拌批次及未硬化样品 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_control_water | controls | 围控治理补水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_control_electricity | controls | 回收围控用电 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 原始累计千瓦时; 电表起止及时段; 分表总表核对; 实际电压; 供电国家电网年份; 过程用量及未分配结转 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | MJ | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_washwater_purge | controls | 分离液体排出 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_settled_sludge | controls | 沉降湿固体 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_hardened_residue | controls | 硬化残余及已测试件 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_captured_dust | controls | 捕集配料粉尘 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_repair_steel | assets | 条件发生的碳钢料斗维修板 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 真实部件ID牌号; 整份供货湿质量; 新件备件在装期初期末; 工单; 旧件移出; 保留水及附着混凝土; 服务日志及实测分配驱动 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_lubricating_oil | assets | 条件发生的整份矿物润滑油 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 油品配方; 实测注入补入排出湿质量; 在装备库存期初期末; 污染含水; 服务时段; 供应方及废油接收方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_central_mixer_asset | assets | 条件发生的新固定式搅拌机资产 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 资产ID; 件数; 配置; 校准独立净质量; 完整湿质量; 供方已含流体; 在设备品期初期末; 服务日志; 退役及负荷所有权 | 清点真实完整机器并保留供应方序号配置记录；用校准秤独立称量排除独立包装的机器净质量，并核算湿态追加物。不猜每件千克、不定固定寿命、不使用次级属性质量系数。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | item | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_maintenance_water | assets | 条件发生的维修清洗水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_maintenance_electricity | assets | 实测维修电力 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 原始累计千瓦时; 电表起止及时段; 分表总表核对; 实际电压; 供电国家电网年份; 过程用量及未分配结转 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | MJ | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_spent_oil | assets | 真实废油排出 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_spent_repair_plate | assets | 真实旧维修板 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_retired_mixer | assets | 真实退役搅拌机 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_released_fg_received | services | 内部首次放行FG接收 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_gross_dispatched_concrete | services | 已放行混凝土毛实物发运 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_returned_wet_concrete | services | 真实外部退回湿料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_service_water | services | 真实增量FG服务用水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_service_electricity | services | 真实暂存发运电力 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 原始累计千瓦时; 电表起止及时段; 分表总表核对; 实际电压; 供电国家电网年份; 过程用量及未分配结转 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | MJ | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_discarded_released_concrete | services | 废弃原批组已放行混凝土 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_oxygen_in | mix | 真实燃烧卷气的大气氧输入 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_nitrogen_in | mix | 大气分子氮入流 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_argon_in | mix | 大气氩入流 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_air_humidity_in | mix | 进气湿度 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ambient_co2_in | mix | 进气环境二氧化碳 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_fossil_co2 | mix | 真实化石二氧化碳 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_fossil_co | mix | 真实化石一氧化碳 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_sulfur_dioxide | mix | 真实二氧化硫 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_nitrogen_out | mix | 毛排出分子氮 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_argon_out | mix | 毛排出氩 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_mix_vapour | mix | 拌合燃烧水蒸气 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_dust_fine | mix | 实际排放不大于2.5微米粉尘 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_dust_mid | mix | 实际排放2.5至10微米粉尘 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_oxygen_out | mix | 毛残余氧 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ambient_co2_out | mix | 毛环境二氧化碳穿透 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_nitrogen_monoxide | mix | 真实一氧化氮 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_nitrogen_dioxide | mix | 真实二氧化氮 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_dust_coarse | mix | 真实粗颗粒排放 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_control_vapour | controls | 真实清洗料蒸发 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准 | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_water_out | controls | 内部回收清洗水交配料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_water_in | mix | 内部回收清洗水配料接收 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_fine_out | controls | 内部回收细骨料交配料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_fine_in | mix | 内部回收细骨料配料接收 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_coarse_out | controls | 内部回收粗骨料交配料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_recovered_coarse_in | mix | 内部回收粗骨料配料接收 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_oily_washwater | assets | 真实维修清洗废水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_service_washout_to_controls | services | 真实首次放行后服务清洗料 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack_with_supply | mix | 纸袋 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack_return_received | mix | 纸袋 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_paper_sack_gross_shipped | services | 纸袋 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner_with_supply | mix | 低密度聚乙烯薄膜（PE-LD） | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner_return_received | mix | 低密度聚乙烯薄膜（PE-LD） | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_ldpe_liner_gross_shipped | services | 低密度聚乙烯薄膜（PE-LD） | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet_with_supply | mix | 木制托盘、箱式托盘和其他装载板，木制托盘套环 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ；包装P/I/ER来源与付费/非采购依据；同件原外发ID；继承服务所有者及向量 | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。  包装接收按packaging_receipt_basis，单独非采购接收归I，不能虚构ER或X。| kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet_return_received | mix | 木制托盘、箱式托盘和其他装载板，木制托盘套环 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_wood_pallet_gross_shipped | services | 木制托盘、箱式托盘和其他装载板，木制托盘套环 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_pallet_repair_wood | services | 包装托盘维修木板 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_pack_repair_water | services | 自来水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 累计供水体积或质量; 水温压力; 体积转质量时独立实测适用水密度; 水箱期初期末; 采样水质; 最终去向; 已含上游所有方; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_pack_humidity_in | services | 包装吸收环境水蒸气 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_removed_pallet_wood | services | 包装维修移除废木板 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 组件质量及件数; 供应方已含入流; 唯一上游所有方; 期初空件附着周转库存; 收到外部归还; 期末对应库存; 毛发运附着件; 对外归还; 废弃; 真实含水; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_pack_repair_wastewater | services | 包装清洗维修外送处理废水 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 转移ID和批组; 湿质量; 独立实测固体自由水; 相态污染分析; 接收池存量; 真实处置及处理能耗; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 对真实整份湿态交换使用校准净称量和可追溯接收库存转移记录，保留状态、采样和校准证据。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |
| cp_pack_water_vapour | services | 水蒸气 | raw_foreground_record | 时刻; 批次批组; 原始单位; 实物方向; 期初期末库存; 整份供货转移; 真实湿态; 供应方接收方; 继承交换向量; 所有权转移ID; 不确定性; 气体颗粒物种及化学身份; 接收介质子区室; 气流累计体积或速率; 真实温压; 干湿基; 独立组成密度; 仅速率使用实测时长; 空白检出限; 毛进出口; 来源归属; 采样器校准; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | 保留原始逐物种采样及校准实际状态气体颗粒观测。真实速率仅按实测时段积分一次，累计气体体积不得二次乘时间。质量来自同干湿状态独立有据的物种浓度密度。保留物种毛进出口及独立质量元素证据，不能以一个残差拟合未知物种或水相。 仅保留原始值，采集时不除产品Q，换算分配在计算阶段实施。 | kg | 每次接收批次仪表时段及库存边界 | 完整真实生产批组含失败零产出时段；服务用原批组观测时段h | 实际工厂及指定供应接收接口 | 每 1 kg 参考流 | 校准; 可追溯原件; 实际状态物种试验; 许可; 库存所有权核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | 所有清单行 | 分配前将原始观测换算一次到每行原生广延单位。累计观测仅求和一次，只有真实速率按实测时间积分。电力千瓦时*3.6=MJ。气液质量须独立适用浓度密度及温压干湿条件，累计体积不得再乘时间，不以水密度套油气，不使用次级属性密度或每件千克。能量质量体积件数分账。 | raw_observations; actual_states; independent_densities; measured_intervals | converted_raw | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| manufacture_vector | 所有清单行 | A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i。各项为经过专属归属、细分及有据逐交换分配后同单位继承交换向量。C_i保留失败批、零产出、启停、闲置、试验、清理、回收处理。B_close_i只含仍未放行的原料WIP及未分配非WIP存量，绝不含已放行FG。T_out_i须有真实其他批组功能及一次正当负荷移交，废物废料出售本身不足。已库存修正的消耗不能再扣。 逐交换明确总收货发生量或已按库存调整的净领用耗用及已含修正，仅施加尚未包含的修正；独立保留原料/WIP/未归属非WIP各期初期末实物量及完整逐交换历史，含耗用期初料上游负荷。 此式只计算归属负荷向量，不是台账专用实物毛量公式。设备/新旧零件/在装流体/废物及真实热载体或工艺水Product来返等实物卡的完整原生单位V_i独立保留；绝不以B_open+C+T_in-B_close-T_out、经济/服务份额或原制造历史替代或缩放实际毛腿。实际归属资本服务/操作/供应负荷另存每交换向量，一个采购/供应范围不再双计。 | B_open_i; C_i; T_in_i; B_close_i; T_out_i | A_i | `jrc-ilcd-2010` |
| service_vector | services | A_service_i_c_h仅含原批组c在观测时段h的真实首次放行后增量服务处理；原首次放行Q_c及制造向量分开保留。使用专属日志或分配层级。仅未用未分配服务存量结转，FG期末留库不扣已实施服务。返工保留许可试验处置且不新增Q。 FG收退发及包装实物移动卡中的A_service_i_c_h为原生单位换算后完整实测特定总方向量，不是继承制造采购负荷、第二次存量修正或经济负荷折份。仅实物账簿结果与真实供方操作负荷分开报告，归一化不新增供方采购或信用。独立匹配的原交货量与真实变湿退回量分开保留。 | original_cohort; Q_c; h; actual_service_records; unused_service_vectors | A_service_i_c_h | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| normalize_once | 所有清单行 | u_i = A_i / Q; u_i为每1kg参考流的交换量。单独报告服务时在同一运算中用A_service_i_c_h与Q_c替换。Q必须正，Q=0保留全部原始负荷且不产单位结果。本条是唯一产品分母除法，卡片及采集汇总仅引用该结果，不再除。first_release_concrete严格为1千克湿态净首次放行混凝土。 仅实物FG包装移动分子为完整实测方向量，不叠负荷向量、不二次修库存或经济缩量，按真实所属Q或原Q_c一次归一。即使货物期末仍留库，已执行保管搅动质控装车服务仍保留在原批群Q_c及观察h。 完整毛实物的例外同样适用于实际设备、零件、流体、废物以及热载体/工艺水Product来返，不限FG/包装；其同一次显示结果为V_i/Q或实际服务原Qc的V_i/Q_c，先按各自原生广延单位转换，独立湿质量用于物理核对。V_i不取负荷库存差、不二次扣存、不乘分配份额、不加旧制造/采购/处理负荷或返回抵扣。实际已执行服务和供应负荷仍按本式各自原批次及观察h单次归一，不因毛量另列而删。 | A_i; Q; A_service_i_c_h; Q_c; cp_first_release_concrete; V_i | u_i | `jrc-ilcd-2010` |
| manufacture_physical_gate | mix; controls; assets | 制造毛湿质量：期初原料WIP未放行存量包装实物资产在装流体+实际外部实物入流+实际作业抽出的原FG物料F_to=对应期末未放行在装湿库存+首次放行净湿Q+真实附着包装转移P_Q+作业后原批组物料返回F_back+其他真实外部固液气出口。包括大气物种、供方已含包装、新维修件及留在期末的水。匹配内部清洗回收转移抵消，不以经济份额缩此方程。电热单列能量账。 | opening_manufacture_stocks; external_ingress; F_to; closing_manufacture_stocks; Q; P_Q; F_back; external_exits | manufacture_gross_balance | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| fg_physical_gate | services | FG混凝土物料质量：期初已放行FG+Q+实际客户返回R+F_back+X_in=期末已放行FG+毛发运G+F_to+真实FG废物+消耗样品+X_out。X仅计尚未在其他项出现的真实新增水材料或出口，新增水即使留库仍是实际入流且完整包含于期末湿质量。R按当前状态实测，不推定等于原交付逆向。包装依完整逐组件账。合并门时抵消Q、P_Q、F_to/F_back及匹配内部包装转移，保留外部返回、新增水和真实损失。 | opening_FG; Q; R; F_back; X_in; closing_FG; G; F_to; FG_waste; samples; X_out; P_Q | FG_and_combined_gross_balances | `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| water_phase_check | 所有清单行 | 独立测量完整湿料、干矿物固体、自由吸附水、实际水化相结合水、气湿度、水蒸气、液体出口及湿残余保留水。水化改变相而总质量守恒，水泥组成不证明水化程度。实际化学反应和氧碳转移分别证明。以独立证据核对水及相关元素，不能一个残差求蒸发与水化两个未知。不把COD/VOC总碳或PM粒径转为特定化学质量。 | wet_materials; dry_solids; free_water; independent_hydrate_phases; humidity; vapour; liquid_outlets; retained_water; species_elements | water_phase_and_element_check | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| asset_service | assets | 机器部件流体的真实接收、在装备库、移出、含水和处置以原生单位及独立实测湿质量完整保留。仅资本制造服务负荷按有据真实使用容量记录及逐交换因果归属，保留实测驱动和分母。不定固定寿命、不猜每件公斤、不为每千克混凝土算整机。新更换及维修材料是真实完整供货，未用存量承接一次向量且不取消实物入流。 | asset_register; actual_usage; measured_service_driver; driver_denominator; physical_mass; unused_stock_vectors | capital_service_burden | `nrmca-quality-2022`; `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考及每个交换 | 保留全部原生限制、完整限定信息、整份制剂制品状态、实际来源及相容供应过程。族UUID不证明供应等价。 | 原生身份支持; 供应证明; 整份制品记录 |
| dq_raw | 每个原始字段 | 保留换算分配归一化前原件，包括校准、时间、库存边界、密度状态、检出限及不确定性。未来前景测量是要求，不声称已有实测数。 | 仪表秤记录; 采样方法; 独立试验 |
| dq_scope | 全部过程和时段 | 包括失败零产出时段、闲置启停、清理、试验、库存、回收、真实气水固物种及原批服务；记录真实缺席和每张新增原子卡。 | 全场批组核对; 原始台账 |
| dq_source | 外部来源和规则 | EPA支持工艺治理及清洗区别，不支持分配或通用配方因子。NRMCA支持生产质控及易变新拌状态，示例质控计划仅为示例且含坍落度方法不一致，采用正文C143语境及真实适用方法而不复制示例C173。ILCD仅用于归因分配层级。独立文件不因同源多次登记而增加独立性。 | 来源上下文; 相邻替代路线; 来源专属适用性评估 |
| dq_bilingual | 两稿及投影 | 保留全部行规则协议ID、官方中文UUID名、来源字段列表、限定、公式输入输出、物理门及完整描述。中文aligned不等于已审翻译或科学审批。 | 全字段双语及raw到typed审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | 所有清单行 | 要求完整参考限定信息及原子物理身份和原生限制。参考族仅限工厂拌制水硬性新拌混凝土，拒绝沥青、已安装或预制品替代身份。供应过程须独立匹配路线、形态、品级、地域、年份和门。辅助UUID缺口须明确可见，不可用泛集合绑定。 | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| validate_release | mix; services | 检查唯一首次放行ID、称量Q及取样废品排除，核对获准配合比与新拌质控。后续强度发现须披露，不创造第二次首次放行。Q=0时全部真实负荷保留，不输出单位结果。期末已放行FG既不再算产量，也不扣制造负荷。 | `nrmca-quality-2022`; `jrc-ilcd-2010` |
| validate_balances | all processes | 核对制造、FG服务及合并物理门、完整湿态库存、每种包装平衡和每个交换继承向量。保持独立水相物种元素观测；未闭合、检出限与不确定性应报告，不以一个残差声称成功。核实来源组分供应过程不双重采购、不重复归一化、不因废物出售删除负荷。 | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| validate_completeness | all processes | 完成数据集使用前解决真实核心终端及方法缺口，取得真实前景数量、许可、全部新增交换及相容上游数据。条件交换不发生须有真实缺席证据，不能方便置零。超出范围的配方或温控改变须重新评估。工程检查不等于科学审批、发布或分类映射接受。 | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 有相容上游供应过程及另行披露实测厂内服务的所选新拌混凝土首次质量放行供货 |
| excluded_use | 已安装工程、硬化预制品、泛砂浆覆盖、EPD审批、未经限定强度寿命等价或碳信用声称 |
| required_metadata | 场址和报告期; 普通硅酸盐水泥胶凝材料规格及整份供货水泥负荷所有权; 天然细砂和粗砾石的来源及级配; 实际各项单独采购配料及供货形态; 所选路线不单独添加辅助胶凝材料或化学外加剂; 首次放行前在中央搅拌机完成湿拌; 无钢筋或制成构件; 实际配合比标识及获准调整; 骨料自由含水及吸水; 实测首次放行湿态净质量和时刻; 按实际规格要求开展的新拌坍落度及含气量及温度及密度试验; 后续强度试验状态且不在销售时声称已证实硬化强度; 水相及水化证据; 唯一首次放行批次及原批次Q_c; 期初期末原料和WIP逐交换继承向量; 已放行FG库存及真实返回状态; 毛发运及不重复产量; 服务观测时段h和实际增量服务; 电力电压及供电地域; 实际使用的每种燃料及各大气物种; 包装入流及上游负荷所有权; 资产及在装流体存量; 实际供应方及接收介质 |
| required_quality_disclosure | 真实前景覆盖; 未决身份供应过程; 失败零产出负荷; 库存返回向量闭合; 许可; 来源限制; 服务观测时段; 独立复核待完成 |
| update_trigger | 真实配合比、配料供货形态、工艺终端、水相、供应过程、原生限制、测量方法或质量规格改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-concrete-batching-2012 | official_guidance | US EPA, AP-42 11.12 Concrete Batching, June 2006 with January 2012 editorial corrections; https://www.epa.gov/sites/default/files/2020-10/documents/c11s12.pdf | 原材料、集中搅拌制造、与运输拌合预制路线的区别、除尘及因子限制；不采用配方因子 |
| nrmca-quality-2022 | handbook | NRMCA, Quality Control Guide for Ready-Mixed Concrete Producers, April 2022; https://www.nrmca.org/wp-content/uploads/2022/04/Quality_Guide.pdf | 新拌未硬化易变终端、接收配料中央拌合质控、含水密度产量试验、追溯调整及不合格；示例计划不作统一工厂规定 |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 围控清洗、真实退料、液固分离及带规格限制的回收；施工现场示例仅用于真实工厂接口，不授权信用 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因专属虚拟细分、逐交换决定性物理因果及剩余同门经济分配；批组向量归属为所声明前景实施 |
