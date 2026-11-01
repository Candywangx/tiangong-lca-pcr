---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-musical-instruments-including-percussion-instruments-musical-boxes-and-fairground-0b000707
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 层压枫木壳声学小军鼓制造


## 1. 范围与适用性

本PCR覆盖一枚层压枫木木壳、实际漆饰的全新完整非电声小军鼓，终端为首次质量放行。前景包含真实供货胶合板准备、鼓壳涂胶成形成干燥及加工、实际涂饰、整份供货鼓皮金属配件装配、响弦调节机构安装、调音及检验。供方层合裸壳为有证据的互斥自制外购替代，不授权缩成外购成品鼓加包装。本方法透明综合primary路线、结构及供方文件，不主张各观察是同一SKU、订单或工厂；不规定层数、胶配方、密度、厚度、张力、设备设定、单鼓重、寿命、性能或认证默认值。

排除套鼓、电拾音及电子鼓；其他木种及条板实木蒸汽弯曲金属壳须明确重新判断适用性；另排除铜管弦乐器、锣镲、仅壳鼓皮响弦配件、玩具、鼓架及安装系统。实际终端为完整可演奏小军鼓，不能以原木或备用鼓皮替代；放行后真实包装仓储搬运继续记录于原队列独立服务账。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-musical-instruments-including-percussion-instruments-musical-boxes-and-fairground-0b000707 |
| classification_refs | CPC 3.0 38350；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38350.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整层压枫木壳声学小军鼓 |
| excluded_products | 套鼓; 电声乐器; 铜管弦乐器; 锣镲; 仅配件; 玩具; 安装架; 未重新评估的其他鼓壳路线 |
| representative_product | 层压枫木壳声学小军鼓制造 |
| production_route | 真实胶合板及胶到圆筒壳; 实际涂饰加工; 整供组件装配; 调音及首次检验 |
| market_state | 工厂完整全新去包装验收乐器 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 打击鼓皮耦合共振鼓皮及响弦形成声学打击乐功能 |
| How much | 新增首次质量放行完整小军鼓净质量1 kg |
| How well | 按真实规格完成装配及鼓皮响弦调音响应，无通用阈值 |
| How long or cycle | 一次制造至首次放行周期，不主张寿命 |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器 `81c9d4a5-bc2a-4362-893b-a5d1cf993a54` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 配置及序列或批次; 枫木树种及供货胶合板层合含水状态; 厂内与外购鼓壳工序; 鼓壳实际形状及净尺寸; 承边及响弦床几何; 真实孔位及气孔配件; 整份打击及共振鼓皮结构聚合物; 涂层鼓皮及金属配件供方已含组分; 真实鼓耳拉杆响弦调节固定机构及连接件; 真实木胶及完整涂层制剂; 真实成形成干燥固化及能源路线; 对角调音及真实声学验收规格; 首次放行日期检验员及处置; 完整净质量校准称量且排除所有包装; 原队列库存继承及服务观察区间; 包材六毛事件池及上游所有者; 真实排放物种相态介质及所用独立密度 |

实际数据包必须明确记录全部限定。宽原生产品族由完整成品卡描述及这些要求限定，不扩展到该族列举的其他乐器；参考与链接成品输出为同一新增质量放行对象。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass | kg | Q仅为声明队列新增首次放行完整鼓实测净质量之和；经校准秤去皮，追溯配置序列放行、含水状态及已含组件；不从网页、密度或次级原生因子推重。 |
| numerator_unit | every inventory numerator | native extensive property | row-specific | 原始采集保留原单位；任何真实负荷分配前逐质量能源体积件数服务小时转为本行声明广延单位，不将Mass/kg套到MJ、m3、item或h。 |
| electricity_units | electricity; service_electricity | Net calorific value | MJ | 实测kWh仅按精确单位换算3.6 MJ/kWh转换，不设转换效率或另购电。 |
| volume_state | maple_plywood; compressed_air | Volume | m3 | 实测板材几何体积及状态；空气体积记录压力温度湿度和声明基准。积分体积已是总量，仅真实速率积分一次；所需kg桥用独立实测物质专属密度状态，不套水密度或原生次级比值。 |
| count_bridge | item-based observations | Number of items | item | 真实使用时Number of items/Item(s)与item同物理计数因子一。鼓或资产件数转kg须按实际完整配置批次独立校准称重，明确包装排除及含水组件范围；不设单件kg或寿命，Q仍实测放行净质量。 |
| single_normalisation | all inventory rows | row-specific numerator / Mass denominator | row unit per kg | 协议全保留raw，先构造本行分子，再按第8节唯一商于真实换算分配后执行一次。毛卡用完整实际V；服务用原队列真实增量及该队列Qc/H；制造用其放行队列分子及Q。Q=0保留负荷无单位结果。 |
| wet_whole_preparation | supplied wet articles and preparations | Mass | kg | 整份湿供货含供方成分载水一次，现场另加真实组分及损失单列；完整湿期末质量含新增真实存留维修料水，X仅去重其他同侧流。 |
| geometry | actual geometry records | Volume or measured area | m3 or m2 | 产品参考为质量而非面积。辅助体积面积用实际形状测量或可追溯配置图几何；L乘W仅已证矩形，不用外接框、双鼓皮面积或猜厚度密度。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供货可弯枫木胶合板或显式供方层合裸壳，加完整供货组件及真实现场制剂；不缩成外购成品鼓包装。 |
| starting_condition_role | 前景生产起点；供货状态上游负荷保留一次 |
| product_classification_scope | CPC 3.0 38350仅分类语境；本方法仅较窄完整声学层压枫木壳小军鼓 |
| recursive_input_rule | 供货壳或组件用相容上游制造一次；内部同产品交接合并为零；完整外购成品鼓不当原料壳。 |
| upstream_dataset_requirement | 匹配实际整份制剂组件、供方路线状态材料及地域时间范围，拒绝硬限制冲突；缺供方保留普通待采集义务。 |
| disclosure | 披露真实自制外购、工序顺序、供货组件边界、首次放行队列、库存继承、服务区间、全部毛实物门、不确定量及全部排除阶段。 |

以下完整规则共同适用于声明的首次放行边界及真实条件；条件缺席必须有证据，绝不填零。毛实物台账与负荷向量属于不同维度。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 从实际供货可弯枫木胶合板、层合制剂和组件开始；裁板、真实涂胶、圆模气囊成形、干燥、裁边、砂磨涂饰固化抛光、加工边缘及响弦床、钻孔气孔、整鼓皮配件响弦机构装配及调音检验；现场顺序可异但必须记录。真实微波及UV工序采集电耗，不造锅炉或蒸汽需求。 | `yamaha-shell`; `yamaha-finish`; `yamaha-assembly` |
| boundary_make_buy | shell_bought; maple_plywood | 外购已层合裸整壳是有供方证据的互斥替代，上游一次；仅替代已证明外包的工序，保留真实本地加工涂饰装配测试。内部同产品交接合并抵消，不造第二采购及第二Q。原木和单板制备在已示范供货胶合板上游，不虚构厂内工序；若现场确有单板制备，使用前新增其逐木材、胶、能耗及损失交换。 | `yamaha-shell` |
| boundary_components | all supplied components | 鼓皮含供货膜涂层固定圈，金属组件含供方镀层及已含螺钉，响弦套件含其已供端板固定件。每份整供制剂或制品一次采购；组分非叠加记录，仅真实另购或现场自制才拆独立材料、工序及损失。 | `yamaha-components`; `remo-head` |
| boundary_first_release | finished | Q为声明配置、队列及时间窗内首次新增质量放行完整小军鼓逐件去包装实测净质量之和。已放行期末成品已在Q及其制造负荷中，不再作为未放行库存扣除或第二输出加入。期初已放行成品、复验、发运及退回均不造Q；不使用净交付分母。 | `yamaha-assembly` |
| boundary_burden_stock | all burden-bearing rows | 逐交换继承负荷向量与实物库存分开。制造分子用单位换算及真实分配后的原始分子，加期初原料、WIP和未分配非WIP存料继承负荷，仅扣尚未归属放行的期末原料、WIP及未分配非WIP负荷。已归属已放行成品或已净耗用不再次扣库存。真实转移必须有可识别其他队列或功能及正当分配移交且仅一次；普通不合格、样品及出售外送废物仍保留制造处理负荷。 | `ilcd-2010` |
| boundary_all_actual_work | all processes | 包含所有真实不合格、零产出、试验、启停、闲置、清洗及返工。Q=0保留真实负荷及库存向量，不出单位结果；未知真实量非零。许可、后测及验收决定授权和持续合格，不决定是否记录已发生作业。 | `ilcd-2010`; `yamaha-assembly` |
| boundary_service | service; assets; packaging | 放行后仓储搬运包装服务真实增量绑定原队列首次放行质量Qc和已观察区间H；期末成品留库不删已发生原队列服务，仅未用或未分配服务及蓄料可结转。未来未知服务明示但不填数。制造及服务合并抵消内部Q交接，仅一个参考输出。 | `ilcd-2010` |
| boundary_rework | service | 真实放行后重工须制造商或规格许可及作业后测试验收处置，才能主张持续合格。未获准、失败或不合格作业仍全保留物料、水、能源、新旧件、原队列及hold废物处置，不假定损坏壳鼓皮可恢复。自然仓储吸湿蒸发不是维修，无需虚构许可。 | `yamaha-assembly`; `ilcd-2010` |
| boundary_physical_gates | all physical legs | 任何负荷份额之前独立闭合制造、FG服务及合并实物门。完整毛腿及湿态期初期末质量保留；维修材料水和包材X_in/X_out只去重其他同侧流入流出项。新增量即使留期末库存仍保留真实流入及完整期末湿质量。内部复用在合并门内抵消，不造新采购产量。 | `ilcd-2010` |
| boundary_packaging | packaging | 逐真实纸箱、PE袋、纸垫、PET带及木托盘池独立采集P/I/ER/S/EO/W六事件：期初空包材加附着WIP成品加复用库存 + P + I + ER = 同范围完整期末库存 + 毛发运S + 对外退还EO + 废弃W，并互斥加入真实维修、湿度交换及其他真实转化。P/I为接收负荷归属互斥，供货已含I仍保留真实实物流入和唯一上游所有者；湿整件P/I一次，制品组分桥互斥。 | `ilcd-2010` |
| boundary_waste_outlet | all waste rows | 即使废物共出口也量测每池六方向。W来源实物混收时，逐来源W仅作唯一真实混合Waste交换的非叠加子账，不叠加总量及组分或重复处理。仅真实分出口才有各外部Waste交换。出售外送不自动减分配负荷或产生替代信用。 | `ilcd-2010` |
| boundary_assets | assets | 完整新旧实物资产、维修件及流体与当期服务负荷分开；记录毛取得、退还、报废、期初期末在装资产蓄料、调拨及真实维修处置。实际制造维修负荷与已观察服务分配独立测定，不设默认寿命、单件kg或每kg一整机，资产毛流绝不按服务经济份额缩量。 | `ilcd-2010` |
| boundary_heat_water | heat; thermal_water_in; thermal_water_return | 仅实际供热计入；热MJ与真实液态热载体kg及库存回水分开，记录状态、进出口温度焓及唯一供方水能约定，不重复采购整份供热及载体能源。真实回水为Product退回而非废物；不造蒸汽、冷凝液、锅炉或热回路。 | `ilcd-2010` |
| boundary_additions | all processes | 任何实际新增木种、单板、独购制剂组分、气体、液相、包材池、维修件、处理或运输，在建模前新增其原子卡、精确量测及供方身份审查；真实流不得藏在other、零或集合中，现场自制拆真实独立原料能耗损失并抵消内部交接。 | `ilcd-2010`; `yamaha-shell` |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 木壳准备至新增质量放行 | required | 声明路线内全部真实工序及失败作业 | 制造放行 | finished |
| service | 原队列放行后服务 | conditional | 声明路线内全部真实工序及失败作业 | 毛实物事件及独立应归属负荷 | 仅原队列参考披露尺度，无第二Q |
| packaging | 实际包材实物事件池 | conditional | 声明路线内全部真实工序及失败作业 | 毛实物事件及独立应归属负荷 | 仅原队列参考披露尺度，无第二Q |
| assets | 真实资产及应归属生产服务 | conditional | 声明路线内全部真实工序及失败作业 | 毛实物事件及独立应归属负荷 | 仅原队列参考披露尺度，无第二Q |

每卡仅一个真实事件，不授权虚构发生。整份制剂采购一次；外部模型交换须按明示要求对混合出口及内部交接去重。唯一混合出口的来源W子账不生成第二Waste交换。第8节single_quotient为唯一商，卡片不要求先采集除法；毛卡结果仅实物披露，非第二环境采购。

### 过程：木壳准备至新增质量放行（`manufacture`）

#### 输入

##### 产品流

###### 枫木胶合板（`maple_plywood`）

按实际供货层合结构采购的薄枫木胶合板。实测板材体积并为实物质量平衡独立称量整份胶合板，已含单板和供方胶仅作组分子账，不再采购；采集裁切、含水率及不合格坯料。 原生Product为工厂生产混合、单板胶合压制的半成品胶合板，原生Volume/m3；未固定CAS、品级或地理。定义为交错胶合木单板，MDF及OSB仅是人造板家族其他成员，不是本流。分类标签为竹材而物理定义是通用木胶合板，作为分类瑕疵披露，不据此证明竹材。限定真实可弯枫木板、供货层和胶边界及实测板材体积；不用竹材、MDF、OSB、裸单板或成形鼓壳；原生因子不证明密度。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：胶合板 `8b239d58-5fc2-40a5-8003-33f4082bc995`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_maple_plywood`
- 来源：`yamaha-shell`

###### 层压枫木小军鼓鼓壳（`shell_bought`）

条件性自制或外购替代：供方已层合的完整裸木鼓壳，后续本地边缘加工及涂饰。仅凭供方边界证明，才能排除已外包工序的厂内层合输入与能耗；不得在自产鼓壳内部交接之外再加外购壳。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：层压枫木小军鼓鼓壳
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_shell_bought`
- 来源：`yamaha-shell`

###### 木壳层合胶供货制剂（`lamination_glue`）

实际层合胶整份供货制剂；须采集制剂身份、载水、固形物、固化机理及供方边界。整份一次，不编树脂配方。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳层合胶供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lamination_glue`
- 来源：`yamaha-shell`

###### 木壳层合胶固化剂供货制剂（`glue_hardener`）

仅适用于实际单独供货并使用的固化剂；真实单组分胶不适用。整份胶内已含者不再采购。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳层合胶固化剂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glue_hardener`
- 来源：`yamaha-shell`

###### 涂层塑料膜小军鼓打击鼓皮（`batter_head`）

完整外购打击鼓皮，包含膜、供方涂层、固定圈及工厂装配。确认实际聚合物、涂层和圈；已含组分不再并列采购树脂、颜料或圈，不能绑定裸PET树脂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：涂层塑料膜小军鼓打击鼓皮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_batter_head`
- 来源：`yamaha-components`; `remo-head`; `yamaha-techniques`

###### 塑料膜小军鼓共振鼓皮（`resonant_head`）

整份外购下鼓皮含固定圈；识别供方膜材及结构，不假定厚度、密度或与打击鼓皮等重。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：塑料膜小军鼓共振鼓皮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_resonant_head`
- 来源：`yamaha-components`

###### 镀层金属小军鼓打击侧鼓圈（`batter_hoop`）

完整供货打击侧金属鼓圈，与鼓皮内已含固定圈不同。实际合金、成形及镀层属于整件供方，不默认本地电镀。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：镀层金属小军鼓打击侧鼓圈
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_batter_hoop`
- 来源：`yamaha-components`

###### 镀层金属小军鼓响弦侧鼓圈（`snare_hoop`）

完整下鼓圈，保留实际响弦避让结构；与上鼓圈及鼓皮固定圈分开，已含镀层在整件中一次计入。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：镀层金属小军鼓响弦侧鼓圈
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_snare_hoop`
- 来源：`yamaha-components`

###### 镀层金属小军鼓鼓耳组件（`lug`）

完整供方鼓耳组件；已含螺套、垫片及安装螺钉为组分，除非另行供货。记录真实BOM及自制外购边界。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：镀层金属小军鼓鼓耳组件
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lug`
- 来源：`yamaha-components`

###### 镀层金属鼓调音拉杆（`rod`）

单独供货调音拉杆；仅在供方整件包含时带垫圈，不与鼓耳安装螺钉重复。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：镀层金属鼓调音拉杆
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rod`
- 来源：`yamaha-components`

###### 卷曲金属响弦组件（`wire`）

外购响弦整组件含端板；合金、线数、连接形式及供货质量均按真实配置，不重复采购其原料金属。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：卷曲金属响弦组件
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wire`
- 来源：`yamaha-components`

###### 金属小军鼓响弦调节机构（`strainer`）

外购带操作杆及调节螺钉的响弦调节机构；已含安装件仅组分记账，最终检验实际开合。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：金属小军鼓响弦调节机构
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_strainer`
- 来源：`yamaha-components`

###### 金属小军鼓响弦固定尾座（`butt`）

另一端独立供货的响弦固定座；若已含在调节机构套件中则不再添加。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：金属小军鼓响弦固定尾座
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_butt`
- 来源：`yamaha-components`

###### 聚酯响弦连接带（`snare_strap`）

仅记录真实单独供货并安装的聚酯连接带；若响弦套件内已含则不另购，不假定任意绳均为聚酯。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：聚酯响弦连接带
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_snare_strap`
- 来源：`yamaha-techniques`

###### 金属小军鼓鼓壳气孔护圈（`vent`）

实际钻孔后安装的独立供货气孔护圈，不假定个数或孔径。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：金属小军鼓鼓壳气孔护圈
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_vent`
- 来源：`yamaha-assembly`

###### 钢制小军鼓配件安装螺钉（`mount_screw`）

仅适用于整份鼓耳或调节机构套件之外独立供货的安装螺钉，已含紧固件不重复。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：钢制小军鼓配件安装螺钉
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mount_screw`
- 来源：`yamaha-assembly`

###### 弹性体小军鼓鼓耳隔离垫（`gasket`）

仅单独供货垫片，采集真实弹性体组成；供方已含者留在整份鼓耳内，不再次采购。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：弹性体小军鼓鼓耳隔离垫
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gasket`
- 来源：`yamaha-components`

###### 木壳封闭底涂供货制剂（`basecoat`）

实际单独供货的封闭底涂制剂；湿制剂含载体及供方添加剂整份一次，逐项采集固形物、载体、涂布损失及固化机理。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳封闭底涂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_basecoat`
- 来源：`yamaha-finish`

###### 木壳着色涂层供货制剂（`colourcoat`）

仅真实独立供货着色制剂；不由颜色推断颜料、溶剂物种及排放比例，不重复顶涂已含色浆。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳着色涂层供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_colourcoat`
- 来源：`yamaha-finish`

###### 紫外固化木壳面漆供货制剂（`topcoat`）

已证实涂饰路线的真实紫外固化面漆整份制剂；树脂、活性稀释剂、光引发剂及载体仅组分子账，不拆成四次采购。不假定无溶剂、全固化或固定UV时间。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：紫外固化木壳面漆供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_topcoat`
- 来源：`yamaha-finish`

###### 木器漆固化剂供货制剂（`coating_hardener`）

仅真实单独采购漆用固化剂，要求身份及反应证据；不凭推断给单组分紫外制剂加固化剂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木器漆固化剂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coating_hardener`
- 来源：`yamaha-finish`

###### 木器漆稀释剂供货制剂（`thinner`）

现场实际添加的独立采购稀释剂整份混合物，不默认丙酮、乙醇或水。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木器漆稀释剂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_thinner`
- 来源：`yamaha-finish`

###### 木工设备清洗剂供货制剂（`cleaner`）

边界内真实清洗制剂，测量整份湿制剂、存留料及废物；已含载体不再作为另一水或溶剂采购。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木工设备清洗剂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaner`
- 来源：`yamaha-finish`

###### 涂附磨料砂纸（`abrasive`）

真实单一供货结构的整张砂纸或砂带，已含基材和磨料为组分；另一真实结构须新增独立行。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：涂附磨料砂纸
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_abrasive`
- 来源：`yamaha-finish`

###### 木器漆抛光剂供货制剂（`polish`）

仅实际使用时纳入整份抛光剂，采集制剂、载体、磨损残留及处置，不由抛光照片推定。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木器漆抛光剂供货制剂
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_polish`
- 来源：`yamaha-finish`

###### 电力（`electricity`）

仅现场实际发生时纳入电力。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。 原生Product为供电地CN、低于1kV的用户侧消费混合电网平均交流供电，包含生产及输配到用户。仅绑定真实相容中国低压供电及供方边界，不替代高压或仅凭绿证供电。原生参考为净热值/MJ，实测kWh依据精确单位恒等1 kWh = 3.6 MJ换算，不编效率；唯一供方已含发输电不重复。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 外购热（`heat`）

仅现场实际发生时纳入外购热。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：外购热
- 流属性/单位：净热值 / MJ
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 天然气（`natural_gas`）

仅现场实际发生时纳入天然气。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_natural_gas`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 工艺用水（`process_water`）

仅现场实际发生时纳入工艺用水。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。 原生Product为经处理的工业工艺用水、Mass/kg，处理程度、质量、取得及供应点按真实供方；未固定CAS、品级或地理。仅用于实际处理后的工艺服务水及唯一供方，不替代未处理取水、蒸汽、环境水蒸气、清洗制剂已含载水或自动再生水信用；新增存留水和完整期末湿库存均保留。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_water`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 压缩空气（`compressed_air`）

仅现场实际发生时纳入压缩空气。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。气囊压缩机做功计电力；外购压缩空气与其供方已含压缩电耗采用互斥边界，不重复。 原生Product为高于大气压、用于工业传能或雾化的压缩空气、Volume/m3，未固定压力、品级、地理或组成；采集实际压力、温度、湿度、基准状态，需要kg时独立测密度。同一压缩做功的外购空气供方与本地压缩电耗互斥，物种穿透是实物桥，不是另一空气采购。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_compressed_air`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 接收液态水热载体（`thermal_water_in`）

仅现场实际发生时纳入接收液态水热载体。按原生广延属性计量，保留真实状态、供方及启停、闲置、失败批次和清洗区间；不推定锅炉或蒸汽厂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：接收液态水热载体
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_water_in`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 棉质擦拭布（`cloth_new`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：棉质擦拭布
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cloth_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 纺织物抛光轮（`buffwheel_new`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：纺织物抛光轮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffwheel_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工粉尘过滤滤芯（`filter_new`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木工粉尘过滤滤芯
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filter_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

##### 废物流

##### 基本流

###### 水蒸气（`manufacture_water_uptake`）

在制造中木材、涂层、包材或设备真实吸收的环境水蒸气；自然湿度交换无需虚构维修。新增水即使留在完整湿态期末库存也保留，仅与其他同侧流入项去重。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacture_water_uptake`
- 来源：`yamaha-shell`

###### 氧气（`oxygen_in`）

仅真实发生的氧气气态流入。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary为来自空气的可再生元素资源氧气，O2、CAS 7782-44-7、Mass/kg；仅实际环境空气中分子氧气态流入，不替代外购液氧或医用氧、离子氧或总氧元素。宽同义词含液态等其他状态，不能推翻真实空气分子身份；未主张固定品级、地理或供方。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oxygen_in`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 氮气（`nitrogen_in`）

仅真实发生的氮气气态流入。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary二氮N2、CAS 7727-37-9、Mass/kg，来自空气的可再生元素资源；仅真实空气分子N2气态流入，不替代液氮采购、NH3、硝酸盐、NOx或总氮。原生名称澄清为二氮及CAS优先于含液态的宽同义词；无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_in`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 氩气（`argon_in`）

仅真实发生的氩气气态流入。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary氩、CAS 7440-37-1、Mass/kg，来自空气的可再生元素资源。仅真实空气流入的普通非放射性氩，不替代外购低温惰性气体或Ar-41。原生同义词含同位素标签，不建立放射性交换，也不覆盖稳定氩CAS和实际空气状态；无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_argon_in`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 二氧化碳（`carbon_dioxide_in`）

仅真实发生的二氧化碳气态流入。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_dioxide_in`
- 来源：`yamaha-shell`; `yamaha-finish`

#### 输出

##### 产品流

###### 退供方液态热载体水（`thermal_water_return`）

真实对外Product回水而非废水；按唯一供热供方约定测kg、进出口温度及焓，载水库存与热MJ分开；没有真实液态水回路不造回水。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：退供方液态热载体水
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_water_return`
- 来源：`yamaha-shell`

###### 其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器（`finished`）

完整全新非电声层压枫木壳小军鼓，双鼓皮、独立鼓圈、鼓耳、调音拉杆、响弦及调节和固定机构全部装配调音，实际边缘、响弦床、气孔及配件孔、表面处理和首次质量放行检验全部完成。原生Product为工厂生产混合的已制造成品，宽乐器族在此限定为该完整打击乐器。原生未限定CAS、地理、SKU、层数或材质品级；适用性不等于供方认可。排除购入完整鼓再包装、裸壳或鼓皮或零件、套鼓、电子、玩具、锣镲及安装架。仅一个首次放行输出，已放行期末成品只入Q一次，不再加作第二生产输出。 原生为工厂生产混合的已制造打击乐器宽Product族，未固定CAS、地理或材料品级。本行仅限上述完整非电声层压枫木壳小军鼓及本行实物事件，不含零件、玩具、电子乐器及其他发声机构；供方相容性仍须独立证明。

- 选定流：其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器 `81c9d4a5-bc2a-4362-893b-a5d1cf993a54`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finished`
- 来源：`yamaha-assembly`; `yamaha-components`

##### 废物流

###### 枫木胶合板边角废料（`wood_offcut`）

真实单独胶合板裁切废料出口，保留胶及水；无自动替代原生木材信用。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：枫木胶合板边角废料
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_offcut`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 捕集胶合枫木砂磨尘废物（`bonded_dust`）

仅真实单独捕集粉尘出口；保留木、胶及涂层组分而非单化学品；若并入混合废物，仅留来源W，不再增加本出口。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：捕集胶合枫木砂磨尘废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_bonded_dust`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 小军鼓制造混合固体废物（`mixed_waste`）

一个真实混合对外出口，按实际共同收集保留失败鼓皮、不合格壳和配件、样品、耗材及包材来源子账。W子项不与总出口叠加，处理供方一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：小军鼓制造混合固体废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mixed_waste`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木器漆过喷污泥废物（`coating_sludge`）

仅真实独立湿污泥出口，整份湿质量内水及制剂组分一次；COD不换算成溶剂。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木器漆过喷污泥废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coating_sludge`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工清洗废水（`wastewater`）

仅真实独立废水出口；游离水及真实溶解悬浮物记非叠加组分账，一个处理供方；共同混合出口不重复。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木工清洗废水
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 磨损棉质擦拭布废物（`cloth_worn`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：磨损棉质擦拭布废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cloth_worn`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 磨损纺织物抛光轮废物（`buffwheel_worn`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：磨损纺织物抛光轮废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffwheel_worn`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 磨损木工粉尘过滤滤芯废物（`filter_worn`）

仅该真实独立供货制品或独立磨损出口，记录实际纤维或滤材结构和湿态存留制剂；供方已含组分一次采购。磨损件若并入混合废物，来源W非叠加，处理供方在唯一真实出口一次。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：磨损木工粉尘过滤滤芯废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_filter_worn`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

##### 基本流

###### 水蒸气（`manufacture_water_evap`）

干燥、固化或自然湿度交换实际向空气失去的水蒸气。凭证据区分游离水、反应水及结构水；冷凝后实际送处理的液水属于另一个真实出口，不复制本出口。 原生Elementary水蒸气H2O、CAS 7732-18-5、Mass/kg，向未指定空气排放。仅实际气态水离开边界；原生宽同义词含冰、液水、重水氚水及结合水，不使这些状态或同位素等价。不替代液态废水、Product热载体回水或冷凝液的重复量；无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manufacture_water_evap`
- 来源：`yamaha-shell`

###### 氧气（`oxygen_out`）

仅真实发生的氧气气态流出。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary氧O2、CAS 7782-44-7、Mass/kg，向未指定空气排放，官方中文基名为氧。仅实际实测气态分子O2向空气排出，不替代水土介质、离子氧或外购氧；宽同义词含液态等不证明本行相态，毛量、穿透及净量独立，不设默认浓度。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oxygen_out`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 氮气（`nitrogen_out`）

仅真实发生的氮气气态流出。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary二氮N2、CAS 7727-37-9、Mass/kg，向未指定空气排放；仅分子气体穿越真实空气边界，不以NOx、总氮、硝酸盐、氨或液氮替代，宽同义词不是相态证据。独立保留毛量、穿透、净量，无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_out`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 氩气（`argon_out`）

仅真实发生的氩气气态流出。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 原生Elementary氩、CAS 7440-37-1、Mass/kg，向未指定空气排放；仅真实普通非放射性气态氩出口，披露同位素同义词歧义，不替代Ar-41、水土介质或外购供气。毛量及穿透与净变化分开，无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_argon_out`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 二氧化碳（`carbon_dioxide_out`）

仅真实发生的二氧化碳气态流出。分别保留实测毛量、穿透及净转化；已积分体积不再乘时间，空气集合不与组分重复采购；不由VOC或NOx指标推特定燃烧或化学物种。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_dioxide_out`
- 来源：`yamaha-shell`; `yamaha-finish`

###### 一氧化氮（`nitric_oxide`）

仅凭实际工序证据和化学鉴别确认向空气排放的一氧化氮；NOx、VOC、COD或总碳不能等同该分子。测质量或独立物质及状态密度，不设默认因子。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：一氧化氮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitric_oxide`
- 来源：`yamaha-finish`

###### 二氧化氮（`nitrogen_dioxide`）

仅凭实际工序证据和化学鉴别确认向空气排放的二氧化氮；NOx、VOC、COD或总碳不能等同该分子。测质量或独立物质及状态密度，不设默认因子。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_dioxide`
- 来源：`yamaha-finish`

###### 一氧化碳（`carbon_monoxide`）

仅凭实际工序证据和化学鉴别确认向空气排放的一氧化碳；NOx、VOC、COD或总碳不能等同该分子。测质量或独立物质及状态密度，不设默认因子。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：一氧化碳
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carbon_monoxide`
- 来源：`yamaha-finish`

###### 二氧化硫（`sulfur_dioxide`）

仅凭实际工序证据和化学鉴别确认向空气排放的二氧化硫；NOx、VOC、COD或总碳不能等同该分子。测质量或独立物质及状态密度，不设默认因子。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sulfur_dioxide`
- 来源：`yamaha-finish`

###### 丙酮（`acetone_air`）

仅凭实际工序证据和化学鉴别确认向空气排放的丙酮；NOx、VOC、COD或总碳不能等同该分子。测质量或独立物质及状态密度，不设默认因子。 原生Elementary丙酮、CAS 67-64-1、Mass/kg，向未指定空气排放。仅实际鉴别出的空气出口丙酮，不替代总VOC/COD或整份溶剂混合物。宽同义词含非丙酮误译，按分子CAS及真实丙酮分析判定并披露同义词质量瑕疵；未固定工序、品级或地理，仍必须真实制剂及物种证据。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acetone_air`
- 来源：`yamaha-finish`

###### 空气中枫木粉尘（`wood_dust_air`）

仅实际穿越场址空气边界的枫木逸散粉尘，独立量测粒径段及捕集效率；总尘不是纯碳。若捕集尘归入单一混合废物出口，则仅作其来源子账，不造第二废物出口。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：空气中枫木粉尘
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_dust_air`
- 来源：`yamaha-finish`

### 过程：原队列放行后服务（`service`）

#### 输入

##### 产品流

###### 退回完整声学枫木壳小军鼓（`fg_return`）

实际整鼓退回按当前湿态配置实测，链接原发运、材料水分变化及处置；不假定与原交付等重或形成新产量。 原生为工厂生产混合的已制造打击乐器宽Product族，未固定CAS、地理或材料品级。本行仅限上述完整非电声层压枫木壳小军鼓及本行实物事件，不含零件、玩具、电子乐器及其他发声机构；供方相容性仍须独立证明。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器 `81c9d4a5-bc2a-4362-893b-a5d1cf993a54`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_return`
- 来源：`yamaha-manual`; `yamaha-assembly`

###### 涂层塑料膜小军鼓打击鼓皮（`replacement_head`）

仅真实独立供货的放行后替换整鼓皮；沿用制造鼓皮的膜涂层固定圈归属，链接实际整鼓及服务区间。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：涂层塑料膜小军鼓打击鼓皮
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_replacement_head`
- 来源：`yamaha-manual`; `yamaha-assembly`

###### 工艺用水（`service_water`）

仅真实服务或清洗用水，含留在期末库存的水。X_in只去除与其他流入水项重叠，不能消真实存留流入；自然吸湿另有水蒸气行。 原生Product为经处理的工业工艺用水、Mass/kg，处理程度、质量、取得及供应点按真实供方；未固定CAS、品级或地理。仅用于实际处理后的工艺服务水及唯一供方，不替代未处理取水、蒸汽、环境水蒸气、清洗制剂已含载水或自动再生水信用；新增存留水和完整期末湿库存均保留。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_water`
- 来源：`yamaha-manual`; `yamaha-assembly`

###### 电力（`service_electricity`）

仓储、搬运、包装、检验及放行后作业真实增量电耗，即使成品留库或作业未获准或失败仍保留原队列及观察区间。 原生Product为供电地CN、低于1kV的用户侧消费混合电网平均交流供电，包含生产及输配到用户。仅绑定真实相容中国低压供电及供方边界，不替代高压或仅凭绿证供电。原生参考为净热值/MJ，实测kWh依据精确单位恒等1 kWh = 3.6 MJ换算，不编效率；唯一供方已含发输电不重复。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_electricity`
- 来源：`yamaha-manual`; `yamaha-assembly`

##### 废物流

##### 基本流

###### 水蒸气（`service_water_uptake`）

在仓储搬运服务中木材、涂层、包材或设备真实吸收的环境水蒸气；自然湿度交换无需虚构维修。新增水即使留在完整湿态期末库存也保留，仅与其他同侧流入项去重。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_water_uptake`
- 来源：`yamaha-shell`

#### 输出

##### 产品流

###### 发运完整声学枫木壳小军鼓（`fg_dispatch`）

同一成品队列的实际毛发运，参考仍为首次放行而非净销售。保留成品库存、退回及原始放行身份；无第二Q、制造采购或按经济份额缩实物。 原生为工厂生产混合的已制造打击乐器宽Product族，未固定CAS、地理或材料品级。本行仅限上述完整非电声层压枫木壳小军鼓及本行实物事件，不含零件、玩具、电子乐器及其他发声机构；供方相容性仍须独立证明。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器 `81c9d4a5-bc2a-4362-893b-a5d1cf993a54`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fg_dispatch`
- 来源：`yamaha-manual`; `yamaha-assembly`

##### 废物流

###### 拆下涂层小军鼓打击鼓皮废物（`removed_head`）

仅真实单独拆下鼓皮废物出口；若已并入唯一服务混合出口，仅作来源W子账，不重复外部交换。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：拆下涂层小军鼓打击鼓皮废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_removed_head`
- 来源：`yamaha-manual`; `yamaha-assembly`

###### 小军鼓放行后服务混合固体废物（`service_waste`）

唯一真实服务混合废物出口，组分和来源W独立测量但非叠加，一个处理供方；失败或外售不消已发生服务负荷。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：小军鼓放行后服务混合固体废物
- 流属性/单位：质量 / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_waste`
- 来源：`yamaha-manual`; `yamaha-assembly`

##### 基本流

###### 水蒸气（`service_water_evap`）

干燥、固化或自然湿度交换实际向空气失去的水蒸气。凭证据区分游离水、反应水及结构水；冷凝后实际送处理的液水属于另一个真实出口，不复制本出口。 原生Elementary水蒸气H2O、CAS 7732-18-5、Mass/kg，向未指定空气排放。仅实际气态水离开边界；原生宽同义词含冰、液水、重水氚水及结合水，不使这些状态或同位素等价。不替代液态废水、Product热载体回水或冷凝液的重复量；无固定品级地理。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_water_evap`
- 来源：`yamaha-shell`

### 过程：实际包材实物事件池（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸板运输纸箱（`carton_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件性单一瓦楞纸板运输纸箱池：独立采购接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_p`
- 来源：`ilcd-2010`

###### 瓦楞纸板运输纸箱（`carton_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件性单一瓦楞纸板运输纸箱池：供货已含接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_i`
- 来源：`ilcd-2010`

###### 瓦楞纸板运输纸箱（`carton_er`）

条件性单一瓦楞纸板运输纸箱池：对外发出后的实际退回接收。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_er`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋（`pe_bag_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件性单一聚乙烯保护袋池：独立采购接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_p`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋（`pe_bag_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件性单一聚乙烯保护袋池：供货已含接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_i`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋（`pe_bag_er`）

条件性单一聚乙烯保护袋池：对外发出后的实际退回接收。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_er`
- 来源：`ilcd-2010`

###### 纸质缓冲垫（`paper_pad_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件性单一纸质缓冲垫池：独立采购接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_p`
- 来源：`ilcd-2010`

###### 纸质缓冲垫（`paper_pad_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件性单一纸质缓冲垫池：供货已含接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_i`
- 来源：`ilcd-2010`

###### 纸质缓冲垫（`paper_pad_er`）

条件性单一纸质缓冲垫池：对外发出后的实际退回接收。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_er`
- 来源：`ilcd-2010`

###### 聚酯运输打包带（`pet_strap_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件性单一聚酯运输打包带池：独立采购接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_p`
- 来源：`ilcd-2010`

###### 聚酯运输打包带（`pet_strap_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件性单一聚酯运输打包带池：供货已含接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_i`
- 来源：`ilcd-2010`

###### 聚酯运输打包带（`pet_strap_er`）

条件性单一聚酯运输打包带池：对外发出后的实际退回接收。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_er`
- 来源：`ilcd-2010`

###### 木质运输托盘（`pallet_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。条件性单一木质运输托盘池：独立采购接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_p`
- 来源：`ilcd-2010`

###### 木质运输托盘（`pallet_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。条件性单一木质运输托盘池：供货已含接收。整份供货制品含真实水及已含胶或衬料测量一次；组分桥必须互斥。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_i`
- 来源：`ilcd-2010`

###### 木质运输托盘（`pallet_er`）

条件性单一木质运输托盘池：对外发出后的实际退回接收。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_er`
- 来源：`ilcd-2010`

###### 锯切枫木托盘维修板（`pallet_repair_wood`）

仅本项实际单独供货或拆除维修材料，而非整托盘；记录真实木种或钢品级、湿质量、新旧及实际装拆。存留材料保留在期末整托盘完整湿质量中；X仅与其他同侧流项去重。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：锯切枫木托盘维修板
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_repair_wood`
- 来源：`ilcd-2010`

###### 钢制托盘维修钉（`pallet_nail`）

仅本项实际单独供货或拆除维修材料，而非整托盘；记录真实木种或钢品级、湿质量、新旧及实际装拆。存留材料保留在期末整托盘完整湿质量中；X仅与其他同侧流项去重。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：钢制托盘维修钉
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_nail`
- 来源：`ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞纸板运输纸箱（`carton_s`）

条件性单一瓦楞纸板运输纸箱池：随毛实物发运外出。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_s`
- 来源：`ilcd-2010`

###### 瓦楞纸板运输纸箱（`carton_eo`）

条件性单一瓦楞纸板运输纸箱池：对外退还所有者。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_eo`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋（`pe_bag_s`）

条件性单一聚乙烯保护袋池：随毛实物发运外出。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_s`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋（`pe_bag_eo`）

条件性单一聚乙烯保护袋池：对外退还所有者。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_eo`
- 来源：`ilcd-2010`

###### 纸质缓冲垫（`paper_pad_s`）

条件性单一纸质缓冲垫池：随毛实物发运外出。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_s`
- 来源：`ilcd-2010`

###### 纸质缓冲垫（`paper_pad_eo`）

条件性单一纸质缓冲垫池：对外退还所有者。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_eo`
- 来源：`ilcd-2010`

###### 聚酯运输打包带（`pet_strap_s`）

条件性单一聚酯运输打包带池：随毛实物发运外出。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_s`
- 来源：`ilcd-2010`

###### 聚酯运输打包带（`pet_strap_eo`）

条件性单一聚酯运输打包带池：对外退还所有者。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_eo`
- 来源：`ilcd-2010`

###### 木质运输托盘（`pallet_s`）

条件性单一木质运输托盘池：随毛实物发运外出。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_s`
- 来源：`ilcd-2010`

###### 木质运输托盘（`pallet_eo`）

条件性单一木质运输托盘池：对外退还所有者。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_eo`
- 来源：`ilcd-2010`

##### 废物流

###### 瓦楞纸板运输纸箱废物（`carton_w`）

条件性单一瓦楞纸板运输纸箱池：真实独立废弃出口。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。若本W并入真实混合出口，W是非叠加实测来源子账，外部Waste交换及处理在唯一出口一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：瓦楞纸板运输纸箱废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_w`
- 来源：`ilcd-2010`

###### 聚乙烯保护袋废物（`pe_bag_w`）

条件性单一聚乙烯保护袋池：真实独立废弃出口。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。若本W并入真实混合出口，W是非叠加实测来源子账，外部Waste交换及处理在唯一出口一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚乙烯保护袋废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pe_bag_w`
- 来源：`ilcd-2010`

###### 纸质缓冲垫废物（`paper_pad_w`）

条件性单一纸质缓冲垫池：真实独立废弃出口。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。若本W并入真实混合出口，W是非叠加实测来源子账，外部Waste交换及处理在唯一出口一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：纸质缓冲垫废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paper_pad_w`
- 来源：`ilcd-2010`

###### 聚酯运输打包带废物（`pet_strap_w`）

条件性单一聚酯运输打包带池：真实独立废弃出口。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。若本W并入真实混合出口，W是非叠加实测来源子账，外部Waste交换及处理在唯一出口一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：聚酯运输打包带废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pet_strap_w`
- 来源：`ilcd-2010`

###### 木质运输托盘废物（`pallet_w`）

条件性单一木质运输托盘池：真实独立废弃出口。测量本腿完整实物毛量V，而非分配后的制造服务负荷或库存修正耗用。P/I归属互斥，I保留真实流入及唯一上游负荷所有者；期初期末空包材、附着在WIP成品及可复用库存全部保留。X仅与其他同侧流入流出项去重，不消库存或存留新流入。若本W并入真实混合出口，W是非叠加实测来源子账，外部Waste交换及处理在唯一出口一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木质运输托盘废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_w`
- 来源：`ilcd-2010`

###### 拆下托盘维修板废物（`pallet_removed_wood`）

仅本项实际单独供货或拆除维修材料，而非整托盘；记录真实木种或钢品级、湿质量、新旧及实际装拆。存留材料保留在期末整托盘完整湿质量中；X仅与其他同侧流项去重。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：拆下托盘维修板废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pallet_removed_wood`
- 来源：`ilcd-2010`

##### 基本流

### 过程：真实资产及应归属生产服务（`assets`）

#### 输入

##### 产品流

###### 木工锯切机（`saw_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工锯切机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_saw_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工锯切机生产服务（`saw_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木工锯切机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_saw_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 圆筒鼓壳模具（`mould_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：圆筒鼓壳模具
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 圆筒鼓壳模具生产服务（`mould_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：圆筒鼓壳模具生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 工业微波木壳干燥机（`microwave_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：工业微波木壳干燥机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_microwave_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 工业微波木壳干燥机生产服务（`microwave_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：工业微波木壳干燥机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_microwave_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳砂磨机（`sander_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳砂磨机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sander_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳砂磨机生产服务（`sander_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳砂磨机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sander_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木器漆紫外固化设备（`uv_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木器漆紫外固化设备
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_uv_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木器漆紫外固化设备生产服务（`uv_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木器漆紫外固化设备生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_uv_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工钻孔机（`drill_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工钻孔机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drill_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工钻孔机生产服务（`drill_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木工钻孔机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drill_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木尘抽排收集器（`collector_receipt`）

真实新旧资产接收。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木尘抽排收集器
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collector_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木尘抽排收集器生产服务（`collector_service`）

本台资产在观察到的运行小时内的真实服务负荷，包含启停、闲置、失败、试验和清洗。依据校准服务记录及真实资产生产维修负荷分配，不设固定寿命或年利用率。已发生服务留原队列，仅未使用或未分配服务及蓄料结转，资产毛实物流独立。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木尘抽排收集器生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collector_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 弹性体鼓壳成形气囊（`airbag_new`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：弹性体鼓壳成形气囊
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_airbag_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 钢制木工刀具（`cutter_new`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：钢制木工刀具
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cutter_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 润滑油（`oil_new`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：润滑油
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oil_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 机加工冷却液供货制剂（`coolant_new`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：机加工冷却液供货制剂
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coolant_new`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 液态设备维护水（`asset_water_in`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：液态设备维护水
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_water_in`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 空气压缩机（`compressor_receipt`）

真实新旧资产接收；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：空气压缩机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_compressor_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 空气压缩机生产服务（`compressor_service`）

真实记录小时服务负荷含闲置、启停、失败及清洗；原队列即使期末成品留库也保留已发生服务，仅未用或未分配服务结转；依据真实资产负荷及服务分配，不设寿命。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：空气压缩机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_compressor_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳抛光机（`buffer_receipt`）

真实新旧资产接收；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳抛光机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffer_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳抛光机生产服务（`buffer_service`）

真实记录小时服务负荷含闲置、启停、失败及清洗；原队列即使期末成品留库也保留已发生服务，仅未用或未分配服务结转；依据真实资产负荷及服务分配，不设寿命。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳抛光机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffer_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳边缘铣削机（`router_receipt`）

真实新旧资产接收；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳边缘铣削机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_router_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳边缘铣削机生产服务（`router_service`）

真实记录小时服务负荷含闲置、启停、失败及清洗；原队列即使期末成品留库也保留已发生服务，仅未用或未分配服务结转；依据真实资产负荷及服务分配，不设寿命。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳边缘铣削机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_router_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳涂胶机（`gluer_receipt`）

真实新旧资产接收；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳涂胶机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gluer_receipt`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳涂胶机生产服务（`gluer_service`）

真实记录小时服务负荷含闲置、启停、失败及清洗；原队列即使期末成品留库也保留已发生服务，仅未用或未分配服务结转；依据真实资产负荷及服务分配，不设寿命。 第8节single_quotient仅在原始采集后执行一次。构造分子A前区分原队列服务和制造负荷；实物毛腿不按负荷份额缩量。

- 选定流：木壳涂胶机生产服务
- 流属性/单位：服务时长 / h
- 数量规则：raw换算及真实归属后A / Q一次；Q = 本行原始放行队列kg；完整分子条件见第8节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gluer_service`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 木工锯切机（`saw_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工锯切机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_saw_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 圆筒鼓壳模具（`mould_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：圆筒鼓壳模具
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 工业微波木壳干燥机（`microwave_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：工业微波木壳干燥机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_microwave_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳砂磨机（`sander_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳砂磨机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sander_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木器漆紫外固化设备（`uv_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木器漆紫外固化设备
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_uv_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工钻孔机（`drill_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工钻孔机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drill_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木尘抽排收集器（`collector_return`）

真实资产对外退还。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木尘抽排收集器
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collector_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 空气压缩机（`compressor_return`）

真实对外退还所有者；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：空气压缩机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_compressor_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳抛光机（`buffer_return`）

真实对外退还所有者；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳抛光机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffer_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳边缘铣削机（`router_return`）

真实对外退还所有者；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳边缘铣削机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_router_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳涂胶机（`gluer_return`）

真实对外退还所有者；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳涂胶机
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gluer_return`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

##### 废物流

###### 木工锯切机废物（`saw_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工锯切机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_saw_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 圆筒鼓壳模具废物（`mould_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：圆筒鼓壳模具废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 工业微波木壳干燥机废物（`microwave_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：工业微波木壳干燥机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_microwave_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳砂磨机废物（`sander_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳砂磨机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sander_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木器漆紫外固化设备废物（`uv_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木器漆紫外固化设备废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_uv_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木工钻孔机废物（`drill_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木工钻孔机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_drill_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木尘抽排收集器废物（`collector_retirement`）

真实独立资产报废出口。保留完整实物毛件数及独立kg桥、序列配置、期初期末和供方归属；实物腿不乘服务或经济份额，不按每kg鼓采购一台整机。混合报废出口只保留组分子账，不重复出口。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木尘抽排收集器废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collector_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 磨损弹性体成形气囊废物（`airbag_old`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：磨损弹性体成形气囊废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_airbag_old`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 磨损钢制木工刀具废物（`cutter_old`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：磨损钢制木工刀具废物
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cutter_old`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 废润滑油（`oil_old`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：废润滑油
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oil_old`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 废机加工冷却液（`coolant_old`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：废机加工冷却液
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coolant_old`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 液态设备维护废水（`asset_water_out`）

仅本项真实维护材料、流体或相态，采集实际组成及安装或移出湿状态；整份冷却液载体一次。即使未使用也保留完整新旧毛腿及期末在装料；X只去同侧重叠，不能取消存留真实流入。失败或未获准作业仍保留物流负荷；废物或混合出口处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：液态设备维护废水
- 流属性/单位：质量 / kg
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset_water_out`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 空气压缩机废物（`compressor_retirement`）

真实独立报废设备出口；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：空气压缩机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_compressor_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳抛光机废物（`buffer_retirement`）

真实独立报废设备出口；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳抛光机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffer_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳边缘铣削机废物（`router_retirement`）

真实独立报废设备出口；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳边缘铣削机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_router_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

###### 木壳涂胶机废物（`gluer_retirement`）

真实独立报废设备出口；完整实物毛件数及独立称重质量绝不按经济或服务份额缩量，记录序列、期初期末及在装状态；混合废物处理一次。 第8节single_quotient仅在原始采集后执行一次。本实物披露的分子A为本行原生单位的实际完整毛腿V，绝不采用库存修正或经济分配后的负荷向量，不创造采购、供方负荷或信用；真实应归属负荷另一次独立归属。

- 选定流：木壳涂胶机废物
- 流属性/单位：物品数量 / item
- 数量规则：A / Q 一次；A = 本行原生单位实际完整毛腿V；Q = 选定放行队列kg；仅实物披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gluer_retirement`
- 来源：`yamaha-shell`; `yamaha-finish`; `yamaha-assembly`

##### 基本流

## 7. 分配与共产品处理

以下层级仅适用于已声明归因场景且已分离真实专属作业后。乐器制造证据支持路线，不支持分配系数。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | all burden-bearing exchanges | 仅归因且确需分配时适用。先独立专属工序及虚拟细分，再逐剩余交换确定起决定作用的物理因果；仅证明确无此因果的剩余采用共同过程门、实际状态质量及同期真实市场价值。记录剩余和敏感性，不任意择物理经济或设固定比例。 | `ilcd-2010` |
| allocation_service | service and capital burden | 共享服务依据真实限制关系及必要时的观察时长：气囊微波UV按真实计量运行关系；仓储运输按占用体积面积或限制质量及时长。独立采集决定量和可追溯服务负荷，不假定一驱动适合所有交换；原队列已发生服务不因鼓留成品库结转。 | `ilcd-2010` |
| allocation_no_credit | waste; rejects; samples; internal reuse | 普通废物、失败鼓、样品及售出残料仍归制造处理；仅真实其他功能队列及正当分配移交允许一次负荷向量转移，而实物毛量完整保留。内部复用不是第二采购、自动共产品或避免生产。 | `ilcd-2010` |
| allocation_gross | all physical disclosure cards | 毛流卡用A=实际完整毛V且仅用唯一商作披露尺度，不是上游采购、信用、经济份额或第二分配。真实采购处理服务负荷另向实际所有者一次归属；包材P/I仅一个所有者，ER复用不自动采购原生料，W外送仅一个真实出口供方。 | `ilcd-2010` |

## 8. 前景数据采集计算与质量规则

原始协议观察保留原单位，采集时绝不除Q。aggregation_rule列仅声明唯一最终报告目标；本节先构造正确分子再执行single_quotient一次。毛卡A为实际完整V，环境负荷维度另独立归属一次；中间卡或汇总不得再次归一化。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_maple_plywood | manufacture | maple_plywood | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的枫木胶合板。保留m3最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | m3 | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_shell_bought | manufacture | shell_bought | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的层压枫木小军鼓鼓壳。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_lamination_glue | manufacture | lamination_glue | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳层合胶供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_glue_hardener | manufacture | glue_hardener | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳层合胶固化剂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_batter_head | manufacture | batter_head | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的涂层塑料膜小军鼓打击鼓皮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_resonant_head | manufacture | resonant_head | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的塑料膜小军鼓共振鼓皮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_batter_hoop | manufacture | batter_hoop | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的镀层金属小军鼓打击侧鼓圈。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_snare_hoop | manufacture | snare_hoop | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的镀层金属小军鼓响弦侧鼓圈。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_lug | manufacture | lug | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的镀层金属小军鼓鼓耳组件。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_rod | manufacture | rod | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的镀层金属鼓调音拉杆。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_wire | manufacture | wire | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的卷曲金属响弦组件。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_strainer | manufacture | strainer | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的金属小军鼓响弦调节机构。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_butt | manufacture | butt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的金属小军鼓响弦固定尾座。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_snare_strap | manufacture | snare_strap | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯响弦连接带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_vent | manufacture | vent | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的金属小军鼓鼓壳气孔护圈。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mount_screw | manufacture | mount_screw | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的钢制小军鼓配件安装螺钉。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_gasket | manufacture | gasket | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的弹性体小军鼓鼓耳隔离垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_basecoat | manufacture | basecoat | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳封闭底涂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_colourcoat | manufacture | colourcoat | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳着色涂层供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_topcoat | manufacture | topcoat | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的紫外固化木壳面漆供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_coating_hardener | manufacture | coating_hardener | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆固化剂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_thinner | manufacture | thinner | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆稀释剂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_cleaner | manufacture | cleaner | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工设备清洗剂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_abrasive | manufacture | abrasive | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的涂附磨料砂纸。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_polish | manufacture | polish | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆抛光剂供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_electricity | manufacture | electricity | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的电力。保留MJ最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | MJ | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_heat | manufacture | heat | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的外购热。保留MJ最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | MJ | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_natural_gas | manufacture | natural_gas | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的天然气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_process_water | manufacture | process_water | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工艺用水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_compressed_air | manufacture | compressed_air | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的压缩空气。保留m3最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | m3 | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_thermal_water_in | manufacture | thermal_water_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的接收液态水热载体。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_thermal_water_return | manufacture | thermal_water_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的退供方液态热载体水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_manufacture_water_uptake | manufacture | manufacture_water_uptake | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的水蒸气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_manufacture_water_evap | manufacture | manufacture_water_evap | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的水蒸气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_service_water_uptake | service | service_water_uptake | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的水蒸气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_service_water_evap | service | service_water_evap | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的水蒸气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_oxygen_in | manufacture | oxygen_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氧气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_oxygen_out | manufacture | oxygen_out | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氧气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_nitrogen_in | manufacture | nitrogen_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氮气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_nitrogen_out | manufacture | nitrogen_out | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氮气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_argon_in | manufacture | argon_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氩气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_argon_out | manufacture | argon_out | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的氩气。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carbon_dioxide_in | manufacture | carbon_dioxide_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的二氧化碳。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carbon_dioxide_out | manufacture | carbon_dioxide_out | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的二氧化碳。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_nitric_oxide | manufacture | nitric_oxide | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的一氧化氮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_nitrogen_dioxide | manufacture | nitrogen_dioxide | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的二氧化氮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carbon_monoxide | manufacture | carbon_monoxide | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的一氧化碳。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_sulfur_dioxide | manufacture | sulfur_dioxide | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的二氧化硫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_acetone_air | manufacture | acetone_air | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的丙酮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_wood_dust_air | manufacture | wood_dust_air | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的空气中枫木粉尘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_wood_offcut | manufacture | wood_offcut | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的枫木胶合板边角废料。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_bonded_dust | manufacture | bonded_dust | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的捕集胶合枫木砂磨尘废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mixed_waste | manufacture | mixed_waste | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的小军鼓制造混合固体废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_coating_sludge | manufacture | coating_sludge | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆过喷污泥废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_wastewater | manufacture | wastewater | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工清洗废水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_finished | manufacture | finished | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 首次放行处置; 序列件数; 逐件校准去包装完整净质量; 含水及完整已含配件; 已放行期末成品已含一次 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的其他乐器（包括打击乐器、音箱及集市场风琴）、媒诱哨子、口哨、号角及其他口吹信号器。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_fg_dispatch | service | fg_dispatch | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的发运完整声学枫木壳小军鼓。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_fg_return | service | fg_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的退回完整声学枫木壳小军鼓。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_replacement_head | service | replacement_head | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的涂层塑料膜小军鼓打击鼓皮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_removed_head | service | removed_head | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的拆下涂层小军鼓打击鼓皮废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_service_water | service | service_water | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工艺用水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_service_electricity | service | service_electricity | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的电力。保留MJ最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | MJ | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_service_waste | service | service_waste | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的小军鼓放行后服务混合固体废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_p | packaging | carton_p | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_i | packaging | carton_i | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_er | packaging | carton_er | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_s | packaging | carton_s | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_eo | packaging | carton_eo | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_carton_w | packaging | carton_w | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的瓦楞纸板运输纸箱废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_p | packaging | pe_bag_p | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_i | packaging | pe_bag_i | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_er | packaging | pe_bag_er | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_s | packaging | pe_bag_s | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_eo | packaging | pe_bag_eo | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pe_bag_w | packaging | pe_bag_w | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚乙烯保护袋废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_p | packaging | paper_pad_p | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_i | packaging | paper_pad_i | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_er | packaging | paper_pad_er | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_s | packaging | paper_pad_s | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_eo | packaging | paper_pad_eo | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_paper_pad_w | packaging | paper_pad_w | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纸质缓冲垫废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_p | packaging | pet_strap_p | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_i | packaging | pet_strap_i | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_er | packaging | pet_strap_er | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_s | packaging | pet_strap_s | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_eo | packaging | pet_strap_eo | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pet_strap_w | packaging | pet_strap_w | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的聚酯运输打包带废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_p | packaging | pallet_p | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_i | packaging | pallet_i | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_er | packaging | pallet_er | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_s | packaging | pallet_s | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_eo | packaging | pallet_eo | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_w | packaging | pallet_w | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木质运输托盘废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_repair_wood | packaging | pallet_repair_wood | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的锯切枫木托盘维修板。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_removed_wood | packaging | pallet_removed_wood | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的拆下托盘维修板废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_pallet_nail | packaging | pallet_nail | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的钢制托盘维修钉。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_saw_receipt | assets | saw_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工锯切机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_saw_return | assets | saw_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工锯切机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_saw_retirement | assets | saw_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工锯切机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_saw_service | assets | saw_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工锯切机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mould_receipt | assets | mould_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的圆筒鼓壳模具。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mould_return | assets | mould_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的圆筒鼓壳模具。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mould_retirement | assets | mould_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的圆筒鼓壳模具废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_mould_service | assets | mould_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的圆筒鼓壳模具生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_microwave_receipt | assets | microwave_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工业微波木壳干燥机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_microwave_return | assets | microwave_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工业微波木壳干燥机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_microwave_retirement | assets | microwave_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工业微波木壳干燥机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_microwave_service | assets | microwave_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的工业微波木壳干燥机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_sander_receipt | assets | sander_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳砂磨机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_sander_return | assets | sander_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳砂磨机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_sander_retirement | assets | sander_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳砂磨机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_sander_service | assets | sander_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳砂磨机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_uv_receipt | assets | uv_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆紫外固化设备。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_uv_return | assets | uv_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆紫外固化设备。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_uv_retirement | assets | uv_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆紫外固化设备废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_uv_service | assets | uv_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木器漆紫外固化设备生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_drill_receipt | assets | drill_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工钻孔机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_drill_return | assets | drill_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工钻孔机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_drill_retirement | assets | drill_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工钻孔机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_drill_service | assets | drill_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工钻孔机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_collector_receipt | assets | collector_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木尘抽排收集器。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_collector_return | assets | collector_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木尘抽排收集器。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_collector_retirement | assets | collector_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木尘抽排收集器废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_collector_service | assets | collector_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木尘抽排收集器生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_airbag_new | assets | airbag_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的弹性体鼓壳成形气囊。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_airbag_old | assets | airbag_old | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的磨损弹性体成形气囊废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_cutter_new | assets | cutter_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的钢制木工刀具。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_cutter_old | assets | cutter_old | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的磨损钢制木工刀具废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_oil_new | assets | oil_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的润滑油。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_oil_old | assets | oil_old | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的废润滑油。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_coolant_new | assets | coolant_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的机加工冷却液供货制剂。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_coolant_old | assets | coolant_old | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的废机加工冷却液。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_asset_water_in | assets | asset_water_in | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的液态设备维护水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_asset_water_out | assets | asset_water_out | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的液态设备维护废水。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_compressor_receipt | assets | compressor_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的空气压缩机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_compressor_return | assets | compressor_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的空气压缩机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_compressor_retirement | assets | compressor_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的空气压缩机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_compressor_service | assets | compressor_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的空气压缩机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffer_receipt | assets | buffer_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳抛光机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffer_return | assets | buffer_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳抛光机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffer_retirement | assets | buffer_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳抛光机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffer_service | assets | buffer_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳抛光机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_router_receipt | assets | router_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳边缘铣削机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_router_return | assets | router_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳边缘铣削机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_router_retirement | assets | router_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳边缘铣削机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_router_service | assets | router_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳边缘铣削机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_gluer_receipt | assets | gluer_receipt | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳涂胶机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_gluer_return | assets | gluer_return | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳涂胶机。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_gluer_retirement | assets | gluer_retirement | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 完整毛腿V; raw实物单位; 非叠加来源W; 仅同侧重叠X; 实际采购所有者另账 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳涂胶机废物。保留item最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | item | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_gluer_service | assets | gluer_service | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木壳涂胶机生产服务。保留h最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | h | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_cloth_new | manufacture | cloth_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的棉质擦拭布。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_cloth_worn | manufacture | cloth_worn | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的磨损棉质擦拭布废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffwheel_new | manufacture | buffwheel_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的纺织物抛光轮。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_buffwheel_worn | manufacture | buffwheel_worn | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的磨损纺织物抛光轮废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_filter_new | manufacture | filter_new | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的木工粉尘过滤滤芯。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |
| cp_filter_worn | manufacture | filter_worn | collected_record | 时间戳; 场址; 实际工序; 操作员; 队列; 配置; 流身份; 方向; 原始值; 原始单位; 实际状态; 校准; 实际条件或缺席证据; 完整期初库存; 毛接收; 毛外出; 完整期末库存; 来源及已含组分归属; 逐交换继承负荷向量; 原队列首次放行kg; 观察区间; 不确定性; 原始分子; 专属共享工序驱动; 原料WIP未分配存料继承; 已净标记; 真实分配依据; 不二次库存修正 | 按本单一真实事件，以校准称重计数或可追溯专用计量及供货验收库存记录采集未归一化的磨损木工粉尘过滤滤芯废物。保留kg最终分子单位及独立原始单位；任何密度状态或件转kg桥独立测定。核对毛库存及失败启停闲置清洗返工；raw仅向single_quotient传递一次，采集不作除法。 | kg | 每真实事件及一致批次闭合 | 声明制造期及原队列已观察服务区间 | 真实场址及明确供方边界 | 每参考流 | 校准; 发票或计量; 配置放行记录; 完整库存闭合; 来源专属不确定性及真实缺席证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| single_quotient | all inventory rows | x = A / Q。先将原始观察换为本行原生单位，仅对负荷维度真实分配。制造A为原始应归属raw分子加期初原料WIP未分配非WIP继承负荷，仅减未分配期末原料WIP非WIP负荷及有依据真实其他队列功能一次移交；已净raw不二次修正，已归属已放行期末成品绝不扣。已发生服务A为原队列观察真实增量，仅合法未用未分配服务蓄料结转，绑定其首次放行Qc及区间H。每毛披露A为完整实际毛腿V，不作库存修正或经济分配，不造采购供方信用。Q为对应实测首次放行kg，原队列服务用Qc；Q=0留raw负荷无x。x仅执行一次，参考成品恰为1 kg。 | raw; native_unit; actual_allocation; inherited_vectors; V; Q; Qc; H | x | `ilcd-2010` |
| physical_balance | all physical gates | 湿态期初质量 + 完整实际毛流入 = 湿态期末质量 + 完整实际毛流出，保留有证内部化学转化及每真实水物种桥。X仅去其他同侧重叠，新存留维修料水同时保留流入及完整湿期末库存；相关元素独立闭合，不以一个残差求两未知。 | opening_wet; incoming_gross; outgoing_gross; closing_wet; species; same_side_overlap | physical_reconciliation | `ilcd-2010` |
| packaging_balance | packaging | 逐真实包材池：期初完整空料附着WIP成品复用库存 + P + I + ER + 独立真实维修水流入 = 同范围完整湿期末库存 + 毛S + EO + W + 独立真实维修水流出。P/I整件一次，组分桥互斥，内部复用抵消。共同混合出口的各来源W仅非叠加子账，不增废物处理。 | opening_pool; P; I; ER; S; EO; W; repair_in; repair_out; moisture_in; moisture_out; closing_pool | packaging_reconciliation | `ilcd-2010` |
| unit_preparation | raw numerators | 对记录单位作精确量纲换算，实测kWh乘3.6得MJ；真实速率按实际区间积分一次，已积分气液体积不再乘时间。体积转质量用该材料状态独立实测密度，件转质量用同配置批次实际校准称量；不重复供方能耗，不编密度。 | original_value; original_unit; measured_density; actual_state; calibrated_batch_mass; interval | native_unit_raw | `ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | 整鼓组件制剂物种身份及真实供方状态；每绑定UUID受完整原生卡语境限定。 | 供方规格; 实际BOM; primary路线及精确原生身份 |
| dq_measurement | all protocols | raw数据校准原单位真实状态密度几何及唯一放行队列，不填数。 | 计量称重日志; 校准; 放行台账; 不确定性 |
| dq_complete | all gates | 全部真实失败Q0已发生作业、完整毛湿库存及来源子账；缺席须证明。 | 库存闭合; 原料WIP继承向量; 出口维修记录 |
| dq_temporal | service and manufacture | 制造窗与每原队列服务观察区间及未知未来分开。 | 队列日期区间; 原序列发运退回链接 |
| dq_allocation | burden vectors | 先专属细分再逐交换决定性物理因果，仅有据剩余采用共同门真实状态市场价值。 | 专用计量; 驱动; 真实价格; 敏感性; 转移归属 |
| dq_sources | method and quantitative evidence | 完整来源及相邻反例，独立性按出版物而非登记数；工业页面不作分配证据，身份结果非性能证明。 | 来源章节; 供方数据; 限制; 真实批准及处置 |

## 9. 校验规则

这些检查结合完整章节语境覆盖所声明方法；真实未知或不受支持关系仍明示待审。机械检查不能关闭实物及科学不确定性。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_core | finished | 要求完整声学小军鼓终端、精确Product参考链及primary限定的材料路线组件；零件、原木或错误发声族不能替代整鼓。物理相容宽制造打击乐器族可在完整限制下使用。真实核心身份或路线缺失须hold、draft不可用且不映射。 | `yamaha-components`; `yamaha-assembly` |
| validation_first_release | all collection | 核对真实首次放行、配置净质量及唯一Q，已放行期末成品一次，保留退回原交付链接，复验发运不造产量；未来未知量是待采集义务而非零。 | `yamaha-assembly` |
| validation_full_load | all burden-bearing rows | 核对失败、Q0、启停、闲置、清洗、重工负荷及逐交换继承，仅合法未分配期末原料WIP非WIP负荷结转；已净耗用不再库存修正，留库成品已发生服务不扣。 | `ilcd-2010` |
| validation_atom_native | all rows | 每行为一个真实材料制剂制品物种事件，使用正确原生广延属性单位及完整限制而非集合；辅助空身份明示待匹配，不造UUID、CAS、相态、品级、供方及换算；有官方中文名则使用，披露原生身份瑕疵。 | `ilcd-2010` |
| validation_species_balance | all physical gates | 独立闭合完整湿物理质量及相关碳氮或有证元素，并以真实物种、反应、游离相态及结构水证据支持。不以一个残差拟合两未知；COD/VOC/NOx/总尘元素指标不决定分子。气体毛量穿透净量、积分体积及真实速率有别，未闭合仍待审而非pass。 | `ilcd-2010` |
| validation_gross | packaging; assets; service | 逐卡核对包材六腿和资产维修水毛事件、完整湿库存、仅同侧X、唯一供方所有者及唯一真实混合Waste出口；毛腿不乘负荷经济份额，原始采集未归一化、唯一商一次，总量组分不重叠。 | `ilcd-2010` |
| validation_acceptance | manufacture; service | 按真实规格保留尺寸涂层装配、鼓皮就位张力平衡、响弦开合及声学响应检验与人员日期处置；不编张力、音高、孔位、寿命或认证。重工合格另需真实制造商规格许可及后测，失败未获准作业仍记录。 | `yamaha-assembly`; `yamaha-tuning`; `yamaha-sound` |
| validation_completeness | dataset | 核对全部原始字段、分子路线、单位换算、协议、来源适用性、规范语境、不确定性及排除项；机械投影及有限计量检查不批准科学、翻译、供方或分类映射。 | `ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 同类完整声学层压枫木壳小军鼓相容制造及已观察原队列真实服务 |
| allowed_use | 保留完整限制及来源范围的真实路线材料组件相容归因研究 |
| excluded_use | 其他乐器族; 电声产品; 仅配件参考; 全分类默认; 未来寿命性能认证主张 |
| required_metadata | 全部参考限定; 实际供货路线及供方边界; Q和库存继承; raw单位; 服务队列区间; 实物毛量来源归属 |
| required_quality_disclosure | 身份供方缺口; 已测及未知量; 分配敏感性; 未闭合平衡; 真实Q0不合格重工; 证据限制 |
| update_trigger | 材料路线组件或原生限制变化; 参考门变化; 新科学证据; 观察数据超声明范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| yamaha-shell | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/manufacturing/ | 胶合板到圆筒壳技术路线；实际木、胶、气囊成形、干燥及裁边；通鼓示例不是小军鼓固定BOM。 |
| yamaha-finish | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/manufacturing/manufacturing002.html | 砂磨、真实涂层工序、紫外选项、抛光及塑料贴膜反例；不提供配方和运行设定。 |
| yamaha-assembly | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/manufacturing/manufacturing003.html | 小军鼓边缘及响弦床、钻孔、完整装配及鼓皮张力最终检查；排除大鼓通鼓的配件个数示例。 |
| yamaha-components | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/mechanism/mechanism002.html | 完整小军鼓结构、双鼓皮、鼓圈、鼓耳、拉杆、响弦及调节机构；金属壳反例。 |
| yamaha-tuning | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/play/play004.html | 仅对角调节原则；十螺栓图不构成必需数量或张力。 |
| yamaha-sound | handbook | https://www.yamaha.com/en/musical_instrument_guide/drums/mechanism/mechanism003.html | 声学双鼓皮振动及音色调节；非固定音高、性能或寿命主张。 |
| yamaha-manual | handbook | https://data.yamaha.com/files/download/other_assets/2/315552/drumset_general.pdf | 完整原始多语说明书；鼓皮紧固、适应及湿度语境；鼓架和套鼓装配不在参考产品内。 |
| yamaha-techniques | handbook | https://www.yamaha.com/US/houseofworship/downloadables/How-to-Choose-Guides/Yamaha-Guide-to-Choosing-a-Drum-Set.pdf | 完整选购指南；原生PDF第6–7页替代制壳路线、第9页小军鼓结构及第10页鼓皮变体；不设通用尺寸。 |
| remo-head | handbook | https://remo.com/product/ambassador-coated | 独立供方涂层膜打击鼓皮整件产品证据；其SKU厚度非本类别默认值，亦不证明现场采购。 |
| ilcd-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 第7.9.2–7.9.3节归因细分、逐交换因果分配及剩余共同门市场价值；下述台账采集为透明作者方法综合，非鼓制造或数值证据。 |
