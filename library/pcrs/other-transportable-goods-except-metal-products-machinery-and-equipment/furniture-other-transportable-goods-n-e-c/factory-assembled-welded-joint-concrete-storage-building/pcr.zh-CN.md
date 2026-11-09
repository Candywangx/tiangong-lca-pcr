---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-welded-joint-concrete-storage-building
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 完整工厂装配焊接连接混凝土储物建筑

全部规则受此完整工厂制品、真实供货形态及实际配置限定。外部分类的更宽范围和来源的相邻变体不扩大本路线；真实前景数值必须另行采集。

## 1. 范围与适用性

本 PCR 规定完整工厂装配、以混凝土为主并用于存放货物或物资的储物建筑的一条限定制造路线。它是完整制造的仓储制品，包括混凝土地板、墙体、屋面、钢门及通风器总成、接缝和涂装完工状态。本路线综合 CXT 储物建筑供货证据与完整 Schweitzer 钢筋混凝土制造规格，不声称同一个当代 SKU、工厂订单或通用配方。每份前景数据包均须证明真实完整仓储配置和焊接接缝路线。来源规格亦沿用 vault/toilet 通用措辞，电气为待定且列有可选系统；这些不证明已配齐水暖、电气、保温或达到居住完工。产品册与历史规格的数值设计或性能声明均不自动转入。

排除孤立墙板、地板或屋面板、梁柱、管材、鲜拌混凝土、钢骨塑料覆面房舱及货运集装箱；裸壳、敞底设备罩、现场组装套件、现场完工多模块建筑、带集液坑围堵设计、预应力或后张替代路线及配齐水暖电气暖通的建筑均不在本限定路线内。实际不同变体须在同一 PCR 身份内重新完整评估适用性、BOM 和工艺，并增加每项真实原子流，不另建分类叶或材料 PCR。真实变化不得隐藏为零。现场地基、出厂后运输、吊装就位、现场接入及后续使用维护报废属独立生命周期模块；下文仍保留已发生放行后厂内服务。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-welded-joint-concrete-storage-building |
| classification_refs | CPC 3.0 38704; narrower product and route boundary |
| covered_products | 一项已声明焊接接缝配置的完整工厂装配非预应力钢筋混凝土货物储存建筑 |
| excluded_products | 排除孤立墙板、地板或屋面板、梁柱、管材、鲜拌混凝土、钢骨塑料覆面房舱及货运集装箱；裸壳、敞底设备罩、现场组装套件、现场完工多模块建筑、带集液坑围堵设计、预应力或后张替代路线及配齐水暖电气暖通的建筑均不在本限定路线内。实际不同变体须在同一 PCR 身份内重新完整评估适用性、BOM 和工艺，并增加每项真实原子流，不另建分类叶或材料 PCR。真实变化不得隐藏为零。现场地基、出厂后运输、吊装就位、现场接入及后续使用维护报废属独立生命周期模块；下文仍保留已发生放行后厂内服务。 |
| representative_product | 一栋具地板屋面墙体已装钢门带纱通风器及真实涂装的完整混凝土储物建筑 |
| production_route | 原料接收→真实配料钢筋及模具准备→浇筑振实→真实养护→脱模修补→焊接接缝与灌浆密封装配→外供门通风器及真实涂装→整栋试验与首次放行 |
| market_state | 现场地基就位及公用接入前的完整工厂首次质量放行产品；包装不入净产品 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供一项已声明完整防护围护的混凝土货物储存建筑制造制品 |
| How much | 完整首次放行建筑的 1 千克净制品，而非单独 1 千克混凝土或单位楼面面积服务 |
| How well | 实际图纸配置及整栋检验要求，不默认强度耐火保温气密或认证 |
| How long or cycle | 唯一首次质量放行事件，不指定使用寿命或使用周期 |
| reference_flow_link | finished_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 商业建筑 `88e0df46-375e-4cac-80e6-3cf781f63625` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际制造商场址地域及报告期; 一栋以混凝土为主的完整货物储存建筑及仓储用途; 相同配置屋面地板墙体门通风器及完整供货完工 BOM; 非预应力焊接接缝钢筋混凝土路线且无敞底或围堵集液坑; 实际钢筋等级形态钢筋网及预埋锚板供货形式; 整份水泥砂砾水及整份外加剂涂层制剂与不重叠归属; 真实模具准备配料振实养护脱模修补装配修整及试验; 真实自密实替代路线及真实加热或湿养护历程而非默认周期; 保温窗水暖电气暖通的声明缺省或真实单独适用性; 整栋唯一首次质量放行 Q 及实测净湿质量和时点; 附加使用件数或几何时的真实尺寸及独立配置质量 M; 原料在制品非在制品期初期末实物库存及每个继承交换向量; 失败 Q=0 启停空转清理试验返工及真实处理负荷; 已放行成品原批次 Qc 实际观察期 H 总发运返还及原交付冲回; 每种包装空件附着在制品附着成品可复用池 P I ER S EO W 及唯一供方归属; 完整资产部件流体载热水实物流与分配服务负荷的区分; 独立实测游离结合反应相态水及真实物种碳源与接收介质; 真实验收试验且无默认尺寸密度寿命良率认证或排放因子; 原生产品限定供方门真实上游运输及普通身份数据缺口 |

构建前景数据包时，全部必需限定信息须在元数据或等价字段声明；缺项即参考定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_reference` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用 cp_release 实测整栋新增唯一首次放行净质量 Q。内含混凝土钢件门通风器涂层及真实滞留水只计一次，包装排除。参考表示为 1 千克；发运数量及期末已放行成品不另造制造。 |
| `m_native` | all inventory rows | 真实原生广延属性 | 逐行单位 | 保留逐行原生单位及独立完整湿质量。kWh * 3.6 = MJ 仅一次；仅对真实速率按实测时间积分，不再对累计体积乘时间。体积质量换算须该物质在实测温度压力组成下独立密度。件数质量换算用独立实测配置质量 M，附校准和范围；Item(s) 与 item 为系数一的计数别名。不从次级系数推房屋件重楼面面积层高厚度密度或寿命。 |
| `m_once` | all inventory rows | 声明的逐行原生量 | per reference flow | 采集保存未除原始记录。raw_units 和 attribute_vector 在归一化前准备广延 A_i 及完整物理 V_i。normalize_once 执行 A_i/Q_i 或 V_i/Q_i 一次，卡片及聚合仅引用该同一操作。制造 Q_i=Q，实际原批次服务 Q_i=Qc；Q_i=0 保留全部负荷但不出单位结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际分别外供的水泥细砂粗砾水钢筋钢筋网及锚板，以及整份外加剂涂层制剂和完整门通风器套件；声明全部供方与入厂门 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0:38704；选定完整储物建筑路线 |
| recursive_input_rule | 外购整栋或完整混凝土壳体不能替代本制造路线。真实外购中间件须按自身带负荷供货门及明确不重叠衔接进入，不再购其混凝土或钢筋；原建筑返还保留原 Qc 和真实增量作业。 |
| upstream_dataset_requirement | 每份整供一个适配供方门，匹配真实配方形态路线地域时期及包装运输范围；供方未明不等于零负荷 |
| disclosure | 完整配置 BOM；来源特定技术综合；真实供货工艺质量门；实测水及质量；库存交换历史；原批次服务；上游归属；排除与不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_complete` | all processes | 从真实带负荷供货开始，不从外购成房的包装开始。保留全部真实材料准备、钢筋冷弯绑扎或成网安放、模具与整份脱模剂作业、配料搅拌、浇筑及真实振实或有证据的自密实替代、养护脱模、许可修补、焊接接缝灌浆密封装配、门通风器安装、实际涂装及整栋检验直至首次放行。内部板件或模块交接抵消，不再造 Q。 | `cxt-schweitzer-2023`; `cxt-storage-brochure` |
| `b_supply` | all inventory rows | 每份外购制剂或制品按整份采购一次，含载水、活性化学品、内含金属、涂层和随附紧固件；化验组分为不可加和子账。采用不重叠分供，或经对账且抵消内部交接的整件组分衔接，不得整件湿重再加同组分。实际厂内配制须含全部单独外购材料及真实能耗损失。实际存在而未列的每种材料燃料分子废物或出口均新增具体卡，不藏入 other 或零集合。 | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_release` | finished_building; service | Q 为完整建筑新增首次质量放行净质量。屋面地板墙体内含供货和实际滞留水只计一次，包装排除。已放行期末成品已含于 Q，不得从制造输出或已分配制造负荷扣除。总发运、返还、迁移、复验、原件修复及内部模块交接均不造新制造。即使货物仍留库，也保留原 Qc 历史与 H 内实际已执行服务。 | `cxt-storage-brochure`; `jrc-ilcd-2010` |
| `b_water` | manufacture; service | 完整湿物质量独立于每个负荷向量。游离吸附水、化学结合结构水、真实反应与相变、蒸发、液体出口及滞留湿库存均须独立证据。水化不增添额外湿质量，养护本身不证明结合水或碳化二氧化碳吸收。相关元素与真实物种介质碳源为独立约束，不用一个残差拟合两个未知，不把 COD/VOC/NOx/PM 指标改称分子。 | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_gates` | all processes | 用互斥 calc_manufacture_gate、calc_fg_gate 和完整 calc_packaging 池。真实内部 Q_internal/F_to/F_back 及其他源目的地跨界配对抵消一次，T_pack 属包装池内，不是额外净建筑流。完整资产已含制造门，台群子账非加和。真实 J/H2O 明确保留，X 仅消重同侧其他重复观测，不冲真实跨界 C 或 Q。 | `jrc-ilcd-2010`; `cxt-schweitzer-2023` |
| `b_losses` | manufacture; service | 保留失败或 Q=0 生产、启停空转清理、试样试验、真实修补返工及实际处理，并保留原料在制品未分配非在制品库存及每个继承交换向量。许可试验验收只管授权和保留拒收状态，未授权或失败作业仍有真实耗料与出口；不得推定已恢复合格或新 Q。自然水分交换不是虚构修理。 | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_packaging_assets` | packaging; cp_asset | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。 真实资产部件安装液体毛实物账独立于分配服务向量，不设寿命或单件质量。 | `jrc-ilcd-2010` |
| `b_later` | all processes | 现场土方地基、出厂运输、卸载就位、现场接入及后续使用维护在制造首次放行之外单独识别。真实已执行厂内放行后包装仓储搬运发运复验返还返工服务按原 Qc/H 报告，未知未来服务保持未知。来源供货保修或认证陈述不构成 LCA 批准或性能数值证据。 | `cxt-schweitzer-2023`; `cxt-storage-brochure`; `easiset-2008-alternatives` |

### 完整来源、整件原生及生产者适用性

储存产品册正面说明完整交付储物建筑，并另述敞底泵设备结构、围堵集液槽及后张围堵变体；末页宽泛预接水电营销及可选电气保温暖通包，不证明所选无机电储物配置装有这些系统。2023年2月 Schweitzer 规格给出真实混凝土准备钢筋、振捣或自密实、养护修补拒收、锚板焊接灌浆密封和门通风涂饰程序，同时含 vault/toilet 用语、电气 TBD 及特定数值设计试验声明。本方法明确是完整储物终端与真实制造法的独立技术综合，不证明每页都描述同一实测订单 SKU。独立2008年 Easi-Set 例含现场装配、后张底顶和 EPDM 替代，是路线反例，不混入所选非预应力焊接法。实际图纸供货路线须准入所选配置，不能只凭来源未提而证明无预应力机电或另一实际工序。目录尺寸强度剂量养护周期寿命认证及默认重量均不转用。

真实整件原生参考是 Product flow、工厂生产组合、已制造成品，完整中英文备注明确含仓库；其施工商业建筑分类作为正反证保留，本身不建立 CPC38704 映射。真实 Mass/kg 参考用于完整以混凝土为主的厂制货物储存建筑，不换件或面积、不替现场交付、混凝土板件、设备罩或施工服务。它不提供配方几何国家现场完工或每座千克。各真实已绑定辅助须满足完整硬字段和供方门，不只看名称或只取一种语言。自来水仍为参考 Mass，真实次级 Volume meanValue0.001 不是实测密度，不授权改参考单位。天然粗砾石、整份硅酸盐水泥、真实焊接金属网、完整外供减水剂、PE 膜及整木装载平台保留实际形态产品族路线限制，不替细砂任意岩石 PET 纯外加剂或散木材。

终端是现场基础安放和公用连接前，具完整底顶全部墙、已装门及带筛通风器的厂内装配储物制品。CXT 安装条文和独立 Easi-Set 来源使真实现场准备、基础土壤条件、卡车吊机通行、安放及现场接口保持为可见后续阶段。在完整工厂供货完成前所需真实自有工序，无论地点均纳入，不把现场未完套件或现场装配建筑改名完整以外移制造。真实取样振捣养护试验和不合格去向须有证；普通现场实批 QA 尚未实施不等于不存在方法。完整实物净湿建筑质量用校准整物称量或完整实测互斥同配置部件桥，留存水一次；不套目录重量通用密度或面积转千克。

每项真实水泥骨料外加剂、钢筋网片锚板、门通风制品、灌浆密封涂饰制剂、公用资产和包装须有真实相容完整生产者或互斥展开清单。按实际供货覆盖开采煅烧熟料粉磨、骨料准备、钢生产成形焊接、制剂制造、上游公用维护包装废物。外供门总成网片整制剂含真实五金金属丝载水一次。实际外购湿混凝土或壳体中间品须独立有证互斥门和继承历史，不能用纸面供方门隐藏自有配料浇筑连接，或把所需完整制造替成品建筑包装。供方内含清单与自有先前原材在制资产历史是不同所有者向量，各交接一次。普通供方数量身份未知显式保留；关键化学物种采样适用性未知不能靠未来 SOP、普通 QA 或有限通过豁免。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整混凝土储物建筑制造及首次放行 | required | 全部真实作业；各条件原子流须证明发生或真实缺省 | foreground_manufacturing | finished_building; Q |
| packaging | 逐种包装实物保管及负荷归属 | required | 全部真实作业；各条件原子流须证明发生或真实缺省 | physical_custody_and_actual_burden | finished_building; Qc; H |
| service | 原批次真实放行后服务 | required | 全部真实作业；各条件原子流须证明发生或真实缺省 | original_cohort_incremental_service | finished_building; Qc; H |

### 过程：完整混凝土储物建筑制造及首次放行 (`manufacture`)

#### 输入

##### 产品流

###### 整份外购硅酸盐水泥 (`cement`)

采用供方门的一份实际灰色粉末状水硬性硅酸盐水泥。原生同义词包括普通硅酸盐水泥和 I 型；其砖瓦分类与一致的粉末身份不符，不能据此变成制品。核对实际低碱类型、供方及胶凝掺合料；不得替成水泥熟料、砂浆或整件预制品。外购混合水泥内含组分只计一次。

- 选定流：水泥，硅酸盐水泥 `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 细骨料 (`fine_sand`)

记录实际单独供给的天然细骨料及矿物组成、级配、游离水与吸水量。树脂覆膜砂、粗砂砾及实际地域或工艺不匹配的机制砂均不能替代该天然细骨料供货。

- 选定流：天然细砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 天然粗砾石 (`coarse_gravel`)

仅用于一份外供天然粗砾石。原生身份描述较圆且比砂粗的碎粒，通常大于 2 毫米；这不构成 #67 级配证书或普遍粒径阈值。匹配实际规定的级配、矿物组成和供货状态，不用于机制砂、再生骨料或任意碎石。

- 选定流：砂砾 `73f1241c-e77d-4e9e-b290-e755a40acf81`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 计量外供工艺水 (`water`)

只用于实际经处理、符合饮用标准的市政管道供水，通用身份不确立当地供方。搅拌、养护、蚀刻、试验和清洗按作业分账保留实测质量。原生次级体积系数不是密度测量。回用水和制剂载水不得再次采购。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_utility 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 整份引气制剂 (`air_entrainer`)

记录实际整份外购制剂、配方标识及载水和活性含量子账。须为具有自身真实供货身份的整份引气制剂；通用化学混合物或减水剂不能确立该身份。

- 选定流：混凝土引气外加剂制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 整份减水制剂 (`water_reducer`)

原生产品族明确为水泥基混合物用减水外加剂。实际整份供货制剂及载水、添加组分只采购一次。身份未规定配方、固含量、掺量、ASTM 性能或工厂供方，须独立测量，不得再采购活性聚合物或载水。

- 选定流：减水剂 `d13b6302-2c5a-4d75-a18b-020b61e7ca60`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 钢筋供货 (`reinforcing_bar`)

记录实际钢筋、供货形态及等级，再承接真实冷弯和绑扎。须匹配真实条材或盘卷形态及等级，不将其他材料族固定的低合金成分或轧制路线套到实际 ASTM A615 供货。不得推断预应力、钢筋份额或厂内炼钢。

- 选定流：混凝土用碳钢钢筋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 一件外购焊接钢筋网 (`reinforcing_mesh`)

仅用于一件实际铁或钢焊接网格钢筋网，记录钢丝材料与实际 ASTM A185 规格。原生族涵盖编织、焊接及若干常用金属；本卡限定钢制焊接用途，不默认网格尺寸或镀层。外购成网时不得再采购组成钢丝。

- 选定流：金属丝网 `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 带锚固的接缝焊板制品 (`weld_plate`)

一件实际外供的板及锚固组合制品，埋入混凝土用于建筑焊接接缝。其内含锚固只在整件内计量；原钢板身份不能证明该供货成件形态。实际改为厂内加工时，须用不重叠原料及全部真实加工负荷，并记录衔接关系。

- 选定流：带预埋锚固的钢焊板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 碳钢焊丝 (`welding_wire`)

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

- 选定流：碳钢焊丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 药皮钢焊条 (`welding_electrode`)

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

- 选定流：药皮钢焊条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 二氧化碳保护气 (`shield_co2`)

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

- 选定流：二氧化碳保护气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 氩气保护气 (`shield_argon`)

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

- 选定流：氩气保护气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 整份混凝土模具脱模制剂 (`release_agent`)

用于混凝土接触模具的实际整份外供脱模制剂。供方油性或乳液状态、化学成分及载体须实测，不由普通润滑油推断。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：整份混凝土模具脱模制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 液体成膜混凝土养护剂 (`curing_compound`)

仅在实际使用时纳入整份外供制剂及溶剂、水、固体子账；湿养护本身不证明存在该投入。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：液体成膜混凝土养护剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 无收缩水泥基灌浆制剂 (`grout`)

墙地面圆角和接缝所用实际整份外购灌浆料。若以单独采购原料厂内配制，应以不重叠的真实原料、制备能耗和损失替代该采购。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：无收缩水泥基灌浆制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 水泥基修补砂浆制剂 (`repair_mortar`)

实际表面孔洞修补整份材料，失败或未获许可修补的耗料仍保留；不由此授权结构修补或推定已恢复合格。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：水泥基修补砂浆制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 可涂覆聚氨酯接缝密封制剂 (`joint_sealant`)

实际整份弹性接缝密封制剂。聚氨酯填料、泡沫或木地板液体面漆均未证明该供货密封剂身份；树脂与载体不再单独采购。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：可涂覆聚氨酯接缝密封制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 细骨料水泥基粘结涂层制剂 (`cement_coating`)

实际存在时才纳入整份外供粘结涂料，不再采购其内含水泥和细骨料。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：细骨料水泥基粘结涂层制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 水性耐化学品聚氨酯涂层制剂 (`floor_coating`)

实际整份单组分地坪涂料；供货水、粘结剂及添加组分是一次采购。普通室内涂料或木材 UV 涂料不能证明适用性。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：水性耐化学品聚氨酯涂层制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 改性丙烯酸憎水渗透着色制剂 (`acrylic_stain`)

实际整份内外表面着色制剂；不同配方另拆卡。模内纹理不等于另购砖饰面。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：改性丙烯酸憎水渗透着色制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 透明丙烯酸防涂鸦密封制剂 (`acrylic_sealer`)

实际整份透明密封制剂，不与着色剂、聚氨酯或另一防水制剂合并。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：透明丙烯酸防涂鸦密封制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 金属直接涂覆醇酸涂料制剂 (`alkyd_paint`)

仅计实际厂内金属涂装或补漆，排除外购已涂覆门、通风器内含的既有漆。整份供货溶剂与固体以及实际成膜损失只承接一次。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：金属直接涂覆醇酸涂料制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 盐酸溶液 (`etch_acid`)

涂装前实际酸蚀时才纳入整份溶液质量、实测浓度及载水子账；本方法不默认浓度或中和配方。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：盐酸溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 水性工业清洗制剂 (`detergent`)

仅记录一份实际外供清洗制剂，供方组成、清洗损失和出口状态须实测；若仅用水清洗，须以证据说明本卡未发生。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

- 选定流：水性工业清洗制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 一套完整镀锌钢门 (`door_kit`)

一种真实完整外供镀锌钢门框五金总成，实际内含铰链锁扫条门挡及供方或本地涂饰范围一次；内含件非加和，真实单供件另卡及实测历史。具体整制品 UUID 未决，裸框型材或宽泛名称不替完整供货总成。

- 选定流：完整镀锌钢门框五金总成
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 一件完整带纱网墙体通风器 (`vent_kit`)

一件实际外购通风器，在供货范围内包括规定的不锈钢盖、铝百叶、纱网、紧固件和涂层。须记录组成、包含清单及真实装配状态；不再采购内含金属。真实分供时才添加不重叠分件。

- 选定流：带纱网金属墙体通风器总成
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_material 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 实际工厂电力 (`electricity`)

按作业计量配料、冷弯、振实、焊接、养护控制、吊运、修整、试验和清理用电。电力身份须匹配真实建筑工厂地域、电压、计量及损耗和供方门，其他国家或修复特定作业身份不能证明本实际供电。

- 选定流：交流电电力
- 流属性/单位：能量 / MJ
- 数量规则：按 m_once 与 cp_utility 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 实际柴油用量 (`diesel`)

仅纳入门内真实柴油搬运或加热。原生质量基准燃料未规定牌号、配方、密度、热值、炼制路线、地域或供方，身份不附带数值。实际燃烧及治理物种须独立卡片和证据。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_utility 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 实际外购有用热 (`purchased_heat`)

仅在真实外供热存在时纳入，实测交付及返还焓，并明确唯一供方水热约定。规格中的寒冷天气供热条件不证明蒸养、锅炉或本交换；真实载热介质另计物理量，不得再购同一热。

- 选定流：外购有用热能
- 流属性/单位：能量 / MJ
- 数量规则：按 m_once 与 cp_utility 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 接收的液态载热水 (`carrier_water_in`)

仅记录此真实外部产品载热水腿。保留完整实测总质量、液相、温度、压力、焓及供方水热归属，不按热负荷份额缩量，不默认废物。不得预设载热回路或蒸汽，实际其他相态须独立具体卡。

- 选定流：接收的液态载热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_utility 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 钢制混凝土浇筑模具 (`mould`)

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

- 选定流：钢制混凝土浇筑模具
- 流属性/单位：物件数 / item
- 数量规则：按 m_once 与 cp_asset 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 混凝土振实器 (`vibrator`)

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

- 选定流：混凝土振实器
- 流属性/单位：物件数 / item
- 数量规则：按 m_once 与 cp_asset 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 更换用混凝土振实器电动机 (`motor`)

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

- 选定流：更换用混凝土振实器电动机
- 流属性/单位：物件数 / item
- 数量规则：按 m_once 与 cp_asset 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 矿物液压油 (`hydraulic_oil`)

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

- 选定流：矿物液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_asset 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整混凝土配料搅拌机 (`batch_mixer_receipt`)

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

- 选定流：完整混凝土配料搅拌机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整工厂建筑搬运起重机 (`handling_crane_receipt`)

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

- 选定流：完整工厂建筑搬运起重机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整工厂叉车 (`forklift_receipt`)

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

- 选定流：完整工厂叉车
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整建筑称重秤 (`release_scale_receipt`)

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

- 选定流：完整建筑称重秤
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整混凝土抗压试验机 (`compression_tester_receipt`)

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

- 选定流：完整混凝土抗压试验机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整可复用混凝土作业清洁布 (`reusable_cloth_receipt`)

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

- 选定流：完整可复用混凝土作业清洁布
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 外供耗用清洁擦拭基材 (`expendable_wipe`)

一种真实单供耗用擦拭基材，独立于复用清洁布台群及单供清洁剂；记录组成、水分和毛领用。

- 选定流：外供耗用清洁擦拭基材
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_material；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`cxt-schweitzer-2023`

###### 外供非饮用拌和清洁水 (`nonpotable_water`)

仅已绑定处理自来水身份之外真实独立供给的非饮用水牌号，保留完整状态水质、真实混凝土工艺准入、独立密度质量；内部回用水是配对池转移，不再外购，不借饮用水身份或次级系数代另一水。

- 选定流：外供非饮用拌和清洁水
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_utility；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`


##### 废物流

##### 基本流

###### 氧从大气进入 (`oxygen_in`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 氮从大气进入 (`nitrogen_in`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 氩从大气进入 (`argon_in`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 水蒸气从大气进入 (`humidity_in`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 二氧化碳从大气进入 (`co2_in`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

#### 输出

##### 产品流

###### 返还供方的液态载热水 (`carrier_water_return`)

仅记录此真实外部产品载热水腿。保留完整实测总质量、液相、温度、压力、焓及供方水热归属，不按热负荷份额缩量，不默认废物。不得预设载热回路或蒸汽，实际其他相态须独立具体卡。

- 选定流：返还供方的液态载热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_utility 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`cxt-schweitzer-2023`

###### 完整储物建筑首次放行 (`finished_building`)

采用的原生产品族明确包含仓库，是工厂制造成品且以质量为参考。本卡仅为具屋面、地板、全部墙体、已装门和通风器、接缝涂装状态及真实供货完工清单的完整工厂混凝土货物储存建筑，不是构件、现场地基或已安装建筑交付。其更宽建设分类予以披露；仓储产品语义与制造成品状态正面匹配本限定整件。其他商业用途及非仓储设备罩不属本选定核心。

- 选定流：商业建筑 `88e0df46-375e-4cac-80e6-3cf781f63625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cxt-storage-brochure`; `cxt-schweitzer-2023`

###### 钢制混凝土浇筑模具 (`mould_external_transfer`)

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

- 选定流：钢制混凝土浇筑模具
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 混凝土振捣器 (`vibrator_external_transfer`)

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

- 选定流：混凝土振捣器
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 混凝土振捣器替换电动机 (`motor_external_transfer`)

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

- 选定流：混凝土振捣器替换电动机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整混凝土配料搅拌机 (`batch_mixer_external_transfer`)

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

- 选定流：完整混凝土配料搅拌机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整工厂建筑搬运起重机 (`handling_crane_external_transfer`)

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

- 选定流：完整工厂建筑搬运起重机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整工厂叉车 (`forklift_external_transfer`)

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

- 选定流：完整工厂叉车
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整建筑称重秤 (`release_scale_external_transfer`)

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

- 选定流：完整建筑称重秤
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整混凝土抗压试验机 (`compression_tester_external_transfer`)

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

- 选定流：完整混凝土抗压试验机
- 流属性/单位：Number of items / item
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 完整可复用混凝土作业清洁布 (`reusable_cloth_external_transfer`)

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

- 选定流：完整可复用混凝土作业清洁布
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`


##### 废物流

###### 分流废混凝土 (`concrete_waste`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：分流废混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 混凝土洗刷水 (`washwater`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：混凝土洗刷水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 混凝土洗刷污泥 (`sludge`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：混凝土洗刷污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 焊渣 (`weld_waste`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：焊渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 废醇酸涂料制剂 (`paint_waste`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：废醇酸涂料制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 废矿物液压油 (`spent_oil`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：废矿物液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 废钢制浇筑模具 (`scrap_mould`)

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

- 选定流：废钢制浇筑模具
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 一股实际混合建筑材料废物 (`mixed_waste`)

记录真实外送且单一处理供方的一股混合建筑材料废物。须采用真实混合建筑材料的实物身份及接收门，不将真实废物混合流替成生活垃圾、产品流或处理服务名称。整股实测混合质量仅加和一次，独立实测 originW 组分为不可加和子账；或改用实际分流出口。不得默认填埋或处置收益。

- 选定流：混合建筑废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_outlet 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃混凝土振捣器 (`vibrator_retirement`)

仅真实整件污染退役，基材安装残余和水一次；已在共收整湿 Qt 内的组分为实测非加和来源，不另出口或新增处理需求。真实分离件另有转交标识和互斥量。

- 选定流：整件废弃混凝土振捣器
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃混凝土振捣器替换电动机 (`motor_retirement`)

仅真实整件污染退役，基材安装残余和水一次；已在共收整湿 Qt 内的组分为实测非加和来源，不另出口或新增处理需求。真实分离件另有转交标识和互斥量。

- 选定流：整件废弃混凝土振捣器替换电动机
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃完整混凝土配料搅拌机 (`batch_mixer_retirement`)

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

- 选定流：整件废弃完整混凝土配料搅拌机
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃完整工厂建筑搬运起重机 (`handling_crane_retirement`)

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

- 选定流：整件废弃完整工厂建筑搬运起重机
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃完整工厂叉车 (`forklift_retirement`)

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

- 选定流：整件废弃完整工厂叉车
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃完整建筑称重秤 (`release_scale_retirement`)

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

- 选定流：整件废弃完整建筑称重秤
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃完整混凝土抗压试验机 (`compression_tester_retirement`)

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

- 选定流：整件废弃完整混凝土抗压试验机
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件废弃污染混凝土作业清洁布 (`reusable_cloth_retirement`)

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

- 选定流：整件废弃污染混凝土作业清洁布
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_asset；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`cxt-schweitzer-2023`

###### 整件使用后污染清洁擦拭物 (`spent_wipe`)

一个真实单独整湿擦拭物出口，含基材、捕集混凝土涂料制剂及水一次；若真共收至 mixed_waste，仅保留实测非加和来源，不另 Qt 或供方需求。

- 选定流：整件使用后污染清洁擦拭物
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_outlet；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`cxt-schweitzer-2023`


##### 基本流

###### 氧排入大气 (`oxygen_out`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 氮排入大气 (`nitrogen_out`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 氩排入大气 (`argon_out`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：氩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 水蒸气排入大气 (`water_vapour`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 二氧化碳排入大气 (`co2_out`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 一氧化碳排入大气 (`carbon_monoxide`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 一氧化氮排入大气 (`nitrogen_monoxide`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 二氧化氮排入大气 (`nitrogen_dioxide`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 二氧化硫排入大气 (`sulfur_dioxide`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

###### 二氧化硅排入大气 (`silica_air`)

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

- 选定流：二氧化硅
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_species 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`cxt-schweitzer-2023`

### 过程：逐种包装实物保管及负荷归属 (`packaging`)

#### 输入

##### 产品流

###### 外购接收——聚乙烯保护膜 (`pack_film_p`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 供方内含随料包装进入——聚乙烯保护膜 (`pack_film_i`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 接收外部返还——聚乙烯保护膜 (`pack_film_er`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 外购接收——一件木制装载托盘 (`pack_pallet_p`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 供方内含随料包装进入——一件木制装载托盘 (`pack_pallet_i`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 接收外部返还——一件木制装载托盘 (`pack_pallet_er`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 外购接收——钢制运输捆带 (`pack_strap_p`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 供方内含随料包装进入——钢制运输捆带 (`pack_strap_i`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 接收外部返还——钢制运输捆带 (`pack_strap_er`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 外供木托盘维修板 (`pack_repair_board`)

仅真实单供维修材料，不规定发生维修或配方；完整毛收货、备品留存湿库存和唯一负荷所有者保留。真实转入包装池按互斥实测非水 J_in 和 H2O_in，内部源目的地配对，不再采购。

- 选定流：外供木托盘维修板
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_packaging；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`cxt-schweitzer-2023`

###### 外供钢制托盘维修钉 (`pack_repair_nail`)

仅真实单供维修材料，不规定发生维修或配方；完整毛收货、备品留存湿库存和唯一负荷所有者保留。真实转入包装池按互斥实测非水 J_in 和 H2O_in，内部源目的地配对，不再采购。

- 选定流：外供钢制托盘维修钉
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_packaging；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`cxt-schweitzer-2023`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 随总实物发运外出——聚乙烯保护膜 (`pack_film_s`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 向外返还包装——聚乙烯保护膜 (`pack_film_eo`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 随总实物发运外出——一件木制装载托盘 (`pack_pallet_s`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 向外返还包装——一件木制装载托盘 (`pack_pallet_eo`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 随总实物发运外出——钢制运输捆带 (`pack_strap_s`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 向外返还包装——钢制运输捆带 (`pack_strap_eo`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

##### 废物流

###### 实际包装废物——聚乙烯保护膜 (`pack_film_w`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

- 选定流：废聚乙烯保护膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 实际包装废物——一件木制装载托盘 (`pack_pallet_w`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

- 选定流：废一件木制装载托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 实际包装废物——钢制运输捆带 (`pack_strap_w`)

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

- 选定流：废钢制运输捆带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_packaging 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

###### 废弃木托盘维修板 (`pack_removed_board`)

仅真实分离拆下后作为废物导出的完整件，基材残余水一次；用互斥 J_out/H2O_out 或完整 W，不兼列；若仍在整托盘混合整湿 W 内只留非加和来源。

- 选定流：废弃木托盘维修板
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_packaging；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`cxt-schweitzer-2023`

###### 废弃钢制托盘维修钉 (`pack_removed_nail`)

仅真实分离拆下后作为废物导出的完整件，基材残余水一次；用互斥 J_out/H2O_out 或完整 W，不兼列；若仍在整托盘混合整湿 W 内只留非加和来源。

- 选定流：废弃钢制托盘维修钉
- 流属性/单位：Mass / kg
- 数量规则：对本完整实测原生 V_i 腿使用 m_once 及 cp_packaging；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`cxt-schweitzer-2023`


##### 基本流

### 过程：原批次真实放行后服务 (`service`)

#### 输入

##### 产品流

###### 接收内部首次放行转移 (`fg_receipt`)

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

- 选定流：商业建筑 `88e0df46-375e-4cac-80e6-3cf781f63625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`cxt-storage-brochure`; `jrc-ilcd-2010`

###### 实际外部原建筑返还 (`fg_return`)

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

- 选定流：商业建筑 `88e0df46-375e-4cac-80e6-3cf781f63625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`cxt-storage-brochure`; `jrc-ilcd-2010`

###### 已发生放行后服务用电 (`service_power`)

原 Qc/H 下真实已发生包装、仓储、搬运、发运、复验和增量返工用电，留库成品的已执行服务仍保留。未知未来服务不算已发生；独立核实真实供方、电压、地域及边界，其他来源特定作业身份不能确立本实际供电。

- 选定流：交流电电力
- 流属性/单位：能量 / MJ
- 数量规则：按 m_once 与 cp_service 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`cxt-storage-brochure`; `jrc-ilcd-2010`

###### 已发生放行后服务用水 (`service_water`)

仅计已执行放行后服务的实际经处理饮用标准市政用水。保留原生质量，若量测体积须独立实测换算；保留原 Qc/H、真实废水及湿库存，不再次采购制剂载水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`cxt-schweitzer-2023`; `jrc-ilcd-2010`

###### 已发生放行后服务柴油 (`service_diesel`)

仅计原 Qc/H 下真实增量柴油服务，不默认运输距离。原生质量燃料未规定牌号、配方、密度、热值、炼制、地域及供方；独立测量，并在相同原批次下新增全部真实燃烧物种及出口。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录真实归属的广延分子；原始记录保持未除。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整建筑总发运 (`fg_dispatch`)

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

- 选定流：商业建筑 `88e0df46-375e-4cac-80e6-3cf781f63625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`cxt-storage-brochure`; `jrc-ilcd-2010`

##### 废物流

###### 原批次废弃建筑材料 (`service_building_waste`)

仅计原批次实际成为一股单独处理废物的材料。完整记录湿实物质量、真实混合组成及唯一处理供方，不复用产品 UUID，不重复已记录混合流的来源组分。

- 选定流：废弃混凝土储物建筑材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 m_once 与 cp_service 记录本腿完整原生实测 V_i；负荷向量另报。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`jrc-ilcd-2010`; `cxt-storage-brochure`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_hierarchy` | all inventory rows | 仅用于研究情境明确需要分配的归因情形：先专属采集并进行真实或虚拟细分。剩余共同交换须建立逐交换起决定作用的物理因果及真实驱动。仅真正剩余共同过程负荷采用同一过程门、物理状态及同期共同功能的真实市场价值。逐交换说明份额与敏感性，不任意选物理经济、不设固定比例、不自动赋避免生产收益，不主张全面符合 ILCD。 | `jrc-ilcd-2010` |
| `a_history` | all inventory rows | 每项原料、在制品及非在制品库存均保留实物量与继承原生广延单位向量。实际原始量换算并合理归属后，制造 A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i。B_close_i 不含已首次放行成品，只含原料在制品和未用未分配存货；净领用已含的库存调整不再做。失败品与废物不自动转走负荷，T_out 须真实其他批次功能及一次合理负荷交接。 | `jrc-ilcd-2010` |
| `a_physical` | all physical movement rows | 物理流动分子为各自原生单位完整实测 V_i，不是 A_i、库存差、经济份额、服务份额或继承制造负荷。制造归属实物流一次显示 V_i/Q，原批次服务一次显示 V_i/Qc。另保留真实供应作业处理及合理资本服务向量，唯一上游归属；实物披露不造额外采购或抵扣。仅 normalize_once 除产品数量。 | `jrc-ilcd-2010` |
| `a_service` | service; packaging; cp_asset | A_service_i_c_H 保留原批次 c 在实际观察 H 内已执行增量作业，包括期末留库成品、复验和真实返工。仅真正未用未分配服务存货结转，不把已执行作业延到未知未来。原制造历史和交付冲回仍独立可追。实际混合废物整股一个供方计一次，独立实测 originW 为不可加和子账；只有真实不重叠分流才改按分项出口。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 整栋首次放行与原料在制品历史 | 批次序列质量称重记录 |building_id; configuration; actual_complete_BOM; first_release_time; measured_net_wet_mass; packaging_tare; scale_calibration; moisture_state; test_status; opening_raw; closing_raw; opening_WIP; closing_WIP; non_WIP_pools; each_inherited_exchange_vector; failed_Q_equals_zero; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |用经校准整栋称量或可追溯同配置净称重记录，核对真实皮重及同时间放行和 BOM。选整件输出前声明完整图纸及试验，不把不完整件计 Q。使用几何时独立测量真实几何，不套产品册尺寸。 最终汇总定义：唯一首次放行净质量实测求和为 Q；1 千克参考流；原料在制品和非在制品向量另存，不扣期末已放行成品。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | kg | 每次唯一首次放行及每个库存边界 | 全部尝试批次直至首次放行且含失败期间 | 实际配置的储物建筑工厂 | 每参考流 | BOM 图纸路线；校准皮重；试验保留记录；序列唯一性；来源库存向量关联 |
| cp_material | manufacture | 每项真实原子供货及制剂 | 收料领用批次作业记录 |row_id; supplier; formulation_id; supply_form; raw_quantity; raw_unit; operation; moisture; assay; carrier_water; opening; receipts; closing; issue_basis; inherited_exchange_vector; provider_scope; loss; failed_work; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |称量真实整份供货，将计量收料与领用及整栋批次关联。真实外购组分与不可加和化验分开。记录原料在制品未分配存货数量及逐交换历史，明示总发生或已调库存净领用。逐作业追踪混凝土准备钢筋网模具浇筑真实振实养护脱模修补接缝装配门通风器安装及涂装。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | 原生 kg；保留真实原始单位 | 每次交付领用及作业 | 全部尝试试验清理及原返还件作业 | 实际制造及供货门 | 每参考流 | 交付 BOM 安全技术资料；供方状态路线；化验；不重叠衔接；可追溯秤与库存历史 |
| cp_utility | manufacture | 每种能量燃料水及载热介质 | 计量区间及供方约定 |row_id; meter; raw_start; raw_end; raw_unit; interval; true_rate; integrated_quantity; T; P; phase; independent_density; enthalpy_in; enthalpy_return; supplier_heat_water_owner; standby; cleanup; lot; inherited_vector; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |对真实准备浇筑养护焊接吊运试验启停空转清理分别采集计量或整份燃料领用。匹配电压地域损耗门，区分速率和累计量。按一个供方约定测每种真实载体总物质量状态及供返热基准，不虚构蒸汽锅炉。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | kg; MJ；如实测则保留原 m3 或速率 | 每个实测计量区间或领用 | 全部纳入真实作业及零产出区间 | 真实工厂及供方交付返还门 | 每参考流 | 校准；真实区间；该物质密度相态；供方包含范围及水热约定 |
| cp_outlet | manufacture | 每股实际废物 | 称量组成及转移联单 |stream_id; origin; gross_wet_mass; solids; water; treatment_provider; destination; actual_treatment; opening; closing; originW; inherited_exchange_vector; segregation_state; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |测实际整股湿流和去向，包括拒收混凝土洗刷水及涂层残余。一股真实混合流只有一个加和总量，来源组分独立实测且不可加和，或采用真实不重叠分流外送。保留滞留湿渣及实际处理负荷，不用产品替代或默认抵扣。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | 原生 kg 及独立组成 | 每次产生库存边界及外部转移 | 全部真实产生且含失败清理 | 真实产生储存及接收门 | 每参考流 | 校准重量；组成样品；真实接收方；总量来源对账 |
| cp_species | manufacture | 真实独立物种水及元素 | 物种特定测量与独立平衡 |species; phase; receiving_medium; gross_in; gross_out; net_transform; carbon_origin; concentration; gas_volume; rate_or_integral; dry_wet_basis; T; P; humidity; independent_reaction; free_water; bound_water; retained_water; element_assay; uncertainty; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |独立鉴定真实分子或颗粒物种，再测浓度及状态匹配的真实气液量。分别独立对账完整湿质量、实际游离结构反应相态水和相关元素；真实交换的大气 O2/N2/Ar/H2O 总腿予以纳入而非当采购。不得由一个残差联立求未知蒸发水化碳化。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | 物种 kg；保留实测原气液单位 | 每条真实路线及实测区间 | 全部实际生产损失治理处理期间 | 真实材料及接收介质边界 | 每参考流 | 物种方法校准；独立水元素化验；保留真实不确定性及未鉴定质量 |
| cp_asset | manufacture | 每件真实整资产部件流体 | 资产库存收料及服务日志 |article_id; new_used; native_count; measured_net_mass; actual_configuration; opening_spare; closing_spare; installed_open; installed_close; receipt; removal; fluid_charge; gross_exit; inherited_vector; actual_service_driver; driver_denominator; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |计数实际配置整件，需质量则独立称量。完整保留新旧修理装机流体的接收及库存变化，与真实分配制造服务向量分开。服务归属须有证据的真实作业容量关系，不默认寿命件重。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 | item; kg；真实流体原生单位 | 每次接收作业移除及库存边界 | 全部实际制造及原批次服务 | 真实工厂资产归属方 | 每参考流 | 登记；真实校准质量配置；实物池；作业证据及唯一次上游计入 |
| cp_packaging | packaging | 每种具体包装及六腿 | 逐件保管及负荷归属 |package_id; material; empty_open; WIP_attached_open; FG_attached_open; reusable_open; P; I; ER; S; EO; W; empty_close; WIP_attached_close; FG_attached_close; reusable_close; actual_moisture; internal_reuse; owner; physical_V; inherited_vector; cohort; H; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_added_removed_wet_composition; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |逐一测每种材料制品及真实外部腿，包括供方内含入料包装。追踪总发运附着及返还，独立核对空件在制品成品复用池和自然水分。抵消内部复用和一笔内部附着转移，维持唯一负荷归属，不重复上游采购。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。 | 原生 kg；独立湿质量及真实件数 | 每条真实腿及库存边界 | 全部制造及实际 Qc/H 服务 | 实际供货工厂保管及外部返还门 | 每参考流 | 六卡全项；总附着重量；独立池闭合；归属复用证据 |
| cp_service | service | 原批次实际服务与成品 | 原放行库存交付返还及增量作业 |original_building_id; original_Qc; H_start; H_end; FG_open; Q_internal; external_return_current_mass; original_delivery_reverse; F_to; F_back; gross_dispatch; FG_close; waste; sample; X_FG_in; X_FG_out; actual_service_raw; inherited_manufacture_vector; unused_service_vector; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; O_FG; C_FG; J_FG_in; J_FG_out; H2O_FG_in; H2O_FG_out; raw_FG_observation_duplicates; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment ; L_FG_in_observed; L_FG_out_observed |按序列追踪原整栋，当前湿实物流、原交付冲回及制造历史分别记录。计量全部已执行服务，包括期末留库成品和真实返工；各真实投入物种废物均按原批次另记。未知未来服务和复验不造 Q。 最终汇总定义：原生广延原始记录保持未除；先对账数量及合理归属，再引用 normalize_once 的同一次操作报告每参考流。 保留完整原始实物量、独立真实负荷向量及各自有供方历史一次；整湿接收 Qt 不是批次份额，原正值 Q0=Qc 与零产出 Q=0 分开。 真实 J_FG/H2O_FG 是独立实物转移，X_in/out 仅为同侧其他精确重复观测，不是实物增量或库存修正。 | kg; MJ；每种真实原生单位 | 每个已观察流动作业事件及 H 边界 | 仅实际经过的观察期 H | 真实厂内放行后账；现场作业另声明 | 每参考流 | 原放行交付标识；可追溯 Qc；当前湿质量；已执行服务日志及完整继承向量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `raw_units` | all inventory rows | 逐项原始观测在归属和除产品前换成真实原生广延单位。kWh * 3.6 = MJ 仅一次。只积分真实实测速率，累计体积已积分。密度须独立匹配该物质状态，原生次级系数不算密度实测。附加几何件数换算须真实配置测量，不设通用房屋重量。 | `raw_observations`; `actual_units`; `observed_intervals`; `independent_state_conversion` | converted_raw | `jrc-ilcd-2010` |
| `attribute_vector` | all inventory rows | 专属细分及合理因果或真实剩余分配后，制造逐交换单位 A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i。B_close_i 仅未放行原料在制品未用未分配非在制品，不含已放行成品。C_i 保留失败 Q=0 启动空转清理试验修补处理全部负荷。声明原总发生或已调库存净领用，不重复调库存。每个实物池与每个继承交换向量独立。原批次 A_service_i_c_H 含真实已执行增量，仅未用未分配存货结转。所有实物流动腿保持独立完整 V_i，不用该负荷差或份额替代。 | `converted_raw`; `B_open_i`; `C_i`; `T_in_i`; `B_close_i`; `T_out_i`; `original_Qc`; `H`; `actual_service_records` | A_i; A_service_i_c_H; V_i | `jrc-ilcd-2010` |
| `normalize_once` | all inventory rows | a_i = A_i / Q_i；制造 Q_i = Q，原批次 H 内真实服务 Q_i = 原 Qc。单独披露实物流时在同一次除法中用完整原生 V_i 替 A_i。Q_i 只除一次，卡片协议聚合引用同结果而不再除。Q_i=0 保留原始记录真实负荷库存，不出单位结果。finished_building 为实测唯一 Q 的固定 1 千克表示，不是第二次生产或归一化。 | `A_i`; `A_service_i_c_H`; `V_i`; `Q`; `Qc`; `H`; `cp_release` | a_i | `jrc-ilcd-2010` |
| `calc_manufacture_gate` | manufacture | O_M + R_M + F_to + J_M_in + H2O_M_in = C_M + Q_internal + F_back + E_M + J_M_out + H2O_M_out。各项均为制造门完整真实湿 kg。O_M/C_M 含原材在制未放行非在制及本门内真实生产资产安装液体；台群是这些实物量的非加和子账。本门排除另归属包装池及净已接受成品状态。R_M/E_M 为本门互斥完整真实入出跨界，每事件标明前景外部或真实配对内部转移，材料公用气体接收废物和真实资产零件液体各一次。Q_internal 为唯一新建筑首次放行净质量交接，F_to/F_back 为原成品作业交接，不是新生产。J_M/H2O_M 为独立实测且未内含整腿的真实非水水跨界，不配残差。真实内部转移均有源目的地标识配对，在前景总账抵消一次，仅前景外部事件保留为入出流。总质量元素闭合不推各反应物种守恒。 | `O_M`; `R_M`; `F_to`; `J_M_in`; `H2O_M_in`; `C_M`; `Q_internal`; `F_back`; `E_M`; `J_M_out`; `H2O_M_out` | manufacture_physical_reconciliation | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `calc_fg_gate` | service; packaging | O_FG + Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in = C_FG + G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out。O_FG/C_FG 含全部真实净湿已接受建筑在厂状态：放行、隔离保留、维修返工、内部使用，成员互斥，独立于原 Q0=Qc 权益。净建筑状态排除包装和生产资产。Q_internal 与制造配对一次，R_FG 为完整现态外部返还，不是原交付历史冲回。G_FG 为净建筑毛发运，W_FG 和 samples_FG 为真实整湿净建筑出口。J_FG/H2O_FG 是未含于整腿的独立真实非水水转移，含留存新增及无维修自然吸失湿。真实部件转入与源账配对，不重复采购历史。X 仅消重同侧其他精确原始重复观测，不是实物流，不冲 C、Q 或真实增量。包装池含全部空、附在制、附成品和周转状态，T_pack 仅为本池内部附着位置改变，不是另一制造成品入出流。互斥净建筑和包装视图合并时将 Q_internal、F_to/F_back 及其他真实配对内部跨界抵消一次，不再加台群或整制品组分子账。 另用完整 calc_packaging 材质池，再将真实配对内部包装资产转移抵消一次。 | `O_FG`; `Q_internal`; `R_FG`; `F_back`; `J_FG_in`; `H2O_FG_in`; `C_FG`; `G_FG`; `F_to`; `W_FG`; `samples_FG`; `J_FG_out`; `H2O_FG_out`; `cp_service`; `cp_packaging` | FG_package_and_combined_physical_reconciliation | `jrc-ilcd-2010`; `cxt-schweitzer-2023`; `cxt-storage-brochure` |
| `calc_packaging` | 每个真实包装 | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。 | `O`; `P`; `I`; `ER`; `J_in`; `H2O_in`; `C`; `S`; `EO`; `W`; `J_out`; `H2O_out`; `cp_packaging` | packaging_wet_closure | `jrc-ilcd-2010` |
| `water_species_check` | all physical gates | 在每个相态分别独立核对完整湿质量、相关元素及真实分子颗粒物种。用独立试验不确定性区分游离吸附水、化学结合结构反应水、水蒸气、液体出口及滞留湿库存。水化或碳化须独立证据证明真实反应，不是默认吸收排放因子或拟合多未知的残差。COD/VOC/NOx/PM 测量仍为指标，除非独立物种鉴定证明具体交换。 | `wet_mass`; `element_assays`; `actual_species`; `phases`; `free_water`; `bound_water`; `reaction_evidence`; `retained_water`; `liquid_outlets`; `humidity`; `uncertainty` | independent_water_element_species_reconciliation | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | 核实真实产品制剂材料等级路线形态聚合物 CAS 地域相态介质类型及完整原生属性链；采用官方名不等于供方批准，UUID 空缺仍保留单一具体交换。 | 完整原生直读及支持证据；真实 BOM 供方匹配 |
| `dq_gate` | finished_building | 证明具屋面地板全部墙体门通风器及真实完工状态的完整储物建筑，并有真实非预应力焊接接缝图纸。构件或通用现场建造不能确立该门。 | 整件供货资料；实际图纸；完整验收称重记录 |
| `dq_completeness` | all processes | 全部失败零产出区间试验清理返工及真实物理进出口保留，识别缺少的真实卡与未明数量，不报为零。 | 作业库存账；计量对账；不确定性登记 |
| `dq_stocks` | all physical gates | 每个实物库存与每个继承交换向量各自完整；产品包装资产部件流体及真实载体返还保持完整总流动。 | 独立制造成品包装合并门；元素水分试验 |
| `dq_sources` | all rules | 保持来源版本完整适用上下文，制造商数值限值不是清单默认值，不同出版物不是同 SKU。工业制造证据不确立分配。 | 完整原件及有界核验上下文；来源用途判断；归因 ILCD 范围 |
| `dq_period` | service; manufacture | 测真实场址时期配置及原 Qc/H，不编造未来服务配方尺寸密度件重寿命性能良率或排放因子。 | 同期实测记录；真实试验状态及明确缺口 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_complete` | finished_building | 要求真实完整储物建筑门、一致质量 kg、唯一 finished_building 链接、真实首次放行 Q 和不重叠 BOM。原混凝土墙板集装箱或未明现场建筑均不足。真实核心形态工艺证据缺失须保留，普通辅料供方或未来测量缺口本身不改变核心身份。 | `cxt-storage-brochure`; `cxt-schweitzer-2023` |
| `v_once` | all inventory rows | 原始采集保持未除，换算与真实归属先于唯一 normalize_once 除法，卡片聚合引用不再除。要求双语有限检查、真实范围完整和明确 Q=0 处理，未支持关系保留未解决。 | `jrc-ilcd-2010` |
| `v_physical` | all processes | 制造成品包装合并物理门独立于负荷分配检查，含完整湿库存外部总接收返还、全部分子物种介质水相态及真实反应证据。总质量残差闭合不证明两个缺物种或第二个未知水过程。 | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `v_no_duplicates` | all inventory rows | 检查整份制剂制品不重叠衔接、各包装 P/I/ER/S/EO/W 唯一供方归属、混合废物总量与不可加和 originW、物理 V 与服务负荷 A、Q 与原 Qc/H 及唯一真实处理供方。不自动造共产品抵扣重复制造，不删未授权或失败作业。 | `jrc-ilcd-2010` |
| `v_evidence` | all inventory rows | 各采用原生 UUID 须匹配真实完整制品或具体物理化学交换、所有原生身份限定及精确参考属性单位组参考单位链。保留官方中文名、全部限定描述来源及完整规范上下文。持有来源或工程检查不确立科学翻译批准、映射接受、认证或发布。 | `unsd-cpc3-2025`; `cxt-schweitzer-2023`; `jrc-ilcd-2010` |


### 原接受批次与完整实物历史

Q0 表示锁定的正值原首次接受批次质量，Q=0 表示零产出观测，两者不是同一账户。原批次服务使用相同原 Q0=Qc 及观测 H，不形成新质量或第二归一化。

在唯一首次合格整件储物建筑接受事件 e 锁定原批次 c 及原 Q0=Qc=sum(M_e)。M_e 为该事件经校准实测的完整湿态净储物建筑 kg，实际内含部件只计一次，排除包装和测试资产。制造 Q 即所声明制造批次的原 Qc；不得由当前存活质量、净发运、后续重检或干湿变化重算 Qc。失败或未放行 Q=0 保留全部原始负荷，不给归一化结果。期初原料、在制带入实测实物库存及继承交换向量一次；期初已接受储物建筑沿用原 Qc 及制造历史，不形成新采购或新接受。

每个原接受事件按原接受基准拆为互斥的净外部持有、厂内已放行成品、隔离、维修返工在制、内部使用、不可逆销毁或损失部分及其他有据终端处置。各当期和终端份额之和等于原 Qc，与当前湿态实物质量独立。毛发运和毛返还仍为完整实物事件；返还先逆转对应外部持有，再发运只移动同一存活份额。按有据原基准拆分部分损失和存活量，不得将损失水或部件补回存活量又外排该损失。当前湿态库存、蒸发、拆旧换新件及全部实物出口另建守恒桥。谱系或批次归属未知时，完整保留原始总量且结果未决；循环、接受后销毁、重验及失败作业不产生新 Q。

### 整件污染出口与非重叠供方需求

记录真实接收方转移 t，完整湿态整件出口 Qt 仅一次：废建筑制品、包装、擦拭件、棉签、布、过滤件或设备基材，加实际留存溶剂、粉尘、制剂残余及水。干基材、内含化学品和水账是经对账的非加和子项；仅在边界前真实物理分离并有各自转移 ID 后才成为独立外部废物出口。单一混合出口内的包装 W 或拆件来源仅可追溯子项，不形成第二出口或处理需求。真实接收方收据和处理总需求仍为 Qt，与环境归属独立。

依已证明因果需求和分配层级，将环境或服务向量 A_tc 归属不重叠原批次。核对 sum_c(A_tc) 加实际其他功能和未分配向量，等于一次真实供方总需求。实物 Qt 保留于唯一事件账，报告引用它，不得每批次再收费整份事件或按分配比例缩小物理出口。重叠报告间实物 V/D 上下文非加和。处理及服务清单采用独立归属的 A_tc/D，分母为制造 Q 或带观测 H 的原 Qc，不得每批次另加整份 Qt/D。真实归属未知仍未决。供方内含历史或处理与完整展开相应直接清单为互斥表示，不是可加采购。




### 独立制造、成品及包装实物桥

O_M + R_M + F_to + J_M_in + H2O_M_in = C_M + Q_internal + F_back + E_M + J_M_out + H2O_M_out。各项均为制造门完整真实湿 kg。O_M/C_M 含原材在制未放行非在制及本门内真实生产资产安装液体；台群是这些实物量的非加和子账。本门排除另归属包装池及净已接受成品状态。R_M/E_M 为本门互斥完整真实入出跨界，每事件标明前景外部或真实配对内部转移，材料公用气体接收废物和真实资产零件液体各一次。Q_internal 为唯一新建筑首次放行净质量交接，F_to/F_back 为原成品作业交接，不是新生产。J_M/H2O_M 为独立实测且未内含整腿的真实非水水跨界，不配残差。真实内部转移均有源目的地标识配对，在前景总账抵消一次，仅前景外部事件保留为入出流。总质量元素闭合不推各反应物种守恒。

O_FG + Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in = C_FG + G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out。O_FG/C_FG 含全部真实净湿已接受建筑在厂状态：放行、隔离保留、维修返工、内部使用，成员互斥，独立于原 Q0=Qc 权益。净建筑状态排除包装和生产资产。Q_internal 与制造配对一次，R_FG 为完整现态外部返还，不是原交付历史冲回。G_FG 为净建筑毛发运，W_FG 和 samples_FG 为真实整湿净建筑出口。J_FG/H2O_FG 是未含于整腿的独立真实非水水转移，含留存新增及无维修自然吸失湿。真实部件转入与源账配对，不重复采购历史。X 仅消重同侧其他精确原始重复观测，不是实物流，不冲 C、Q 或真实增量。包装池含全部空、附在制、附成品和周转状态，T_pack 仅为本池内部附着位置改变，不是另一制造成品入出流。互斥净建筑和包装视图合并时将 Q_internal、F_to/F_back 及其他真实配对内部跨界抵消一次，不再加台群或整制品组分子账。

O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out。各项均为同一材质或资产池的真实 kg。O/C 为完整湿态期初期末空、附在制、附成品和周转库存。P 为新增外采，I 为互斥供方随货整包装入向，ER 为收到外部返还，S 为随完整毛发运带出，EO 为独立向外返还，W 为整湿废弃物。J_in/J_out 为独立实测且未含于上述整物方向的非水修理、替换、沉积、残留或其他跨池转移。H2O_in/H2O_out 为独立实测且未内含于整物方向的真实水转移，含无修理的自然吸脱湿。真实新增或移除湿材料须按实测拆为互斥 J 和水，不设默认比例或密度。完整 W 已含基材、留存残余及水一次，除非跨界前真实分离，其嵌套子项不另列 J_out/H2O_out。配对内部池转移合并时抵消，不新增采购、服务或 Q。

原始观测对账为 L_in_observed - X_in = P + I + ER + J_in + H2O_in，以及 L_out_observed - X_out = S + EO + W + J_out + H2O_out。L 仅为观测侧汇总，不是额外实物流或供方需求。每个 X 按精确事件、组分、单位和方向映射到同侧其他重复观测，且规范侧已计一次。每项真实 J/H2O 仍保留一次；X 不因留库存而冲真实留存增量、C/O、对侧移动或嵌套 W 子项。原观测互斥时 X=0。内部附着复用不跨边界，内部维修或资产池转入须有源目的地配对账，不能再计采购和继承负荷。未知料水仍未决，不配残差。真实客户在本工厂或服务门之后的处置是另行披露的下游事件，不虚构为工厂 W。



原始门观测对账为 L_M_in_observed - X_M_in = R_M + F_to + J_M_in + H2O_M_in，以及 L_M_out_observed - X_M_out = Q_internal + F_back + E_M + J_M_out + H2O_M_out。成品为 L_FG_in_observed - X_FG_in = Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in，以及 L_FG_out_observed - X_FG_out = G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out。L 仅为观测汇总，每个 X 为同一事件组分单位方向上有记录的同侧其他重复观测，对应真实规范跨界仍一次，X 不冲期初末库存、真实留存增量或参考事件。包装 X_in/out 和成品 X_FG_in/out 是不同池所有的观测，不是实物配平流。真实转移未知保持未决，不用 X 填补。

### 完整可消费适用性段落

#### 来源章节 1 / 1

本 PCR 规定完整工厂装配、以混凝土为主并用于存放货物或物资的储物建筑的一条限定制造路线。它是完整制造的仓储制品，包括混凝土地板、墙体、屋面、钢门及通风器总成、接缝和涂装完工状态。本路线综合 CXT 储物建筑供货证据与完整 Schweitzer 钢筋混凝土制造规格，不声称同一个当代 SKU、工厂订单或通用配方。每份前景数据包均须证明真实完整仓储配置和焊接接缝路线。来源规格亦沿用 vault/toilet 通用措辞，电气为待定且列有可选系统；这些不证明已配齐水暖、电气、保温或达到居住完工。产品册与历史规格的数值设计或性能声明均不自动转入。

#### 来源章节 1 / 2

排除孤立墙板、地板或屋面板、梁柱、管材、鲜拌混凝土、钢骨塑料覆面房舱及货运集装箱；裸壳、敞底设备罩、现场组装套件、现场完工多模块建筑、带集液坑围堵设计、预应力或后张替代路线及配齐水暖电气暖通的建筑均不在本限定路线内。实际不同变体须在同一 PCR 身份内重新完整评估适用性、BOM 和工艺，并增加每项真实原子流，不另建分类叶或材料 PCR。真实变化不得隐藏为零。现场地基、出厂后运输、吊装就位、现场接入及后续使用维护报废属独立生命周期模块；下文仍保留已发生放行后厂内服务。

#### 来源章节 3 / 1

构建前景数据包时，全部必需限定信息须在元数据或等价字段声明；缺项即参考定义不完整。

#### 来源章节 6 / 1

采用供方门的一份实际灰色粉末状水硬性硅酸盐水泥。原生同义词包括普通硅酸盐水泥和 I 型；其砖瓦分类与一致的粉末身份不符，不能据此变成制品。核对实际低碱类型、供方及胶凝掺合料；不得替成水泥熟料、砂浆或整件预制品。外购混合水泥内含组分只计一次。

#### 来源章节 6 / 2

记录实际单独供给的天然细骨料及矿物组成、级配、游离水与吸水量。树脂覆膜砂、粗砂砾及实际地域或工艺不匹配的机制砂均不能替代该天然细骨料供货。

#### 来源章节 6 / 3

仅用于一份外供天然粗砾石。原生身份描述较圆且比砂粗的碎粒，通常大于 2 毫米；这不构成 #67 级配证书或普遍粒径阈值。匹配实际规定的级配、矿物组成和供货状态，不用于机制砂、再生骨料或任意碎石。

#### 来源章节 6 / 4

只用于实际经处理、符合饮用标准的市政管道供水，通用身份不确立当地供方。搅拌、养护、蚀刻、试验和清洗按作业分账保留实测质量。原生次级体积系数不是密度测量。回用水和制剂载水不得再次采购。

#### 来源章节 6 / 5

记录实际整份外购制剂、配方标识及载水和活性含量子账。须为具有自身真实供货身份的整份引气制剂；通用化学混合物或减水剂不能确立该身份。

#### 来源章节 6 / 6

原生产品族明确为水泥基混合物用减水外加剂。实际整份供货制剂及载水、添加组分只采购一次。身份未规定配方、固含量、掺量、ASTM 性能或工厂供方，须独立测量，不得再采购活性聚合物或载水。

#### 来源章节 6 / 7

记录实际钢筋、供货形态及等级，再承接真实冷弯和绑扎。须匹配真实条材或盘卷形态及等级，不将其他材料族固定的低合金成分或轧制路线套到实际 ASTM A615 供货。不得推断预应力、钢筋份额或厂内炼钢。

#### 来源章节 6 / 8

仅用于一件实际铁或钢焊接网格钢筋网，记录钢丝材料与实际 ASTM A185 规格。原生族涵盖编织、焊接及若干常用金属；本卡限定钢制焊接用途，不默认网格尺寸或镀层。外购成网时不得再采购组成钢丝。

#### 来源章节 6 / 9

一件实际外供的板及锚固组合制品，埋入混凝土用于建筑焊接接缝。其内含锚固只在整件内计量；原钢板身份不能证明该供货成件形态。实际改为厂内加工时，须用不重叠原料及全部真实加工负荷，并记录衔接关系。

#### 来源章节 6 / 10

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

#### 来源章节 6 / 11

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

#### 来源章节 6 / 12

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

#### 来源章节 6 / 13

仅在该实际焊接耗材跨界时纳入。保留实际配方组成、供货形态和使用量；焊丝、药皮焊条及每种保护气是分别记录的替代路线或真实共同投入，不合成气体集合或默认焊接配方。

#### 来源章节 6 / 14

用于混凝土接触模具的实际整份外供脱模制剂。供方油性或乳液状态、化学成分及载体须实测，不由普通润滑油推断。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 15

仅在实际使用时纳入整份外供制剂及溶剂、水、固体子账；湿养护本身不证明存在该投入。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 16

墙地面圆角和接缝所用实际整份外购灌浆料。若以单独采购原料厂内配制，应以不重叠的真实原料、制备能耗和损失替代该采购。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 17

实际表面孔洞修补整份材料，失败或未获许可修补的耗料仍保留；不由此授权结构修补或推定已恢复合格。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 18

实际整份弹性接缝密封制剂。聚氨酯填料、泡沫或木地板液体面漆均未证明该供货密封剂身份；树脂与载体不再单独采购。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 19

实际存在时才纳入整份外供粘结涂料，不再采购其内含水泥和细骨料。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 20

实际整份单组分地坪涂料；供货水、粘结剂及添加组分是一次采购。普通室内涂料或木材 UV 涂料不能证明适用性。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 21

实际整份内外表面着色制剂；不同配方另拆卡。模内纹理不等于另购砖饰面。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 22

实际整份透明密封制剂，不与着色剂、聚氨酯或另一防水制剂合并。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 23

仅计实际厂内金属涂装或补漆，排除外购已涂覆门、通风器内含的既有漆。整份供货溶剂与固体以及实际成膜损失只承接一次。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 24

涂装前实际酸蚀时才纳入整份溶液质量、实测浓度及载水子账；本方法不默认浓度或中和配方。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 25

仅记录一份实际外供清洗制剂，供方组成、清洗损失和出口状态须实测；若仅用水清洗，须以证据说明本卡未发生。 化验组分为不可加和子账；实际厂内配制则记录每种单独外购材料及真实能耗和损失。

#### 来源章节 6 / 26

一种真实完整外供镀锌钢门框五金总成，实际内含铰链锁扫条门挡及供方或本地涂饰范围一次；内含件非加和，真实单供件另卡及实测历史。具体整制品 UUID 未决，裸框型材或宽泛名称不替完整供货总成。

#### 来源章节 6 / 27

一件实际外购通风器，在供货范围内包括规定的不锈钢盖、铝百叶、纱网、紧固件和涂层。须记录组成、包含清单及真实装配状态；不再采购内含金属。真实分供时才添加不重叠分件。

#### 来源章节 6 / 28

按作业计量配料、冷弯、振实、焊接、养护控制、吊运、修整、试验和清理用电。电力身份须匹配真实建筑工厂地域、电压、计量及损耗和供方门，其他国家或修复特定作业身份不能证明本实际供电。

#### 来源章节 6 / 29

仅纳入门内真实柴油搬运或加热。原生质量基准燃料未规定牌号、配方、密度、热值、炼制路线、地域或供方，身份不附带数值。实际燃烧及治理物种须独立卡片和证据。

#### 来源章节 6 / 30

仅在真实外供热存在时纳入，实测交付及返还焓，并明确唯一供方水热约定。规格中的寒冷天气供热条件不证明蒸养、锅炉或本交换；真实载热介质另计物理量，不得再购同一热。

#### 来源章节 6 / 31

仅记录此真实外部产品载热水腿。保留完整实测总质量、液相、温度、压力、焓及供方水热归属，不按热负荷份额缩量，不默认废物。不得预设载热回路或蒸汽，实际其他相态须独立具体卡。

#### 来源章节 6 / 32

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

#### 来源章节 6 / 33

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

#### 来源章节 6 / 34

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

#### 来源章节 6 / 35

条件纳入真实整件外供资产、更换制品或该单一装机流体。分别记录新旧状态、完整物理接收、实测质量以及在用和备用期初期末池，与服务负荷向量独立。复用和当前作业份额不缩实物接收，也不表示每栋新购一次。

#### 来源章节 6 / 36

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

#### 来源章节 6 / 37

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

#### 来源章节 6 / 38

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

#### 来源章节 6 / 39

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

#### 来源章节 6 / 40

仅真实接收或持有的完整设备，按供货配置含零件液体一次，保留完整期初收货在用期末质量件数；供方服务需求、实际工作维护历史及兼容单位另账。此条件身份不是必需设备清单、寿命、产能或每建筑 kg 一台机器。

#### 来源章节 6 / 41

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

#### 来源章节 6 / 42

一种真实单供耗用擦拭基材，独立于复用清洁布台群及单供清洁剂；记录组成、水分和毛领用。

#### 来源章节 6 / 43

仅已绑定处理自来水身份之外真实独立供给的非饮用水牌号，保留完整状态水质、真实混凝土工艺准入、独立密度质量；内部回用水是配对池转移，不再外购，不借饮用水身份或次级系数代另一水。

#### 来源章节 6 / 44

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 45

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 46

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 47

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 48

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 49

仅记录此真实外部产品载热水腿。保留完整实测总质量、液相、温度、压力、焓及供方水热归属，不按热负荷份额缩量，不默认废物。不得预设载热回路或蒸汽，实际其他相态须独立具体卡。

#### 来源章节 6 / 50

采用的原生产品族明确包含仓库，是工厂制造成品且以质量为参考。本卡仅为具屋面、地板、全部墙体、已装门和通风器、接缝涂装状态及真实供货完工清单的完整工厂混凝土货物储存建筑，不是构件、现场地基或已安装建筑交付。其更宽建设分类予以披露；仓储产品语义与制造成品状态正面匹配本限定整件。其他商业用途及非仓储设备罩不属本选定核心。

#### 来源章节 6 / 51

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

#### 来源章节 6 / 52

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

#### 来源章节 6 / 53

仅真实对外转交返还的完整仍可用制品，按现态配置保留完整质量件数、安装液体零件一次，独立于真实服务负荷，不推转售或避免制造；内部台群转移配对抵消。

#### 来源章节 6 / 54

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

#### 来源章节 6 / 55

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

#### 来源章节 6 / 56

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

#### 来源章节 6 / 57

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

#### 来源章节 6 / 58

仅真实完整仍可用外部转交返还及其完整实测状态，不用分配服务份额或自动避免生产抵扣；自有继承历史和配对内部台群交接另存。

#### 来源章节 6 / 59

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

#### 来源章节 6 / 60

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 61

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 62

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 63

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 64

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 65

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 66

记录实际分流废物出口的完整总量、接收处理供方、当前湿组成及来源。只有真实单独收集出口才使用本卡；已在 mixed_waste 内的物料仅为不可加和来源子账，不重复外送。实际处理、滞留残渣和回收负荷仍须保留。

#### 来源章节 6 / 67

记录真实外送且单一处理供方的一股混合建筑材料废物。须采用真实混合建筑材料的实物身份及接收门，不将真实废物混合流替成生活垃圾、产品流或处理服务名称。整股实测混合质量仅加和一次，独立实测 originW 组分为不可加和子账；或改用实际分流出口。不得默认填埋或处置收益。

#### 来源章节 6 / 68

仅真实整件污染退役，基材安装残余和水一次；已在共收整湿 Qt 内的组分为实测非加和来源，不另出口或新增处理需求。真实分离件另有转交标识和互斥量。

#### 来源章节 6 / 69

仅真实整件污染退役，基材安装残余和水一次；已在共收整湿 Qt 内的组分为实测非加和来源，不另出口或新增处理需求。真实分离件另有转交标识和互斥量。

#### 来源章节 6 / 70

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

#### 来源章节 6 / 71

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

#### 来源章节 6 / 72

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

#### 来源章节 6 / 73

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

#### 来源章节 6 / 74

真实整件污染转交，制品基材安装残余水一次，完整毛实物 Qt 独立于非重叠环境服务 A 向量；若混合出口已含它，只保留非加和来源，不另出口。

#### 来源章节 6 / 75

仅本真实复用制品及所指真实收货、可用转交或整件污染退役事件；实物台群和真实清洗服务历史独立，不设复用次数寿命或每清洗新增采购。整湿弃物含基材、留存制剂和水一次。

#### 来源章节 6 / 76

一个真实单独整湿擦拭物出口，含基材、捕集混凝土涂料制剂及水一次；若真共收至 mixed_waste，仅保留实测非加和来源，不另 Qt 或供方需求。

#### 来源章节 6 / 77

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 78

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 79

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 80

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 81

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 82

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 83

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 84

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 85

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 86

仅当该物种经独立鉴定并真实跨越空气边界时纳入。记录完整总进出及独立净转化、实际相态介质、干湿浓度和积分基准；实际不同化石、矿物和生物碳源另分。环境载气不作为采购气体。PM、NOx、VOC、COD 指标不等于该分子，不能由一个闭合残差识别多个未知量；养护不默认碳化吸碳。

#### 来源章节 6 / 87

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 88

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 89

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 90

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 91

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 92

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 93

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 P 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 94

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 I 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 95

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 ER 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 96

仅真实单供维修材料，不规定发生维修或配方；完整毛收货、备品留存湿库存和唯一负荷所有者保留。真实转入包装池按互斥实测非水 J_in 和 H2O_in，内部源目的地配对，不再采购。

#### 来源章节 6 / 97

仅真实单供维修材料，不规定发生维修或配方；完整毛收货、备品留存湿库存和唯一负荷所有者保留。真实转入包装池按互斥实测非水 J_in 和 H2O_in，内部源目的地配对，不再采购。

#### 来源章节 6 / 98

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 99

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 100

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 101

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 102

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 S 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 103

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 EO 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 104

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生薄膜是 CAS 9002-88-4 聚乙烯，不是 PET 或复合膜；不一致的箱包分类予以披露。

#### 来源章节 6 / 105

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。原生族是成品便携木质搬运平台，记录单一实际托盘的组成、紧固件和水分，不替成原木或整栋房屋重量。

#### 来源章节 6 / 106

按完整 calc_packaging 保留互斥 J_in/J_out 和 H2O_in/H2O_out、整湿 O/C 及真实六方向；无修理也可自然吸脱湿。X 仅消重同侧其他重复观测，不冲 C 或真实增量。 只纳入该单一包装的真实 W 腿。保留完整原生总量与独立实测湿物质量，完整记录空包装、附着在制品、附着成品及可复用池期初期末。P 只采购一次；I 只承接一个上游归属而不再采购；ER/EO 为真实返还，S 跟随总实物发运而非产品净 Q。内部复用抵消；W 为真实废物出口而非共产品。实际钢带是具体制品，其合金及表面状态须供方证据。

#### 来源章节 6 / 107

仅真实分离拆下后作为废物导出的完整件，基材残余水一次；用互斥 J_out/H2O_out 或完整 W，不兼列；若仍在整托盘混合整湿 W 内只留非加和来源。

#### 来源章节 6 / 108

仅真实分离拆下后作为废物导出的完整件，基材残余水一次；用互斥 J_out/H2O_out 或完整 W，不兼列；若仍在整托盘混合整湿 W 内只留非加和来源。

#### 来源章节 6 / 109

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

#### 来源章节 6 / 110

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

#### 来源章节 6 / 111

原 Qc/H 下真实已发生包装、仓储、搬运、发运、复验和增量返工用电，留库成品的已执行服务仍保留。未知未来服务不算已发生；独立核实真实供方、电压、地域及边界，其他来源特定作业身份不能确立本实际供电。

#### 来源章节 6 / 112

仅计已执行放行后服务的实际经处理饮用标准市政用水。保留原生质量，若量测体积须独立实测换算；保留原 Qc/H、真实废水及湿库存，不再次采购制剂载水。

#### 来源章节 6 / 113

仅计原 Qc/H 下真实增量柴油服务，不默认运输距离。原生质量燃料未规定牌号、配方、密度、热值、炼制、地域及供方；独立测量，并在相同原批次下新增全部真实燃烧物种及出口。

#### 来源章节 6 / 114

同一整件工厂制造储物建筑在原生仓储产品族下的纯实物流动账；保留屋面、地板、墙体、门、通风器和实际完整性限定。用原批次 Qc 及实际观察期 H 记录当前湿态完整实测质量 V。原放行身份、原交付冲回及继承历史另存，不造新产量、采购、旧制造重计或返还收益。实际为废物的受损材料须用废物卡。

#### 来源章节 6 / 115

仅计原批次实际成为一股单独处理废物的材料。完整记录湿实物质量、真实混合组成及唯一处理供方，不复用产品 UUID，不重复已记录混合流的来源组分。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 单一配置完整混凝土储物建筑制品从摇篮到工厂首次放行清单，已发生原批次服务另披露 |
| allowed_use | 仅在真实产品工艺供方测量质量范围匹配整件且真实数据经审查后使用 |
| excluded_use | 构件或鲜拌混凝土清单；现场建筑交付；居住能耗防火认证；全 CPC 覆盖；默认工厂配方寿命；未观察未来服务 |
| required_metadata | 全部必需限定信息；实际配置 BOM 完整放行；上游废物门；原 Qc/H；每项原生身份限定 |
| required_quality_disclosure | 真实试验及未明数量供方；来源特定综合；库存物种闭合不确定性；科学翻译审查状态 |
| update_trigger | 混凝土钢件供货配方变化；新增预应力保温机电或现场完工路线；完整门变化；供方属性来源变更；新前景实测证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UN Statistics Division. CPC Version 3.0, Structure and Explanatory Notes, 30 June 2025, class 3870 and subclass 38704; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别上下文：以混凝土为主；更宽类别含具有基本特征的不完整建筑，本路线明确选择完整工厂制品。 |
| `cxt-storage-brochure` | `handbook` | CXT / L.B. Foster. Multipurpose and Utility Buildings, complete four-page publisher brochure, undated retained edition, pages 2–4; https://lbfoster.com/assets/brochures/cxt-utility-buildings-4page.pdf | 完整储物建筑供货正面证据；相邻敞底设备围堵后张及可选保温电气暖通上下文分别保留。照片不是实测 BOM 或几何。 |
| `cxt-schweitzer-2023` | `handbook` | CXT Incorporated. Schweitzer Multipurpose Building Specifications, revised February 2023, complete 8 pages, especially sections 5–9; https://www.lbfoster.com/assets/datasheets/cxt-precast-buildings/schweitzer_multipurpose_specs-v5.pdf | 真实混凝土准备钢筋浇筑条件自密实养护修补焊缝外供门通风器涂装试验与安装界限的技术综合。通用 vault/toilet 措辞及电气待定不证明同一配齐储物 SKU，不转用数值配方性能。 |
| `easiset-2008-alternatives` | `handbook` | Easi-Set Industries / Shea Concrete. Easi-Set Precast Concrete Buildings, Pre-Assembled or Field Assembled, Section 13120, December 2008, complete 5 pages, sections 1.01, 2.01 and 3; https://sheaconcrete.com/wp-content/uploads/2024/04/standard-specs-1.pdf | 独立制造商反例：预组装与现场装配、后张屋面地板及膜材替代、独立现场准备。不证明 CXT 储物建筑具有这些选项或同一配方订单。 |
| `jrc-ilcd-2010` | `official_guidance` | European Commission JRC. ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, First edition March 2010, sections 7.9.2–7.9.3, PDF pages 275–292 / printed 255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅需要分配的归因情形：真实虚拟细分、逐交换决定性物理因果及真正剩余共同过程同状态过程门市场价值。不是工业配方证据或全面 ILCD 批准。 |
