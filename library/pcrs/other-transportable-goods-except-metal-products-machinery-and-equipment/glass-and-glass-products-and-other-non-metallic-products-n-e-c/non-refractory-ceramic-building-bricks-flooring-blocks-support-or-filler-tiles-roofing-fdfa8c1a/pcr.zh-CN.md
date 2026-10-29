---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-ceramic-building-bricks-flooring-blocks-support-or-filler-tiles-roofing-fdfa8c1a
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 塑性挤出烧结黏土建筑砖制造

## 1. 范围与适用性

本归因制造方法覆盖一个明确品级、完整非耐火、未施釉且无外加化妆土/表面涂层的黏土建筑砖：从真实未烧原料供货形态开始，保留厂内破碎/筛分/混配/陈化、加水练泥、实际真空脱气、塑性挤出和切坯、装载及干燥、燃气隧道窑烧成和受控冷却、卸窑、实际机械整理、分级和规定质量检测，直到唯一首次质量放行。真实进料运输、控制设备、公用工程、工具/耐材服务、失败/零产出、启停/待机/清理及返工均纳入；后续包装和成品服务单独归属原队列。此为透明技术综合，不假称同一SKU、同厂配方或一个当代订单记录。

排除耐火硅质/镁质/铝硅质砖、树脂结合未烧制品、硅藻土保温制品、砌块类水泥/混凝土/蒸压制品、釉面餐厨器、墙地面瓷砖、屋面瓦、管道及专用烟道件、生坯和单纯开采黏土作为参考终端。外加釉层/化妆土/防水涂层、主动造孔配方、软泥模制和干压路线须重核适用性。不能以外购成砖包装替代本完整制造。来源中屋面瓦和其他炉型是反例，不移植配方、窑温、热耗、排放、强度或寿命数值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-ceramic-building-bricks-flooring-blocks-support-or-filler-tiles-roofing-fdfa8c1a |
| classification_refs | CPC 3.0 37350；narrower；当前接受关系及决定以`classifications/mappings/cpc-3.0-to-pcr.yaml`及其引用ADR为准，不表示整类覆盖或科学/翻译批准 |
| covered_products | 一个品级完整未施釉塑性挤出烧结黏土建筑砖 |
| excluded_products | 耐火砖; 未烧树脂结合砖; 混凝土砖; 瓷砖; 餐厨器; 屋面瓦; 未烧坯; 开采黏土 |
| representative_product | 首次质量放行的完整非耐火黏土建筑砖品级 |
| production_route | 未烧来料; 完整备料; 加水练泥/脱气; 挤出切坯; 干燥; 燃气隧道窑烧成; 冷却; 整理/检验 |
| market_state | 声明几何及孔洞的完整已制造烧结砖; 不含包装; 不声称安装后功能寿命等价 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为后续砌筑提供一个声明规格的完整建筑砖产品 |
| How much | 1 千克完整砖件的质量当量 |
| How well | 按真实材料/几何/孔洞及质量检验规范放行; 不指定通用等级 |
| How long or cycle | 一次唯一首次质量放行生产队列; 原队列服务H另披露; 不给定砌体寿命 |
| reference_flow_link | finished_bricks |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实黏土矿床及整份供货形态; 矿相组成与碳酸盐/有机碳来源; 游离水和结构水证据; 坯料配方及真实逐项添加物; 非耐火建筑砖终端; 塑性挤出与切坯配置; 真实烧后几何及孔洞; 未施釉且无化妆土或表面涂层; 干燥及燃气隧道窑路线; 真实热回收与辅助燃烧边界; 烧成气氛及实测热历史; 实际整理和质量检测规范; 真实强度及吸水率结果; 唯一首次质量放行ID及队列Q; 校准净产品质量与含水基准; 完整失败/待机/返工及在制继承向量; 真实供方及每个原生流限定; 所有真实物种与外部去向; 资产服务基准与实物存量分开; 包装实物总收存平衡; 原队列服务时窗H及Qc; 分配目的与特定证据; 不等同安装后使用寿命性能 |

必需限定逐项进入数据集元数据、参考流备注或等效可消费字段。Q采用校准净称重，含水基准明确，排除包装；参考为完整砖件质量当量，不声明单块重量、密度、面积或寿命。原生为成型/烧制/冷却后的已制造产品族、工厂生产混合、砖焙烧路线，无CAS、固定材料配方/地域/等级；其硅质土分类瑕疵须与物理字段区分。结合primary限定为本完整非耐火黏土建筑砖终端，原生身份不证明供方数量或性能。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_release校准净称量取得完整砖首次放行Q，剔除包装；不按件数或体积猜质量，不扣已放行期末成品。 |
| native_numerator | all inventory rows | row-declared extensive property | row-declared native unit | 逐行保留原生广延单位，千克规则不套用MJ/千瓦时/立方米/吨千米；真实速率积分一次、累计量不再积分。 |
| electricity_units | electricity; service_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原千瓦时，按精确单位换算乘3.6得MJ；不将电力记为质量。原生限CN低于1千伏用户侧电网平均组合。 |
| gas_state | natural_gas | Volume | m3 | 声明实际或标准状态；载体质量、密度、组分及热量另独立测量，不用甲烷CAS冒混合燃料或用次属性猜密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实矿门未烧黏土供货; 实际运输及全部厂内制造 |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | CPC 3.0:37350; narrower complete clay building-brick route |
| recursive_input_rule | 外购同类成砖用于工具/熟料或其他用途应按真实角色和继承负荷记录，不递归再造相同制造，不替代参考终端。 |
| upstream_dataset_requirement | 真实各供货形态、开采制备、运输及公用工程供方数据; 不能从身份UUID推数量或供方适配 |
| disclosure | 首次放行Q; 原料/在制/成品分账; 全部运行模式; 逐流物理门; 包装资产服务; 原队列H/Qc; 真实缺失与不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | 纳入真实黏土接收/运输、存储、破碎/筛分/混配/陈化、加水调湿和练泥、实际抽真空脱气、塑性挤出/切坯、装载、干燥、燃气隧道窑烧成/冷却、卸窑、实际机械整理与检测，直到首次质量放行。来源描述通用路线，不是某厂配方。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_supply | each incoming product | 对真实黏土及其他每个产品保留开采和供方制备上游。声明矿门/到厂供货、实际运输及厂内作业；供方破碎不能删去真实厂内破碎。不能用外购成砖包装替代制造。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_manufacture_stock | manufacture | 逐交换保存期初期末原料、各物理工序在制品及未归属非在制物料存储的继承负荷向量。保留全部失败、零产出、启停、热保温、待机、清理与真实返工。制造Bclose排除已首次放行成品，其制造负荷仍随Q保留；实物质量存量仍纳入全部成品。 独立计量各原料WIP非WIP期初期末实物量，与完整继承交换向量分开。区分存量修正前毛接收入池和已扣存量消耗，保留已包含修正，不对相同原料存量重复修正。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_service | service; combined | 保留观察H内真实放行后包装、仓储、搬运、发运、退回、重验及增量返工，归属各原队列Qc。交付/重验/再次放行不产生新Q。合并时制造至服务内部Q转移抵消一次，不把Q及其期末成品同时作两个生产输出。历史期初成品保留原制造负荷，不重归本期制造；未观察未来服务须披露。 实际放行后修复重磨复烧须有适用制造商/规格许可、声明砖品级路线继续适用、真实新增移除部件材料及自由结合水、规定作业后试验及验收或废弃处置。原成形/废品回用依据不是失效已放行砖可恢复的许可。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_atoms | all inventory rows | 每卡为一个真实供货材料/制剂/物品、一个废物流或一个真实环境物种/物理颗粒流。整份制剂只采购一次，分析组成、载水及有效含量仅作子账。厂内真实配制须逐一保留外购组分、能耗和损失。实际遗漏交换逐项识别新增，不用泛其他集合、暗藏零值或推定不存在。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_species | manufacture; physical gates | 总实物质量及相关C/H/O/N/S/Cl/F/矿物元素独立于真实物种和反应证据核对。分别测量游离水、释放/固持结构水、燃烧反应水、冷凝水和蒸气。烧失量、COD、TOC、VOC、NOx、总金属及粒径不证明分子质量；一个残差不能解两个未知。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_energy | each utility | 电力、整份燃料混合物、热与载体质量区别记录。保留原始广延单位及真实计量状态，仅对真实速率积分。外供蒸汽/热水/返还须有真实质量、热力状态及供方水能约定。内部回收热和载体转移抵消；不虚构锅炉，不在整份供方清单外重复其属性。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_pack | each packaging material; manufacture; service | 逐包装材质/设计/所有权：期初空包+附着在制+附着成品+可复用存量+采购P+首次独立外部非购入N_ext+随供货收到包装I+真实收到外部返还ER+X_in=相应期末存量+随实物总发运外出包装+对外返还+废物+X_out。逐去向、含水和附着残留分别保留。内部复用抵消，不再采购、不计砖Q、不自动共产品或抵扣。实物总收存不得按经济分配缩减。 实际维修或水分变化若未计入其他实测收发流项，则分别在流入流出增加独立实测X_in、X_out。数据完成前各真实新增移除材料部件和水相均命名为具体原子交换。仅与其他流项去重，绝不对期初期末存量去重：实际留存水维修料同时保留真实流入和完整期末湿实物质量，实际移除同时保留真实流出和完整期初存量。计量整件收发已含材料水在该流项计一次，不另加X。独立核对干物质水、来源相态去向及每个继承负荷向量，不由残差拟合未知、不假定吸水维修或干木材木种、不按分配缩实物量。供方已含包装负荷不重复采购。 P为真实有偿取得的本整件包装（新件或旧件，含有证据的整包价有偿取得）；N_ext为首次独立从外部借入、租入或受托接收而未购买该整件的入口，租赁/服务费不是整件采购。各真实入口只归一类：P和N_ext用同一材料独立入口卡的分开事件子账，I用随货卡，ER用返还卡。附在另一供货实物且供方已含负荷的包装仍归I及一个上游负荷归属者，不因交付总价含包装再拆出P。ER须证明同一已识别实物先前经S或EO离开本保管池，关联所有者、保管者、原队列及先前外送事件；无此历史的首次独立借入是N_ext，绝非ER、期初存量、内部复用或X。逐交换保留完整先前V/A/provider向量、原生广延数量单位、整件/组分包含边界、门、状态、相态、介质、期间及原历史；未知先前负荷仍未知而非零，定量使用前核实真实供方约定。保留完整毛S、EO、W及存量，真实运输及服务增量归原Qc/H各计一次，原制造及供方已含负荷各计一次。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_assets | each asset and component | 整机/窑/窑车/模口/耐材实物存量、新旧增加、维修、拆除、含水及设备内流体独立于当期服务负荷核对。采集真实服务历史和可归属需求，不设固定寿命、不按每千克计一整资产。整机组件保持子账，真实另购更换件及废零件各列交换。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| b_output_gate | manufacture; service | Q仅为新增首次质量放行的完整合格建筑砖净千克，不能用扣退回净发运、面积、生坯或全部窑装量。净交付须另有方法，完整处理G/R总收发、原交付专属负荷逆转D_rev、独立变化质量/水/损失及增量返工，不能塞入本首次放行分母。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整备料到首次质量放行 | required | 全部真实工序及模式 | manufacturing | finished_bricks; unique first-release Q |
| service | 原放行队列包装及成品服务 | required | 观察H内全部真实放行后事件 | original_cohort_service | original Qc; no new output Q |

制造过程为复合边界，仍需逐步测量：接收/储存→破碎筛分及真实陈化混配→加水练泥/真实脱气→挤出切坯→干燥→装窑/烧成/冷却→卸窑及真实整理分级/检测→首次放行。每阶段保留原始子表计、在制物理状态和逐交换继承向量；内转生坯/干坯/未放行烧后砖不成为额外参考产量。每卡描述及第5/7/8节共同构成该卡完整适用上下文。条件真实不发生须有证据；下列不是固定配方清单，实际新原料/部件/服务/气体/去向须原子新增，不能藏于其他集合。

### 过程：完整建筑砖制造（`manufacture`）

#### 输入

##### 产品流

###### 建筑砖用未烧结普通黏土（`clay`）

一个实际矿床品级的整份外购黏土，在厂内破碎、筛分、陈化、混配和调湿之前交付。保留湿料总量，独立测定矿相、游离水、结构水、碳酸盐、有机碳、硫、氯与氟；分析组分只作子账，不重复采购。不同交付黏土与供方制备边界分开。 原生为矿区自然黏土混合物、含水铝硅酸盐身份，无固定矿床/地域、CAS或烧成配方。关联真实矿门材料，运输和全部厂内制备另计；不能将外购成品坯料当作此原料。

- 选定流：黏土 `226972bf-eeed-4ec4-a22e-f227e582ca18`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_material 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 砖坯用石英砂（`sand`）

仅限真实另购的调节坯料用砂。保留矿物组成、粒度与湿料供货状态，石英分析量不另采购；本PCR不规定加砂比例。

- 选定流：砖坯用石英砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_material 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 烧结黏土砖碎熟料（`grog`）

仅限真实外供的碎烧结黏土砖熟料；与未烧黏土、混凝土骨料及耐火熟料区别。内部废砖破碎回用转移抵消，但保留破碎能耗、损失及继承负荷。

- 选定流：烧结黏土砖碎熟料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_material 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 液态市政工艺水（`process_water`）

按用途计量实际调湿、清洗和冷却液态用水，核对真实供水地域与处理。香港体积参考自来水及其筛查密度不证明另一工厂的供水；湿黏土自带水仅作子账，不另采购。 原生工艺用水为质量参考、经处理的工业产品，无固定地域、品级、CAS或处理技术。核实真实液态供水与供方处理，内部循环不新增采购；不得移用香港体积参考自来水的筛查密度。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_material 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 交流电（`electricity`）

本产品身份仅限中国境内低于1千伏用户侧电网平均消费组合；参考广延属性为净热值MJ。保留原始千瓦时并按每千瓦时3.6MJ换算。计量备料、挤出/抽真空/切割、干燥/窑风机、冷却、整理/检测和公用工程，并涵盖全部失败及非生产模式；其他电压、地域或发电方式须另核供应。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 气态管输天然气混合物（`natural_gas`）

实际窑炉与真实辅助干燥燃烧器整份交付混合燃气。保留组分、实际/标准体积状态、载体质量、独立密度及低位热值；甲烷CAS与加压CH4别名不能绑定此混合物。窑内回收热是内部转移，不另采购燃料、不自动抵扣。

- 选定流：气态管输天然气混合物
- 流属性/单位：体积 / m3
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 外购水蒸汽（`steam`）

仅限备料或公用工程真实外供蒸汽；保留载体总千克、压力、温度、干度和约定参考态热量MJ。一份供方采购，不重复水与热清单；不假定存在蒸汽系统。

- 选定流：外购水蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 外购液态供热水（`hot_water`）

仅限实际外供热液态水，测定载体质量、供回温度及焓；内部循环抵消，不虚构锅炉。

- 选定流：外购液态供热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 公路货物运输服务（`freight`）

实际外购入厂公路货运，保留批次载荷、距离、车辆/载荷状态及空返处理；吨乘千米为服务，不增加砖实物质量。矿山负荷属上游，除非开采真实纳入声明前景。

- 选定流：公路货物运输服务
- 流属性/单位：货物运输服务 / t km
- 数量规则：引用第8节对应过程的本行单一最终商；cp_transport 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 完整燃气隧道窑（`kiln`）

完整窑炉新旧实物存量与可归属服务负荷、实际运行燃料分账；不设固定寿命，不按每千克砖计一整窑。

- 选定流：完整燃气隧道窑
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 完整黏土真空挤出机（`extruder`）

追踪真实设备增加、在装存量、维修和退役，运行电力另计；每种真实外购更换件单列身份与质量。

- 选定流：完整黏土真空挤出机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 完整箱式砖干燥器（`dryer`）

仅限实际箱式干燥器的结构与存量；真实隧道干燥器须另列具体行。热回收与风机为真实运行，不自动推得固定资产负荷。

- 选定流：完整箱式砖干燥器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 完整砖窑车（`kiln_car`）

按组件子账核对真实窑车结构、耐火台面及实际在装流体。整车已含台面时不重复采购；真实另购维修件单列原子交换。

- 选定流：完整砖窑车
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 黏土砖用钢制挤出模口（`die`）

一个实际钢制模口结构与配置，记录存量、更换、磨耗和废弃；工具服务分配不得缩减实物增加或废物总量。

- 选定流：黏土砖用钢制挤出模口
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 钢制切坯丝（`cutting_wire`）

记录真实整份供货切坯丝、新旧存量及更换事件；整根切丝采购后不再重复原钢材。

- 选定流：钢制切坯丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 铝硅质窑衬砖（`lining`）

仅限真实耐火窑衬品级；组成、游离/结构水、在装存量、新旧修补投入与拆除分别记录。此消耗品不是待售非耐火砖产品。

- 选定流：铝硅质窑衬砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 矿物润滑油制剂（`lubricant`）

一个整份真实供货油品，用于挤出或维修。组成只作子账；逐去向保留设备内期初期末存油、补加、泄漏及回收油，不假定全部燃烧。

- 选定流：矿物润滑油制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 聚酯除尘滤袋（`filter`）

一个真实完整滤袋，截留矿物粉尘与滤袋聚合物分开；其他真实滤材结构另列行。

- 选定流：聚酯除尘滤袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_m 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_m`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 氢氧化钙干法吸收剂（`lime`）

仅限真实干法烟气处理吸收剂。整份供货制剂计一次，含水与有效组分只作子账；不凭文献流程图假定装置存在或脱除效率。

- 选定流：氢氧化钙干法吸收剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_material 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 基本流

###### 环境进气中的分子氮（`nitrogen_in`）

燃烧/通风真实N2进气，保留气体组分与状态；不是外购氮，也不是以N计总氮。不在各物种外再加总空气。 原生Elementary为分子N2，CAS7727-37-9，空气资源输入，Mass/kg。仅用于此进出门实际实测气态分子，不代工业Product气、液体离子同位素专属别名或总氮NOx指标；独立保留毛进出及实际转化，不叠加总空气或假定组分密度。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 环境进气中的分子氧（`oxygen_in`）

真实O2进气，独立于燃烧消耗及排气测定；不得从NOx指标反推单一物种。 原生Elementary为分子O2，CAS7782-44-7，空气资源输入，Mass/kg。仅用于此进出门实际实测气态分子，不代工业Product气、液体离子同位素专属别名或总氮NOx指标；独立保留毛进出及实际转化，不叠加总空气或假定组分密度。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 进气中的天然非放射性氩（`argon_in`）

真实进气天然Ar，不用放射性同位素气体代替。

- 选定流：进气中的天然非放射性氩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 进气中的水蒸气（`humidity_in`）

由实测湿度/露点与气态记录取得真实气态H2O进气；与外购液态水及黏土结构水分开。

- 选定流：进气中的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 进气中的大气二氧化碳（`ambient_co2`）

实际进气原有大气CO2与新生成化石/矿物/生物碳分别记录。

- 选定流：进气中的大气二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

#### 输出

##### 产品流

###### 烧结砖（`finished_bricks`）

塑性挤出、切坯、干燥、烧成、冷却、实际整理及规定质量检测后的一个完整非耐火未施釉黏土建筑砖品级。原生身份为成型/烧制/冷却后的已制造产品，无CAS、固定地域或配方；不是未烧坯、耐火砖、屋面瓦或混凝土砖。将这一物理相容产品族限定于本终端及真实材料/规格。Q为唯一首次质量放行的净千克，包含声明含水，排除每种包装。 原生产品为工厂生产混合、砖焙烧路线，经过成型/烧制/冷却，别名为烧结/窑烧砖，无CAS、固定矿物配方、地域、性能等级或单件质量。其硅质土制品分类为分类瑕疵，物理字段未规定硅藻土或耐火组成。仅用于primary证据限定的完整黏土建筑砖终端，绝不从分类单独推断路线或适配性。

- 选定流：烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_release`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 退回蒸汽供方的液态冷凝水（`condensate`）

仅限真实外部产品返还，测量质量、温度、压力及约定焓参考；不得默认环境排放、第二次采购水或自动抵扣。

- 选定流：退回蒸汽供方的液态冷凝水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 退回供方的液态供热水（`heatwater_return`）

仅限真实外供热水载体返还，内部换热循环抵消；明确供方水能约定。

- 选定流：退回供方的液态供热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_energy 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 废物流

###### 湿未烧黏土砖坯废料（`unfired_reject`）

在内部边料/返工转移记录后，计真实外排湿生坯废料；保留实测含水和逐交换继承负荷。内部回用不是共产品或新原料采购。

- 选定流：湿未烧黏土砖坯废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废弃烧结黏土砖（`fired_reject`）

窑烧/冷却/整理后真实废砖，包含失败与零产出批次。若作为独立合格共产品出售，须明确输出及分配证据，不自动抵扣。

- 选定流：废弃烧结黏土砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 截留未烧黏土粉尘（`captured_clay`）

一个真实备料截留粉尘物流，测定含水与组成。内部回用转移抵消，外部处置保留废物；截留量不再重复作空气排放。

- 选定流：截留未烧黏土粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 截留烧结黏土磨削粉尘（`captured_fired`）

仅限真实成砖校准/整理截尘；此相态与组成同未烧黏土粉尘和耐材磨耗分开。

- 选定流：截留烧结黏土磨削粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 含黏土废水处理污泥（`sludge`）

一个真实脱水含黏土污泥流。保留湿总质量、独立干固体、组成与水；不得用一个残差同时求未知固体与水。

- 选定流：含黏土废水处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 黏土工艺液态废水（`wastewater`）

一个真实转交的工艺液态废水混合物流，测量体积及独立密度/组成；COD和总元素是指标，不能虚拟化学交换。不同真实物流及去向分别记录。

- 选定流：黏土工艺液态废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废氢氧化钙烟气吸收剂（`spent_sorbent`）

仅限真实废吸收剂混合物；保留已反应/未反应相、捕集物种、含水及去向。此为实测废混合物，不能沿用新试剂身份。

- 选定流：废氢氧化钙烟气吸收剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废聚酯除尘滤袋（`spent_filter`）

真实废滤袋聚合物同附着粉尘子账分开，避免整份载尘滤袋与其粉尘重复。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废矿物润滑油（`spent_oil`）

真实收集废油去向，保留含水/污染及设备内存量；泄漏入环境须另列真实物质/介质。

- 选定流：废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废铝硅质窑衬砖（`spent_lining`）

分别测量真实拆除耐材组成、含水及夹带烧结黏土沉积物；拆除实物不得乘服务分配比例。

- 选定流：废铝硅质窑衬砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废钢切坯丝（`steel_scrap`）

真实退役切坯钢丝，同废模口或整机区别。每种其他真实零件均凭组件与服务记录另增废物行。

- 选定流：废钢切坯丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_waste 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 基本流

###### 化石燃料氧化二氧化碳（`co2_fossil`）

真实化石燃料及实际化石润滑油碳生成的分子CO2排入当期空气；排除大气原有穿透量和矿物碳酸盐CO2。

- 选定流：化石燃料氧化二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 矿物碳酸盐分解二氧化碳（`co2_mineral`）

按独立测定矿物碳及反应/固持证据取得真实碳酸盐源CO2；不能等同全部烧失量，也不能再作化石燃料排放。

- 选定流：矿物碳酸盐分解二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 原料生物碳氧化二氧化碳（`co2_biogenic`）

仅限独立证据支持的真实生物碳；黏土有机碳不自动视为生物碳，不假定造孔剂或抵扣。

- 选定流：原料生物碳氧化二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排气中的分子氮（`nitrogen_out`）

包含穿透量的真实N2总排气，与NO、NO2及总氮指标区别；大气穿透量在影响报告中另行核对。 原生Elementary为分子N2，CAS7727-37-9，未细分空气排放，Mass/kg。仅用于此进出门实际实测气态分子，不代工业Product气、液体离子同位素专属别名或总氮NOx指标；独立保留毛进出及实际转化，不叠加总空气或假定组分密度。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排气中的分子氧（`oxygen_out`）

按干湿气态基准实测残余O2，不能仅凭理论总空气推断。 原生Elementary为分子O2，CAS7782-44-7，未细分空气排放，Mass/kg。仅用于此进出门实际实测气态分子，不代工业Product气、液体离子同位素专属别名或总氮NOx指标；独立保留毛进出及实际转化，不叠加总空气或假定组分密度。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排气中的天然非放射性氩（`argon_out`）

按实测状态记录真实Ar穿透量，不用放射性同位素替代。

- 选定流：排气中的天然非放射性氩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 未反应大气二氧化碳穿透量（`ambient_co2_out`）

在实物边界配对真实大气CO2进出量，同新生成CO2源账分开；不将其表征为新增化石排放。

- 选定流：未反应大气二氧化碳穿透量
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 干燥器和窑排气中的水蒸气（`vapour_out`）

真实气态H2O，独立区分原料游离水、大气湿度、释放结构水及燃烧反应水；固持/游离/液态冷凝状态分别保留，不得用一个残差同时拟合反应程度和未知水。

- 选定流：干燥器和窑排气中的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的一氧化碳（`co`）

真实分子CO质量和有组织/无组织去向，不是CO2当量或泛不完全燃烧总量。

- 选定流：排入当期空气的一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的一氧化氮（`no`）

仅限真实分物种NO；以NO2当量表达的NOx不能证明NO质量。保留分析检出限及去向。

- 选定流：排入当期空气的一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的二氧化氮（`no2`）

仅限独立分辨的分子NO2，不自动拆分总NOx。

- 选定流：排入当期空气的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的二氧化硫（`so2`）

实测SO2，同原料硫、燃料硫与固持矿相核对；SOx指标不是本交换量。

- 选定流：排入当期空气的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的三氧化硫（`so3`）

仅限真实SO3证据，同SO2及硫酸盐气溶胶分开；不得按任意比例分总硫。

- 选定流：排入当期空气的三氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的氟化氢气体（`hf`）

仅限分辨出的气态HF，总氟、颗粒氟化物或其他氟物种不能改名HF。

- 选定流：排入当期空气的氟化氢气体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的氯化氢气体（`hcl`）

仅限实测气态HCl，不是盐酸水溶液或总氯；保留含湿与取样状态。

- 选定流：排入当期空气的氯化氢气体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的甲烷（`methane`）

仅限不完全燃烧、原料有机物或泄漏证据支持的真实CH4；整份燃气采购不再重复为甲烷采购。

- 选定流：排入当期空气的甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入当期空气的乙烷（`ethane`）

仅限独立测定真实C2H6，TOC/VOC不能证明此分子及其质量。

- 选定流：排入当期空气的乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入空气的未截留未烧黏土颗粒（`raw_dust_air`）

一个真实未截留矿物颗粒流，保留实测组成、去向及不重叠粒级。PM2.5包含于PM10，不叠加重叠总量；不从粒径推纯化学物。

- 选定流：排入空气的未截留未烧黏土颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 排入空气的未截留烧结黏土颗粒（`fired_dust_air`）

仅限真实窑炉/整理烧结黏土颗粒，同截尘、生黏土粉尘及耐材磨耗区别。实测含金属物种逐一作为真实交换新增，不由总金属推定。

- 选定流：排入空气的未截留烧结黏土颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_species 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

### 过程：原队列包装与成品服务（`service`）

#### 输入

##### 产品流

###### 可重复使用木质砖运输托盘（`pallet`）

本材料独立包装入口卡记录真实有偿整件取得P（新件或旧件，含有证据的整包价有偿取得）及另行标记的首次独立外部非购入N_ext（借入、租入或受托整件，未采购该整件）。每事件只入一个子账，租赁/服务费不把N_ext变为P；排除I、同件真实ER、期初存量及内部复用。完整湿整件各计一次，按b_pack/cp_pack保留其独立毛原生V及完整先前A/provider/历史向量，同一事件不叠加P与N_ext。实物保管数量为毛流量披露，与真实分配的供应/服务负荷分开。一个真实完整木托盘，声明所有/周转约定及干湿质量；追踪新增采购、收到外返、附着存量、发运、对外返还及废弃。内部重复使用不新增采购。 原生为木材厂木板/木条制木质托盘整件产品、质量参考，无CAS、尺寸、固定地域或寿命。核实一个真实组装木托盘及维修材料。其活动电力分类同物理身份及保留木包装来源分类不符；不得据此替代为电力或原木板。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 聚丙烯砖打包带（`strap`）

本材料独立包装入口卡记录真实有偿整件取得P（新件或旧件，含有证据的整包价有偿取得）及另行标记的首次独立外部非购入N_ext（借入、租入或受托整件，未采购该整件）。每事件只入一个子账，租赁/服务费不把N_ext变为P；排除I、同件真实ER、期初存量及内部复用。完整湿整件各计一次，按b_pack/cp_pack保留其独立毛原生V及完整先前A/provider/历史向量，同一事件不叠加P与N_ext。实物保管数量为毛流量披露，与真实分配的供应/服务负荷分开。一个真实供货PP打包带，按观察包装记录完整品级及质量；不再计树脂颗粒，其他真实带材另列行。

- 选定流：聚丙烯砖打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 聚乙烯砖缠绕膜（`film`）

本材料独立包装入口卡记录真实有偿整件取得P（新件或旧件，含有证据的整包价有偿取得）及另行标记的首次独立外部非购入N_ext（借入、租入或受托整件，未采购该整件）。每事件只入一个子账，租赁/服务费不把N_ext变为P；排除I、同件真实ER、期初存量及内部复用。完整湿整件各计一次，按b_pack/cp_pack保留其独立毛原生V及完整先前A/provider/历史向量，同一事件不叠加P与N_ext。实物保管数量为毛流量披露，与真实分配的供应/服务负荷分开。一个真实PE膜品级、质量及实际包装覆盖情况，不使用面积猜质量或泛包装总量。 原生为工厂整份PE膜产品，CAS9002-88-4、质量参考，无固定厚度、品级、再生比例或地域。备注将PET作为竞争聚酯对比；此处排除PET。箱包分类为分类瑕疵，不能证明该物为袋或成品箱包。限定真实单一PE包装膜并实测质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 瓦楞纸板砖隔垫（`pad`）

本材料独立包装入口卡记录真实有偿整件取得P（新件或旧件，含有证据的整包价有偿取得）及另行标记的首次独立外部非购入N_ext（借入、租入或受托整件，未采购该整件）。每事件只入一个子账，租赁/服务费不把N_ext变为P；排除I、同件真实ER、期初存量及内部复用。完整湿整件各计一次，按b_pack/cp_pack保留其独立毛原生V及完整先前A/provider/历史向量，同一事件不叠加P与N_ext。实物保管数量为毛流量披露，与真实分配的供应/服务负荷分开。仅限一个真实瓦楞隔垫结构及含水状态；无匹配供方证据时不得采用固定再生纤维配方。

- 选定流：瓦楞纸板砖隔垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 交流电（`service_electricity`）

仅计首次放行后仓储、包装、搬运、装车、重验及退回/返工的增量电力，在声明观察服务时窗内归属原放行批次Q。原生限制同制造：CN低于1千伏用户侧电网平均消费组合，净热值/MJ，原始千瓦时乘3.6。不得从首次放行Q扣除期末成品制造负荷。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节对应过程的本行单一最终商；cp_service 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 完整电动砖搬运叉车（`forklift`）

真实搬运资产服务与实物存量分开。在装电池属于整机子账，除非真实另购更换；实际电池、轮胎和流体更换逐项另列交换。

- 选定流：完整电动砖搬运叉车
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_asset_s 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_s`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 随货接收的木质运输托盘（`pallet_inbound`）

随另一外部供货实物附带接收的实际包装为I，与独立P/N_ext及同件真实ER互斥。交付总价含包装不使供方已含I成为第二次有偿包装取得。即使原供方已含负荷，也保留毛原生接收与完整先前向量/历史，该供方负荷只计一次、不再次采购包装。 一个真实完整木托盘，声明所有/周转约定及干湿质量；追踪新增采购、收到外返、附着存量、发运、对外返还及废弃。内部重复使用不新增采购。 原生为木材厂木板/木条制木质托盘整件产品、质量参考，无CAS、尺寸、固定地域或寿命。核实一个真实组装木托盘及维修材料。其活动电力分类同物理身份及保留木包装来源分类不符；不得据此替代为电力或原木板。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 接收外返的木质运输托盘（`pallet_return_received`）

外部真实返还本保管池的完整包装，须有同一已识别实物先前经S或EO外出的证据、先前外送事件关联、所有者/保管者及原队列，才是ER。保留完整先前V/A/provider/原生单位/整件组分/门/状态/相态/介质/期间/历史向量、真实状态及新增服务，未知先前负荷不是零。无该先前外送历史的首次独立非购入应在本材料独立入口卡记N_ext，绝非ER；两者均不是内部回用、负采购或新采购。 一个真实完整木托盘，声明所有/周转约定及干湿质量；追踪新增采购、收到外返、附着存量、发运、对外返还及废弃。内部重复使用不新增采购。 原生为木材厂木板/木条制木质托盘整件产品、质量参考，无CAS、尺寸、固定地域或寿命。核实一个真实组装木托盘及维修材料。其活动电力分类同物理身份及保留木包装来源分类不符；不得据此替代为电力或原木板。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 随货接收的聚丙烯打包带（`strap_inbound`）

随另一外部供货实物附带接收的实际包装为I，与独立P/N_ext及同件真实ER互斥。交付总价含包装不使供方已含I成为第二次有偿包装取得。即使原供方已含负荷，也保留毛原生接收与完整先前向量/历史，该供方负荷只计一次、不再次采购包装。 一个真实供货PP打包带，按观察包装记录完整品级及质量；不再计树脂颗粒，其他真实带材另列行。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 接收外返的聚丙烯打包带（`strap_return_received`）

外部真实返还本保管池的完整包装，须有同一已识别实物先前经S或EO外出的证据、先前外送事件关联、所有者/保管者及原队列，才是ER。保留完整先前V/A/provider/原生单位/整件组分/门/状态/相态/介质/期间/历史向量、真实状态及新增服务，未知先前负荷不是零。无该先前外送历史的首次独立非购入应在本材料独立入口卡记N_ext，绝非ER；两者均不是内部回用、负采购或新采购。 一个真实供货PP打包带，按观察包装记录完整品级及质量；不再计树脂颗粒，其他真实带材另列行。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 随货接收的聚乙烯缠绕膜（`film_inbound`）

随另一外部供货实物附带接收的实际包装为I，与独立P/N_ext及同件真实ER互斥。交付总价含包装不使供方已含I成为第二次有偿包装取得。即使原供方已含负荷，也保留毛原生接收与完整先前向量/历史，该供方负荷只计一次、不再次采购包装。 一个真实PE膜品级、质量及实际包装覆盖情况，不使用面积猜质量或泛包装总量。 原生为工厂整份PE膜产品，CAS9002-88-4、质量参考，无固定厚度、品级、再生比例或地域。备注将PET作为竞争聚酯对比；此处排除PET。箱包分类为分类瑕疵，不能证明该物为袋或成品箱包。限定真实单一PE包装膜并实测质量。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 接收外返的聚乙烯缠绕膜（`film_return_received`）

外部真实返还本保管池的完整包装，须有同一已识别实物先前经S或EO外出的证据、先前外送事件关联、所有者/保管者及原队列，才是ER。保留完整先前V/A/provider/原生单位/整件组分/门/状态/相态/介质/期间/历史向量、真实状态及新增服务，未知先前负荷不是零。无该先前外送历史的首次独立非购入应在本材料独立入口卡记N_ext，绝非ER；两者均不是内部回用、负采购或新采购。 一个真实PE膜品级、质量及实际包装覆盖情况，不使用面积猜质量或泛包装总量。 原生为工厂整份PE膜产品，CAS9002-88-4、质量参考，无固定厚度、品级、再生比例或地域。备注将PET作为竞争聚酯对比；此处排除PET。箱包分类为分类瑕疵，不能证明该物为袋或成品箱包。限定真实单一PE包装膜并实测质量。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 随货接收的瓦楞纸板隔垫（`pad_inbound`）

随另一外部供货实物附带接收的实际包装为I，与独立P/N_ext及同件真实ER互斥。交付总价含包装不使供方已含I成为第二次有偿包装取得。即使原供方已含负荷，也保留毛原生接收与完整先前向量/历史，该供方负荷只计一次、不再次采购包装。 仅限一个真实瓦楞隔垫结构及含水状态；无匹配供方证据时不得采用固定再生纤维配方。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：瓦楞纸板隔垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 接收外返的瓦楞纸板隔垫（`pad_return_received`）

外部真实返还本保管池的完整包装，须有同一已识别实物先前经S或EO外出的证据、先前外送事件关联、所有者/保管者及原队列，才是ER。保留完整先前V/A/provider/原生单位/整件组分/门/状态/相态/介质/期间/历史向量、真实状态及新增服务，未知先前负荷不是零。无该先前外送历史的首次独立非购入应在本材料独立入口卡记N_ext，绝非ER；两者均不是内部回用、负采购或新采购。 仅限一个真实瓦楞隔垫结构及含水状态；无匹配供方证据时不得采用固定再生纤维配方。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：瓦楞纸板隔垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 实际另购锯切托盘维修木板（`pallet_repair_board`）

仅在原队列Qc及已观测H内实际获准的包装维修/清洗时适用，不预设工序。须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。一块真实锯切木板，实测树种、处理、尺寸和水分；不是新整盘、人造板、木屑，也不猜干燥/未干燥阔叶材品级。绑定前须核实实际供货状态和上游供方，另有真实紧固件、胶或涂层须逐项增原子行。本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：实际另购锯切托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 包装作业实际外购液态自来水（`pallet_repair_water`）

仅在原队列Qc及已观测H内实际获准的包装维修/清洗时适用，不预设工序。须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。原生Product为经处理、可供工业或直接使用的市政自来水，无固定地域或处理技术；仅用于实际匹配饮用水质量的液态供水和单一供方边界。参考为质量/kg，次级体积系数不是场址实测密度。已测湿包装载水、内部循环及大气吸湿均不是再次采购。 本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 基本流

###### 包装实际吸收的大气水蒸气（`pack_humidity_in`）

仅用于原队列Qc及已观测H内储存/搬运中真实发生的包装水分交换，或实际维修/清洗；不预设吸湿、失水或作业。实际维修/清洗作业须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。仅指独立实测进入本包装边界的普通大气H2O蒸气，不是外购液水、降雨、排放蒸气、能值或当量水指标。实际气相和毛H2O千克量独立于干板质量，一残差不能求两个未知；不预设空气比例、密度或吸湿量。未决资源身份绑定前须匹配实际相态、类型和原生广延属性。本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：包装实际吸收的大气水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

#### 输出

##### 产品流

###### 木质运输托盘随砖总实物发运（`pallet_out`）

仅为随每次砖总实物发运S（包括重复发运）离开的实际包装。对外退回EO另卡，收到外部返还ER另列正向接收；内部转移抵消。保留真实水分、附着残留、所有权和去向，不新增砖Q、不重复供方负荷、不按经济份额缩量。 一个真实完整木托盘，声明所有/周转约定及干湿质量；追踪新增采购、收到外返、附着存量、发运、对外返还及废弃。内部重复使用不新增采购。 原生为木材厂木板/木条制木质托盘整件产品、质量参考，无CAS、尺寸、固定地域或寿命。核实一个真实组装木托盘及维修材料。其活动电力分类同物理身份及保留木包装来源分类不符；不得据此替代为电力或原木板。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 聚丙烯打包带随砖总实物发运（`strap_out`）

仅为随每次砖总实物发运S（包括重复发运）离开的实际包装。对外退回EO另卡，收到外部返还ER另列正向接收；内部转移抵消。保留真实水分、附着残留、所有权和去向，不新增砖Q、不重复供方负荷、不按经济份额缩量。

- 选定流：聚丙烯打包带随砖总实物发运
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 聚乙烯缠绕膜随砖总实物发运（`film_out`）

仅为随每次砖总实物发运S（包括重复发运）离开的实际包装。对外退回EO另卡，收到外部返还ER另列正向接收；内部转移抵消。保留真实水分、附着残留、所有权和去向，不新增砖Q、不重复供方负荷、不按经济份额缩量。 一个真实PE膜品级、质量及实际包装覆盖情况，不使用面积猜质量或泛包装总量。 原生为工厂整份PE膜产品，CAS9002-88-4、质量参考，无固定厚度、品级、再生比例或地域。备注将PET作为竞争聚酯对比；此处排除PET。箱包分类为分类瑕疵，不能证明该物为袋或成品箱包。限定真实单一PE包装膜并实测质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 瓦楞纸板隔垫随砖总实物发运（`pad_out`）

仅为随每次砖总实物发运S（包括重复发运）离开的实际包装。对外退回EO另卡，收到外部返还ER另列正向接收；内部转移抵消。保留真实水分、附着残留、所有权和去向，不新增砖Q、不重复供方负荷、不按经济份额缩量。

- 选定流：瓦楞纸板隔垫随砖总实物发运
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 对外退回的木质运输托盘（`pallet_external_return`）

向其供方或周转池实际对外退回的包装，保留毛实物量和独立去向；不是随产品发运包装、内部回用或自动副产品/抵扣。 一个真实完整木托盘，声明所有/周转约定及干湿质量；追踪新增采购、收到外返、附着存量、发运、对外返还及废弃。内部重复使用不新增采购。 原生为木材厂木板/木条制木质托盘整件产品、质量参考，无CAS、尺寸、固定地域或寿命。核实一个真实组装木托盘及维修材料。其活动电力分类同物理身份及保留木包装来源分类不符；不得据此替代为电力或原木板。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 对外退回的聚丙烯打包带（`strap_external_return`）

向其供方或周转池实际对外退回的包装，保留毛实物量和独立去向；不是随产品发运包装、内部回用或自动副产品/抵扣。 一个真实供货PP打包带，按观察包装记录完整品级及质量；不再计树脂颗粒，其他真实带材另列行。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 对外退回的聚乙烯缠绕膜（`film_external_return`）

向其供方或周转池实际对外退回的包装，保留毛实物量和独立去向；不是随产品发运包装、内部回用或自动副产品/抵扣。 一个真实PE膜品级、质量及实际包装覆盖情况，不使用面积猜质量或泛包装总量。 原生为工厂整份PE膜产品，CAS9002-88-4、质量参考，无固定厚度、品级、再生比例或地域。备注将PET作为竞争聚酯对比；此处排除PET。箱包分类为分类瑕疵，不能证明该物为袋或成品箱包。限定真实单一PE包装膜并实测质量。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 对外退回的瓦楞纸板隔垫（`pad_external_return`）

向其供方或周转池实际对外退回的包装，保留毛实物量和独立去向；不是随产品发运包装、内部回用或自动副产品/抵扣。 仅限一个真实瓦楞隔垫结构及含水状态；无匹配供方证据时不得采用固定再生纤维配方。 按P/N_ext/I/ER/S/EO/W分别核对本条件方向、不交叠的空包装/附WIP/附FG/可回用存量、原始队列Qc/H和唯一实物V/Qc披露；破损废物须另用真实合格废物身份。

- 选定流：瓦楞纸板隔垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 废物流

###### 废木质运输托盘（`pallet_waste`）

该单一包装材料真实废物，包括边角料、破损退回及清理损失。保留整件与组件核算及含水状态，防止重复。

- 选定流：废木质运输托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废聚丙烯打包带（`strap_waste`）

该单一包装材料真实废物，包括边角料、破损退回及清理损失。保留整件与组件核算及含水状态，防止重复。

- 选定流：废聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废聚乙烯缠绕膜（`film_waste`）

该单一包装材料真实废物，包括边角料、破损退回及清理损失。保留整件与组件核算及含水状态，防止重复。

- 选定流：废聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 废瓦楞纸板隔垫（`pad_waste`）

该单一包装材料真实废物，包括边角料、破损退回及清理损失。保留整件与组件核算及含水状态，防止重复。

- 选定流：废瓦楞纸板隔垫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 实际单独拆下的废托盘木板（`removed_pallet_board`）

仅在原队列Qc及已观测H内实际获准的包装维修/清洗时适用，不预设工序。须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。原生Waste为工厂木制品（包括木包装）产生的废木料、质量/kg，无固定树种、处理、污染等级或接收方。成型木废料分类是分类瑕疵，不是实物必须压块；仅用于在匹配涂层、防腐处理及危险性后的实际单独拆除木板流。不得替为混合生活垃圾、木屑、树皮、新Product木板或固定填埋处理；不从泛述推回收比例、热值或抵扣。 仅用于未在整盘W拆除中计过的单独实测木板流，否则只保留为同一W事件子账，不再形成第二废物或处理负荷。普通出售/外送不扣除已造成的制造或处理负荷。本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

###### 包装作业实际单独收集的液态废水（`pack_repair_wastewater`）

仅在原队列Qc及已观测H内实际获准的包装维修/清洗时适用，不预设工序。须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。一股实际水性废水，独立测定液态质量、木细料、涂层/防腐污染及去向；不是固定浓度废碱液、干木废物、向河流排水或未指定处理服务。固体/水及供方处理归属须核对，不猜组成或抵扣。本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：包装作业实际单独收集的液态废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

##### 基本流

###### 包装实际向当前空气释放的水蒸气（`pack_water_vapour_out`）

仅用于原队列Qc及已观测H内储存/搬运中真实发生的包装水分交换，或实际维修/清洗；不预设吸湿、失水或作业。实际维修/清洗作业须有制造商/规范许可、配置持续适用、真实新增拆除、作业后检查和验收或处置记录；待修成品或独立维修WIP只有一个保管归属。原生规范身份为普通分子水蒸气CAS7732-18-5、向当前未细分空气排放的Elementary、质量/kg；仅用于实际独立确定的气态水及匹配受纳隔室。液滴、冰、重水/氚水及醚类遗留别名均不采用，已知不同空气子隔室须另选匹配身份。不假定湿度比例、密度、蒸发收率或气体换算。 本实际材料/水方向只与同侧另一对应流项去重，不能因存量、反向流或已有卡而取消。留在期末的真实流入和完整实测期末湿存量同时保留；整件湿P/I一次进入，不再重复X或供方负荷。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节对应过程的本行单一最终商；cp_pack 仅保留未除原始记录，不再求商。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all assigned loads | 仅在目标范围和分配场景支持时使用本归因清单。工业路线来源不确立LCA分配，不强加替代、避免生产抵扣或固定分配比例。 | `jrc-ilcd-detailed-2010` |
| a_subdivide | each exchange | 先对专属工序、表计及真实材料/能源需求作独立归属，再用有据细分或可行虚拟细分。共用窑炉不使全部黏土、热、排放、工具或后续服务变为统一共同负荷。 | `jrc-ilcd-detailed-2010` |
| a_causality | each remaining joint exchange | 对真实剩余共同交换i，以测量响应、相关热状态、加工需求或材料反应证明其对真实产品/服务的决定性物理因果。方便的质量/时间/体积代理本身不足，不同交换可需不同已证明关系。先保留实物、物种、包装和资产总平衡，再分配负荷。 | `jrc-ilcd-detailed-2010` |
| a_residual | residual common-process burden only | 仅在记录物理因果无法解决某特定剩余的原因后，采用所有真实共功能在同一共同工序门、真实状态/品质/散装形态的同期市场价值。只有后续价格时应透明反推门价，去除后加工/包装/运输。显式处理零/负价和废物处理，不任意改为正值。专属后续服务仍分开；内部返工或可回收废物不自动成为共产品。 | `jrc-ilcd-detailed-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

下表aggregation_rule只声明最终每参考流目标，不执行除法。所有协议采集未除原始记录；仅计算规则执行一次最终求商。表头保留受支持机器字段，列表分隔符均为ASCII分号。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 首次质量放行 | 放行称重记录 | 队列ID; 品级; 原放行ID; 首次放行时间; 校准毛重皮重净重; 产品含水; 真实烧后几何; 孔洞; 检测及处置; 失败质量; 期初期末成品; 总发运G; 退回R; 原发运关联 | 经校准秤扣真实皮重及包装称量验收完整砖；保留规格特定尺寸、孔洞、强度/吸水率及其他真实检测。仅汇总唯一首次放行。 | kg | 每次放行及存量边界 | 完整真实制造队列 | 全部制造及成品门 | 每参考流 | 校准; 皮重核查; 质量决定; 唯一放行核对 |
| cp_material | manufacture | 每种供货材料 | 接收与工序记录 | 交换ID; 供方; 整份制剂; 材料矿相; 供货形态; 原湿干量; 独立含水; 碳酸盐与有机碳; 结构水; 供方边界; 期初期末原料及工序在制; 未归属存储; 逐交换继承向量; 内部转移ID; 各原料WIP非WIP期初期末实物量; 毛进入或已扣存量消耗基准及已含修正 | 逐供货保存原接收/称量、含量及真实工序使用记录；分别取证游离/结构水和碳来源。收货与内部领料不算两次采购。 | kg | 每次接收及批次边界 | 完整队列含失败 | 供方门至厂内各阶段 | 每参考流 | 地磅; 采样设计; 分析; 存量; 转移核对 |
| cp_energy | manufacture | 每种公用工程及真实返还 | 表计与运行模式记录 | 交换ID; 原读数及单位; 千瓦时; 真实速率及区间或积分量; 组成; 实际标准气态; 独立密度; 低位热值; 载体千克; 供回温度压力干度焓; 供方水能约定; 启停待机清理失败模式; 真实分配证据 | 每个真实电/热/燃料投入及外返载体分别计量。保留原始状态，不把累计体积再乘时间，不由其他物质推未知密度。 | MJ; m3; kg | 每运行区间 | 完整队列含零产出 | 全部真实厂内公用工程门 | 每参考流 | 校准; 表计状态; 气体分析; 热值与焓记录; 模式日志 |
| cp_transport | manufacture | 入厂货运 | 运单记录 | 货运ID; 材料; 载荷; 距离; 车辆; 载荷状态; 空返边界; 原服务单位 | 用真实载荷和有据路线距离取得未除吨千米，货运与承运材料质量分开。 | t km | 每次真实货运 | 真实来料队列 | 矿山供方至工厂 | 每参考流 | 票据; 载荷; 路线证据 |
| cp_waste | manufacture | 每个真实废物流 | 移除与分析记录 | 废物ID; 来源工序; 湿质量; 独立固体水和组成; 真实物种; 留存; 内部回用; 去向; 处理票据; 返工能耗 | 逐真实物流称量，独立采样水/固体/物种，核对来源、留存和去向，包含失败批次。 | kg | 每次移除及代表采样 | 全部批次及存量区间 | 真实废物转移门 | 每参考流 | 票据; 校准; 实验室检出限; 干湿核对 |
| cp_species | manufacture | 每个真实环境物种 | 分物种进出采样 | 物种; 分子式; 相态; 来源; 区室; 总进出; 干湿气态; 实测浓度; 真实速率及区间或积分体积; 独立密度; 游离结构反应水; 相关元素分析; 检测限; 不确定性 | 使用独立真实物种和状态证据，并作来源特定碳水分析。指标另存，区分未测、低于检出限及有据不存在；不得由总量虚拟物种。 | kg | 跨全部模式代表区间 | 完整队列并声明采样限制 | 各进气烟囱无组织及水边界 | 每参考流 | 方法; 检测限; 状态; 独立质量与元素核对 |
| cp_pack | service | 每种包装及去向 | 实物总收存账 | 材质设计所有权ID; 实测质量含水; 期初期末空包附着在制附着成品可复用存量; 采购; 随供货包装; 收到外返; 总发运包装; 对外返还; 废物; 内部复用; 附着残留; 供方负荷约定; 原队列; 实际新旧维修件身份质量; 按材料水相及来源去向实测X_in/X_out; 独立干物质水及完整湿存量; 其他流项去重；独立维修木板身份及干湿质量；液水供方与真实供水质量；大气水相及实测吸收；单独拆除木板；液废水化验去向；分物种当前空气H2O；真实许可作业后检查验收处置；不交叠维修保管；原始Qc/H；P有偿取得及整包价证据；首次独立N_ext非购入及合同/费用基准；ER同件先前S/EO事件ID；所有者保管者链；原队列历史；各交换先前V/A/provider及原生广延单位；整件组分包含边界；门/状态/相态/介质/期间 | 逐型式计件并独立称量，保留各原始移动，在制造/服务/合并门执行b_pack。收到外返是实物进入，不是新制造采购；逐次核对外部收存。 独立计量实际维修水分变化，同时保留完整湿存量与真实收支。数值使用前增加各真实需要的具体材料水交换，不对存量留存去重，不虚设维修事件。 按真实事件记录P/N_ext/I/ER/S/EO/W：P与N_ext为同一材料独立入口卡的互斥标记子账，I/ER/S/EO/W保留各自原子卡。ER核同件先前S/EO、所有者保管者及原队列历史，首次独立非购入为N_ext，不伪作ER或存量；保留全部原生V/A/provider向量及b_pack上下文，不以零填未知历史；取得独立干物/水分及气液相证据，测实际总量，仅真实速率积分；需要时使用独立同状态密度，不以次级系数当实测密度。整件湿接收一次，原队列已执行服务负荷即使成品期末待持仍保留。 全部真实包装移动及已造成作业负荷均须采集，包括未获准、失败或未通过验收的作业。卡片中的许可、配置、作业后检查及验收条件仅约束作业授权与继续合格存量资格，不约束事实采集：不得据此删除真实材料/水流入流出、能源、废物或处理。按实际待持、独立维修WIP或废物处置归属记录一次，不假定恢复或新增Q。 | kg | 每次移动及存量边界 | 真实制造及原队列服务H | 工厂及外部包装池 | 每参考流 | 皮重; 含水; 材料盘点; 发运返还及所有权证据 |
| cp_service | service | 原放行队列增量服务 | 原队列事件记录 | 原放行ID; Qc; 观察H; 期初期末成品; 原继承制造向量; 总发运G; 退回R; 原发运关联; 变化水质量; 真实损失; 破损; 重验; 真实增量返工; 全部真实能源物料废物; 服务归属; 实际修复许可规格范围; 新旧拆换部件材料及水相; 规定作业后试验; 验收处置 | 逐观察放行后事件和实物总移动，关联原队列。保留真实变化质量/水分/损失，退回量不必等于原交付量。不逆转首次放行制造负荷、不产生新Q。真实额外服务投入/输出均新增原子行。 将作业后砖回归合格存量前核对适用许可及真实作业后验收处置，不预设可恢复性或无新增水损失。 | MJ; kg; m3 | 每服务事件及存量边界 | 原Qc的声明观察H | 包装仓储搬运发运退回 | 每参考流 | 队列关联; 计量; 损失记录; 实物桥接; 时窗披露 |
| cp_allocation | manufacture | 每个专属或真实共同交换 | 细分因果及剩余门价证据 | 交换ID; 目标分配场景; 专属表计或工序; 虚拟细分输入; 产品变化的真实响应; 热力和反应状态; 共功能数量; 共同工序出口状态; 同期门市价及期间; 后续价格及去除后加工包装运输成本; 零负价处理; 所选份额及不确定性 | 先采专属测量，再记录细分或可行虚拟细分。独立观察逐交换决定性物理响应；仅对有理由的未解剩余采同期真实共同门价、状态及后续成本证据。分负荷前保留原始广延总量。 | row-native unit; price per actual gate quantity | 每相关作业及估价期间 | 真实制造及原队列服务期间 | 真实共同工序门及独立归属服务 | 每参考流 | 表计及细分底稿; 实测响应; 带日期原门价; 品级状态证明; 去成本桥接; 不确定性 |
| cp_asset_m | manufacture | 每件真实资产工具组件流体 | 实物存量与服务记录 | 资产ID; 完整配置; 真实实测净质量; 期初在装; 新旧增加; 整份供货已含组件; 另购更换; 维修; 含水; 在装流体; 服务事件及需求; 期末存量; 退役; 继承服务向量; 分配证据 | 按真实组件及实测配置核对实物总存量，仅凭真实服务历史确定可归属资产服务当量需求。影响向量不是资产千克，服务份额不得缩减实物总变化。 | kg | 每安装维修服务及存量边界 | 观察资产及队列服务记录 | 真实机械和流体门 | 每参考流 | 资产登记; 秤; 配置; 维修史; 服务基准; 流体平衡 |
| cp_asset_s | service | 每件真实资产工具组件流体 | 实物存量与服务记录 | 资产ID; 完整配置; 真实实测净质量; 期初在装; 新旧增加; 整份供货已含组件; 另购更换; 维修; 含水; 在装流体; 服务事件及需求; 期末存量; 退役; 继承服务向量; 分配证据 | 按真实组件及实测配置核对实物总存量，仅凭真实服务历史确定可归属资产服务当量需求。影响向量不是资产千克，服务份额不得缩减实物总变化。 | kg | 每安装维修服务及存量边界 | 观察资产及队列服务记录 | 真实机械和流体门 | 每参考流 | 资产登记; 秤; 配置; 维修史; 服务基准; 流体平衡 |

### 计算规则

raw_i为真实外部材料收存或实际运行交换原量，内部领料/工序转移不能再增加外部采购。原料及在制期初期末负荷向量逐交换独立结转；Bclose只含未放行原料/在制/未归属物料存储，已放行FG制造负荷保留在Q。资产输入卡的数量是从真实服务记录取得的可归属资产服务当量需求，不能直接用新购整机质量/Q替代；实物资产流和影响向量分账。包装卡的实物总收存记录与其一次供货/服务负荷分账，不把发运包装重复作制造产品抵扣。

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_units | all inventory rows | 归属前先换原单位。真实速率按实测区间积分一次，累计体积已积分。保留逐行广延属性；独立取证气体组成/密度/状态、低位热值、焓和实测质量，保留未除raw_i。 | original_reading; original_unit; actual_state; conversion_evidence; cp_material; cp_energy; cp_species | raw_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| calc_manufacture | manufacture | q_i = A_i / Q; A_i为专属归属raw_i加真实共同raw_i逐交换份额，加期初原料/在制/未归属物料存储继承burden_i，减相应期末继承burden_i。保留失败/待机/清理/返工。Bclose排除期末已放行成品。Q为cp_release唯一首次放行净千克。各分子保留自身原生单位，q_i为每1千克参考流；Q>0时本求商仅执行一次。 此存量桥当期raw_i采用上述修正前毛进入基准；若原记录已报告扣存量消耗，保留已含修正，仅核对尚未纳入WIP非WIP或其他向量，不再次修正相同原料存量。 对仅作实物流转披露的卡（包括实际热载体Product返还），须将此负荷库存分子替为原生广延单位下实际完整毛流量V_i，并仅用同一个最终q_i = V_i / Q一次；不加继承负荷、不对已测毛流量再作库存修正、不乘经济份额，不新增供应/供方负荷/抵扣。真实归属制造负荷保留在独立向量中，本例外不授权删除实际供应或处理负荷。 | raw_i; opening_vector_i; closing_vector_i; allocation_evidence_i; Q; cp_release; cp_allocation | q_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_service | service | s_i = deltaA_i / Qc; deltaA_i为观察H内可归属原队列c的真实放行后服务增量。Qc为其原唯一首次放行净千克。原继承制造向量随原队列保留，不再重复计作服务。保留包装总收存，原供货负荷只计一次。s_i为该原队列每1千克参考流结果，不产生新Q、不二次求商、不外推未来服务。 对每个仅作保管实物流转披露的包装/成品/资产卡，分子改为实际完整原生毛流量V_i,c,H，以同一唯一商V_i,c,H / Qc报告，不是分配后的服务负荷向量或Bopen + U - Bclose。P/N_ext/I/ER/毛S/EO/W及实际材料水变化独立保留，不新增供方采购、历史负荷、抵扣或经济缩量。实际归属的供应/清洗/维修/处理负荷仍独立进入deltaA_i，每项只有一个原供方归属。即使已服务成品留在期末待持，已执行原队列服务仍归原始Qc/H，只结转真实未耗用/未归属服务库存。 | original_release_id; Qc; H; deltaA_i; inherited_manufacture_vector; cp_service; cp_pack | s_i | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_zero | manufacture; service | Q=0或Qc=0时，真实负荷及存量保留在零产出账，不出单位结果。不删失败批、不虚构分母。 | Q; Qc; raw_i; cp_release; cp_service | zero_output_ledger | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| calc_physical | manufacture; service; combined | 逐门期初实物存量加全部真实进入等于期末存量加全部真实外出；合并时内部转移仅抵消一次。以独立实测证据及不确定性独立核对相关元素与真实物种/水相态。成品总移动纳入G/R、历史期初存量、真实水/损失变化及原队列。不按经济份额缩实物，不由一个残差解两个未知。 | physical_open; physical_in; physical_close; physical_out; species_assay; element_assay; state_evidence; cp_release; cp_service | physical_gate_reconciliation | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| calc_pack | each packaging material | 逐门逐材质/设计/所有权执行b_pack完整实物公式，有偿取得P（含有证据的整包价）、首次独立外部非购入N_ext、随货I、同件真实ER、各存量类别、毛S、EO和W分别保留。同一既有材料独立入口卡的P与N_ext标记子账汇总一次，仍保留各毛原生流及完整先前向量。ER须核同件先前S/EO、所有者保管者原队列历史，各入口均具b_pack完整上下文，未知历史不作零。真实运输与服务增量各计一次，供方已含负荷及原制造在原Qc/H各计一次。只抵消内部复用。不新增采购、砖Q或自动共产品抵扣。 纳入b_pack要求的真实另测材料水X_in/X_out，与其他流项不重叠但绝不因存量留存抵消，其他收发已计含水整件不再额外X。 | pack_open; pack_purchase; external_nonpurchase_entry; inbound_pack; external_return_received; pack_close; gross_pack_dispatch; external_return_sent; pack_waste; cp_pack | packaging_custody_reconciliation | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each product and species | 核对真实材料/形态/终端/原生限定及供方边界，区分相容产品族和定量供方过程。 | 精确原生身份; 供方规格; 图纸; 路线; 验收 |
| dq_raw | each raw record | 保留原单位、校准、采样代表性、不确定性和全部生产/非生产模式检出限；未知不是零。 | 原表计; 实验室方法; 校准; 模式日志 |
| dq_stocks | each cohort and physical gate | 要求逐交换原料/在制继承向量、已放行成品实物桥接及原队列服务，资产存量与服务分开，保留完整包装收存。 审计互斥P/N_ext/I/ER事件标签、有偿整包价与上游已含证据、ER同件先前S/EO、所有者保管者原队列链及完整先前V/A/provider/原生单位/整件组分/门/状态/相态/介质/期间/历史；未决历史明确保留。 | 存量盘点; 原放行关联; 包装和资产账 |
| dq_sources | each method or quantitative claim | 工业证据仅支持定性路线及反例，数量和化学过程须真实前景证据；仅ILCD支持分配顺序及其适用范围。 | 来源定位; 直接身份; 真实测量; 分配理由 |
| dq_service_horizon | post-release services | 披露观察H、原Qc及未观察未来物流/退回，不声称全寿命完整，不由交付推新放行。 | 队列服务事件; H; 真实G/R和损失桥接 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference product; each adopted UUID | 核实完整原生物理身份、全部basename/别名/备注/品级/路线/形态/地域/介质/类型及所有属性单位链。匹配真实黏土建筑砖终端与供方条件。分类瑕疵不能豁免硬材料/CAS/相态/路线/状态冲突。核心参考身份未确认将阻止可用方法。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_qualifiers | reference flow | 声明全部必需限定及真实质量验收证据。本PCR不给定通用配方、窑温、能耗、强度等级、密度、单件质量或寿命。完整砖件的质量当量千克不表示一块砖重一千克。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_denominator | all inventory rows | 保留未除原始记录，先处理单位/速率、真实逐交换归属及存量向量，再且仅一次计算A/Q或deltaA/Qc。卡片及采集汇总引用同一结果。Q=0保留负荷且不出单位结果。双语均用首次放行，不用净交付。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| v_stocks | manufacture; service; combined | 核对完整原料/在制继承向量与已放行成品实物桥接，保留原成品制造负荷。核对原队列H/Qc服务归属、总发运/退回、不二次放行Q及内部Q一次抵消。不扣期末已放行成品制造负荷。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997`; `jrc-ilcd-detailed-2010` |
| v_physical | each physical gate | 在制造、服务及合并门核对真实质量和相关元素，独立于物种/反应水证据。空气逐物种核算且不再加总空气交换，保留真实热载体返还及逐材料包装/资产/流体存量。解释测量不确定性及未知，不强配残差闭合。 核实每次独立P/N_ext、I及ER真实入口只记一次，ER有同件先前S/EO证据，各入口保留b_pack完整先前向量上下文。拒绝漏记首次独立借入或伪归ER、期初、内部复用、维修水分X；保留毛存量/S/EO/W及真实运输服务增量和单一供方负荷归属。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |
| v_completeness | each process and row | 每种真实材料、燃料、公用工程、包装、废物及物种均需原子身份、原生分子单位、原始采集、计算、来源关联及去向。条件不存在须有证据，未知不是零。新增真实遗漏流。泛产品族身份不是定量供方数据集；未解决辅助绑定需后续合格核查。 | `bia-brick-manufacturing-2006`; `jrc-ceramic-bref-2007`; `epa-brick-structural-clay-1997` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明建筑砖品级及制造路线的后续LCA建模 |
| allowed_use | 真实适配终端/供应条件的归因制造清单; 原队列H内服务另披露 |
| excluded_use | 整个37350叶覆盖; 耐火/混凝土/瓷砖/餐厨路线; 通用配方因子; 寿命或安装后性能等价; 科学批准或mapping批准 |
| required_metadata | 真实黏土矿床及整份供货形态; 矿相组成与碳酸盐/有机碳来源; 游离水和结构水证据; 坯料配方及真实逐项添加物; 非耐火建筑砖终端; 塑性挤出与切坯配置; 真实烧后几何及孔洞; 未施釉且无化妆土或表面涂层; 干燥及燃气隧道窑路线; 真实热回收与辅助燃烧边界; 烧成气氛及实测热历史; 实际整理和质量检测规范; 真实强度及吸水率结果; 唯一首次质量放行ID及队列Q; 校准净产品质量与含水基准; 完整失败/待机/返工及在制继承向量; 真实供方及每个原生流限定; 所有真实物种与外部去向; 资产服务基准与实物存量分开; 包装实物总收存平衡; 原队列服务时窗H及Qc; 分配目的与特定证据; 不等同安装后使用寿命性能 |
| required_quality_disclosure | 原始量测和缺失; 原生身份限定; 来源适用性; 物种/反应水; 存量/失败; 分配; 资产包装; H外未来服务; 不确定性 |
| update_trigger | 真实路线/材料/终端/质量规范或供方变化; 新物种; 原生身份或证据变化; 真实数据更新; 科学及翻译复核 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bia-brick-manufacturing-2006 | extension_guidance | https://www.gobrick.com/media/file/9-manufacturing-of-brick.pdf — BIA Technical Note 9; December 2006; complete 7-page document | 完整黏土砖制造及三种成形路线对比，烧成/冷却/分选、质量及包装上下文；定性采用，不采用数值或全部水均仅蒸发/零废物泛论，不支持LCA分配。 |
| jrc-ceramic-bref-2007 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf — Ceramic Manufacturing Industry BREF; August 2007; §2.3.1 printed34–44; adjacent §2.3.3/2.3.5 | 建筑砖真实备料、挤出、干燥、烧成、整理及流向；图2.8/2.13，表2.1–2.4及邻近耐火/墙地砖反例；不采用配方、温度、热耗或屋面瓦比例，不支持LCA分配。 |
| epa-brick-structural-clay-1997 | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c11s03.pdf — AP-42 §11.3; August 1997; §§11.3.1–11.3.3 and Figure11.3-1; Tables11.3-1/2 footnotes | 原料供货、挤出及隧道窑/干燥源边界；真实潜在物种、原料硫/氟/氯、有机物、控制与气体去向；表注差异限制，不采用排放因子或把TOC/NOx转成分子量，不支持LCA分配。 |
| jrc-ilcd-detailed-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf — First edition March 2010; §§7.9.2–7.9.3; printed255–272 | 仅支持适用归因分配场景的专属/虚拟细分、逐交换决定性物理因果与真正剩余的同门同状态同期市场价值；不证明工业配方、设备或定量结果。 |
