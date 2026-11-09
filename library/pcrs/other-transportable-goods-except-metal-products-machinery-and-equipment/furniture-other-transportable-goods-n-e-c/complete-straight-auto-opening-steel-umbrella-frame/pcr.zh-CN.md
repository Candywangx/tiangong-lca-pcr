---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.complete-straight-auto-opening-steel-umbrella-frame
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 完整直杆自动开钢伞架制造

## 1. 范围与适用性

本 PCR 针对伞面和手柄装配前的一副独立完整直杆自动开钢伞架，包含实际钢中棒、主伞骨与撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节五金、匹配钢伞尖套及实际供货金属尾珠。声明为齐套供货的匹配散装尾珠属于同一整架，不构成另一参考输出。不把单根伞骨、伞柄和伞架合并为一个终端。选定前景路线接收已成形并完成表面处理的零件，进行真实来料检验/分选及必要配合修整/去毛刺、主伞骨与撑骨和滑套/上巢铆接、钢丝固定、弹簧/锁止件装配、开合/锁止检验及实际返工，随后完成必要供货包装，在工厂可供货时唯一一次完整伞架首次质量放行。外购部件已含的成形/回火/表面处理由其供应数据集承接一次。这是完整配件的实质装配制造。 `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026`

Septrainbow 正面供货资料列出完整钢伞架、钢中棒、滑套、尾珠、顶端/伞尖套及自动开状态；图片显示裸装配伞架与单独完成尾珠，浅色滑套照片和透明滑套文字均不确定聚合物规格。Acme 独立描述槽形钢伞骨、上巢/钢丝、滑套及后续手柄装配。ZheBrella 描述钢关节真实铆接、孔位/表面状态与装伞面前开合检查，也讨论不兼容的玻纤/混合架。1970 年官方调查描述独立交易的装配伞架及其与完整伞的区别；历史价格、尺寸和生产率不是当代清单数据。这是跨来源透明的定性技术综合，不是同一当代 SKU、工厂、订单、配方或性能认证。金色或 gilt coated 字样不能证明本伞架含元素金、锌、镍、镀层厚度或化学组成。 `usitc-umbrella-parts-1970`; `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026`

原 CPC 叶还包括其他伞类以及手杖/鞭类配件；本较窄伞架方法不声称覆盖全部类别。排除以钢带/钢丝/管材为终端、单根伞骨或手柄、木工和注塑伞柄路线、玻纤/碳纤维/铝/混合主架、家具架/夹具架、购买完整伞架后重包装、现场零件涂层/热处理、伞面裁剪/缝制/印刷、父件整伞装配、使用及寿命终结。实际新增工序或配置须在同一 PCR 身份内进行来源和逐交换适用性审查。不规定尺寸、件重、密度、合金、配方、损耗、良率、能耗、温度、时间、寿命、强度、防腐、开合次数或认证阈值。 `un-cpc3-2025`

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.complete-straight-auto-opening-steel-umbrella-frame |
| classification_refs | CPC 3.0 38922; narrower product and route boundary |
| covered_products | 具有完整声明供货清单的一副完整直杆自动开钢伞架 |
| excluded_products | 父件整伞；单根伞骨或手柄；原料；家具架；混合架/木工/塑料伞柄路线 |
| representative_product | 一副已装配裸机构及实际匹配供货尾珠和伞尖套；不含伞面和手柄 |
| production_route | 接收成形完成部件 → 实际配合修整/去毛刺 → 铆接/钢丝和弹簧/锁止件装配 → 检验/返工和必要齐套包装 → 工厂首次可供货质量放行 |
| market_state | 首次工厂质量放行的新完整配件，保留真实表面和供货状态；净量不含包装 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 制造完整配置的钢制开伞架 |
| How much | 1 kg 首次新增质量放行的净完整伞架 |
| How well | 实际图纸和齐套供货 BOM，记录真实开合/锁止和表面验收，不编试验目标 |
| How long or cycle | 一个制造首次放行事件；不设使用服务时长或开合次数默认值 |
| reference_flow_link | `first_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 伞、阳伞、手杖、座凳式手杖、鞭子、马鞭及类似品的零件、饰件和附件 `ece1101e-ca5c-4e59-a6f2-3fe75c761806` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 完整伞架供货 BOM 及匹配尾珠/伞尖套内容; 直杆自动开机构及中棒接口; 实际主伞骨及撑骨配置; 实际钢牌号和表面层身份; 实际滑套和上巢材料; 来料加工状态和自制/外购边界; 净质量测量及包装皮重; 首次放行批次 Q_c 与观察期 H; 场址时期/电压/供应范围; 实际验收/失败/退货/返工/WIP; 首次必要齐套包装后的工厂供货门及固定原Q0; 原验收全去向及独立当前湿状态桥不重复损失; 完整raw WIP非WIP FG台群与自有及provider历史互斥; 包装P I ERin S EOout W及真实J和水双向OTHER同侧X; 整湿污染接收Qt实际provider总需求及原队列非重叠A; 必要物种基质程序与实际QA及独立审查状态 |

每项必需限定信息都须保留于数据集/参考流备注或等效完整上下文。宽泛完成配件族 UUID 仅用于此处定义的一种完整伞架，不代表所有列出的族成员。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。 件数转kg仅用实际独立实测同配置净质量，不猜件重/密度。 |
| raw_conversion | all inventory rows | actual reference property | native unit | 先转换真实原始单位再归属；kWh ×3.6 仅一次转 MJ，公吨 ×1000 转 kg。只有真实速率按实测时间积分，已积分体积已是广延量。体积转质量须独立同物质相态/T/P 密度，次级流因子不能提供。item 与 Item(s) 同为件数单位因子1，不蕴含 kg 换算。 |
| single_basis | all inventory rows | actual reference property | native unit | 采集未除原始量，single_quotient 是唯一归一化：所选负荷 A 或完整 gross V 除原批次 Q_c 一次。参考 first_release 保持1千克。期末已放行 FG 已含于 Q_c；Q_c=0 保留全部实际负荷且不生成单位结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 装配门实际接收成形并完成表面处理的主伞骨/撑骨/中棒及具体机构/尾珠/伞尖套完成件，并接收实际辅料及公用工程 |
| starting_condition_role | foreground_input_gate |
| product_classification_scope | CPC3.0:38922 内完整伞配件；区别于38921整伞 |
| recursive_input_rule | 外购子总成完整承接已含制造一次，不递归重复采购同一钢/表面层或另造一副伞架；购买完整伞架不满足本部件装配路线。 |
| upstream_dataset_requirement | 各部件供应方须覆盖真实原料及已执行成形/热处理/表面处理；未解决供应范围须披露并在真实数据集完成 |
| disclosure | 实际部件 BOM/自制外购图；供应状态；实测物理门；首次放行及原批次服务账；全部排除与不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | all inventory rows | 整架供货清单必须互斥。外购中棒/伞尖套、滑套/弹簧或上巢/钢丝组合件整份仅计一次，组分仅作核对后非加和子账；实际独立供货则各采购件一次。不得把整件湿质量与已含水/油/表面层/零件重复相加。阶段合并时抵消内部子装配/WIP 交接。 | `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026` |
| b_actual | all inventory rows | 纳入所有真实来料、配合修整/去毛刺、铆接、机构装配、检验/试样、判废、启停、空转、清理及返工负荷，包括失败/未授权/拒收事件。许可和合格状态只管验收，不抹去物流。不暗示默认温压/试验次数、基材配方或良率；实际存在却未列输入/出口须先新增具体原子卡才能声称完整。 | `zhe-frame-riveting-2026`; `ilcd-allocation-2010` |
| b_q | reference product | 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。 | `sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010` |
| b_vectors | all inventory rows | 完整湿原料/WIP/非WIP/已验收/待检/退回FG、包装、设备内流体及全部真实设备/工具库存，独立于参考事件和逐交换负荷。自有期初WIP完整真实既往前景历史只承接一次，仅转移有据的期末未分配向量。链接整份provider数据集及其中钢材/聚合物/涂层/公用工程/运输/设备历史，与相同历史的展开表示互斥，不能相加。外购已成形/回火/完成表面处理部件须完整覆盖真实生产者及供货状态。不虚构采购隐藏已知现场成形、涂饰、热处理、压缩机或其他真实生产；路线改变须明示范围复核及完整原子交换。 | `ilcd-allocation-2010` |
| b_physical | all inventory rows | 分别闭合制造、FG/服务及合并完整湿实物门：期初库存加实际外部流入等于期末库存加实际外部流出。配对抵消包括首次放行交接的内部转移。资产/部件/包装/流体/Waste/实际载体返还均用完整 gross V/原生单位，不用分配 A、库存消耗或经济/服务份额。X 只可去重同侧 OTHER 已表示的实际流，不冲库存、对侧、未知量或卡存在性。 | `ilcd-allocation-2010` |
| b_species | all inventory rows | 相关元素、真实分子物种与总湿质量独立核对。游离/相态/结构/反应水仅凭实际证据区分，机械装配不推定反应。保留 N2/O2/Ar/H2O 湿度和实际介质/相态/T/P；COD/VOC/NOx/PM 是指标，不是某特定化学质量。一个残差不能确定两个未知。真实混合 Waste 保留唯一完整实测出口/处理方及独立非加和 originW 子账，不强行拆出口。 | `ilcd-allocation-2010` |
| b_utilities | all inventory rows | 本部件装配路线不假设现场电镀槽、聚合物合成、锅炉、蒸汽回路或燃烧。若真实存在则不得省略，须重审范围并逐具体材料/制剂/燃料/物种/返还新增真实来源和数量。实际外购热/载体及返还 Product 水须有质量/相态/T/P/焓和供方水能约定，一供方所有权，不双购 kg 载体和内含 MJ 热，不复制虚构蒸汽系统。 | `ilcd-allocation-2010` |
| b_pack | p_service | 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | `zhe-frame-riveting-2026`; `ilcd-allocation-2010` |
| b_native | all inventory rows | 保留全部正面身份限制：宽泛制造完成配件 Product 族下的一副完整直杆自动开钢伞架（无伞面/手柄）及质量/kg；中国用户侧电网平均低于1kV交流电及精确净热值 → 能量单位组 → MJ；处理后自来水 Product 质量/kg，不假定次级密度；仅铁/非合金圆柱形钢丝（不能替代合金钢丝或成形弹簧）；仅完成聚乙烯袋 CAS9002-88-4（非 PP/PVC/树脂/膜，宽泛分类单独披露）；产生点处理未指定的使用后润滑油 Waste。原生通用身份不证明供应方、确切牌号/表面/聚合物配方、数量、未声明地理或完整供方工艺覆盖。不能静默扩大或替换这些物理限制。 | `ilcd-allocation-2010`; `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026` |
| b_air_native | all inventory rows | 气体仅采用真实分子/中性元素及精确介质：N2 CAS7727-37-9、O2 CAS7782-44-7、Ar CAS7440-37-1 的空气资源输入与非长期未指定空气排放输出分别绑定；H2O CAS7732-18-5 仅气态普通水空气排放，环境水蒸气吸入身份仍未解决。全部质量/kg、实测状态，不使用总氮、离子、液态 Product、放射性/重水、冰或水排放替代。N2/O2/水别名存在其他状态词；氩别名含不一致41Ar项，逐卡披露，不据此推定放射活度或扩大采用范围。 | `ilcd-allocation-2010` |
| b_complete_1 | 全部真实适用交换 | 所选终端为一种完整配件：实际配置的直杆自动开钢伞架，含真实中棒、主骨/撑骨、滑套/上巢、弹簧/锁止件及关节五金、匹配伞尖套和配套散装尾珠。可工作的裸伞架独立交易；历史USITC描述将尾珠/伞尖套列在其伞架装配之外，当代Septrainbow供货明确包含这些物件。保留实际声明齐套清单，不将任一来源的包含清单强套全部订单。两者证明不同完整供货状态，不证明同SKU、工厂或时期。不隐含伞面、手柄或后续整伞作业。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_2 | 全部真实适用交换 | 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_3 | 全部真实适用交换 | 独立核对Q0_c = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0_c=0或未知保留全部原始负荷且无归一化结果。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_4 | 全部真实适用交换 | 完整湿原料/WIP/非WIP/已验收/待检/退回FG、包装、设备内流体及全部真实设备/工具库存，独立于参考事件和逐交换负荷。自有期初WIP完整真实既往前景历史只承接一次，仅转移有据的期末未分配向量。链接整份provider数据集及其中钢材/聚合物/涂层/公用工程/运输/设备历史，与相同历史的展开表示互斥，不能相加。外购已成形/回火/完成表面处理部件须完整覆盖真实生产者及供货状态。不虚构采购隐藏已知现场成形、涂饰、热处理、压缩机或其他真实生产；路线改变须明示范围复核及完整原子交换。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_5 | 全部真实适用交换 | 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_6 | 全部真实适用交换 | J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_7 | 全部真实适用交换 | 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_8 | 全部真实适用交换 | 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| b_complete_9 | 全部真实适用交换 | 产品及路线有定性支持，不是实测工厂LCI，也不迁移目录限值。实际等级/涂层/滑套材料/provider、尺寸、数量及批次QA仍需前景记录；缺少这些观测本身不抹去已建立的称量、计量、机械检验或分配方法。按测量对象保留真实校准、回收、检出/定量限及不确定性。气动空气须记录独立实测湿进/排气、状态及每个实际物种、冷凝液和润滑油出口。不假定恒定大气组成，不从COD推油/VOC物种，不强守恒反应物种，不以一个闭合残差求多个未知。真正未建立的必要物种/基质程序对受影响主张保持具体hold，未来SOP、有限检查通过或QA未执行均不能豁免。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_frame | 部件配合和完整伞架装配/放行 | required | 选定成形完成部件装配路线；实际后续返工绑定原批次 | manufacturing | 唯一首次放行净 kg；后续作业原 Q_c |
| p_service | 必要包装、设备保管及原队列实际服务 | required | 首次所需包装及H内真实后续事件，包含留库FG及零发运 | postrelease_service | 首次包装归新增Q_c；后续归原Q0_c及实际H |

除参考行外，各卡仅用 single_quotient 一次。负荷维度用合理归属和库存向量匹配后的 A，实物 gross 事件维度用完整转换 V。两者作为不同维度，事件同时支持二者时建立唯一所有权桥；完整实物流入/出不创造另一上游采购、负荷或处理。采集不预除，条件卡仅在确切实际物理事件发生时适用。未列实际类型须新增具体卡，不隐藏在零/other 中。

### 过程：完整伞架装配与首次放行 (`p_frame`)

#### 输入

##### 产品流

###### 已完成加工的钢主伞骨 (`steel_rib`)

实际直杆伞架图纸的一根完整槽形主伞骨。外购件已含的成形、冲孔、回火和表面处理由供应数据集承接一次；钢丝或钢带不能代替该完成件。

- 选定流：成形并完成表面处理的钢主伞骨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 已完成加工的钢撑骨 (`steel_stretcher`)

单独完成的钢撑骨连接主伞骨与滑套，保留实际几何、孔位和表面状态；它不是另一根主伞骨或完整伞架。

- 选定流：成形并完成表面处理的钢撑骨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 已完成加工的钢中棒 (`steel_shaft`)

完整加工的钢中棒保留实际截面和锁止接口。供货示例的六角金色钢中棒支持钢制零件身份，不证明钢牌号、镀层化学或通用尺寸；管材制造及中棒加工在本路线由上游承接。

- 选定流：完成表面处理的钢伞中棒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 匹配的伞骨尾珠 (`steel_tip`)

一只实际完成的金属伞骨尾珠。记录真实合金、表面层及匹配数量；金色不证明元素金。配套散装尾珠仅在受控供货清单纳入时属于同一完整伞架供货。

- 选定流：金属伞骨尾珠完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 顶端伞尖套 (`steel_ferrule`)

一只完成表面处理的钢伞尖套，仅与指定中棒/顶端总成计入一次；若已包含在外购总成中，使用核对后的非加和子账，不再采购一次。

- 选定流：完成表面处理的钢伞尖套
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 自动开伞弹簧 (`steel_spring`)

本自动开伞机构的实际弹簧完成件。声明合金、形状、表面层和外购装配内容；钢丝及床垫弹簧芯均不能代替该成形弹簧。

- 选定流：钢制开伞弹簧完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 中棒锁止簧片 (`steel_catch`)

与滑套啮合的一只实际锁止簧片；若已内含在中棒或弹簧模块，作为非加和内容记录。包含实际触发接口，但不假定供货包含手柄。

- 选定流：钢制伞中棒锁止簧片完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 模塑滑套 (`runner`)

实际机构的一只模塑滑动伞滑套完成件。原页写透明滑套而照片显示浅色件，两者均不证明聚合物、填料、密度或配方。须取得真实材料及供货证据；树脂颗粒不能代替完成的滑套。

- 选定流：模塑伞滑套完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 模塑上巢 (`top_notch`)

固定主伞骨的一只完成带槽上巢。独立结构资料允许尼龙或其他塑料，不能确定本供货件树脂；须声明实际材料、配合和内含件，不把其组分再加到整只外购件质量。

- 选定流：模塑伞上巢完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 单一钢铆钉 (`steel_rivet`)

一种指定钢制半空心关节铆钉。确定实际金属、钉头、尺寸和表面状态；记录每个安装、判废或替换铆钉。本 kg 清单须有与该单一铆钉兼容的质量参考身份；缺少独立换算基础的仅体积身份或多种紧固件汇总不能建立该身份。

- 选定流：钢制半空心关节铆钉完成件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 固定伞骨的钢丝 (`binding_wire`)

称量用于上巢固定伞骨的非合金钢丝。原生记录为工厂生产混合的圆柱形柔性金属丝，未固定直径或牌号；分类指向铁/非合金钢丝。不能代替合金钢丝、绳、完成伞骨或弹簧。核实实际牌号、直径、表面层及供应方；已内含于外购上巢总成的钢丝不另加。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_components
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 伞架生产用电 (`frame_electricity`)

仅用于实际中国用户侧低于1kV的电网平均交流电。原生参考为净热值及精确能量单位组/MJ；这是能量身份，不代表燃烧或燃料热值。计量实际 kWh 并仅乘3.6一次。核实电压、中国供电地理、时期及供应方损耗/组合边界。包含压缩机驱动、铆接、检验、启停、空转、清理和实际返工，不设默认用量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_energy
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 清理自来水 (`cleaning_water`)

仅在实际使用处理后的市政/饮用供水清理时纳入。原生 Product 为工厂生产混合的处理后自来水，不能代替自然取水或未指定工业水。使用参考质量/kg；次级体积因子0.001不构成独立密度测量，不予采用。称量实际水量，体积记录则用独立测得同状态密度；确定供应方处理、地理和时期。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_water
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 整份机械润滑制剂 (`machine_oil`)

仅在实际使用该整份外购润滑制剂时纳入。记录供货配方身份及含全部添加剂/载体的一次交付总质量；PAO/全合成记录不能仅因名称为润滑油而替代。实际使用其他制剂时新增其具体卡。外购部件上原有油已含于整件，另行添加的油仍是独立交换。

- 选定流：矿物油基机械润滑制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_aux
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 棉质清洁布 (`cotton_wipe`)

仅在实际消耗棉质布时纳入。声明纤维、复用池、干/使用状态质量和污染；实际其他擦拭物须另列卡。新采购仅一次，保留使用后库存及废布。

- 选定流：棉质清洁布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_aux
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 去毛刺磨轮 (`abrasive`)

仅在装配前孔口或边缘实际需要去毛刺且使用该磨料时纳入。整只供货工具含结合剂质量仅一次，记录磨耗和废弃；其他磨料另列原子卡。不得为已完成来料虚构切断/成形/热处理/电镀工序。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流：氧化铝磨轮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_aux
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

##### 废物流

##### 基本流

###### 环境吸入氮 (`nitrogen_inputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氮，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含总氮和液态词，仅采用 CAS7727-37-9 中性气态分子 N2 及明确空气类别，不能用于总氮或液态 Product。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 环境吸入氧 (`oxygen_inputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氧，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含离子、单线态和液氧词，仅采用明确空气类别下 CAS7782-44-7 普通中性气态 O2，不采用其他化学/相态。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 环境吸入氩 (`argon_inputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氩，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 原生同义词与 Ar/氩-40 并列含不一致的41Ar项，但基本名、CAS7440-37-1、质量参考和空气类别指向普通元素氩。明确披露该特定同义词瑕疵，仅用于实测普通大气 Ar，不能用于放射性同位素或液态 Product，也不推断活度。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 环境水蒸气吸入 (`vapour_inputs`)

仅在湿度或真实蒸发造成 H2O 气态跨大气边界时纳入。声明介质、湿度、T/P 和独立水平衡；不虚构反应水，不套用其他物质的纯水密度或外部蒸汽回路。实际气动冷凝液作为废物单列。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ilcd-allocation-2010`

#### 输出

##### 产品流

###### 完整伞架首次质量放行 (`first_release`)

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 Q 为首次新增放行的完整净伞架质量，仅一次，包括配套散装供货尾珠，排除包装。已放行期末成品已在 Q 内；发运、复验和修理不创造第二个 Q。 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。

- 选定流：伞、阳伞、手杖、座凳式手杖、鞭子、马鞭及类似品的零件、饰件和附件 `ece1101e-ca5c-4e59-a6f2-3fe75c761806`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`un-cpc3-2025`; `usitc-umbrella-parts-1970`; `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026`

##### 废物流

###### 独立钢边角废料 (`steel_scrap`)

实际修整/去毛刺形成独立钢边角料时纳入。这是声明场址的一项实际未处理钢机加工/成形 Waste 出口，不代表完成件或有色金属/塑料混合废物。采用全部实测质量及一个实际废物处理方，不设回收抵扣或废品率；实际出口若有不可分涂层/油，应明确状态并独立核对兼容性。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：钢制工序边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_waste
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 废弃完整伞架 (`rejected_frame`)

不可恢复判废/试验后整架实际混合 Waste 出口时纳入。保留整件实际组成和湿质量、原放行批次及真实处理。独立测得来源/材料子账非加和，不强造分流出口，不用 Product UUID 替代。失败、拒收或未经授权作业仍保留实际负荷和物流去向。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：废弃钢塑伞架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_waste
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 使用后机械润滑油 (`used_oil`)

石油基或合成润滑油使用并污染后实际产生时纳入。原生为产生点的 Waste，处理未指定，不是新油 Product，也不固定水/添加剂配方。记录全部实际废质量、污染、收集及一个真实处理方；整份废物内的水仅为组分子账。不自动假定再生、燃料利用或抵扣。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_waste
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ilcd-allocation-2010`

###### 含油棉废布 (`used_wipe`)

实际含吸附油/水废布作为一个整份废物称重，内含组分不加和。若实际并入唯一混合废物出口，则使用来源子账，不再设第二处理方/外部出口。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：含油棉质清洁废布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_waste
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 实际清理废水 (`cleaning_wastewater`)

实际水性清理出口时纳入，含水和污染物整份测量。它是送处理 Waste，不是处理后自来水 Product。水/油/金属子账与 COD 等指标分开，不用一个残差推定质量；仅实际有现场处理时另建真实物种/介质排放卡。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：含油清理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_water
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 气动冷凝液 (`air_condensate`)

实际从压缩机/储气罐排出 Waste 冷凝液时纳入，独立测量全部湿质量和污染物；不把内含水再作为另一外部水出口，不假定外部蒸汽返还。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：含油气动冷凝液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ilcd-allocation-2010`

##### 基本流

###### 排回空气氮 (`nitrogen_outputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氮，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含总氮和液态词，仅采用 CAS7727-37-9 中性气态分子 N2 及明确空气类别，不能用于总氮或液态 Product。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 排回空气氧 (`oxygen_outputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氧，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含离子、单线态和液氧词，仅采用明确空气类别下 CAS7782-44-7 普通中性气态 O2，不采用其他化学/相态。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 排回空气氩 (`argon_outputs`)

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氩，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 原生同义词与 Ar/氩-40 并列含不一致的41Ar项，但基本名、CAS7440-37-1、质量参考和空气类别指向普通元素氩。明确披露该特定同义词瑕疵，仅用于实测普通大气 Ar，不能用于放射性同位素或液态 Product，也不推断活度。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 排入空气的水蒸气 (`vapour_outputs`)

仅在湿度或真实蒸发造成 H2O 气态跨大气边界时纳入。声明介质、湿度、T/P 和独立水平衡；不虚构反应水，不套用其他物质的纯水密度或外部蒸汽回路。实际气动冷凝液作为废物单列。 原生别名含重水/氚水及冰/液态词。实际采用身份仅为空气排放类别下 CAS7732-18-5 普通水蒸气，不能用于同位素水、冰/液态水、淡水排放或蒸汽 Product；仅有质量属性不构成密度。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_air
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ilcd-allocation-2010`

### 过程：观察期放行后服务 (`p_service`)

#### 输入

##### 产品流

###### 退回的已放行伞架 (`fg_return`)

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 本卡是实际完整退回 Product 的全部 gross 接收，绑定原首次放行批次，不产生新制造采购或 Q；保留原负荷和实际新增服务/返工。实际拆散/不完整或判废退货须使用真实零件/Waste 状态，不能硬用完整伞架身份。

- 选定流：伞、阳伞、手杖、座凳式手杖、鞭子、马鞭及类似品的零件、饰件和附件 `ece1101e-ca5c-4e59-a6f2-3fe75c761806`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_fg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 观察期仓储与包装用电 (`service_electricity`)

仅用于实际中国用户侧低于1kV的电网平均交流电。原生参考为净热值及精确能量单位组/MJ；这是能量身份，不代表燃烧或燃料热值。计量实际 kWh 并仅乘3.6一次。核实电压、中国供电地理、时期及供应方损耗/组合边界。包含压缩机驱动、铆接、检验、启停、空转、清理和实际返工，不设默认用量。 仅将在 H 内实际发生的放行后仓储/搬运/包装服务归于原批次 Q_c，包括留库成品和零发运；不得把未知未来服务视为已发生。 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一最终商报告，采用原始记录得出的归属 A 及另关联完整实物 V；cp_service
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 接收可复用铆接模具 (`die_inputs`)

可复用钢模具实际跨场址边界时，记录序列身份及全部 gross 实物质量，不用分配后的服务 kg。供应方资产负荷与实际服务能力另账；内部复用不是新采购、共产品或抵扣。实际磨耗/废弃另列，不编寿命或产能。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流：钢制铆接模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_assets
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 采购空包装 聚乙烯袋 (`pe_purchase`)

仅在实际使用该一种包装物且该 purchase 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 外部退回接收 聚乙烯袋 (`pe_external_received`)

仅在实际使用该一种包装物且该 external_received 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 内部复用接收 聚乙烯袋 (`pe_internal_in`)

仅在实际使用该一种包装物且该 internal_in 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 采购空包装 瓦楞运输纸箱 (`carton_purchase`)

仅在实际使用该一种包装物且该 purchase 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 外部退回接收 瓦楞运输纸箱 (`carton_external_received`)

仅在实际使用该一种包装物且该 external_received 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 内部复用接收 瓦楞运输纸箱 (`carton_internal_in`)

仅在实际使用该一种包装物且该 internal_in 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 聚乙烯袋 (`pe_included`)

条件性真实供应商已含整包装收进I，保留完整湿实物质量及供应历史，不重复采购。仅限真实完成PE袋及CAS9002-88-4，不以树脂/薄膜/PP/PVC替代。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 聚乙烯袋 (`pe_burden`)

一份单独归属的整包装完整provider需求A；实物P/I/退回/发运/废物保持gross，其他provider已内含的相同包装不再购买。仅限真实完成PE袋及CAS9002-88-4，不以树脂/薄膜/PP/PVC替代。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 瓦楞运输纸箱 (`carton_included`)

条件性真实供应商已含整包装收进I，保留完整湿实物质量及供应历史，不重复采购。一只真实瓦楞运输箱，不是折叠覆膜纸盒，纸板/胶/印刷完整上游仅一次。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 瓦楞运输纸箱 (`carton_burden`)

一份单独归属的整包装完整provider需求A；实物P/I/退回/发运/废物保持gross，其他provider已内含的相同包装不再购买。一只真实瓦楞运输箱，不是折叠覆膜纸盒，纸板/胶/印刷完整上游仅一次。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 钢铆接模具 (`die_burden`)

每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 钢铆接模具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 气动伞架铆接机 (`rivet_press_in`)

仅在此完整实际配置设备真实in事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 气动伞架铆接机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 气动伞架铆接机 (`rivet_press_burden`)

仅在此完整实际配置设备真实burden事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 气动伞架铆接机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 电动气动空气压缩机 (`compressor_in`)

仅在此完整实际配置设备真实in事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 电动气动空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 电动气动空气压缩机 (`compressor_burden`)

仅在此完整实际配置设备真实burden事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 电动气动空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 伞架开合检验夹具 (`motion_fixture_in`)

仅在此完整实际配置设备真实in事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 伞架开合检验夹具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 伞架开合检验夹具 (`motion_fixture_burden`)

仅在此完整实际配置设备真实burden事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 伞架开合检验夹具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整伞架 gross 发运 (`fg_dispatch`)

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 相对原 Q_c 记录每次实际完整伞架 gross 发运，包括重交付；这是保管/物料腿，不是另一参考产量，不自动净发运；经济份额不能缩减此物理出口。

- 选定流：伞、阳伞、手杖、座凳式手杖、鞭子、马鞭及类似品的零件、饰件和附件 `ece1101e-ca5c-4e59-a6f2-3fe75c761806`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_fg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 未使用钢伞骨退回 (`returned_component`)

实际向外退回未使用主伞骨时，以全部 gross 质量记录状态和接收方；匹配采购/负荷转移另账且仅一次，不自动负负荷或共产品。

- 选定流：成形并完成表面处理的钢主伞骨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_component_return
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_component_return`
- 来源：`sep-complete-steel-frame`; `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 返还可复用铆接模具 (`die_outputs`)

可复用钢模具实际跨场址边界时，记录序列身份及全部 gross 实物质量，不用分配后的服务 kg。供应方资产负荷与实际服务能力另账；内部复用不是新采购、共产品或抵扣。实际磨耗/废弃另列，不编寿命或产能。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流：钢制铆接模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_assets
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 内部复用交接 聚乙烯袋 (`pe_internal_out`)

仅在实际使用该一种包装物且该 internal_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 随 gross 发运外出 聚乙烯袋 (`pe_shipment`)

仅在实际使用该一种包装物且该 shipment 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 向外空包装返还 聚乙烯袋 (`pe_external_out`)

仅在实际使用该一种包装物且该 external_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 内部复用交接 瓦楞运输纸箱 (`carton_internal_out`)

仅在实际使用该一种包装物且该 internal_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 随 gross 发运外出 瓦楞运输纸箱 (`carton_shipment`)

仅在实际使用该一种包装物且该 shipment 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 向外空包装返还 瓦楞运输纸箱 (`carton_external_out`)

仅在实际使用该一种包装物且该 external_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 气动伞架铆接机 (`rivet_press_out`)

仅在此完整实际配置设备真实out事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 气动伞架铆接机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 电动气动空气压缩机 (`compressor_out`)

仅在此完整实际配置设备真实out事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 电动气动空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 伞架开合检验夹具 (`motion_fixture_out`)

仅在此完整实际配置设备真实out事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

- 选定流: 伞架开合检验夹具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

##### 废物流

###### 报废钢模具 (`spent_die`)

实际报废模具 Waste 保留全部质量及一个处理方；关联原资产谱系，不重复采购已含钢。不把留厂磨损工具当成外部出口。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：报废钢制铆接模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_assets
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`ilcd-allocation-2010`

###### 实际废包装 聚乙烯袋 (`pe_waste`)

仅在实际使用该一种包装物且该 waste 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：废聚乙烯袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 实际废包装 瓦楞运输纸箱 (`carton_waste`)

仅在实际使用该一种包装物且该 waste 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流：废瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一最终商报告，采用实际转换后的完整 gross V；cp_pack
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 报废气动伞架铆接机 (`rivet_press_waste`)

仅在此完整实际配置设备真实waste事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流: 报废气动伞架铆接机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 报废电动气动空气压缩机 (`compressor_waste`)

仅在此完整实际配置设备真实waste事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流: 报废电动气动空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

###### 报废伞架开合检验夹具 (`motion_fixture_waste`)

仅在此完整实际配置设备真实waste事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

- 选定流: 报废伞架开合检验夹具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一第8节商规则；完整实物V与单独服务A互不重复；cp_assets
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per reference flow
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `zhe-frame-riveting-2026`; `ilcd-allocation-2010`

##### 基本流

## 7. 分配与共产品处理

以下层级仅适用于需要分配的归因建模场景。工业伞架文献不建立 LCA 分配规则。逐交换应用判据，不能为整厂任意选择统一物理/经济键。 `ilcd-allocation-2010`

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all inventory rows | 先分离专属过程及直接计量的专属输入/出口；能物理细分则细分，能识别组件/服务则合理虚拟细分，并记录仍共有的交换。实际内含于一种伞架配置的材料直接归属，不与无关产品平均。 | `ilcd-allocation-2010` |
| a_causal | all inventory rows | 对每个剩余交换，根据真实过程响应识别与共功能的决定性物理因果。适用时检验真实机时/服务时长及限制性几何/质量/负载机制；相关性、方便的质量份额或共用表计不构成因果证明。不同交换可需不同经论证键。 | `ilcd-allocation-2010` |
| a_residual | all inventory rows | 只有确实不可分且未证明决定性物理因果的剩余项，才可使用同一实际共有过程门、流入/出状态下经论证市场价值键；采用同期数量、质量/表面/包装状态和价格，去除后续运输/调理/服务价值。披露推导价格证据、不确定性、敏感性及因果证据不足。不设固定比例、不任意选择、不套零售价、不自动回收抵扣。 | `ilcd-allocation-2010` |
| a_conserve | all inventory rows | 全部归属负荷合计等于原共有负荷，不丢失败、不重复向量；实物 gross 腿不缩减。废物出售本身不建立共产品、替代抵扣或再生分配；真实下游处理/回收接口须另有完整合理范围和唯一所有权。 | `ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

aggregation 仅声明最终报告基准。采集未归一化原始量，由第8节 single_quotient 仅一次生成最终每参考流报告。协议与卡引用同一次报告，不再相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | p_frame | component | foreground_record | 制品/供货方 ID；实际 BOM；牌号/材料；表面状态；加工状态；gross 接收；退还；期初/末原料/WIP/非WIP；继承交换向量；关节及内部交接 ID | 逐具体整份供货件称量并核对交付/库存/路线记录；内含组分为非加和子账；按原批次记录真实配合修整/返工替换领用及去向。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_release | p_frame | first_release | foreground_record | 批次 c；型号/配置；齐套 BOM；匹配尾珠/伞尖套数量；实际首次验收 ID/时间；件数；毛/皮/净 kg；原料/WIP/FG 状态；试验/判废；既往放行标记 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 经校准秤称量同配置完整伞架和配套散装供货件，独立测量包装皮重，验收件与唯一首次放行谱系核对；复验/退货/返工保留原批次，不新增 Q。 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。 独立核对Q0_c = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0_c=0或未知保留全部原始负荷且无归一化结果。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_energy | p_frame | electricity | foreground_record | 表计初/末值或实际功率速率序列；电压；供方/地理；时期；压缩机/铆接/试验/空转/清理/返工状态；共有负载证据；未用服务向量 | 保留未归一化表计记录，只有速率采实际时间；分开制造与原批次后续作业，逐交换专属/因果/剩余归属；不设默认能耗、不排除零产出。 | kWh; MJ | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_aux | p_frame | whole preparation and wipe | foreground_record | 具体供货制剂/制品；整份质量；含量/载体子账；期初/末未用料；领用/回收/损失；污染；实际阶段/批次 | 逐指定整份制剂/布称量，保留 SDS/组成证据，实物库存独立于负荷向量；实际分别采购组分须另卡，不编配方。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_water | p_frame | water and aqueous waste | foreground_record | 具体水供方；质量或独立测得密度/状态；原水/用后/留存/蒸发水；废水整份质量/组成；介质；相关元素；另列试验指标 | 测量各真实水腿和完整湿库存，独立采样污染物；只在实际存在时区分游离/相态/结构/反应水，不用一个闭合残差推两个未知物种，不用 COD 当油质量。 | kg; actual state units | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_air | p_frame | individual atmospheric molecule | foreground_record | 分别 N2/O2/Ar/H2O；真实吸排气；相态/介质；T/P/湿度；积分体积或真实速率与时长；独立密度；留存/冷凝水；携油 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 使用经校准气体/冷凝液测量及真实物种/状态，积分量不再乘时间；每个观察物种/去向保持原子，确认新增物种须另列，未知保留不确定性。 产品及路线有定性支持，不是实测工厂LCI，也不迁移目录限值。实际等级/涂层/滑套材料/provider、尺寸、数量及批次QA仍需前景记录；缺少这些观测本身不抹去已建立的称量、计量、机械检验或分配方法。按测量对象保留真实校准、回收、检出/定量限及不确定性。气动空气须记录独立实测湿进/排气、状态及每个实际物种、冷凝液和润滑油出口。不假定恒定大气组成，不从COD推油/VOC物种，不强守恒反应物种，不以一个闭合残差求多个未知。真正未建立的必要物种/基质程序对受影响主张保持具体hold，未来SOP、有限检查通过或QA未执行均不能豁免。 | kg; actual gas state units | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_waste | p_frame | individual actual waste outlet | foreground_record | 实际整份废物身份；gross 湿质量；分类/危险性；原批次；实测非加和 originW；库存；接收/处理方与路线；失败/拒收事件 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 处理前称量各真实出口，核对留存废物、真实混合出口和独立来源子账；同出口一处理方，不用 Product 替代、不重复处理、不自动抵扣。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_fg | p_service | complete-frame custody | foreground_record | 原批次 c 和 Q_c；H；完整期初 FG；实际新增首次放行接收；各 gross 发运/重交付/退回；期末 FG；实际修理状态；湿质量；内含散件；原/增量向量 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 按序列/批次匹配制造到 FG 交接及客户退回，保留完整实物质量和原负荷谱系；期末已放行 FG 不减少 Q。自然吸脱湿只记水账，不虚构修理或新产量。 独立核对Q0_c = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0_c=0或未知保留全部原始负荷且无归一化结果。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_service | p_service | observed postrelease service | foreground_record | 原 Q_c；观察 H 起止；实际储位/时长；搬运/包装表计；原批次；实际损失/返工；未用料/资产向量；真实能力/因果限制 | 保留 H 内全部已执行服务，包括留库 FG、失败及零发运；未来未发生服务保持未知。替换材料和废物关联各自原子卡及原批次，不产生第二 Q。 | kWh; MJ; actual service units | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_pack | p_service | one packaging pool per material | foreground_record | 制品/材料 ID；完整期初空/附着 WIP/附着 FG/复用；新购；外部退回接收；配对内部复用；随 gross 发运；向外返还；实际废物；完整期末状态；实物 V 与独立负荷所有权 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 逐包装称量并完整核对事件/库存，PE 袋与纸箱分池；gross 实物腿不乘负荷份额，整件材料层仅含一次；新增实际包装另列原子池/卡。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_assets | p_service | specific tool or asset | foreground_record | 模具/磨轮序列和材料；完整接收/返还/报废质量；期初/末实物库存；继承负荷向量；实际使用能力/时间和损耗；服务分配证据；供应范围 原始Q0/全湿原队列去向、真实J/H2O双向、OTHER同侧X、整Qt/实际provider与非重叠A、物理台群及服务历史。 | 实际完整资产实物与服务负荷分账；复用是内部事件，采购一次，实际磨耗/废物保留；不编工具寿命或能力，实际新增资产材料另列卡。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 | kg; actual service units | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |
| cp_component_return | p_service | returned unused formed rib | foreground_record | 制品/供货方 ID；实际 BOM；牌号/材料；表面状态；加工状态；gross 接收；退还；期初/末原料/WIP/非WIP；继承交换向量；关节及内部交接 ID | 逐具体整份供货件称量并核对交付/库存/路线记录；内含组分为非加和子账；按原批次记录真实配合修整/返工替换领用及去向。 | kg | 每个实际事件或经校准计量区间 | 完整制造时期及有界观察 H，含失败和零产出 | 实际设施及明确供应/外包阶段，按批次匹配 | 每参考流 | 校准；原发票/日志；关联整架 BOM；库存/事件核对；不确定性及缺失数据披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 任何归属前转换原始广延单位及真实速率；kWh ×3.6 仅一次转 MJ，公吨 ×1000 转 kg。件数/体积换算须独立实测同配置净质量或同物质状态密度；整份制剂/部件/水桥互斥。 | cp_components; cp_release; cp_energy; cp_aux; cp_water; cp_air; cp_fg; cp_pack; cp_assets | 转换后原始广延量 | `ilcd-allocation-2010` |
| match_manufacture | all inventory rows | 各负荷维度 e 在 convert_raw 及合理专属/因果/剩余归属后，A_e = B_open,e + U_e - B_close,e - T_other,e。逐原料/WIP/非WIP保留继承向量。B_close 不含已放行 FG，保留失败/试验/清理/返工/废物/处理及真实零产出。T_other 仅为已证一次其他批次/功能交接，不是不明扣减；已作库存修正的量不再修正。 | convert_raw; cp_components; cp_release; cp_energy; cp_aux; cp_assets; cp_waste | 绑定放行批次的制造 A_e | `ilcd-allocation-2010` |
| match_service | all inventory rows | 各原批次 c 和实际 H，服务 A_e,c = 期初未用/未分配服务向量 + 实际增量服务 - 期末未用/未分配向量 - 已证独立交接。保留原 Q_c、既往负荷谱系及全部已执行服务，即使 FG 留库或零发运；不因期末 FG 扣已执行服务，不假定未来作业或重复 Q。 | convert_raw; cp_service; cp_fg; cp_components; cp_assets; cp_pack | 观察期服务 A_e,c | `ilcd-allocation-2010` |
| select_gross | all inventory rows | 每项实物事件维度使用本腿全部实际转换 V_e，涵盖部件/FG 退回及发运、各包装事件、资产、流体、Waste 和分子物种。物理分子不能用 A、库存差、消耗量、经济/服务份额或负荷向量。gross 事件不创造第二采购/处理/抵扣，真实负荷另桥到唯一所有者；X 只去重同侧 OTHER 已表示流，不冲库存/对侧/卡存在。 | convert_raw; cp_components; cp_fg; cp_pack; cp_assets; cp_waste; cp_water; cp_air | 完整未缩减实物 V_e | `ilcd-allocation-2010` |
| single_quotient | all inventory rows | 唯一归一化为报告数量 = 所选分子 / Q_c 一次。制造负荷取 match_manufacture A_e，观察期服务负荷取 match_service A_e,c，实物事件取 select_gross 全部 V_e；保留不同维度/唯一所有权。Q_c 为原批次完整净伞架首次新增放行 kg；first_release 为1千克。所有卡及聚合引用同一次结果，不再除。Q_c=0 保留所有实际负荷及谱系以供后续合理归属，不生成单位结果。 | match_manufacture; match_service; select_gross; cp_release | 每参考流一次报告，实物/负荷维度分开 | `ilcd-allocation-2010` |
| physical_closure | all inventory rows | 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 制造、FG服务及合并完整湿实物门另独立核对；内部首次放行及复用交接配对抵消，参考事件不是新增外部出口。 | cp_components; cp_release; cp_fg; cp_pack; cp_assets; cp_air; cp_water; cp_waste | 制造/FG服务/合并实物闭合报告 | `ilcd-allocation-2010` |
| original_cohort_partition | reference product | 独立核对Q0_c = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0_c=0或未知保留全部原始负荷且无归一化结果。 | cp_release; cp_fg; cp_components; cp_waste | original Q0 and independently reconciled wet physical states | `ilcd-allocation-2010` |
| whole_receiver_attribution | all actual waste rows | 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。 | cp_waste; cp_assets; cp_pack; cp_fg; cp_service | full physical Qt and separate nonoverlap compatible A_e,c | `ilcd-allocation-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_native | all inventory rows | 核对完整原生名/同义词/备注/CAS、牌号、路线、形态/相态、地理、介质、类型和所有属性。精确参考属性版本绑定精确单位组版本及实际参考单位，不用 latest 替代或次级密度推断。每卡及规范上下文保留完整采用限制；硬冲突阻止该身份，分类瑕疵单独披露。 | 完整原生及供货证据 |
| dq_sources | all inventory rows | 原取得及本次复用/提取分别溯源；片段按产品/过程/路线/状态/need 请求读取。read 成功或 fragment_verified 本身不证明适用性/数字复用。保留相邻反例和全部失败，不编造历史。 | 原始来源及范围判断 |
| dq_foreground | all inventory rows | 产品及路线有定性支持，不是实测工厂LCI，也不迁移目录限值。实际等级/涂层/滑套材料/provider、尺寸、数量及批次QA仍需前景记录；缺少这些观测本身不抹去已建立的称量、计量、机械检验或分配方法。按测量对象保留真实校准、回收、检出/定量限及不确定性。气动空气须记录独立实测湿进/排气、状态及每个实际物种、冷凝液和润滑油出口。不假定恒定大气组成，不从COD推油/VOC物种，不强守恒反应物种，不以一个闭合残差求多个未知。真正未建立的必要物种/基质程序对受影响主张保持具体hold，未来SOP、有限检查通过或QA未执行均不能豁免。 | 完整 BOM/事件/库存和不确定性审计 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | reference product | 确认唯一首次放行的完整配置伞架、正确供货尾珠/伞尖套和真实机构。整伞、原料、单根伞骨或家具/夹具架不能建立该终端。保留全部失败/待定/拒收结果与原 Q_c 历史。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| v_native | all inventory rows | 在消费上下文核对每项完整采用身份/属性/单位限制及全部必需限定信息。缺失辅流身份保持具体并追踪，不用集合标签或 Product 代 Waste；新增实际交换逐原子命名并独立取证。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| v_accounting | all inventory rows | 核对分开的完整湿实物门、相关元素/物种闭合、继承交换向量、全部库存/包装/资产/FG 池、失败及 H 内原批次真实服务。不允许一个残差两个未知、重复水/部件、缩减 gross 流、双 Q/FG 输出或假定未经授权/失败作业后已恢复。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| v_normalization | all inventory rows | 原始采集不归一化，转换/归属在 single_quotient 前且只除一次；核对所有卡/计算输入输出/采集聚合均为原净 kg 基准。Q_c=0 保留负荷且无单位结果；不支持的真实关系待审，不能视为计算通过。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |
| v_quality | all inventory rows | 保留完整原件/来源上下文及独立适用性/不确定性判断；制造商示例不规定数字配方/性能。未知实际输入/数量/状态及真实核心证据缺口阻止完整性主张；技术校验不建立科学审查或翻译审批。 | `ilcd-allocation-2010`; `zhe-frame-riveting-2026` |

### 完整适用、原生与记账背景

本 PCR 针对伞面和手柄装配前的一副独立完整直杆自动开钢伞架，包含实际钢中棒、主伞骨与撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节五金、匹配钢伞尖套及实际供货金属尾珠。声明为齐套供货的匹配散装尾珠属于同一整架，不构成另一参考输出。不把单根伞骨、伞柄和伞架合并为一个终端。选定前景路线接收已成形并完成表面处理的零件，进行真实来料检验/分选及必要配合修整/去毛刺、主伞骨与撑骨和滑套/上巢铆接、钢丝固定、弹簧/锁止件装配、开合/锁止检验及实际返工，随后完成必要供货包装，在工厂可供货时唯一一次完整伞架首次质量放行。外购部件已含的成形/回火/表面处理由其供应数据集承接一次。这是完整配件的实质装配制造。 `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026`

Septrainbow 正面供货资料列出完整钢伞架、钢中棒、滑套、尾珠、顶端/伞尖套及自动开状态；图片显示裸装配伞架与单独完成尾珠，浅色滑套照片和透明滑套文字均不确定聚合物规格。Acme 独立描述槽形钢伞骨、上巢/钢丝、滑套及后续手柄装配。ZheBrella 描述钢关节真实铆接、孔位/表面状态与装伞面前开合检查，也讨论不兼容的玻纤/混合架。1970 年官方调查描述独立交易的装配伞架及其与完整伞的区别；历史价格、尺寸和生产率不是当代清单数据。这是跨来源透明的定性技术综合，不是同一当代 SKU、工厂、订单、配方或性能认证。金色或 gilt coated 字样不能证明本伞架含元素金、锌、镍、镀层厚度或化学组成。 `usitc-umbrella-parts-1970`; `sep-complete-steel-frame`; `acme-frame-structure`; `zhe-frame-riveting-2026`

原 CPC 叶还包括其他伞类以及手杖/鞭类配件；本较窄伞架方法不声称覆盖全部类别。排除以钢带/钢丝/管材为终端、单根伞骨或手柄、木工和注塑伞柄路线、玻纤/碳纤维/铝/混合主架、家具架/夹具架、购买完整伞架后重包装、现场零件涂层/热处理、伞面裁剪/缝制/印刷、父件整伞装配、使用及寿命终结。实际新增工序或配置须在同一 PCR 身份内进行来源和逐交换适用性审查。不规定尺寸、件重、密度、合金、配方、损耗、良率、能耗、温度、时间、寿命、强度、防腐、开合次数或认证阈值。 `un-cpc3-2025`

每项必需限定信息都须保留于数据集/参考流备注或等效完整上下文。宽泛完成配件族 UUID 仅用于此处定义的一种完整伞架，不代表所有列出的族成员。

除参考行外，各卡仅用 single_quotient 一次。负荷维度用合理归属和库存向量匹配后的 A，实物 gross 事件维度用完整转换 V。两者作为不同维度，事件同时支持二者时建立唯一所有权桥；完整实物流入/出不创造另一上游采购、负荷或处理。采集不预除，条件卡仅在确切实际物理事件发生时适用。未列实际类型须新增具体卡，不隐藏在零/other 中。

实际直杆伞架图纸的一根完整槽形主伞骨。外购件已含的成形、冲孔、回火和表面处理由供应数据集承接一次；钢丝或钢带不能代替该完成件。

单独完成的钢撑骨连接主伞骨与滑套，保留实际几何、孔位和表面状态；它不是另一根主伞骨或完整伞架。

完整加工的钢中棒保留实际截面和锁止接口。供货示例的六角金色钢中棒支持钢制零件身份，不证明钢牌号、镀层化学或通用尺寸；管材制造及中棒加工在本路线由上游承接。

一只实际完成的金属伞骨尾珠。记录真实合金、表面层及匹配数量；金色不证明元素金。配套散装尾珠仅在受控供货清单纳入时属于同一完整伞架供货。

一只完成表面处理的钢伞尖套，仅与指定中棒/顶端总成计入一次；若已包含在外购总成中，使用核对后的非加和子账，不再采购一次。

本自动开伞机构的实际弹簧完成件。声明合金、形状、表面层和外购装配内容；钢丝及床垫弹簧芯均不能代替该成形弹簧。

与滑套啮合的一只实际锁止簧片；若已内含在中棒或弹簧模块，作为非加和内容记录。包含实际触发接口，但不假定供货包含手柄。

实际机构的一只模塑滑动伞滑套完成件。原页写透明滑套而照片显示浅色件，两者均不证明聚合物、填料、密度或配方。须取得真实材料及供货证据；树脂颗粒不能代替完成的滑套。

固定主伞骨的一只完成带槽上巢。独立结构资料允许尼龙或其他塑料，不能确定本供货件树脂；须声明实际材料、配合和内含件，不把其组分再加到整只外购件质量。

一种指定钢制半空心关节铆钉。确定实际金属、钉头、尺寸和表面状态；记录每个安装、判废或替换铆钉。本 kg 清单须有与该单一铆钉兼容的质量参考身份；缺少独立换算基础的仅体积身份或多种紧固件汇总不能建立该身份。

称量用于上巢固定伞骨的非合金钢丝。原生记录为工厂生产混合的圆柱形柔性金属丝，未固定直径或牌号；分类指向铁/非合金钢丝。不能代替合金钢丝、绳、完成伞骨或弹簧。核实实际牌号、直径、表面层及供应方；已内含于外购上巢总成的钢丝不另加。

仅用于实际中国用户侧低于1kV的电网平均交流电。原生参考为净热值及精确能量单位组/MJ；这是能量身份，不代表燃烧或燃料热值。计量实际 kWh 并仅乘3.6一次。核实电压、中国供电地理、时期及供应方损耗/组合边界。包含压缩机驱动、铆接、检验、启停、空转、清理和实际返工，不设默认用量。

仅在实际使用处理后的市政/饮用供水清理时纳入。原生 Product 为工厂生产混合的处理后自来水，不能代替自然取水或未指定工业水。使用参考质量/kg；次级体积因子0.001不构成独立密度测量，不予采用。称量实际水量，体积记录则用独立测得同状态密度；确定供应方处理、地理和时期。

仅在实际使用该整份外购润滑制剂时纳入。记录供货配方身份及含全部添加剂/载体的一次交付总质量；PAO/全合成记录不能仅因名称为润滑油而替代。实际使用其他制剂时新增其具体卡。外购部件上原有油已含于整件，另行添加的油仍是独立交换。

仅在实际消耗棉质布时纳入。声明纤维、复用池、干/使用状态质量和污染；实际其他擦拭物须另列卡。新采购仅一次，保留使用后库存及废布。

仅在装配前孔口或边缘实际需要去毛刺且使用该磨料时纳入。整只供货工具含结合剂质量仅一次，记录磨耗和废弃；其他磨料另列原子卡。不得为已完成来料虚构切断/成形/热处理/电镀工序。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氮，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含总氮和液态词，仅采用 CAS7727-37-9 中性气态分子 N2 及明确空气类别，不能用于总氮或液态 Product。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氧，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含离子、单线态和液氧词，仅采用明确空气类别下 CAS7782-44-7 普通中性气态 O2，不采用其他化学/相态。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氩，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 原生同义词与 Ar/氩-40 并列含不一致的41Ar项，但基本名、CAS7440-37-1、质量参考和空气类别指向普通元素氩。明确披露该特定同义词瑕疵，仅用于实测普通大气 Ar，不能用于放射性同位素或液态 Product，也不推断活度。 原生介质/方向为空气资源 / 空气可再生元素资源，精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在湿度或真实蒸发造成 H2O 气态跨大气边界时纳入。声明介质、湿度、T/P 和独立水平衡；不虚构反应水，不套用其他物质的纯水密度或外部蒸汽回路。实际气动冷凝液作为废物单列。

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 Q 为首次新增放行的完整净伞架质量，仅一次，包括配套散装供货尾珠，排除包装。已放行期末成品已在 Q 内；发运、复验和修理不创造第二个 Q。 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。

实际修整/去毛刺形成独立钢边角料时纳入。这是声明场址的一项实际未处理钢机加工/成形 Waste 出口，不代表完成件或有色金属/塑料混合废物。采用全部实测质量及一个实际废物处理方，不设回收抵扣或废品率；实际出口若有不可分涂层/油，应明确状态并独立核对兼容性。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

不可恢复判废/试验后整架实际混合 Waste 出口时纳入。保留整件实际组成和湿质量、原放行批次及真实处理。独立测得来源/材料子账非加和，不强造分流出口，不用 Product UUID 替代。失败、拒收或未经授权作业仍保留实际负荷和物流去向。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

石油基或合成润滑油使用并污染后实际产生时纳入。原生为产生点的 Waste，处理未指定，不是新油 Product，也不固定水/添加剂配方。记录全部实际废质量、污染、收集及一个真实处理方；整份废物内的水仅为组分子账。不自动假定再生、燃料利用或抵扣。

实际含吸附油/水废布作为一个整份废物称重，内含组分不加和。若实际并入唯一混合废物出口，则使用来源子账，不再设第二处理方/外部出口。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

实际水性清理出口时纳入，含水和污染物整份测量。它是送处理 Waste，不是处理后自来水 Product。水/油/金属子账与 COD 等指标分开，不用一个残差推定质量；仅实际有现场处理时另建真实物种/介质排放卡。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

实际从压缩机/储气罐排出 Waste 冷凝液时纳入，独立测量全部湿质量和污染物；不把内含水再作为另一外部水出口，不假定外部蒸汽返还。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氮，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含总氮和液态词，仅采用 CAS7727-37-9 中性气态分子 N2 及明确空气类别，不能用于总氮或液态 Product。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氧，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 同义词含离子、单线态和液氧词，仅采用明确空气类别下 CAS7782-44-7 普通中性气态 O2，不采用其他化学/相态。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在现场气动空气制备/使用确有大气边界交换时，记录实际分子氩，不是外购瓶装气。测量组分、实际湿气量和状态，区分干湿基及进出同一物种。保留全部 gross 流，不冲抵对侧，不用一个残差拟合多种物种，不把空气视为纯氮；压缩机电力仅在 frame_electricity 采购一次。 原生同义词与 Ar/氩-40 并列含不一致的41Ar项，但基本名、CAS7440-37-1、质量参考和空气类别指向普通元素氩。明确披露该特定同义词瑕疵，仅用于实测普通大气 Ar，不能用于放射性同位素或液态 Product，也不推断活度。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

仅在湿度或真实蒸发造成 H2O 气态跨大气边界时纳入。声明介质、湿度、T/P 和独立水平衡；不虚构反应水，不套用其他物质的纯水密度或外部蒸汽回路。实际气动冷凝液作为废物单列。 原生别名含重水/氚水及冰/液态词。实际采用身份仅为空气排放类别下 CAS7732-18-5 普通水蒸气，不能用于同位素水、冰/液态水、淡水排放或蒸汽 Product；仅有质量属性不构成密度。 原生介质/方向为空气排放 / 未指定（非长期），精确支持链质量/kg。吸入和排出保持不同完整 gross 腿，记录实际相态/T/P/湿度，不作净冲抵。

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 本卡是实际完整退回 Product 的全部 gross 接收，绑定原首次放行批次，不产生新制造采购或 Q；保留原负荷和实际新增服务/返工。实际拆散/不完整或判废退货须使用真实零件/Waste 状态，不能硬用完整伞架身份。

仅用于实际中国用户侧低于1kV的电网平均交流电。原生参考为净热值及精确能量单位组/MJ；这是能量身份，不代表燃烧或燃料热值。计量实际 kWh 并仅乘3.6一次。核实电压、中国供电地理、时期及供应方损耗/组合边界。包含压缩机驱动、铆接、检验、启停、空转、清理和实际返工，不设默认用量。 仅将在 H 内实际发生的放行后仓储/搬运/包装服务归于原批次 Q_c，包括留库成品和零发运；不得把未知未来服务视为已发生。 首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。

可复用钢模具实际跨场址边界时，记录序列身份及全部 gross 实物质量，不用分配后的服务 kg。供应方资产负荷与实际服务能力另账；内部复用不是新采购、共产品或抵扣。实际磨耗/废弃另列，不编寿命或产能。 每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

仅在实际使用该一种包装物且该 purchase 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 external_received 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 internal_in 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 purchase 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 external_received 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 internal_in 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

条件性真实供应商已含整包装收进I，保留完整湿实物质量及供应历史，不重复采购。仅限真实完成PE袋及CAS9002-88-4，不以树脂/薄膜/PP/PVC替代。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

一份单独归属的整包装完整provider需求A；实物P/I/退回/发运/废物保持gross，其他provider已内含的相同包装不再购买。仅限真实完成PE袋及CAS9002-88-4，不以树脂/薄膜/PP/PVC替代。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

条件性真实供应商已含整包装收进I，保留完整湿实物质量及供应历史，不重复采购。一只真实瓦楞运输箱，不是折叠覆膜纸盒，纸板/胶/印刷完整上游仅一次。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

一份单独归属的整包装完整provider需求A；实物P/I/退回/发运/废物保持gross，其他provider已内含的相同包装不再购买。一只真实瓦楞运输箱，不是折叠覆膜纸盒，纸板/胶/印刷完整上游仅一次。每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

仅在此完整实际配置设备真实in事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

仅在此完整实际配置设备真实burden事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

一副独立完整的直杆自动开钢伞架：完成钢中棒、全部实际主伞骨及撑骨、模塑上巢与滑套、开伞弹簧/锁止件和关节，以及匹配钢伞尖套与实际供货金属尾珠，不含伞面或手柄。原生制造完成 Product 族较宽，本卡只选择这一种完整伞架物理交换。其工厂生产混合身份不固定合金、表面层化学、尺寸、骨数、国家、寿命或性能。须使用实际齐套供货 BOM 与净质量/kg；不能用中间料、单根伞骨、家具架或整伞替代。每次消费都应携带供应方、几何、表面层和机构限制。 相对原 Q_c 记录每次实际完整伞架 gross 发运，包括重交付；这是保管/物料腿，不是另一参考产量，不自动净发运；经济份额不能缩减此物理出口。

实际向外退回未使用主伞骨时，以全部 gross 质量记录状态和接收方；匹配采购/负荷转移另账且仅一次，不自动负负荷或共产品。

仅在实际使用该一种包装物且该 internal_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 shipment 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 external_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 internal_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 shipment 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在实际使用该一种包装物且该 external_out 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅在此完整实际配置设备真实out事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。

实际报废模具 Waste 保留全部质量及一个处理方；关联原资产谱系，不重复采购已含钢。不把留厂磨损工具当成外部出口。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

仅在实际使用该一种包装物且该 waste 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 原生 Product 为完成聚乙烯袋（CAS9002-88-4），工厂生产混合、质量/kg；不能代 PP/PVC、散树脂或普通薄膜。核对实际聚合物、制品形态和供应方；Waste 不使用 Product UUID。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

仅在实际使用该一种包装物且该 waste 事件真实发生时纳入。全部整湿O/P/I/ERin/S/EOout/W及真实J/H2O腿遵从下述完整字面等式，不能采用省略真实增量的简式。内部交接配对抵消，不是采购。每腿采用完整实测物理 V，不用 A 负荷份额、库存消耗替代或计入净 Q，也不自动共产品/抵扣。整只外购包装已含的各材料层/胶仅一次。 仅一只实际瓦楞运输纸箱；具有不同实物形态或复用/耐用特性的层压折叠纸盒不能代替该制品。确定真实纸板/楞型/印刷/胶及供货方，不设纤维配方。 每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

仅在此完整实际配置设备真实waste事件发生时适用，不默认设备重量或设备内流体配方。每台实际铆接机、气动压缩机、开合检验夹具、复用模具及消耗磨料，各有真实完整配置台群/库存谱系、完整收进/退还/退役实物质量、设备内流体和真实磨损/修理交换。整设备provider与展开制造/维护互斥。实际服务历史及兼容provider数量独立于实物V。Mass/kg设备产品provider可用完整配置实测M及provider真实覆盖/历史支持的服务份额归属，不猜重量、寿命、能力，也不把观察期H当成完整寿命。小时或其他单位服务provider保留原单位，通过真实明示桥换算，不能直接替成kg。实际分母缺失时A保持未解，实物库存、已执行服务和失败保留。 每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

aggregation 仅声明最终报告基准。采集未归一化原始量，由第8节 single_quotient 仅一次生成最终每参考流报告。协议与卡引用同一次报告，不再相除。

所选终端为一种完整配件：实际配置的直杆自动开钢伞架，含真实中棒、主骨/撑骨、滑套/上巢、弹簧/锁止件及关节五金、匹配伞尖套和配套散装尾珠。可工作的裸伞架独立交易；历史USITC描述将尾珠/伞尖套列在其伞架装配之外，当代Septrainbow供货明确包含这些物件。保留实际声明齐套清单，不将任一来源的包含清单强套全部订单。两者证明不同完整供货状态，不证明同SKU、工厂或时期。不隐含伞面、手柄或后续整伞作业。

首次放行位于同配置所需配合修整、装配、检验、返工及必要供货包装全部完成、工厂可供货之时。Q_c（亦记Q0_c）为唯一首次验收完整伞架独立实测净质量之和，排除包材皮重，包含实际齐套散装部件。先锁定原产品组成、水状态及验收ID再对账。首次必要包装归新增制造；后续留库、重包装、再交付、修理和复检仅是观察期H原队列真实服务，不产生第二验收。重开或失败作业不抹去既往负荷。

独立核对Q0_c = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0_c=0或未知保留全部原始负荷且无归一化结果。

完整湿原料/WIP/非WIP/已验收/待检/退回FG、包装、设备内流体及全部真实设备/工具库存，独立于参考事件和逐交换负荷。自有期初WIP完整真实既往前景历史只承接一次，仅转移有据的期末未分配向量。链接整份provider数据集及其中钢材/聚合物/涂层/公用工程/运输/设备历史，与相同历史的展开表示互斥，不能相加。外购已成形/回火/完成表面处理部件须完整覆盖真实生产者及供货状态。不虚构采购隐藏已知现场成形、涂饰、热处理、压缩机或其他真实生产；路线改变须明示范围复核及完整原子交换。

每个实际聚乙烯袋或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。

J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

每个实际污染擦布、袋、纸箱、边角料、报废伞架、气路冷凝液、废水或退役整工具/设备流，记录一次完整接收事件Qt，包含基材、留存钢/塑料/油/尘/其他残留及水一次。来源/检验组分仅为嵌套非加和账，除非出口前真实分离。真实provider按兼容单位一次接收全部实物Qt。另识别实际建模服务总需求及每个受服务原队列Q0_c（或真实新增制造Q_c）互不重叠A_e,c，包含失败作业及原历史。份额只改变服务/负荷归属，不改变真实接收质量。未知归属保持未解，不向各队列重复计Qt，也不缩小实物出口。

产品及路线有定性支持，不是实测工厂LCI，也不迁移目录限值。实际等级/涂层/滑套材料/provider、尺寸、数量及批次QA仍需前景记录；缺少这些观测本身不抹去已建立的称量、计量、机械检验或分配方法。按测量对象保留真实校准、回收、检出/定量限及不确定性。气动空气须记录独立实测湿进/排气、状态及每个实际物种、冷凝液和润滑油出口。不假定恒定大气组成，不从COD推油/VOC物种，不强守恒反应物种，不以一个闭合残差求多个未知。真正未建立的必要物种/基质程序对受影响主张保持具体hold，未来SOP、有限检查通过或QA未执行均不能豁免。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 一种声明完整钢伞架配置的部件供应清单 |
| allowed_use | 具完整限定及来源上下文的实际兼容完整伞架供货；上游部件负荷一次 |
| excluded_use | 整伞清单；伞骨/手柄等价；产品性能或认证比较；未测工厂数据 |
| required_metadata | 整架 BOM/配置；实际自制外购及加工状态；净 kg；场址/时期/供方；Q_c/H 和来源/库存/分配上下文 |
| required_quality_disclosure | 实测与待采数据；未解身份/供方；失败/零产出；实际服务范围；原生限制及不确定性；审查状态 |
| update_trigger | 终端/材料/机构/表面或供方工艺变化；原生身份变化；新完整证据或实际前景记录 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Explanatory Notes (30June2025), p196, and original structure CSV; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 原始38921/38922父件/配件区别；仅分类，不规定制造参数 |
| usitc-umbrella-parts-1970 | official_guidance | US Tariff Commission, Umbrellas and metal parts thereof, TC Publication334, August1970, ppA-1–A-4; https://usitc.gov/publications/tea/pub334.pdf | 历史装配伞架正面整件及伞骨/撑骨/中棒/滑套结构；完整相邻整伞及表面状态反例；不转用历史数量 |
| sep-complete-steel-frame | literature | Septrainbow, Custom Golden Umbrella Frames, complete manufacturer page and gallery; https://www.septrainbow.com/custom-golden-umbrella-frames-2524.html | 完整钢架/中棒/滑套/尾珠/伞尖套自动开供货；金色不等于化学；不设 SKU 尺寸/配方/性能默认 |
| acme-frame-structure | literature | Acme Umbrella, Structure; https://www.acmeumbrella.com/service/Structure.html | 独立槽形伞骨/上巢/钢丝/滑套及中棒装配；手柄/伞面分离；材料反例不确定本供货聚合物 |
| zhe-frame-riveting-2026 | literature | ZheBrella, Umbrella Frame Riveting Process for Strong OEM Builds,16June2026; https://www.zhebrella.com/blog/umbrella-frame-riveting-process-for-strong-oem-builds.html | 钢关节/孔/表面/装配顺序及伞面前检查/返工/包装；保留玻纤/混合架反例；不设示例压力/次数/强度/QC 阈值默认 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3 pp255–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需要分配的归因场景细分/虚拟细分、逐交换决定性物理因果、经论证剩余实际共门/状态市场价值及守恒；不是工业伞架证明 |
