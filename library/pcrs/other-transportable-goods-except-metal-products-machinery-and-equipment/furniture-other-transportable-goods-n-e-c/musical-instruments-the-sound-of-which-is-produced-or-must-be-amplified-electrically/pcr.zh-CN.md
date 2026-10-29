---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.musical-instruments-the-sound-of-which-is-produced-or-must-be-amplified-electrically
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 被动实心琴体螺栓连接琴颈电吉他制造

本定性技术综合依据已披露厂商路线、结构与独立被动线路证据，不是单SKU、工厂订单的实测或通用配方。第5、7、9节全部条件均适用于清单及下属规则。

## 1. 范围与适用性

新制完整实木实心琴体、螺栓连接木琴颈、磁性钢弦、被动电磁拾音及控制输出且正常演奏需外部放大的电吉他。从真实木料与外购部件制造开始，不是购入成品琴。排除单独琴体琴颈琴弦拾音器、原木、纯声学及空腔电箱路线、电池有源电路、数字合成器、玩具、安装系统、独立放大器扬声器线缆、使用及报废阶段。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.musical-instruments-the-sound-of-which-is-produced-or-must-be-amplified-electrically |
| classification_refs | CPC 3.0 38340；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38340.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 新制完整实木实心琴体、螺栓连接木琴颈、磁性钢弦、被动电磁拾音及控制输出且正常演奏需外部放大的电吉他 |
| excluded_products | 单独琴体琴颈琴弦拾音器、原木、纯声学及空腔电箱路线、电池有源电路、数字合成器、玩具、安装系统、独立放大器扬声器线缆、使用及报废阶段。 |
| representative_product | 实际配置赤杨琴体、枫木螺栓琴颈及真实指板、金属琴桥调弦机构、外购被动拾音器、电位器、电容、开关、单声道插座、整弦和真实饰面的完整琴。不固定拾音器数量、重量、张力、膜厚、温时、收得率或寿命。 |
| production_route | 完整保留原木料调湿、机加工开槽、琴颈定形、真实拼接装品、分别饰面、螺栓连接、整份外购五金与被动电气装配、上弦、调校及电声外观首次放行。不得缩为外购成品琴重包装。供方工序上游一次，部件改现场制造须以不重叠的真实原料、操作、损失及配对交接替换。 |
| market_state | 完整新制琴首次通过指定声音、演奏、电气及外观质量放行，随后包装发运保留原群组。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 完整琴的被动电弦乐功能 |
| How much | 首次放行完整琴的1 kg净质量，不是任意1 kg部件 |
| How well | 真实制造商型号的声音、演奏、电气及外观验收，不编阈值 |
| How long or cycle | 一制造至首次放行群组及原群组观测服务H，不假寿命 |
| reference_flow_link | finished_guitar |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 其声音是经由电产生或放大的乐器 `ba0b61a1-012a-48f1-bc09-f64811faa1ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实心琴体及螺栓木琴颈; 真实型号配置及序列群组; 完整BOM及供方现场工序划分和内含组成; 无电池被动电磁线路及真实接线图; 木树种等级供货形态及含水; 整份涂料胶清洗剂制剂及真实独立加入; 真实测试判据及首次放行门; 排包材完整净质量及校准; 原料WIP未用非WIP继承向量及已校正标识; 已放行FG物理账及原群组服务H; 重工许可测试验收暂扣及废弃处置; 包材六事件池及毛实物V与负荷分开; 原生属性介质路线地域类型及供方相容; 真实归因分配需求及共同门证据 |

各限定必须在实际数据集元数据或等效说明声明。原生质量决定基准，件数不提供猜测的kg换算。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为唯一新首次放行序列完整净质量m_net_i的独立实测和。经校准称量排运输包装，保留配置、含水、日期及放行记录，不借次级质量系数或猜密度。 |
| native_units | all inventory rows | 每行原生广延属性 | 按行 | 质量/kg、原生能量/MJ、实际体积/m3及服务/h分开。仅真实速率积分时间，已积分体积不再乘时间；密度须该物质该状态独立实测。 |
| once | all inventory rows | Declared reference flow | kg | 仅约束参考分母，不约束各分子原生单位。仅执行一次calc_quotient。协议采未除原量，制造用Q、服务及毛事件用原Q_c。毛流分子为完整V，不是B_open+U-B_close或经济份额。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实干燥实心木坯及分别外购整部件制剂，披露真实上游干燥加工 |
| starting_condition_role | 前景制造起点及递归上游归属 |
| product_classification_scope | 电乐器中的指定被动实心琴体螺栓琴颈子范围 |
| recursive_input_rule | 外购整琴不作为新制造，内部同产品交接抵消不再采购 |
| upstream_dataset_requirement | 每相容供货制品制剂一次上游归属，内含组成不重叠 |
| disclosure | 真实场址周期自制外购配置、全部存量向量、服务H、毛实物与分配证据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | whole manufacture | 完整保留原木料调湿、机加工开槽、琴颈定形、真实拼接装品、分别饰面、螺栓连接、整份外购五金与被动电气装配、上弦、调校及电声外观首次放行。不得缩为外购成品琴重包装。供方工序上游一次，部件改现场制造须以不重叠的真实原料、操作、损失及配对交接替换。 | yamaha-wood; yamaha-shaping; yamaha-finish; yamaha-craft; duncan-passive-twoh |
| boundary_q_gate | first release | Q为制造群组内唯一新首次放行序列号完整琴经校准实测净质量之和。期末已放行FG已经含于Q，既不是第二产出，也不扣制造负荷。交付、重验、放行后作业及退回琴不产生新Q；Q=0保留全部真实负荷但不出单位结果。 | yamaha-craft; yamaha-qc |
| boundary_vectors | every burden exchange | 期初期末原料、WIP及未用或未归属非WIP存量保留完整每交换继承向量和来源。上述存量可用负荷为B_open + U_owned - B_close，再正当归属群组一次。制造B_close不含已放行FG。已校正消耗不得二次扣存量。失败批、样品、启停、闲置、清理、测试、返工全保留。普通废物出售或外送不自动向其他功能移交负荷。 | ilcd-allocation; yamaha-qc |
| boundary_physical | manufacture FG combined | 独立完整物理平衡：制造期初原料WIP+外部毛入流=期末原料WIP+首次放行内部交接+真实废物排放返还；FG期初+首次放行交接+真实退回及新增料水=完整湿态期末FG+毛发运+真实返还废物物种出口。合并门将内部配对交接抵消一次，包材资产用不重叠子门。毛实物绝不乘经济负荷份额。X_in/X_out仅去除OTHER同侧流项重叠，不能取消真实新增入流及完整湿态期末存量。 | ilcd-allocation; yamaha-qc |
| boundary_service | original cohort | 真实放行后储存、调湿、搬运、包装、重调及尝试作业在观测H内归原Q_c，FG留库也不能删除。仅未用或未归属服务及蓄存负荷可结转，未发生未来保持未知。真实重工后的持续合格须厂商或规格许可、作业后测试、验收及真实暂扣废弃处置；许可或测试缺失失败不能删去已发生料流、操作与负荷。自然湿度交换不造维修许可。 | yamaha-qc; ilcd-allocation |
| boundary_whole_inputs | each purchase | 每份外购部件、制剂、湿制品及包材连内含水、材料和紧固件采购一次。组成及化验仅非叠加子账。仅真实独立采购另加项新增交换，实际厂内配制保留每项采购原料、能源及损失。 | yamaha-craft; yamaha-finish; duncan-passive-twoh |
| boundary_packaging | each actual pool | 每制品等级池采用 O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out。O、C为期初、期末完整湿态空、附WIP、附FG及周转存量。F_in/F_out为跨本池边界独立实测的真实修补加入、拆出部件、水及其他实际新增/损失，逐项保留方向和实物状态。X_in/X_out仅扣与同侧OTHER真实流项已重复计入的有据部分，绝不扣存量、对侧流项，也不因真实新增量留在完整湿态C而抵消其入流。完整湿制品余额与等价不相交组成桥二选一，不加总两套；供货内含水和组成只归属一次，真实新增修补料及水即使留C仍保留实入流。六卡为六真实方向事件，I保留供方内含入厂及一次上游归属，S为毛实物发运全质量。内部重复使用抵消，不入净Q、不重复采购或信用。真实增失水仍独立量测。来源W为本池实际产生并转入匹配接收容器的实物流，不是假定的外部Waste出口；按calc_packaging核对该容器存量及真实外部出口。 | yamaha-qc; ilcd-allocation |
| boundary_mixed_waste | packaging W and other source contributions | 只有一个真实混合出口时，W池卡是实测内部贡献，与接收子账配对合并抵消，仅留实测混合外部Waste及一次运输处理供方，总分不叠加。实际分出口须先替以各真实原子Waste，不为对称造出口。普通制造、不合格及样品废物保留制造处理负荷，只有真其他群组功能及正当移交才一次转移向量。 | ilcd-allocation; yamaha-qc |
| boundary_utilities_assets | actual utilities and equipment | 不默认锅炉、蒸汽、工业气、燃料、制冷剂或设备寿命。保留原生广延维度、真实载体质量相态状态焓、供方水能归属及真实Product回流。完整资产接收在装退役质量与新旧维修料液存量分开于当期服务负荷。实际存在而遗漏的原子流及协议须在数据集使用前新增，不存在须有证据，不能填零。 | ilcd-allocation; yamaha-craft |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 木料至完整首次放行 | required | 仅真实存在路线事件，使用前展开遗漏真实原子 | manufacturing | finished_guitar |
| service | 原群组储运与真实作业 | conditional | 仅真实存在路线事件，使用前展开遗漏真实原子 | service | original Q_c |
| packaging | 真实包材事件及容器门 | conditional | 仅真实存在路线事件，使用前展开遗漏真实原子 | physical disclosure | original Q_c |
| assets | 设备存量维修及已用服务 | conditional | 仅真实存在路线事件，使用前展开遗漏真实原子 | service | original Q_c |

制造为合并过程，但分阶段协议保留调湿、木工、饰面、装配及质检。内部同产品交接匹配抵消，不作外部采购或另一个Q。卡片区分负荷、完整毛事件及内部贡献，不得用通用存量分配公式覆盖。

### 过程：木料至完整首次放行 (`manufacture`)

#### 输入

##### 产品流

###### 赤杨锯切琴体木坯 (`body_stock`)

实际开槽及轮廓加工前的实心赤杨木坯；记录供方干燥、含水及拼坯状态。外购胶合坯的胶负荷在上游一次；现场拼坯须另采胶与损失。不能用纤维板、座架专用材或已完成琴体替代。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为厚度严格超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材，工厂已制造木材，Mass/kg。本绑定仅涵盖本卡真实供货状态的实心阔叶木坯/维修板，须核实树种、厚度、含水及供方加工。更薄板材、针叶木、胶合/人造板或已成形部件在使用前须另核相容身份；不提供密度或加工收率。

- 选定流： 厚度超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材 `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_body_stock`
- 来源：`yamaha-wood`; `yamaha-shaping`

###### 枫木锯切琴颈木坯 (`neck_stock`)

实际现场加工为螺栓连接琴颈及琴头的枫木坯；记录斜接、供方工序、钢筋槽、品槽和定形。不得假定胶接或通颈结构。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为厚度严格超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材，工厂已制造木材，Mass/kg。本绑定仅涵盖本卡真实供货状态的实心阔叶木坯/维修板，须核实树种、厚度、含水及供方加工。更薄板材、针叶木、胶合/人造板或已成形部件在使用前须另核相容身份；不提供密度或加工收率。

- 选定流： 厚度超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材 `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_neck_stock`
- 来源：`yamaha-wood`; `yamaha-shaping`

###### 实心枫木指板坯 (`fingerboard`)

实际琴颈结构采用独立加工实心枫木指板坯时纳入。若枫木琴颈为一体指板，本独立交换不存在，其木材仍含于neck_stock。品槽、修整、损失及真实供货状态工序保留在归属阶段，不重复木材输入。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：实心枫木指板坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fingerboard`
- 来源：`yamaha-craft`; `yamaha-pacifica`

###### 成品钢制吉他调节钢筋 (`truss_rod`)

整份外购可调钢筋及其内含螺母和锚件，上游金属与加工一次。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_truss_rod`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品铜镍锌合金吉他品丝 (`frets`)

实际用于裁切、安装、修整及找平的品丝，记录合金、镀层和截形，不以镍矿或焊料替代。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_frets`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品合成材料吉他上弦枕 (`nut`)

整份外购合成材料上弦枕，声明实际聚合物或复合材与供货加工，现场只保留实际开槽配合。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_nut`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品聚合物指板品位标记 (`markers`)

每个实例仅一个实际形状、材料及供货状态的聚合物品位标记，不用键盘按键或整护板替代。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_markers`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 整份被动电磁吉他拾音器 (`pickup`)

每种类型和位置实例仅一整份外购被动拾音器。铜线、漆膜、磁体、线轴、树脂、内含安装件和引线是本次采购组成子账，不能另算现场输入。排除有源供电电路。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pickup`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品金属吉他琴桥总成 (`bridge`)

整份已表面处理外购琴桥及实际琴码和内含螺钉；固定或摇把配置及内含弹簧、块体只计一次。 原生为全球厂内生产混合的已成品及已表面处理乐器部件，是上游精饰至最终装配的中间输入，未提供有据收得率。本卡只选实际一个完整已成品及已表面处理部件，不是全部配件集合或整琴。金属、饰面及BOM制造负荷上游一次，未完成原材需另一身份。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：乐器零部件及配件用成品及表面处理零部件 `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_bridge`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品金属吉他调弦机构 (`tuner`)

一份实际传动比及形态的已表面处理外购调弦机构；内含齿轮、轴、旋钮及螺钉不再采购。不虚构现场制齿或电镀。 原生为全球厂内生产混合的已成品及已表面处理乐器部件，是上游精饰至最终装配的中间输入，未提供有据收得率。本卡只选实际一个完整已成品及已表面处理部件，不是全部配件集合或整琴。金属、饰面及BOM制造负荷上游一次，未完成原材需另一身份。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：乐器零部件及配件用成品及表面处理零部件 `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tuner`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 整份外购电吉他钢弦 (`strings`)

每实例一个真实弦类型，实际芯、缠丝、球头及涂层在上游一次；保留现场上弦和裁剪，不另重复采购组成铜钢。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_strings`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 吉他音量电位器 (`volume_pot`)

整份外购被动可变电阻，记录实际曲线、额定值及内含端子，不用电机转子或有源电路。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造非加热电阻器，Mass/kg；本卡仅选单件完整被动可变电阻电位器，不是独立电阻轨或加热器。实际阻值、曲线、额定参数、端子、安装及供方结构须有记录；宽族不固定电路数值或地域。预接线束及其内含电位器不得重复采购。

- 选定流： 电阻器（加热电阻器除外） `9bee079d-ab55-44db-b1a4-72d61a856d61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_volume_pot`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 吉他音色电位器 (`tone_pot`)

整份外购被动音色电位器，记录实际规格；外购预接线束时建立不重叠组成桥并移除重复单件采购。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造非加热电阻器，Mass/kg；本卡仅选单件完整被动可变电阻电位器，不是独立电阻轨或加热器。实际阻值、曲线、额定参数、端子、安装及供方结构须有记录；宽族不固定电路数值或地域。预接线束及其内含电位器不得重复采购。

- 选定流： 电阻器（加热电阻器除外） `9bee079d-ab55-44db-b1a4-72d61a856d61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tone_pot`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 被动吉他音色电容器 (`tone_cap`)

一份完整被动音色电容，实际电容值、介质及额定值由前景BOM给出，不设通用线路参数。 原生厂内Product是装配用工业无源电容，名称范围涵盖陶瓷、薄膜、电解、钽、固定或可变等，但未固定本BOM的介质、电容值、电压、路线、原料或地域。确认真实被动音色部件及上游覆盖，不继承线路示例数值。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：电容器 `df93339b-f27d-4f3e-b672-9d2ef0c536f6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tone_cap`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 被动拾音器选择开关 (`selector`)

一份实际机械选择开关，其拓扑和接线遵循真实被动线路图；电池供电HyperSwitch不在范围。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造、电压不超过1000伏的电路开关/保护/联接器件，Mass/kg。本卡仅选批准吉他接线图中的真实完整被动机械开关或tip/sleeve联接器，须核实额定值及供方结构。不推定电池有源选择器、散装组成或整套线束；不建立国家、电路数值或供方。

- 选定流： 用于开关、保护或联接电压不超过1000伏电路的电器 `13907748-8b4f-4da3-8108-c81720ca7799`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_selector`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 单声道吉他输出插座 (`output_jack`)

整份外购尖端和套筒信号插座，声明真实安装及绝缘。外部放大器与演奏连接线不计整琴BOM。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造、电压不超过1000伏的电路开关/保护/联接器件，Mass/kg。本卡仅选批准吉他接线图中的真实完整被动机械开关或tip/sleeve联接器，须核实额定值及供方结构。不推定电池有源选择器、散装组成或整套线束；不建立国家、电路数值或供方。

- 选定流： 用于开关、保护或联接电压不超过1000伏电路的电器 `13907748-8b4f-4da3-8108-c81720ca7799`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_output_jack`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 绝缘铜制吉他连接线 (`hookup_wire`)

仅实际现场另加连接线及其供货绝缘一次；拾音器或线束内含引线不重购，裸铜线和电磁绕组线形态不同。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：绝缘铜制吉他连接线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hookup_wire`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 含助焊芯锡银铜焊锡丝 (`solder`)

实际采用含助焊芯整份焊丝时纳入，记录合金及助焊剂；仅真实另购并加入时才新增助焊剂。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：含助焊芯锡银铜焊锡丝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_solder`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 聚氯乙烯电气绝缘胶带 (`insulation`)

用于真实拾音器线头接合处的绝缘胶带，整份带胶制品采购一次，不重复采购背胶。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：聚氯乙烯电气绝缘胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_insulation`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 另加钢制吉他装配螺钉 (`fasteners`)

仅未被琴桥、调弦机构及拾音器BOM内含的另供钢螺钉，声明真实表面和尺寸。 原生Product钢螺钉为中国厂内生产混合辅助紧固件，未给实测用量；其中行业平均估算建议不是本PCR的数量授权。使用实际另供钢螺钉及质量，满足供方地域，不与套装内含件重复。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：钢螺钉 `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fasteners`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 已表面处理金属螺栓琴颈连接板 (`neck_plate`)

实际外购琴颈连接板与另供螺钉分开；若套装供货，内含紧固件不重复。 原生为全球厂内生产混合的已成品及已表面处理乐器部件，是上游精饰至最终装配的中间输入，未提供有据收得率。本卡只选实际一个完整已成品及已表面处理部件，不是全部配件集合或整琴。金属、饰面及BOM制造负荷上游一次，未完成原材需另一身份。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：乐器零部件及配件用成品及表面处理零部件 `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_neck_plate`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品聚合物吉他护板 (`pickguard`)

实际安装时的一份成品聚合物护板，配混料、颜色、几何及上游成形只计一次。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pickguard`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 成品聚合物吉他控制旋钮 (`knob`)

每实例一类实际旋钮及内含嵌件一次，不能冒充完整电位器。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_knob`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 已表面处理金属吉他背带钮 (`strap_button`)

实际成品金属背带钮及其内含件一次；演奏者可拆背带不在整琴门内。 原生为全球厂内生产混合的已成品及已表面处理乐器部件，是上游精饰至最终装配的中间输入，未提供有据收得率。本卡只选实际一个完整已成品及已表面处理部件，不是全部配件集合或整琴。金属、饰面及BOM制造负荷上游一次，未完成原材需另一身份。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：乐器零部件及配件用成品及表面处理零部件 `6c2cd36a-bdc8-4d8f-90b4-9e09f4028c3c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_strap_button`
- 来源：`yamaha-mechanism`; `yamaha-craft`; `duncan-passive-twoh`

###### 整份外购水性木工胶 (`wood_glue`)

仅真实使用的整份外购水性木工胶。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂供货、用于功能性表面粘接且明确包括木材的粘合剂/胶水制剂，Mass/kg。本卡仅选真实完整水性木胶。须核实制造商接头许可、完整湿配方、独立添加量及供方边界；该族不提供特定树脂、固含率、固化制度、强度或地域。

- 选定流： 粘合剂 `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wood_glue`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购木纹填孔制剂 (`grain_filler`)

仅真实使用的整份外购木纹填孔制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：整份外购木纹填孔制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grain_filler`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购木器底漆制剂 (`undercoat`)

仅真实使用的整份外购木器底漆制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为面漆之前用于准备均匀表面的完整底涂/打底涂料制剂，Mass/kg。本卡仅涵盖真实木材底漆配方；另供底漆/中涂、固化剂或纯树脂不是同一次采购。原文描述可分别使用primer及undercoat，不强制两者同时使用；仍须实际批准涂层体系、SDS、批次及供方记录，不固定配方或地域。

- 选定流： 底漆 `c519293d-bf76-42e2-84cd-c287946318ec`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_undercoat`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购木器中涂制剂 (`intercoat`)

仅真实使用的整份外购木器中涂制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为宽泛油漆/清漆涂料族，Mass/kg，涵盖液、气或固态装饰/保护应用，不指定路线、地域或化学组成。本卡仅选声明湿供货状态的真实完整木材中涂/着色涂料制剂，不是已涂膜、纯组成、基材、固化剂或重复面漆。实际批准体系、完整配方、独立加入及供方边界须记录，不推定树脂、固含、配方或性能。

- 选定流： 涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_intercoat`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购木器色漆制剂 (`colourcoat`)

仅真实使用的整份外购木器色漆制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为宽泛油漆/清漆涂料族，Mass/kg，涵盖液、气或固态装饰/保护应用，不指定路线、地域或化学组成。本卡仅选声明湿供货状态的真实完整木材中涂/着色涂料制剂，不是已涂膜、纯组成、基材、固化剂或重复面漆。实际批准体系、完整配方、独立加入及供方边界须记录，不推定树脂、固含、配方或性能。

- 选定流： 涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_colourcoat`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 木质面漆 (`topcoat`)

仅真实使用的木质面漆。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。 原生工厂Product是木器面漆制剂，说明同时涉及水性和油性饰面，并以不泛黄水性聚氨酯Protect为例，未固定通用树脂、等级或配方。仅覆盖实际相容整份木器面漆；底漆、固化剂、纯树脂、稀释剂及填孔剂不得继承本身份。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：木质面漆 `097bc238-dda4-4296-b6ca-b7c573f7f39d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_topcoat`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 另供涂料固化剂制剂 (`hardener`)

仅真实使用的另供涂料固化剂制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：另供涂料固化剂制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hardener`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购涂装稀释剂制剂 (`thinner`)

仅真实使用的整份外购涂装稀释剂制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：整份外购涂装稀释剂制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_thinner`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购喷枪清洗制剂 (`cleaner`)

仅真实使用的整份外购喷枪清洗制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：整份外购喷枪清洗制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaner`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 整份外购吉他抛光制剂 (`polish`)

仅真实使用的整份外购吉他抛光制剂。记录湿态供货制剂、批次、SDS、固体、载水及溶剂组成子账；不能以纯树脂或某溶剂替整份混合物。仅实际另购加入项独立采购；计量混合能耗、留存、损失及去向。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：整份外购吉他抛光制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_polish`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 涂附磨料砂纸片 (`sandpaper`)

一份实际外购涂附磨料砂纸片；计量真实磨耗、消耗及废弃质量。结合剂、基底及背胶内含，不另重购。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生工厂Product为砂纸，Mass/kg。本卡仅选真实完整涂附砂纸片，其纸基、磨粒及粘结剂内含一次；核实粒度、基材、涂层、磨损及供方。不是散装磨料、砂轮、棉抛光布或废砂纸Waste，不固定配方、收率或地域。

- 选定流： 砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sandpaper`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 棉质抛光布 (`buff_cloth`)

一份实际外购棉质抛光布；计量真实磨耗、消耗及废弃质量。结合剂、基底及背胶内含，不另重购。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：棉质抛光布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_buff_cloth`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 纸基遮蔽胶带 (`masking`)

一份实际外购纸基遮蔽胶带；计量真实磨耗、消耗及废弃质量。结合剂、基底及背胶内含，不另重购。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：纸基遮蔽胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_masking`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 交流电 (`electricity`)

实际调湿、数控开槽、除尘、打磨、涂装、抛光、焊接、调校及首次放行测试用电。分表及专属供方门防止压缩机和照明重复。 仅绑定真实中国低于1千伏低压交流、电网平均消费组合、到用户供电及其原生发电输电至用户接口。其他实际电压、国家、专属技术或电厂产出须先改用相容身份。保留原生能量/MJ，电表kWh乘3.6仅一次，不虚构额外配电损失。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`yamaha-craft`; `yamaha-finish`

###### 工艺用水 (`process_water`)

仅真实另加用于加湿、清洗或设备的处理工业水；湿木料和外购制剂内含水已计一次。各真实用途及状态独立记录。 原生Product为经处理的工业工艺水，同义范围含工业、服务、公用工程、再生及循环水，须披露处理、规格、取得路线及供应点。未固定纯度、地域或CAS。确认真实供方处理、状态及用途，不替环境水，也不自动替蒸汽或冷凝水。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_process_water`
- 来源：`yamaha-craft`

###### 天然气燃料 (`fuel`)

仅真实现场燃料，不预设炉或锅炉。保留供气状态、热值基准、实测载体质量或体积、组成、仪表与燃烧物种；外购热供方不重复含同一燃料。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：天然气燃料
- 流属性/单位：Energy / MJ
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：`yamaha-craft`

###### 制造用热能 (`purchased_heat`)

实际干燥或调湿外购热能时纳入，不造蒸汽或锅炉；供方约定明确能源与水的一次归属和实际回流焓。 原生Product为全球厂内制造热能需求，热源及载体未指定，按净热值/MJ参考。本身份不提供蒸汽质量、压力、炉或转换效率，须独立实际记录及不重叠载体行。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：制造用热能 `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_heat`
- 来源：`yamaha-craft`

###### 外部蒸汽热载体水 (`steam_in`)

仅本项真实外部外部蒸汽热载体水事件；计量质量、相态、压力、温度、焓、质量及供方归属。物理V保留全量，热MJ只在能源行一次，内部循环抵消。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：外部蒸汽热载体水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_steam_in`
- 来源：`yamaha-craft`

###### 外部液态热水载体 (`hotwater_in`)

仅本项真实外部外部液态热水载体事件；计量质量、相态、压力、温度、焓、质量及供方归属。物理V保留全量，热MJ只在能源行一次，内部循环抵消。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：外部液态热水载体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hotwater_in`
- 来源：`yamaha-craft`

##### 废物流

##### 基本流

###### 分子氧气 (`m_o2_in`)

实际通风、调湿或自然水分交换的流入分子氧气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为分子O2，CAS 7782-44-7，Mass/kg，空气资源输入，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_o2_in`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 分子氮气 (`m_n2_in`)

实际通风、调湿或自然水分交换的流入分子氮气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为分子N2，CAS 7727-37-9，Mass/kg，空气资源输入，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_n2_in`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 氩气 (`m_ar_in`)

实际通风、调湿或自然水分交换的流入氩气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为氩Ar，CAS 7440-37-1，Mass/kg，空气资源输入，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_ar_in`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 水蒸气 (`m_h2o_in`)

实际通风、调湿或自然水分交换的流入水蒸气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_h2o_in`
- 来源：`yamaha-wood`; `yamaha-craft`

#### 输出

##### 产品流

###### 对外冷凝水产品回流 (`condensate_return`)

仅本项真实外部对外冷凝水产品回流事件；计量质量、相态、压力、温度、焓、质量及供方归属。物理V保留全量，热MJ只在能源行一次，内部循环抵消。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：对外冷凝水产品回流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_condensate_return`
- 来源：`yamaha-craft`

###### 对外换热液态水产品回流 (`hotwater_return`)

仅本项真实外部对外换热液态水产品回流事件；计量质量、相态、压力、温度、焓、质量及供方归属。物理V保留全量，热MJ只在能源行一次，内部循环抵消。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：对外换热液态水产品回流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hotwater_return`
- 来源：`yamaha-craft`

###### 其声音是经由电产生或放大的乐器 (`finished_guitar`)

仅完整新制且首次放行的实心琴体被动电磁电吉他。实际琴颈、琴桥、调弦机构、弦、被动控制及单声道输出通过型号规格、演奏、电信号和外观检查。不含部件、放大器、电池有源琴或第二次放行。 原生Product是已制造成品、工厂生产混合的电发声或需电放大乐器，未固定树种、SKU、等级、地域或CAS。宽族本身不选定吉他、被动线路或质量门，本卡完整正面范围及真实首次放行证据必须满足。不能标识单独木琴体、拾音器、玩具、纯声学琴或外部放大器。 Q已含期末放行FG一次，1千克是完整琴的声明归一产出。

- 选定流：其声音是经由电产生或放大的乐器 `ba0b61a1-012a-48f1-bc09-f64811faa1ad`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finished_guitar`
- 来源：`yamaha-mechanism`; `yamaha-pickup`; `yamaha-craft`; `duncan-passive-twoh`

##### 废物流

###### 废木料 (`wood_waste`)

一个真实未处理木边角料与捕集木尘混合收集出口。来源边料和木尘分别量测子账，不再合计成第二外部出口。涂层污染木料按实际另一路线。 本实际边角料/粉尘出口为非成团形态，压块/成团木废料身份不相容，仅限细木屑的身份也不能覆盖其块料。流身份保留未解决；保留真实来源分量、含水、污染及接收/处理记录，不捏造成团、粉碎、废物比例或回收信用。本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：废木料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wood_waste`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 废涂料残渣 (`finish_waste`)

实际单一涂装残渣收集流，仅含真实过喷、污泥及滤材。来源贡献核对整容器质量，处理一次。 原生Waste为全球厂内表面处理及涂装产生的涂料残渣，含过喷、污泥及废滤材，本单元过程外处理。实际混合组成及外部处理须有记录，不把全部溶剂和布流混为同一废物。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_waste`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 金属废料 (`string_trim`)

仅真实琴弦及品丝裁切、矫直边料。拆下整琴桥、电子件和旧刀具是不同废物流。 原生Waste为全球厂内线材及带材预处理、修边和矫直产生的少量金属边料。仅匹配真实弦及品丝边料，不用于退役整金属总成，不自动成为回收金属产品或信用。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：金属废料 `f4c839b2-3a9a-4715-86a3-bc032b6527b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_string_trim`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 不合格被动拾音器部件 (`component_reject`)

真实拆下或判废的拾音器单一具体废物流，不替以整琴或泛危险混合物。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：不合格被动拾音器部件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_component_reject`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 不合格完整电吉他 (`failed_guitar`)

真实不可修复失败整琴按实际暂扣或废弃门记录，保留完整湿态毛质量与既有制造负荷，出售或外送不消负荷。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：不合格完整电吉他
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_failed_guitar`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 废涂装清洗溶剂制剂 (`cleaning_waste`)

实际分开的废清洗液出口，保留真实残余制剂，不能假设与新清洗剂组成恒同。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：废涂装清洗溶剂制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning_waste`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 吉他工厂清洗废水 (`wastewater`)

真实废水整份液态出口，独立采样各物种与水质量；COD只是指标，不是化学物种或干固体质量。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：吉他工厂清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastewater`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 废涂附磨料砂纸 (`used_abrasive`)

真实另分出口的废砂纸，仅含实际附着磨屑，避免与捕集木尘重叠。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：废涂附磨料砂纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_used_abrasive`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

###### 废棉质抛光布 (`used_cloth`)

实际另分污染布流，整份湿质量及组成子账；若实际进入涂装混合容器则抵消配对来源交接，只保留一个外部出口。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：废棉质抛光布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_used_cloth`
- 来源：`yamaha-craft`; `yamaha-finish`; `ilcd-allocation`

##### 基本流

###### 分子氧气 (`m_o2_out`)

实际通风、调湿或自然水分交换的流出分子氧气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为分子O2，CAS 7782-44-7，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_o2_out`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 分子氮气 (`m_n2_out`)

实际通风、调湿或自然水分交换的流出分子氮气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。 原生ILCD基本流为分子氮，CAS7727-37-9，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_n2_out`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 氩气 (`m_ar_out`)

实际通风、调湿或自然水分交换的流出氩气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。 原生ILCD基本流为氩，CAS7440-37-1，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_ar_out`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 水蒸气 (`m_h2o_out`)

实际通风、调湿或自然水分交换的流出水蒸气。气体状态与各物种分测，不假空气比例、不重复空气总量。物理账不抵销进出物种，木料及制剂内含水用不重叠子账。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_m_h2o_out`
- 来源：`yamaha-wood`; `yamaha-craft`

###### 化石燃料二氧化碳 (`em_co2`)

真实向实测环境介质排出化石燃料二氧化碳时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。 原生ILCD基本流为化石二氧化碳，CAS124-38-9，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_co2`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 化石燃料一氧化碳 (`em_co`)

真实向实测环境介质排出化石燃料一氧化碳时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。 原生ILCD基本流为化石一氧化碳，CAS630-08-0，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_co`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 一氧化氮气体 (`em_no`)

真实向实测环境介质排出一氧化氮气体时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为一氧化氮NO，CAS 10102-43-9，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。 HNO/亚硝基氢同义词噪声不授权HNO。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_no`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 二氧化氮气体 (`em_no2`)

真实向实测环境介质排出二氧化氮气体时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为二氧化氮NO2，CAS 10102-44-0，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。 四氧化二氮同义词噪声不授权N2O4。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_no2`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 二氧化硫气体 (`em_so2`)

真实向实测环境介质排出二氧化硫气体时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。 原生ILCD基本流为二氧化硫，CAS7446-09-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_so2`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 化石燃料甲烷 (`em_ch4`)

真实向实测环境介质排出化石燃料甲烷时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为化石源甲烷CH4，CAS 74-82-8，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。 碳/石墨/沼气/甲醛同义词噪声不授权这些身份或生物源甲烷。

- 选定流： 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_ch4`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 丙酮蒸气 (`em_acetone`)

真实向实测环境介质排出丙酮蒸气时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为丙酮，CAS 67-64-1，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_acetone`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 乙酸乙酯蒸气 (`em_ethylacetate`)

真实向实测环境介质排出乙酸乙酯蒸气时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为乙酸乙酯，CAS 141-78-6，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 乙酸乙酯 `4d9a8790-3ddd-11dd-97ba-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_ethylacetate`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 甲苯蒸气 (`em_toluene`)

真实向实测环境介质排出甲苯蒸气时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生ILCD基本流为甲苯，CAS 108-88-3，Mass/kg，向未指定空气排放，不固定地域或技术等级。仅绑定该环境边界真实量测的气态物种及来源；工业Product供气、液体、溶解物种、其他区室或空气/VOC/NOx/总碳合量均不得替代。完整流入/流出V分别保留；原生同义词不提供配方、换算或处理系数。

- 选定流： 甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_toluene`
- 来源：`yamaha-finish`; `yamaha-craft`

###### 空气中木尘 (`em_wood_dust_air`)

真实向实测环境介质排出空气中木尘时纳入。独立确认分子或颗粒身份及来源并实际计量，不能把NOx、VOC、PM或总碳假定为本物种。其他实测物种另建卡，不能用残差造分子。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：空气中木尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_em_wood_dust_air`
- 来源：`yamaha-finish`; `yamaha-craft`

### 过程：原群组储运与真实作业 (`service`)

#### 输入

##### 产品流

###### 交流电 (`s_electricity`)

仅观测H内归属于原序列号群组Q_c的真实放行后交流电；实际尝试、未获准及失败作业按真实暂扣或废弃处置全保留。未发生未来作业保持未知，不造负荷或零。新部件内含组成一次。 仅绑定真实中国低于1千伏低压交流、电网平均消费组合、到用户供电及其原生发电输电至用户接口。其他实际电压、国家、专属技术或电厂产出须先改用相容身份。保留原生能量/MJ，电表kWh乘3.6仅一次，不虚构额外配电损失。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_electricity`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 工艺用水 (`s_water`)

仅观测H内归属于原序列号群组Q_c的真实放行后工艺用水；实际尝试、未获准及失败作业按真实暂扣或废弃处置全保留。未发生未来作业保持未知，不造负荷或零。新部件内含组成一次。 原生Product为经处理的工业工艺水，同义范围含工业、服务、公用工程、再生及循环水，须披露处理、规格、取得路线及供应点。未固定纯度、地域或CAS。确认真实供方处理、状态及用途，不替环境水，也不自动替蒸汽或冷凝水。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_water`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份替换电吉他弦 (`s_new_string`)

仅观测H内归属于原序列号群组Q_c的真实放行后整份替换电吉他弦；实际尝试、未获准及失败作业按真实暂扣或废弃处置全保留。未发生未来作业保持未知，不造负荷或零。新部件内含组成一次。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_new_string`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份替换被动吉他拾音器 (`s_new_pickup`)

仅观测H内归属于原序列号群组Q_c的真实放行后整份替换被动吉他拾音器；实际尝试、未获准及失败作业按真实暂扣或废弃处置全保留。未发生未来作业保持未知，不造负荷或零。新部件内含组成一次。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为工厂已制造乐器零件/配件族，Mass/kg。仅选本卡角色所指的单件完整供货吉他专用部件，须记录真实材质、几何、被动功能、内含组成及供方工序；不替代原料、体育用品、有源电路、完整乐器或多件混合包。原生一般备注写体育用品，与成品乐器零件名称及层级不一致，该备注不建立体育用品适用性或定量证据。仍须核实实际供方相容性。

- 选定流： 乐器的配件及装饰品，节拍器、音叉和定音管 `e8bf679b-e133-4e19-b46b-161cb07e4ca4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_new_pickup`
- 来源：`yamaha-qc`; `ilcd-allocation`

##### 废物流

##### 基本流

###### 水蒸气 (`s_h2o_in`)

储运中真实自然环境水分摄入，与整琴内含水及另加工艺水分开。不虚构维修许可或操作；完整湿态期末FG和真实水流入同时保留。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_h2o_in`
- 来源：`yamaha-qc`; `yamaha-wood`

#### 输出

##### 产品流

##### 废物流

###### 拆下电吉他弦 (`s_old_string`)

实际拆下旧件，整份湿态毛质量、去向、继承负荷及正当移交分别取证，不自动生成产量或信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：拆下电吉他弦
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_old_string`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 拆下被动吉他拾音器 (`s_old_pickup`)

实际拆下旧件，整份湿态毛质量、去向、继承负荷及正当移交分别取证，不自动生成产量或信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：拆下被动吉他拾音器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_old_pickup`
- 来源：`yamaha-qc`; `ilcd-allocation`

##### 基本流

###### 水蒸气 (`s_h2o_out`)

储运中真实自然环境水分失出，与整琴内含水及另加工艺水分开。不虚构维修许可或操作；完整湿态期末FG和真实水流入同时保留。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_s_h2o_out`
- 来源：`yamaha-qc`; `yamaha-wood`

### 过程：真实包材事件及容器门 (`packaging`)

#### 输入

##### 产品流

###### 瓦楞吉他运输纸箱 (`carton_p`)

仅一份瓦楞吉他运输纸箱的真实独立采购P事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_p`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 瓦楞吉他运输纸箱 (`carton_i`)

仅一份瓦楞吉他运输纸箱的真实供方内含入厂I事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。供方内含的真实入厂实物必须保留且上游归属一次，不能当零或另购。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_i`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 瓦楞吉他运输纸箱 (`carton_er`)

仅一份瓦楞吉他运输纸箱的真实外部退回接收ER事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_er`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_p`)

仅一份聚乙烯吉他保护袋的真实独立采购P事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_p`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_i`)

仅一份聚乙烯吉他保护袋的真实供方内含入厂I事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。供方内含的真实入厂实物必须保留且上游归属一次，不能当零或另购。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_i`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_er`)

仅一份聚乙烯吉他保护袋的真实外部退回接收ER事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_er`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_p`)

仅一份发泡聚乙烯吉他缓冲垫的真实独立采购P事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_p`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_i`)

仅一份发泡聚乙烯吉他缓冲垫的真实供方内含入厂I事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。供方内含的真实入厂实物必须保留且上游归属一次，不能当零或另购。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_i`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_er`)

仅一份发泡聚乙烯吉他缓冲垫的真实外部退回接收ER事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_er`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_p`)

仅一份整份木质运输托盘的真实独立采购P事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_p`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_i`)

仅一份整份木质运输托盘的真实供方内含入厂I事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。供方内含的真实入厂实物必须保留且上游归属一次，不能当零或另购。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_i`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_er`)

仅一份整份木质运输托盘的真实外部退回接收ER事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_er`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 瓦楞吉他运输纸箱 (`carton_used_burden`)

仅真实瓦楞吉他运输纸箱的归属使用负荷维度。本卡是实际P/I入厂及继承包材负荷的一次上游服务归属，保留供方内含归属。不新增实物、采购、毛腿或信用；P/I/ER/S/EO/W卡已经独立披露完整V。已发生原群组服务不因FG留库删除，仅真实未用或未归属负荷可结转。负荷账与物理池事件核对，不缩其质量。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_used_burden`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_used_burden`)

仅真实聚乙烯吉他保护袋的归属使用负荷维度。本卡是实际P/I入厂及继承包材负荷的一次上游服务归属，保留供方内含归属。不新增实物、采购、毛腿或信用；P/I/ER/S/EO/W卡已经独立披露完整V。已发生原群组服务不因FG留库删除，仅真实未用或未归属负荷可结转。负荷账与物理池事件核对，不缩其质量。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_used_burden`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_used_burden`)

仅真实发泡聚乙烯吉他缓冲垫的归属使用负荷维度。本卡是实际P/I入厂及继承包材负荷的一次上游服务归属，保留供方内含归属。不新增实物、采购、毛腿或信用；P/I/ER/S/EO/W卡已经独立披露完整V。已发生原群组服务不因FG留库删除，仅真实未用或未归属负荷可结转。负荷账与物理池事件核对，不缩其质量。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_used_burden`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_used_burden`)

仅真实整份木质运输托盘的归属使用负荷维度。本卡是实际P/I入厂及继承包材负荷的一次上游服务归属，保留供方内含归属。不新增实物、采购、毛腿或信用；P/I/ER/S/EO/W卡已经独立披露完整V。已发生原群组服务不因FG留库删除，仅真实未用或未归属负荷可结转。负荷账与物理池事件核对，不缩其质量。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_used_burden`
- 来源：`yamaha-qc`; `ilcd-allocation`

##### 废物流

##### 基本流

###### 水蒸气 (`carton_humidity_in`)

仅本瓦楞纸箱池在普通储运或真实维修干燥中实测环境水蒸气摄入。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_humidity_in`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`pebag_humidity_in`)

仅本聚乙烯袋池在普通储运或真实维修干燥中实测环境水蒸气摄入。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_humidity_in`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`foam_humidity_in`)

仅本发泡聚乙烯缓冲垫池在普通储运或真实维修干燥中实测环境水蒸气摄入。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_humidity_in`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`pallet_humidity_in`)

仅本木托盘池在普通储运或真实维修干燥中实测环境水蒸气摄入。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_humidity_in`
- 来源：`yamaha-qc`; `ilcd-allocation`

#### 输出

##### 产品流

###### 瓦楞吉他运输纸箱 (`carton_s`)

仅一份瓦楞吉他运输纸箱的真实随毛实物发运S事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_s`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 瓦楞吉他运输纸箱 (`carton_eo`)

仅一份瓦楞吉他运输纸箱的真实对外返还EO事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_eo`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_s`)

仅一份聚乙烯吉他保护袋的真实随毛实物发运S事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_s`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 聚乙烯吉他保护袋 (`pebag_eo`)

仅一份聚乙烯吉他保护袋的真实对外返还EO事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product为一个聚乙烯袋/PE袋，CAS9002-88-4，工厂生产混合，供包装、运输及储存。未固定等级、密度、厚度或地域；须确认真实供货袋，不可套PET、PP编织袋、PE树脂或重复内衬背胶组成。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_eo`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_s`)

仅一份发泡聚乙烯吉他缓冲垫的真实随毛实物发运S事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_s`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 发泡聚乙烯吉他缓冲垫 (`foam_eo`)

仅一份发泡聚乙烯吉他缓冲垫的真实对外返还EO事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_eo`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_s`)

仅一份整份木质运输托盘的真实随毛实物发运S事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_s`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 整份木质运输托盘 (`pallet_eo`)

仅一份整份木质运输托盘的真实对外返还EO事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。整份湿制品一次，不额外重购组成，不按经济份额缩量，不自动信用。 原生Product是工厂生产混合的已制造木质可移动装载平台族，含平台及木围板，但本卡仅选真实一个整托盘。未固定欧标尺寸、树种、处理、含水、再生份额或寿命。记录真实BOM及湿态，维修板及留存水是独立子账，不是额外整托盘。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_eo`
- 来源：`yamaha-qc`; `ilcd-allocation`

##### 废物流

###### 废瓦楞吉他运输纸箱 (`carton_w`)

仅一份瓦楞吉他运输纸箱的真实进入真实废物容器的来源贡献W事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。仅当实际共用一个混合出口时，本卡是实测内部来源至容器交接。接收子账配对合并抵消，不作第二外部Waste或供方。实际分出口须先各建真实外部原子行。  分子为真实内部贡献V，不是第二外部交换；接收端配对在合并物理门抵消，外部容器一次。

- 选定流：废瓦楞吉他运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_w`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 废聚乙烯吉他保护袋 (`pebag_w`)

仅一份聚乙烯吉他保护袋的真实进入真实废物容器的来源贡献W事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。仅当实际共用一个混合出口时，本卡是实测内部来源至容器交接。接收子账配对合并抵消，不作第二外部Waste或供方。实际分出口须先各建真实外部原子行。  分子为真实内部贡献V，不是第二外部交换；接收端配对在合并物理门抵消，外部容器一次。

- 选定流：废聚乙烯吉他保护袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_w`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 废发泡聚乙烯吉他缓冲垫 (`foam_w`)

仅一份发泡聚乙烯吉他缓冲垫的真实进入真实废物容器的来源贡献W事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。仅当实际共用一个混合出口时，本卡是实测内部来源至容器交接。接收子账配对合并抵消，不作第二外部Waste或供方。实际分出口须先各建真实外部原子行。  分子为真实内部贡献V，不是第二外部交换；接收端配对在合并物理门抵消，外部容器一次。

- 选定流：废发泡聚乙烯吉他缓冲垫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_w`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 废整份木质运输托盘 (`pallet_w`)

仅一份整份木质运输托盘的真实进入真实废物容器的来源贡献W事件。空包装、附着WIP、附着FG及周转包装的期初期末均按本池追踪。仅当实际共用一个混合出口时，本卡是实测内部来源至容器交接。接收子账配对合并抵消，不作第二外部Waste或供方。实际分出口须先各建真实外部原子行。  分子为真实内部贡献V，不是第二外部交换；接收端配对在合并物理门抵消，外部容器一次。

- 选定流：废整份木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_w`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 混合吉他运输包装废物 (`mixed_packaging_waste`)

一个实际量测的混合外部Waste容器，其湿态总质量包含独立W来源贡献一次。总与分不能相加，实际运输及处理供方一次。实际来源分开外送时不得虚构混合出口。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生Waste为装配/测试与包装门内厂内产生的混合包装边角料/破损包装，Mass/kg。仅绑定本真实单一厂内混合包装出口，须有实测材料分量、污染及接收方证据。各W卡仍为配对内部来源贡献，整合时抵消，不新增外部出口或处理。生活垃圾收集、单一聚合物、整琴或处理产物须另核身份。本流不提供数量、默认去向、供方或回收信用。

- 选定流： 混合包装废弃物 `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mixed_packaging_waste`
- 来源：`yamaha-qc`; `ilcd-allocation`

##### 基本流

###### 水蒸气 (`carton_humidity_out`)

仅本瓦楞纸箱池在普通储运或真实维修干燥中实测环境水蒸气失出。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carton_humidity_out`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`pebag_humidity_out`)

仅本聚乙烯袋池在普通储运或真实维修干燥中实测环境水蒸气失出。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pebag_humidity_out`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`foam_humidity_out`)

仅本发泡聚乙烯缓冲垫池在普通储运或真实维修干燥中实测环境水蒸气失出。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_foam_humidity_out`
- 来源：`yamaha-qc`; `ilcd-allocation`

###### 水蒸气 (`pallet_humidity_out`)

仅本木托盘池在普通储运或真实维修干燥中实测环境水蒸气失出。不预设水交换或操作。整份湿态P/I制品水内含一次；X_in/X_out只去除其他同侧进出项重叠，不能删去留存新增水入流或完整湿态期末池质量。 原生ILCD基本流为水蒸气，CAS7732-18-5，质量/kg，向未指定空气排放，未固定地域或技术等级。同义名不授权其他分子、离子、同位素、液固相、资源输入或工业Product供货。仅真实物种、来源及相容出口介质可绑定，更具体接收区室须匹配另一流；总氮、总碳、NOx、VOC、COD、PM不能替代。 本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_humidity_out`
- 来源：`yamaha-qc`; `ilcd-allocation`

### 过程：设备存量维修及已用服务 (`assets`)

#### 输入

##### 产品流

###### 木工数控加工中心 (`cnc_receipt`)

真实整份木工数控加工中心接收事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生Product为工厂已制造木材加工机床设备，Mass/kg。仅选真实完整木工CNC加工中心及有记录的安装/退出状态，不是刀具、从宽族推定的板材压机或时长服务。退出仅在真实物件仍为产品时作为Product实物流转；真实报废须另用相应Waste身份。不提供单机质量、寿命、负荷、服务换算或供方地域。

- 选定流： 木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cnc_receipt`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 木工数控加工中心使用服务 (`cnc_service`)

本群组实际消耗的木工数控加工中心服务负荷向量，按实测工时、能力及正当物理因果归属。已发生服务不因放行FG留库而删除，仅未用或未归属服务可结转。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：木工数控加工中心使用服务
- 流属性/单位：Duration / h
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cnc_service`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 钢制吉他调湿架 (`rack_receipt`)

真实整份钢制吉他调湿架接收事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：钢制吉他调湿架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rack_receipt`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 钢制吉他调湿架使用服务 (`rack_service`)

本群组实际消耗的钢制吉他调湿架服务负荷向量，按实测工时、能力及正当物理因果归属。已发生服务不因放行FG留库而删除，仅未用或未归属服务可结转。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：钢制吉他调湿架使用服务
- 流属性/单位：Duration / h
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rack_service`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 电吉他测试放大器 (`testamp_receipt`)

真实整份电吉他测试放大器接收事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生Product名称及层级涵盖工厂已制造音频电子放大器/成套声频放大器，Mass/kg。仅选真实完整外置吉他测试放大器资产，不是吉他BOM、拾音器、独立扬声器或使用时长服务。一般备注却引用4721–4733/4822类别零件，保留此不一致并要求真实完整成品放大器供方证明，绝不从零件推定整机。退出仅在真实产品转移时保持Product；报废须用Waste。不提供单机质量、寿命、额定功率、服务系数或地域。

- 选定流： 话筒及其支架，扬声器，头戴受话机、耳机及组合式成套话筒/扬声器，音频电子放大器，电子声频放大器 `9fe0f5c8-6b15-415d-b1fb-52a9bf9e858e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_testamp_receipt`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 电吉他测试放大器使用服务 (`testamp_service`)

本群组实际消耗的电吉他测试放大器服务负荷向量，按实测工时、能力及正当物理因果归属。已发生服务不因放行FG留库而删除，仅未用或未归属服务可结转。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：电吉他测试放大器使用服务
- 流属性/单位：Duration / h
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_testamp_service`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 钢制木工替换刀具 (`new_cutter`)

仅真实钢制木工替换刀具，新旧及在用液存量分开。X_in/X_out只消除与其他同侧流项重叠，不能消去留在期末存量中的真实入流。整份油制剂一次，维修木板不是整托盘。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：钢制木工替换刀具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_new_cutter`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 整份外购机械润滑油 (`new_oil`)

仅真实整份外购机械润滑油，新旧及在用液存量分开。X_in/X_out只消除与其他同侧流项重叠，不能消去留在期末存量中的真实入流。整份油制剂一次，维修木板不是整托盘。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。

- 选定流：整份外购机械润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_new_oil`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 实心阔叶木托盘维修板 (`pallet_repair`)

仅真实实心阔叶木托盘维修板，新旧及在用液存量分开。X_in/X_out只消除与其他同侧流项重叠，不能消去留在期末存量中的真实入流。整份油制剂一次，维修木板不是整托盘。  本卡为一次归属负荷维度，原始U及继承向量形成未除归属A，完整V仍保留物理伴随账。 原生Product为厚度严格超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材，工厂已制造木材，Mass/kg。本绑定仅涵盖本卡真实供货状态的实心阔叶木坯/维修板，须核实树种、厚度、含水及供方加工。更薄板材、针叶木、胶合/人造板或已成形部件在使用前须另核相容身份；不提供密度或加工收率。

- 选定流： 厚度超过6毫米的非针叶木锯材、纵向刨切材、切片或单板材 `6568e32b-edf1-47c9-8d04-6b31af0d8c1c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：未除归属A / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pallet_repair`
- 来源：`yamaha-craft`; `ilcd-allocation`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 木工数控加工中心 (`cnc_retirement`)

真实整份木工数控加工中心退役事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：木工数控加工中心
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cnc_retirement`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 钢制吉他调湿架 (`rack_retirement`)

真实整份钢制吉他调湿架退役事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：钢制吉他调湿架
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rack_retirement`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 电吉他测试放大器 (`testamp_retirement`)

真实整份电吉他测试放大器退役事件，保留完整实测资产质量及在装存量历史。毛实物披露不等于每千克采购整机；实际当期服务负荷分列，不设固定寿命。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：电吉他测试放大器
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_testamp_retirement`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 拆下钢制木工刀具 (`old_cutter`)

仅真实拆下钢制木工刀具，新旧及在用液存量分开。X_in/X_out只消除与其他同侧流项重叠，不能消去留在期末存量中的真实入流。整份油制剂一次，维修木板不是整托盘。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。

- 选定流：拆下钢制木工刀具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_old_cutter`
- 来源：`yamaha-craft`; `ilcd-allocation`

###### 废机械润滑油 (`spent_oil`)

仅真实废机械润滑油，新旧及在用液存量分开。X_in/X_out只消除与其他同侧流项重叠，不能消去留在期末存量中的真实入流。整份油制剂一次，维修木板不是整托盘。  本卡披露实际完整毛腿V，单商分子明确为V，不扣存量、不经济分配、不新增采购供方负荷或信用。真实负荷维度在负荷向量账另行一次归属。 原生Waste为石油基或合成润滑油经使用且因使用污染后在产生点形成的废油，Mass/kg，处理路线未指定。仅选真实废机械润滑油；新油、未用不合格油、冷却液及混合溶剂废物均不同。实际污染、接收方及处理另核；不授权默认再生、燃烧、处置或信用。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：第8节同一次商：完整实际毛V / Q_basis
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_spent_oil`
- 来源：`yamaha-craft`; `ilcd-allocation`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all joint burdens | 本方法为归因制造，不采用替代或避免产品模型。先专属及virtual subdivision归真实群组功能，再对每一剩余交换识别决定性物理因果：真实材料进入、机加工工时、实际强度涂覆面积、除湿量或确有因果的服务时长能力。不任意选质量或经济，不用同一份额套全部交换。 | ilcd-allocation |
| allocation_residual | truly inseparable remainder | 只有证明专属细分及逐交换决定性物理因果不能解决真实剩余，才明确真实共同过程门、共产品状态及该门同期市场价值。必要时以可追溯证据回推该状态价值并作敏感性；不以零售整琴价分配上游废料，不设固定比或废物销售自动信用。 | ilcd-allocation |
| allocation_gross | all physical and service ledgers | 分配仅影响负荷向量。全部包装、资产、维修、水、物种、失败作业及外部返还事件保留完整V，每真实负荷维度只一供方移交归属，内部部件交接合并抵消。已发生原群组服务不因FG留库而删除。 | ilcd-allocation |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

全部协议仅采未除原量。aggregation_rule是结果基准声明，只引用第8节同一次商，不在采集时除，也不在卡片结果后再除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_body_stock | manufacture | body_stock | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件赤杨锯切琴体木坯未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_neck_stock | manufacture | neck_stock | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件枫木锯切琴颈木坯未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_fingerboard | manufacture | fingerboard | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件实心枫木指板坯未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_truss_rod | manufacture | truss_rod | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品钢制吉他调节钢筋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_frets | manufacture | frets | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品铜镍锌合金吉他品丝未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_nut | manufacture | nut | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品合成材料吉他上弦枕未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_markers | manufacture | markers | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品聚合物指板品位标记未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pickup | manufacture | pickup | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份被动电磁吉他拾音器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_bridge | manufacture | bridge | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品金属吉他琴桥总成未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_tuner | manufacture | tuner | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品金属吉他调弦机构未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_strings | manufacture | strings | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购电吉他钢弦未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_volume_pot | manufacture | volume_pot | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件吉他音量电位器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_tone_pot | manufacture | tone_pot | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件吉他音色电位器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_tone_cap | manufacture | tone_cap | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件被动吉他音色电容器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_selector | manufacture | selector | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件被动拾音器选择开关未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_output_jack | manufacture | output_jack | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件单声道吉他输出插座未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_hookup_wire | manufacture | hookup_wire | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件绝缘铜制吉他连接线未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_solder | manufacture | solder | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件含助焊芯锡银铜焊锡丝未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_insulation | manufacture | insulation | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件聚氯乙烯电气绝缘胶带未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_fasteners | manufacture | fasteners | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件另加钢制吉他装配螺钉未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_neck_plate | manufacture | neck_plate | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件已表面处理金属螺栓琴颈连接板未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pickguard | manufacture | pickguard | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品聚合物吉他护板未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_knob | manufacture | knob | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件成品聚合物吉他控制旋钮未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_strap_button | manufacture | strap_button | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件已表面处理金属吉他背带钮未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_wood_glue | manufacture | wood_glue | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购水性木工胶未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_grain_filler | manufacture | grain_filler | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购木纹填孔制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_undercoat | manufacture | undercoat | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购木器底漆制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_intercoat | manufacture | intercoat | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购木器中涂制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_colourcoat | manufacture | colourcoat | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购木器色漆制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_topcoat | manufacture | topcoat | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件木质面漆未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_hardener | manufacture | hardener | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件另供涂料固化剂制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_thinner | manufacture | thinner | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购涂装稀释剂制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_cleaner | manufacture | cleaner | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购喷枪清洗制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_polish | manufacture | polish | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购吉他抛光制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_sandpaper | manufacture | sandpaper | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件涂附磨料砂纸片未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_buff_cloth | manufacture | buff_cloth | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件棉质抛光布未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_masking | manufacture | masking | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件纸基遮蔽胶带未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_electricity | manufacture | electricity | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件交流电未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | MJ | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_process_water | manufacture | process_water | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件工艺用水未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_fuel | manufacture | fuel | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件天然气燃料未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | MJ | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_purchased_heat | manufacture | purchased_heat | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件制造用热能未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | MJ | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_steam_in | manufacture | steam_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件外部蒸汽热载体水未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_hotwater_in | manufacture | hotwater_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件外部液态热水载体未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_condensate_return | manufacture | condensate_return | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件对外冷凝水产品回流未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_hotwater_return | manufacture | hotwater_return | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件对外换热液态水产品回流未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_wood_waste | manufacture | wood_waste | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废木料未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_finish_waste | manufacture | finish_waste | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废涂料残渣未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_string_trim | manufacture | string_trim | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件金属废料未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_component_reject | manufacture | component_reject | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件不合格被动拾音器部件未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_failed_guitar | manufacture | failed_guitar | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件不合格完整电吉他未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_cleaning_waste | manufacture | cleaning_waste | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废涂装清洗溶剂制剂未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_wastewater | manufacture | wastewater | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件吉他工厂清洗废水未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_used_abrasive | manufacture | used_abrasive | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废涂附磨料砂纸未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_used_cloth | manufacture | used_cloth | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废棉质抛光布未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_finished_guitar | manufacture | finished_guitar | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 经校准秤逐完整验收琴排运输包装称量，核对唯一首次放行序列、完整BOM、含水、声音演奏电气外观测试及日期。Q为这些净质量之和，不猜单件重量。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_o2_in | manufacture | m_o2_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件分子氧气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_o2_out | manufacture | m_o2_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件分子氧气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_n2_in | manufacture | m_n2_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件分子氮气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_n2_out | manufacture | m_n2_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件分子氮气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_ar_in | manufacture | m_ar_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件氩气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_ar_out | manufacture | m_ar_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件氩气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_h2o_in | manufacture | m_h2o_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_m_h2o_out | manufacture | m_h2o_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_co2 | manufacture | em_co2 | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件化石燃料二氧化碳未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_co | manufacture | em_co | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件化石燃料一氧化碳未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_no | manufacture | em_no | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件一氧化氮气体未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_no2 | manufacture | em_no2 | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件二氧化氮气体未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_so2 | manufacture | em_so2 | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件二氧化硫气体未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_ch4 | manufacture | em_ch4 | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件化石燃料甲烷未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_acetone | manufacture | em_acetone | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件丙酮蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_ethylacetate | manufacture | em_ethylacetate | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件乙酸乙酯蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_toluene | manufacture | em_toluene | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件甲苯蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_em_wood_dust_air | manufacture | em_wood_dust_air | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件空气中木尘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_electricity | service | s_electricity | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件交流电未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | MJ | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_water | service | s_water | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件工艺用水未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_new_string | service | s_new_string | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份替换电吉他弦未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_new_pickup | service | s_new_pickup | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份替换被动吉他拾音器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_old_string | service | s_old_string | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件拆下电吉他弦未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_old_pickup | service | s_old_pickup | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件拆下被动吉他拾音器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_h2o_in | service | s_h2o_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_s_h2o_out | service | s_h2o_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_p | packaging | carton_p | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_i | packaging | carton_i | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_er | packaging | carton_er | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_s | packaging | carton_s | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_eo | packaging | carton_eo | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_w | packaging | carton_w | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件废瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_p | packaging | pebag_p | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_i | packaging | pebag_i | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_er | packaging | pebag_er | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_s | packaging | pebag_s | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_eo | packaging | pebag_eo | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_w | packaging | pebag_w | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件废聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_p | packaging | foam_p | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_i | packaging | foam_i | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_er | packaging | foam_er | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_s | packaging | foam_s | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_eo | packaging | foam_eo | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_w | packaging | foam_w | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件废发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_p | packaging | pallet_p | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_i | packaging | pallet_i | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_er | packaging | pallet_er | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_s | packaging | pallet_s | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_eo | packaging | pallet_eo | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_w | packaging | pallet_w | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件废整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 分别保留本池事件：期初期末空WIPFG周转存量; P; I及供方归属; ER; 完整毛S; EO; W来源至容器称重与接收配对，不抵去留存入流。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_mixed_packaging_waste | packaging | mixed_packaging_waste | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件混合吉他运输包装废物未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_cnc_receipt | assets | cnc_receipt | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件木工数控加工中心未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_cnc_retirement | assets | cnc_retirement | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件木工数控加工中心未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_cnc_service | assets | cnc_service | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件木工数控加工中心使用服务未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | h | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_rack_receipt | assets | rack_receipt | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件钢制吉他调湿架未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_rack_retirement | assets | rack_retirement | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件钢制吉他调湿架未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_rack_service | assets | rack_service | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件钢制吉他调湿架使用服务未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | h | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_testamp_receipt | assets | testamp_receipt | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件电吉他测试放大器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_testamp_retirement | assets | testamp_retirement | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件电吉他测试放大器未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_testamp_service | assets | testamp_service | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件电吉他测试放大器使用服务未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | h | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_new_cutter | assets | new_cutter | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件钢制木工替换刀具未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_old_cutter | assets | old_cutter | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件拆下钢制木工刀具未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_new_oil | assets | new_oil | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件整份外购机械润滑油未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_spent_oil | assets | spent_oil | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 | 仅采本方向事件废机械润滑油未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_repair | assets | pallet_repair | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件实心阔叶木托盘维修板未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_humidity_in | packaging | carton_humidity_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_humidity_out | packaging | carton_humidity_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_humidity_in | packaging | pebag_humidity_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_humidity_out | packaging | pebag_humidity_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_humidity_in | packaging | foam_humidity_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_humidity_out | packaging | foam_humidity_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_humidity_in | packaging | pallet_humidity_in | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_humidity_out | packaging | pallet_humidity_out | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件水蒸气未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_carton_used_burden | packaging | carton_used_burden | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件瓦楞吉他运输纸箱未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pebag_used_burden | packaging | pebag_used_burden | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件聚乙烯吉他保护袋未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_foam_used_burden | packaging | foam_used_burden | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件发泡聚乙烯吉他缓冲垫未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |
| cp_pallet_used_burden | packaging | pallet_used_burden | collected_record | 场址; 阶段; 时间; 序列群组; 供货批; 配置; 真实事件; 原量原单位; 仪表秤校准; 毛V; 换算密度状态; already_net标志; 上游归属; 期初期末原料WIP未用非WIP数量; 完整每交换继承向量; 归属证据; Q或原Q_c; 观测H; 实际处置 ; 包装池制品及湿态基准; F_in/F_out真实修补拆出水及其他数量方向; X_in/X_out数量及同侧OTHER重复流id证据，非存量非对侧; 完整湿制品或不相交组成桥选择; source_W产生时间数量及匹配接收容器id; opening_container; closing_container; other_container_in; mixed_external_out真实时间数量; other_container_out; 一次真实外部运输处理供方归属 | 仅采本方向事件整份木质运输托盘未除真实原量。用可追溯称重批BOM、经校准阶段分表或真实服务工时账；分开存量、完整毛V、供方负荷向量及组成化验。阶段原单位必填，区分不存在、未知及低于检出。 | kg | 每真实事件及批，记录仪表间隔 | 完整制造期或原群组观测H含失败闲置时段 | 实际场址及关联供方，逐阶段记录 | 每参考流 | 原记录; 校准; BOM; 供方范围; 测试处置; 检出不确定及完整账桥 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 逐未除原量速率先转换到本行原生广延单位再归属，已积分量求和一次，真实速率按实测时间积分。kWh到MJ乘3.6，体积质量须同状态独立实测密度，不能从次级属性系数反推。 | raw_amount; raw_unit; calibration; measured_state; independent_density | U_native; V_native | yamaha-craft |
| calc_burden | all inventory rows | 仅负荷卡从原料WIP未用未归属存量的完整每交换B_open + U_owned - B_close，经专属虚拟细分及逐交换分配正当归属得A。already_net不二扣存量。期末放行FG及已发生原群组服务不扣B_close。普通制造废物销售失败保留，除非有真其他功能及正当一次移交。 | B_open; U_owned; B_close; already_net; assignment_evidence | A | ilcd-allocation |
| calc_quotient | all inventory rows | q = N / Q_basis仅一次。制造负荷N=A且Q_basis=Q，实际服务负荷用原Q_c。毛及内部事件披露N是实际完整V，不是负荷向量或已分配扣存量量，按记录使用本Q或原Q_c。参考产出为1千克。分母零保留真实原负荷V，不出单位结果。卡片数量和aggregation只引用本结果，不另除。 | A; V; Q; Q_c; actual_event_role | q | ilcd-allocation |
| calc_physical | all inventory rows | 独立完整物理平衡：制造期初原料WIP+外部毛入流=期末原料WIP+首次放行内部交接+真实废物排放返还；FG期初+首次放行交接+真实退回及新增料水=完整湿态期末FG+毛发运+真实返还废物物种出口。合并门将内部配对交接抵消一次，包材资产用不重叠子门。毛实物绝不乘经济负荷份额。X_in/X_out仅去除OTHER同侧流项重叠，不能取消真实新增入流及完整湿态期末存量。 | complete_gross_legs; opening_stock; closing_stock; paired_internal_transfer; same_side_overlap | independent_physical_balances | ilcd-allocation |
| calc_packaging | all inventory rows | 每制品等级池采用 O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out。O、C为期初、期末完整湿态空、附WIP、附FG及周转存量。F_in/F_out为跨本池边界独立实测的真实修补加入、拆出部件、水及其他实际新增/损失，逐项保留方向和实物状态。X_in/X_out仅扣与同侧OTHER真实流项已重复计入的有据部分，绝不扣存量、对侧流项，也不因真实新增量留在完整湿态C而抵消其入流。完整湿制品余额与等价不相交组成桥二选一，不加总两套；供货内含水和组成只归属一次，真实新增修补料及水即使留C仍保留实入流。六卡为六真实方向事件，I保留供方内含入厂及一次上游归属，S为毛实物发运全质量。内部重复使用抵消，不入净Q、不重复采购或信用。真实增失水仍独立量测。来源W为本池实际产生并转入匹配接收容器的实物流，不是假定的外部Waste出口；按calc_packaging核对该容器存量及真实外部出口。 每个匹配接收容器采用 opening_container + source_W + other_container_in = closing_container + mixed_external_out + other_container_out，各项为同时间及状态基准的完整湿态容器内容物。source_W为已配对真实来源贡献之和；other_container_in/out仅含独立不重叠的真实容器入/出流。容器积存保留为期末存量，不虚构混合外部出口；日后真实外出时按实际记录。整合时来源W与匹配容器接收项配对抵消一次，容器总量和来源分量不叠加。仅实际实测混合外部Waste出口对应一次运输处理供方，来源W产生或容器积存不另加供方。实际分出口须先替以各真实原子Waste，不为对称造出口。普通制造、不合格及样品废物保留制造处理负荷，只有真其他群组功能及正当移交才一次转移向量。 | opening_pool; P; I; ER; F_in; X_in; closing_pool; S; EO; W; F_out; X_out; paired_receiver; opening_container; source_W; other_container_in; closing_container; mixed_external_out; other_container_out | packaging_pool_balance | yamaha-qc; ilcd-allocation |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 参考及各选流必须满足完整整琴范围、原生整件部件、被动电声、CAS、材料、形态、路线、地域、介质类型、属性单位与实际供方相容。普通未决辅助身份及未来实测披露，不据此假称核心hold；核心整成品身份未确认则不能作为可用方法。 | 完整原生记录及真实供方BOM路线 |
| dq_sources | all sources | 使用原件完整范围及邻近反例，不把单例数值当配方，工业工序说明不授权LCA分配。 | 原件及逐来源适用排除 |
| dq_complete | all ledgers | 检查逐来源适用排除、上游归属、实物负荷桥、实际重工许可测试处置及全部缺原子；声明真实场址、周期、样本覆盖、不确定及不完整。结构Schema检查不构成科学或翻译审批。 | 原始校准记录、样本覆盖、不确定及失败作业 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_identity | reference and every selected exchange | 参考及各选流必须满足完整整琴范围、原生整件部件、被动电声、CAS、材料、形态、路线、地域、介质类型、属性单位与实际供方相容。普通未决辅助身份及未来实测披露，不据此假称核心hold；核心整成品身份未确认则不能作为可用方法。 | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_release | Q and stock | 每序列首次完整放行及校准净质量只计一次。核对原料WIP非WIP继承向量，期末已放行FG保留，失败Q0启停闲置清理测试全保留，不二次校正。交付重验不造产量。 | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_atoms | all rows and raw records | 每卡一个身份事件及十字段，真实条件适用，未知非零。整份采购与组成桥、物种相态及各包材六腿核对；毛V不得扣存量或经济缩量，商式仅一次。 | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_balance | independent physical gates | 完整物理质量及相关元素平衡独立于真实物种和反应水证据。实际游离、留存、蒸发及反应水分开，不由一个残差反推两未知。气液密度状态独立实测，COD/VOC/PM不标识物种。 | ilcd-allocation; yamaha-craft; yamaha-qc |
| validation_coverage | scientific and data quality | 检查逐来源适用排除、上游归属、实物负荷桥、实际重工许可测试处置及全部缺原子；声明真实场址、周期、样本覆盖、不确定及不完整。结构Schema检查不构成科学或翻译审批。 | ilcd-allocation; yamaha-craft; yamaha-qc |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完成前景采集及适用审查后用于真实相容完整琴供货及披露门 |
| allowed_use | 声明配置的被动实心琴体螺栓琴颈吉他生产 |
| excluded_use | 其他电乐器、仅部件、纯声学有源路线，或由工程检查推科学翻译映射审批 |
| required_metadata | 实心琴体及螺栓木琴颈; 真实型号配置及序列群组; 完整BOM及供方现场工序划分和内含组成; 无电池被动电磁线路及真实接线图; 木树种等级供货形态及含水; 整份涂料胶清洗剂制剂及真实独立加入; 真实测试判据及首次放行门; 排包材完整净质量及校准; 原料WIP未用非WIP继承向量及已校正标识; 已放行FG物理账及原群组服务H; 重工许可测试验收暂扣及废弃处置; 包材六事件池及毛实物V与负荷分开; 原生属性介质路线地域类型及供方相容; 真实归因分配需求及共同门证据 |
| required_quality_disclosure | 真实来源供方范围、原始覆盖、不确定、未决原子、存量负荷毛流桥及Q/H |
| update_trigger | 线路木材供货路线门制剂原生身份供方质量判据或重要证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| yamaha-wood | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/ | 木板受控储存及枫木赤杨琴体琴颈供料形态，不采用树种份额及通用含水 |
| yamaha-shaping | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing002.html | 琴颈琴体机手加工开槽及螺栓、胶接、通颈反例，不采用加工时长 |
| yamaha-finish | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing003.html | 填孔及底中颜色面涂喷干磨序列，不采用树脂配方膜厚 |
| yamaha-assembly | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/manufacturing/manufacturing004.html | 装配上弦调校及接线通道，照片有源线路不证明被动拓扑 |
| yamaha-mechanism | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/mechanism/ | 木体钢弦拾音及需外放的完整电吉他功能正面证据，放大器独立 |
| yamaha-pickup | handbook | https://www.yamaha.com/en/musical_instrument_guide/electric_guitar/mechanism/mechanism002.html | 无电源线圈磁体换能及单双线圈路线，整份拾音器组成上游一次 |
| yamaha-craft | handbook | https://usa.yamaha.com/products/contents/guitars_basses/difference/craftsmanship.html | 木工装品、分别饰面螺栓连接、整琴装配及声音演奏外观终检，排除声学接合、ARE、条件IRA及数值例 |
| yamaha-qc | handbook | https://usa.yamaha.com/products/contents/guitars_basses/difference/qc.html | 持续质检及缺陷停发、实际终端搬运包装；严酷型式试验极值及寿命宣传不作通用放行阈值 |
| yamaha-pacifica | handbook | https://shop.usa.yamaha.com/en/p/instruments/guitars-basses-amps/electric-guitars/pac112vm-pacifica-electric-guitar | 真实赤杨枫木螺栓电吉他供货结构正面证据；不主张单SKU全路线或数值 |
| duncan-passive-twoh | handbook | https://www.seymourduncan.com/images/wiring-diagrams/2H_3G_1V_1T.pdf | 独立发布者的被动拾音、电位器、电容、开关、单声道插座拓扑，不采用线路数值 |
| ilcd-allocation | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | ILCD2010首版7.9.2–7.9.3印刷255–272页：归因细分、决定性物理因果、实际共同门剩余市场价值及服务分配，不提供产品通用数值 |
