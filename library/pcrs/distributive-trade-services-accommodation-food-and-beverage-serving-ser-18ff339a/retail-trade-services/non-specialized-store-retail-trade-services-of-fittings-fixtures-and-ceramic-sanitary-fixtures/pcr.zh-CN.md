---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fittings-fixtures-and-ceramic-sanitary-fixtures
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 完整釉面陶瓷洗脸盆套装自提零售服务

## 1. 范围与适用性

本候选规则涵盖具有经证实混合商品组合的门店销售同一实际施釉陶瓷洗面盆套装SKU及配置，经常温收货、存储、人工拣选到顾客自提。套装包含原厂实际配套的存水弯、密封件、滤网及工具（若随货提供）及原包装。材质、尺寸、孔位及溢流配置、表面、配件或包装版本不同，必须分池。非专门店指实际商品组合，不是品牌非独家授权。

塑料盆、独立金属五金件、坐便器、陶瓷管、安装、通水展示、加工、维修和零售商配送不属于本路线。完整原套装与实际破碎混合套装载体具有不同身份。制造商网页只证明可行套装，不是供应商清单、批次BOM、实测质量或合规限值。IKEA BJÖRKÅN 595.467.20展示了陶瓷盆及单独包装的聚合物、橡胶和钢制存水弯套装；两包装合为一个销售套装，不是两项等价洗面盆服务。不采用目录名义质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fittings-fixtures-and-ceramic-sanitary-fixtures |
| classification_refs | CPC 3.0 62162 (narrower) |
| covered_products | 完整施釉陶瓷洗面盆套装的非专门店自提零售服务 |
| excluded_products | 塑料盆、独立金属五金件、坐便器、陶瓷管、安装、通水展示、加工、维修和零售商配送不属于本路线。完整原套装与实际破碎混合套装载体具有不同身份。制造商网页只证明可行套装，不是供应商清单、批次BOM、实测质量或合规限值。IKEA BJÖRKÅN 595.467.20展示了陶瓷盆及单独包装的聚合物、橡胶和钢制存水弯套装；两包装合为一个销售套装，不是两项等价洗面盆服务。不采用目录名义质量。 |
| representative_product | 完整釉面陶瓷洗脸盆套装自提零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 常温收货；存储；手工拣选；结账；完整顾客自提 |
| market_state | 全新完整原套装、干燥、未安装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整施釉陶瓷洗面盆套装的非专门店自提零售服务 |
| How much | 一次最终有效原完整套装自提服务 |
| How well | 同实际配置完整无损并验收；不声明安装性能 |
| How long or cycle | 预先声明池内一次自提周期，含退货截止及版本修订 |
| reference_flow_link | service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整施釉陶瓷洗面盆套装的非专门店自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际混合商品组合; SKU和批次; 盆材质与釉; 尺寸孔位溢流; 完整套装BOM; 包装ID; 实测净毛重; 收货门; 自提渠道; 池截止版本; S/F/T/O责任; 部分或完整边界; 背景源ID |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | service; source_failure; customer_kit; supplier_kit; shelf; trolley; terminal | 物品数量 | Item(s) | 服务数不是套装质量。资产量为定义完整寿命包份额，不是任意耗用kg。所有最终行按每参考流。 |
| m_mass | extra_carton; broken_kit; carton_waste; external_damaged; supplier_damaged | 质量 | kg | 实际同状态净重，毛重减实测皮重，不以目录套装重量替代。 |
| m_energy | electricity | 净热值, 低位热值 | MJ | 1 kWh=3.6 MJ；仅核心回路。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际全新完整套装到门店收货门 |
| starting_condition_role | boundary_condition |
| product_classification_scope | 仅62162中陶瓷洗面盆套装零售子集 |
| recursive_input_rule | 不递归插入同一自提服务；供应商制造及不同上游物流为独立绑定源产品 |
| upstream_dataset_requirement | 逐个原套装源ID，将同一收货门的供应商原始向量责任分为S最终成功顾客、F不可恢复服务失败、T明确后续接收方责任和O未结库存。每个原源S+F+T+O=1，不使用当前废物质量比例。完整套装跟随唯一最终去向。后代物料去向分裂时必须取得供应商组件清单向量并守恒原源，不得按质量比例拆环境向量。source_failure输入一次承接F原套装当量，包括原包装与运抵门店收货门的上游运输（含实际国内或跨境各段）。退供应商及外部保留但未验收商品必须具备签署的T责任方、目的地状态和源ID，否则保留为未解决O。 source_failure仅限实际完整同构原套装及匹配完整套装供应向量的F责任当量。对这些原完整套装源i，N_F=sum_i(F_whole_i)，不得从选定组件或废物质量推导F_whole_i。若后代去向分裂，将盆存水弯附件包装源向量分别归入S/F/T/O，不能用N_F乘完整套装向量表示，因为环境清单向量通常不成比例。完整性前须逐F组件新增真实组件源输入卡，使用其实际原组件数量属性单位、原组件供应向量、源ID及关联协议，保留每组件原始量及向量在S/F/T/O中的守恒。不得把组件清单放入完整套装流身份或以一个公用比例重建。组件源份额须从source_failure排除，核对全部原向量ID防重。正常完整套装源保持完整，不必机械拆组件；供应组件向量或数量未知阻止分流路径及完整性。 |
| disclosure | 完整服务使用前必须添加场址特定建筑设施模块，覆盖结构和装修、固定照明风机暖通、含燃料制冷剂水的运行、清洁和废水、维护及报废。逐项命名真实原子交换，或使用具有签署范围证据的完整外包服务。调查设备、燃料账单、制冷剂记录、排水及清洁合同，证明存在或不存在；未知阻止完整性。优先直接细分；否则严格采用b_support及b_support_drivers的固定源驱动对应，含各自独立活动及闲置可用性池和所有受益者。下游无权另选驱动，观测不支持时须修订PCR。不同维度驱动量不得求和。各模块保留原始交换向量U_j、原分母d_j、场址池时段源ID、背景边界和版本。归一化模块u_j须恢复U_j=u_j*d_j。按源ID去重，仅将相同流属性单位的核心及模块原始分子合并，再统一除以Q一次。下游建模者负责补齐；未补齐必须标记部分核心并禁止整店比较。 |

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| b_product_family | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 | all inventory rows |  |
| b_gate | 起点为实际门店收货门，终点为最终有效完整自提及实际残余物出库。核心包括搬运和结账用电、追加瓦楞防护、失败原套装制造责任、实际废物出库及货架、手推车和结账设备寿命包。完整零售服务必须补齐建筑设施模块；其方法由b_complete固定。顾客成功保有商品的原制造、包装和运抵门店收货门的上游运输（含实际国内或跨境各段）背景归下游产品系统，不计入本增量服务。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_ownership | 逐个原套装源ID，将同一收货门的供应商原始向量责任分为S最终成功顾客、F不可恢复服务失败、T明确后续接收方责任和O未结库存。每个原源S+F+T+O=1，不使用当前废物质量比例。完整套装跟随唯一最终去向。后代物料去向分裂时必须取得供应商组件清单向量并守恒原源，不得按质量比例拆环境向量。source_failure输入一次承接F原套装当量，包括原包装与运抵门店收货门的上游运输（含实际国内或跨境各段）。退供应商及外部保留但未验收商品必须具备签署的T责任方、目的地状态和源ID，否则保留为未解决O。 source_failure仅限实际完整同构原套装及匹配完整套装供应向量的F责任当量。对这些原完整套装源i，N_F=sum_i(F_whole_i)，不得从选定组件或废物质量推导F_whole_i。若后代去向分裂，将盆存水弯附件包装源向量分别归入S/F/T/O，不能用N_F乘完整套装向量表示，因为环境清单向量通常不成比例。完整性前须逐F组件新增真实组件源输入卡，使用其实际原组件数量属性单位、原组件供应向量、源ID及关联协议，保留每组件原始量及向量在S/F/T/O中的守恒。不得把组件清单放入完整套装流身份或以一个公用比例重建。组件源份额须从source_failure排除，核对全部原向量ID防重。正常完整套装源保持完整，不必机械拆组件；供应组件向量或数量未知阻止分流路径及完整性。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_physical | 采用仅商品实物库存账：期末商品=期初商品+收货+顾客实物退回-全部顾客实物交付-实物退供应商-内部报废转待运废物-转展示资产。全部实物交付已逐次包含从未验收事件。报废是商品转废物内部状态变化；废物之后出库只减少待运废物，不再减少商品。外部保留的损坏商品不是门店废物。背景责任转移不产生实物流动。永久展示品以同一原源转T资产账；本路线要求无此情况或明确扩展资产卡。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_complete | 完整服务使用前必须添加场址特定建筑设施模块，覆盖结构和装修、固定照明风机暖通、含燃料制冷剂水的运行、清洁和废水、维护及报废。逐项命名真实原子交换，或使用具有签署范围证据的完整外包服务。调查设备、燃料账单、制冷剂记录、排水及清洁合同，证明存在或不存在；未知阻止完整性。优先直接细分；否则严格采用b_support及b_support_drivers的固定源驱动对应，含各自独立活动及闲置可用性池和所有受益者。下游无权另选驱动，观测不支持时须修订PCR。不同维度驱动量不得求和。各模块保留原始交换向量U_j、原分母d_j、场址池时段源ID、背景边界和版本。归一化模块u_j须恢复U_j=u_j*d_j。按源ID去重，仅将相同流属性单位的核心及模块原始分子合并，再统一除以Q一次。下游建模者负责补齐；未补齐必须标记部分核心并禁止整店比较。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_states | 仅允许检查后恢复完整原套装，不允许拆分销售；追加塑料膜、胶带、纸质票据或电动搬运出现时须先添加原子卡。实际破陶瓷及原混合附件包装共同收集时可作为一项实测混合卫浴套装废物载体；另收纸箱使用独立卡并排除于该混合载体边界。原包装制造属于原供应商向量，不重复计入extra_carton。新增实际交换必须先补双语卡、协议并同步投影，才能声称完整。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_support | 设施补齐必须包括必要ICT网络、支付处理、安防和管理，不仅店壳。逐实际供应方保留签署包范围及原子源ID、活动可用性单位、原分母及运行公用工程资本维护运输报废包含项。供应方已验证分配的服务分子原样保留，不再乘驱动比例。否则细分源分子：结构装修和固定照明按受益者占用预留楼面m2*h，暖通能源及制冷剂对外泄漏按调节区m2*h，清洁材料水废液按逐事件受益者实测清洁m2，共享员工卫生用水按受益者员工记录人时。结构资本以楼面m2*h执行a_asset同样历史暴露退休替换法。直接分区表优先于共享分配。全部楼面清洁面积人时分母须含所有实际受益者及适用失败闭店时段，正源分母须已知为正。燃料逐实际种类用收货期初期末及校准仪表实测；体积仅按实际温度密度换质量，MJ还须实际低位热值。逐种制冷剂设唯一场址控制体，包含全部实际设备回路、储存气瓶及回收容器，期初末容纳库存须含这些全部容器的kg。加入量须含全部跨界输入：单独补充或气瓶入界实测量，加新购转入设备及其他容器携气入界实测量，输入事件ID互斥。recovered_export为回收制冷剂实际运出场址；contained_export仅指与其互斥、随整设备或其他容器转出的剩余携气，绝不重复同一回收外运。回路储存回收容器之间内部转移不作输入输出。设备内部物种净源核查kg=opening_contained+added_standalone+added_equipment_containers-closing_contained-recovered_export-contained_export。设备缺额不是室外基本流；室外空气方法仅由b_refrigerant_air规定。现场保留回收物仍计期末库存，整设备携气外运不是泄漏。容器库存或输入输出未知均待解决，不默认零；负值或不闭合余额须结合不确定度调查，禁止直接声称最终排放或吸收。完整使用前须补实际物种卡及全部原源字段。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_support_drivers | 未分配ICT服务须分开可变计算源池（受益者实测CPU秒）、可变网络源池（实际传输字节）、支付处理活动池（支付终端占用秒，含拒付撤销尝试）及每项固定可用性池（预先实际预留受益者设备端口小时），字节CPU秒小时不混作一驱动。摄像报警完整包按受保护受益者楼面m2*h分配，含闭店。管理活动源池按受益者任务实录人时，公共闲置可用性管理池按各受益者预先预留员工容量小时，含零销售。逐同单位源池及全部受益者核对后q_s=U_pool*d_s/sum_b(d_b)。直接任务及供应方已含公用工程资本不重复添加。云网络支付服务若有实际签署范围证据可保留完整合同服务；供应分配或暴露未知、正源无正分母阻止完整。每报告区间查账单服务账户网络终端安防设备任务时间及签署不存在记录，缺发票不证明不存在。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_transport | 原套装背景必须运达实际门店收货门，包含实际国内或跨境全部上游运输段。追加纸箱和资产入场运输必须已由核实制造寿命供应向量明确含至该门一次，或作为互斥补齐运输模块添加；资产报废运输须在报废包内或独立绑定源寿命模块内，二者互斥。废物模块须声明收集运输处理起终门及实际混合载体接收。每项追加运输服务记录车辆型号、路线段运次、载货空载车公里、静止闲置小时、所有受益者包装货物预留m3及空返调车闲置段责任发运预留。供应方若已分配实际货件活动且证实含载货空载闲置，则原样保留原始分子分配。否则车公里池A_trip_k与闲置小时池H_trip_k分开，分别乘同期预留体积v_b_trip_k/sum_b(v_b_trip_k)，关联空载及静止闲置沿用发起运次预留。吨质量与距离仅作补充吨公里核查，非零空程不得因吨公里零而消失。空载闲置未归属、容量预留未知、供应覆盖不全均阻止完整。采用分立移动及闲置服务时须证明车公里供应范围排除H所代表闲置小时燃料运行；若已含实际闲置则不再添加H服务，保留完整供应分子。重叠未知阻止完整。已核实完整运输服务包含燃料维护资本时不再重复建模。 资产生命周期运输不是普通当前期货运。先按c_transport实际货件分配取得归属实际asset_id a的完整运输原分子U_asset_x；供应方已归到该资产时原样保留，不再乘预留体积比例。再以同一a_asset运行或最终份额及生命周期原源版本，向各原历史受益者时段h归属一次：U_asset_h_x=f_a_h*U_asset_x。寿命暴露或运输向量修订时，将每个旧U_asset_h_x替换为新值，并将delta_U_asset_h_x=U_asset_h_x_new-U_asset_h_x_old记回原h池。不得将资产整项运输全记退休当前Q，不再乘制造份额，也不添加完整资产寿命包已含运输。核实供应值若已归属h，按其自身原分母恢复后原样保留，不再乘f_a_h。保留attribution_level（运次/资产/受益者时段）及精确源ID，确保同一层级不重复执行。追加纸箱入场运输随carton_source_id及b_carton_stock首次耗用惯例：实际同质原批次运输向量跟随其原纸箱数量，各数量均按同一原收货状态净纸箱kg测量，仅首次耗用部分在首次使用池承接一次，实测未用库存携未分配原源份额结转，未用转出退回将同一未分配份额转明确后续责任方。已用复用箱只保留既往已分配源引用，不新增运输负担。核对原纸箱数量及运输向量已未分配份额，不在新收货期全记运输再于未来耗用复制。复用退回的新增实际运输为独立事件源，不重复原入场源；若纸箱收货门制造向量已含运输，则只核查不添加。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_carton_stock | C_in仅计追加箱首次耗用：opening_unused_kg+received_new_kg-closing_unused_kg-transfer_unused_kg-return_unused_kg。保留carton_source_id及first_use_event。opening_used_kg及所有已计制造的使用复用箱不进入C_in；复用只转同一已记制造原源责任，不新增生产输入。未用转出退回将未用原源转明确接收方，期末未用保留原源待后期首次使用。跨期已用箱携带已记源ID及精确旧池版本，复用不再收费。声明的首次使用分配将唯一制造负担保留于原首次使用池；后续复用仅携带可追溯已分配原源引用，不复制向量不再输入生产，也不计避免制造信用。复用实际清洗维修运输须补互斥模块并执行固定运输法。已用箱顾客带走保留库存废物出库为互斥去向状态，移动替换旧状态版本，不再计制造。既往使用或源历史未知阻止C_in及完整性。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_mixed_acceptance | broken_kit仅适用于实际接收合同明确接受观察到的陶瓷碎片与实际所含金属聚合物橡胶附件及原包装混合，并命名允许状态组成及完整下游处理边界。保留签署接收、载体源ID、实际净重、目的地及证明处理全部允许组成的数据集；许可证照片不能替代。已在carton_waste的分收纸板必须排除。合同已含混合载体处理运输时，不再加材料处理或路线模块。接收方分选时使用经证实完整分选处理包，或补互斥实测下游组件路径且质量与同一载体守恒，不把整载体kg重复乘每组件过程。无合同匹配处理即阻止该载体及完整性；保留实测待运库存，取得有效接收方范围或扩展双语原子卡后才可用。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |
| b_refrigerant_air | 室外空气仅采用一个主方法：全报告池场址每个室外出口及入口的实际绝对物种浓度和实际气体体积。F_air_kg=sum_k(c_out_k*V_out_k)-sum_k(c_in_k*V_in_k)，按观测采样区间积分，浓度体积须处于同一实测温压干湿基准。包含全部机械及无组织跨界路径，路径未测或覆盖不全阻止室外排放和完整服务声明。绝对入口背景仅扣一次；已差分或已空白校正读数不得混入此绝对模式或再次扣减，须先另行审查互斥替代方法。保留实际期初末室内空气物种库存、设备控制体之外吸附滤材捕集物种库存及非空气跨界载体实际物种kg。结合不确定度核查source_internal_kg=F_air_kg+delta_room_kg+delta_capture_stock_kg+nonair_export_kg-nonair_import_kg。内部捕集回收以共同事件ID抵消；已在设备储存回收容器库存内的回收不再作为捕集外运。捕集仍保留者为库存变化，外运者仅作一次非空气输出，不二者同计。因此凝结捕集室内留存不得默认零，设备损失不得默认全排室外。有符号负通量保留调查，不截零不计吸收信用；真实吸收须另审匹配输入身份。无制冷剂系统须经完整设施设备服务检查及签署不存在证据，存在性未知不为零。 nonair_export_kg及nonair_import_kg仅为设备控制体之外吸附捕集或其他非空气载体跨场址边界的该物种kg。明确排除已在added_standalone、added_equipment_containers、recovered_export或contained_export计入的全部设备气瓶回收容器输入输出，包括实际外运的回收气瓶及携气设备。equipment_boundary_event_ids与nonair_boundary_event_ids必须是互斥集合，并核对共同原源及转移历史；同一事件或同一物种份额不得进入两套账。每项非空气物种量只采用一种互斥模式：直接实测species_kg，或同一实际运次状态实测net_carrier_kg乘实测species_mass_fraction。保留校准质量数据、代表性组成采样、方法及不确定度。整载体kg不是物种kg，已测物种kg不再乘组成。组成物种质量未知阻止闭合及最终排放。 本唯一主模式c_out_k和c_in_k必须为kg/m3的该物种质量浓度，V_out_k和V_in_k必须为同一实测温压干湿状态及同一观测区间累计实际空气体积m3，乘积为该物种kg。原始实际流率不是V：须将actual_flow_rate_m3_s按实测duration_s积分（或按区间分辨的等价积分）得到cumulative_actual_m3后才乘c。保留concentration_raw_unit、volume_raw_unit、流率时长原记录及精确一次单位换算。g到kg或小时到秒等纯比例单位换算只做一次。ppm、标准体积与实际体积或其他依赖状态的换算不得直接代入：须有来源支持且经验证的同物种同状态转换、实际条件及conversion_evidence，否则阻断计算并提请PCR方法复核；不得默认密度温度压力。 | all inventory rows | jrc-retail-2013; ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| trade | 陶瓷套装收货自提及残余物 | required | 全部所选路线池 | foreground production | service |
| assets | 核心设备寿命暴露 | required | 实际货架推车终端型号；不存在须证明 | supporting process | service |

### 过程：套装服务 (`trade`)

#### 输入

##### 产品流

###### 门店收货门的原完整施釉陶瓷洗面盆套装 (`source_failure`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 门店收货门的原完整施釉陶瓷洗面盆套装
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: N_F/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_goods
- 来源: ghg-product-2011; jrc-retail-2013

###### 交流电 (`electricity`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值, 低位热值 / MJ
- 数量规则: 3.6*E_core/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_energy
- 来源: ghg-product-2011; jrc-retail-2013

###### 追加瓦楞纤维板防护纸箱 (`extra_carton`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 追加瓦楞纤维板防护纸箱
- 流属性/单位: 质量 / kg
- 数量规则: C_in/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_carton
- 来源: ghg-product-2011; jrc-retail-2013

#### 输出

##### 产品流

###### 完整施釉陶瓷洗面盆套装的非专门店自提零售服务 (`service`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 完整施釉陶瓷洗面盆套装的非专门店自提零售服务
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_goods
- 来源: ghg-product-2011; jrc-retail-2013

###### 向顾客交付的完整原洗面盆套装 (`customer_kit`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 向顾客交付的完整原洗面盆套装
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: H_intact/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_goods
- 来源: ghg-product-2011; jrc-retail-2013

###### 退供应商的完整原洗面盆套装 (`supplier_kit`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 退供应商的完整原洗面盆套装
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: R_supplier/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_goods
- 来源: ghg-product-2011; jrc-retail-2013

###### 外部接收方保留的损坏陶瓷洗面盆套装载体 (`external_damaged`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 外部接收方保留的损坏陶瓷洗面盆套装载体
- 流属性/单位: 质量 / kg
- 数量规则: D_external/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_carrier
- 来源: ghg-product-2011; jrc-retail-2013

###### 退供应商的损坏陶瓷洗面盆套装载体 (`supplier_damaged`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 退供应商的损坏陶瓷洗面盆套装载体
- 流属性/单位: 质量 / kg
- 数量规则: D_supplier/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_carrier
- 来源: ghg-product-2011; jrc-retail-2013

##### 废物流

###### 破碎施釉陶瓷洗面盆套装混合废物载体 (`broken_kit`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 破碎施釉陶瓷洗面盆套装混合废物载体
- 流属性/单位: 质量 / kg
- 数量规则: W_kit/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_waste
- 来源: ghg-product-2011; jrc-retail-2013

###### 单独收集的瓦楞纤维板纸箱废物 (`carton_waste`)

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 单独收集的瓦楞纤维板纸箱废物
- 流属性/单位: 质量 / kg
- 数量规则: W_carton/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_waste
- 来源: ghg-product-2011; jrc-retail-2013

### 过程：核心设备 (`assets`)

#### 输入

##### 产品流

###### 完整门店货架寿命包 (`shelf`)

本卡限一个实际同构型号配置和一个生命周期合同原源向量，使用前绑定型号原源ID；异模型须独立双语卡协议，不得在此累加Item(s)。

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 完整门店货架寿命包
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: f_shelf/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_assets
- 来源: ghg-product-2011; jrc-retail-2013

###### 完整手动货物推车寿命包 (`trolley`)

本卡限一个实际同构型号配置和一个生命周期合同原源向量，使用前绑定型号原源ID；异模型须独立双语卡协议，不得在此累加Item(s)。

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 完整手动货物推车寿命包
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: f_trolley/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_assets
- 来源: ghg-product-2011; jrc-retail-2013

###### 完整结账终端寿命包 (`terminal`)

本卡限一个实际同构型号配置和一个生命周期合同原源向量，使用前绑定型号原源ID；异模型须独立双语卡协议，不得在此累加Item(s)。

按关联协议及计算规则记录此项单一交换，保留其完整对象和边界。

- 选定流: 完整结账终端寿命包
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: f_terminal/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_assets
- 来源: ghg-product-2011; jrc-retail-2013

## 7. 分配与共产品处理

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| a_pool | 结果已知前预先声明同配置报告池及退货跟踪截止期，保留所有失败及零销售时段。Q为截止时最终有效完整验收的不同原套装ID数，已解决退回再售历史只计一次。撤销验收即移除该ID，即使没有实物退回；纯财务退款不移除仍有效验收。再售不复制原背景。迟到退货用实际日期替换原池分子去向和Q版本，不再收费到新池。Q=0不可归一化，保留原始总量，仅可合入预先声明兼容池。 | all inventory rows | ghg-product-2011 |
| a_asset | 每张货架推车终端卡只绑定一个有证据的完整同构型号配置及生命周期合同边界，绑定前记录model和source_vector_id。不同型号合同须新增双语卡及协议视图并同步，才能完整；不得将不同Item(s)份额合成一流。包只含制造安装报废；运行维修建筑固定灯具耗材互斥。须证明无维修，否则补实际事件原子维修卡。对资产a及历史受益者时段h，e_a_h分别为货架预留m2*h、推车预留车小时或终端预留终端小时，含静止闲置闭店。L_a为同单位全受益者预计寿命暴露，E_a=sum全部实际历史e_a_h。运行中f_new_a_h=e_a_h/L_a，要求L_a>=E_a且L_a>0。任何寿命修订都替换每个历史f_old为f_new，将delta=f_new-f_old记回原池原源版本，不重新启动制造。退休且E_a>0时f_final_a_h=e_a_h/E_a。始终按更正后实际历史暴露计算delta_a_h=f_final_a_h-f_old_a_h并替换每个旧值。R_a=1-sum_h(f_old_a_h)仅作核查：sum_h(delta_a_h)=R_a；不得按比例将R_a叠加旧份额，因为更正后的历史暴露比例可能不同。要求sum_h f_final=1且累计分配<=1。E_a=0或未知时保留完整未分配包余量，阻止最终归属直至找回实际受益者暴露凭据，不除零不删资产。供应方已含终端载体不再输出废物；实测终端净重与组件重建互斥。 | all inventory rows | ghg-product-2011 |
| a_energy | 核心电力仅为结账终端及控制器交流电；手推车无需电动搬运。优先采用互斥自用回路直测；仅从确含分表的总表扣减。共享核心回路将电表与终端事件按时间关联为四个互斥实测kWh池：E_retail为各SKU结账退货作业，E_admin为终端公共管理，E_idle为通电闲置，E_fixed为独立计量的持续运行结账控制器。四池之和须与纳入总表核对。E_retail使用每个实际SKU受益者b的终端占用秒t_b，含失败撤销事件；多SKU共同交易时间按实测逐行处理秒分摊，无可识别商品行的事件进入E_admin。E_admin/E_idle/E_fixed按同区间所有SKU受益者预先实际预留终端小时r_b分配，包含闭店零销售。E_core=E_retail*t_s/sum_b(t_b)+(E_admin+E_idle+E_fixed)*r_s/sum_b(r_b)。t与r不得相加。直测证实为零kWh的池贡献零且不计算零驱动比；未知kWh不是此证据。正源池须有已知正驱动总量和完整受益者排程；预留无证据或总量为零阻止分配，不默认零。照明暖通网络安防属于互斥支持模块。 | all inventory rows | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_carrier | trade | external_damaged; supplier_damaged | 损坏实物商品交接 | original_id; handoff_id; recipient; state; date; gross_kg; tare_kg; D_external; D_supplier; T; F; source_vector_id | 每次损坏实物交接用校准秤称实际完整载体毛重减皮重，记录剩余陶瓷碎片附件包装及接收方实际责任；与完整套装交付及门店废物出库互斥；载体不默认声明为废物。 D_external和D_supplier为互斥实际净kg，分别/Q每参考流，仅为实物托管伴随记录，不新增制造或废物表征。 | kg | 每次交接 | 全池含关联修订 | 实际外部及供应商交接门 | 每参考流 | 签署接收方状态原源责任及秤校准 |
| cp_completion | trade | all inventory rows | 补齐模块及原始源向量 | module_id; site; period; source_vector_id; U_core_x; U_j_x; u_j_x; d_j; Q; scope; version; beneficiary; floor_m2_h; conditioned_m2_h; cleaned_m2; staff_person_h; CPU_seconds; transmitted_bytes; payment_occupied_seconds; reserved_port_h; protected_m2_h; admin_task_person_h; reserved_staff_capacity_h; fuel_name; fuel_opening; fuel_received; fuel_closing; density; temperature; LHV; refrigerant_species; control_volume_id; vessel_ids; opening_contained; closing_contained; added_standalone; added_equipment_containers; import_event_id; recovered_export; contained_export; export_event_id; internal_transfer_id; inventory_uncertainty; absence_evidence; U_pool_x; d_s_x; d_b_x; reserved_device_h; source_internal_kg; path_id; sampling_interval; c_out_k; V_out_k; c_in_k; V_in_k; measurement_mode; gas_temperature; gas_pressure; wet_dry_basis; delta_room_kg; delta_capture_stock_kg; nonair_export_kg; nonair_import_kg; capture_event_id; room_inventory_start; room_inventory_end; capture_stock_start; capture_stock_end; boundary_coverage; flux_uncertainty; equipment_boundary_event_ids; nonair_boundary_event_ids; carrier_measurement_mode; species_kg; net_carrier_kg; species_mass_fraction; composition_method; composition_uncertainty; concentration_raw_unit; volume_raw_unit; actual_flow_rate_m3_s; duration_s; cumulative_actual_m3; unit_conversion_method; conversion_evidence; attribution_level; original_beneficiary_period; original_pool_id; prior_source_version | 每报告区间盘查实际设施ICT网络支付安防管理账户，签署供应范围及已含活动资本运输；以实物账户检查证明不存在。按b_support及b_support_drivers命名单位采集各驱动、所有受益者源池分子，校准面积时间体积质量仪表。匹配实际燃料制冷剂记录及原子补齐卡；恢复供应原分母并保留已分配范围，与核心逐源去重。 制冷剂室外空气补齐仅采用b_refrigerant_air同气体状态全场址路径绝对测量、校准物种仪器风量表及全区间覆盖，核查室内捕集非空气物种库存和唯一转移ID；设备缺额仅核查；保留签署无系统检查，否则未知阻止完整。 nonair_export_kg及nonair_import_kg仅为设备控制体之外吸附捕集或其他非空气载体跨场址边界的该物种kg。明确排除已在added_standalone、added_equipment_containers、recovered_export或contained_export计入的全部设备气瓶回收容器输入输出，包括实际外运的回收气瓶及携气设备。equipment_boundary_event_ids与nonair_boundary_event_ids必须是互斥集合，并核对共同原源及转移历史；同一事件或同一物种份额不得进入两套账。每项非空气物种量只采用一种互斥模式：直接实测species_kg，或同一实际运次状态实测net_carrier_kg乘实测species_mass_fraction。保留校准质量数据、代表性组成采样、方法及不确定度。整载体kg不是物种kg，已测物种kg不再乘组成。组成物种质量未知阻止闭合及最终排放。 本唯一主模式c_out_k和c_in_k必须为kg/m3的该物种质量浓度，V_out_k和V_in_k必须为同一实测温压干湿状态及同一观测区间累计实际空气体积m3，乘积为该物种kg。原始实际流率不是V：须将actual_flow_rate_m3_s按实测duration_s积分（或按区间分辨的等价积分）得到cumulative_actual_m3后才乘c。保留concentration_raw_unit、volume_raw_unit、流率时长原记录及精确一次单位换算。g到kg或小时到秒等纯比例单位换算只做一次。ppm、标准体积与实际体积或其他依赖状态的换算不得直接代入：须有来源支持且经验证的同物种同状态转换、实际条件及conversion_evidence，否则阻断计算并提请PCR方法复核；不得默认密度温度压力。 合并U_j_x前核实c_transport已将独立资产生命周期运输向原历史受益者池归属一次，纸箱入场运输已按首次耗用或未用原源责任归属。保留供应已分配层级及原池修订，不二次分配。 c_completion保留逐交换单位原源分子，再除Q一次；不同交换不作标量求和。 | mixed | 每模块报告区间及修订 | 与核心同场址池时段 | b_complete全部建筑设施源 | 每参考流 | 签署范围、实测活动及源去重账 |
| cp_goods | trade | source_failure; service; customer_kit; supplier_kit | 原套装与验收账 | original_id; lot; configuration; package_ids; actual_BOM; source_vector_id; receipt_date; gross_handover_id; physical_return_id; acceptance_status; revocation_date; recipient; S; F; T; O; N_F; Q; H_intact; R_supplier; goods_open; goods_close; receipts; physical_returns; all_handover; supplier_transfers; condemnation; demonstrator; ceramic_kg; accessory_kg; packaging_kg; kit_net_kg; gross_kg; tare_kg; F_whole_i; whole_kit_source_id; component_source_id; component_original_quantity; component_property_unit; component_vector_id; component_fate | 收货、检查、每次交付退回扫描原套装ID，核对供应商完整套装或组件向量（含原包装和运抵门店收货门的上游运输（含实际国内或跨境各段））。用校准秤含皮重状态分别称收货陶瓷附件包装。保留两包关联、验收证据及实际最终接收方。 source_failure仅限实际完整同构原套装及匹配完整套装供应向量的F责任当量。对这些原完整套装源i，N_F=sum_i(F_whole_i)，不得从选定组件或废物质量推导F_whole_i。若后代去向分裂，将盆存水弯附件包装源向量分别归入S/F/T/O，不能用N_F乘完整套装向量表示，因为环境清单向量通常不成比例。完整性前须逐F组件新增真实组件源输入卡，使用其实际原组件数量属性单位、原组件供应向量、源ID及关联协议，保留每组件原始量及向量在S/F/T/O中的守恒。不得把组件清单放入完整套装流身份或以一个公用比例重建。组件源份额须从source_failure排除，核对全部原向量ID防重。正常完整套装源保持完整，不必机械拆组件；供应组件向量或数量未知阻止分流路径及完整性。 执行a_pool及b_ownership，N_F=sum_i(F_whole_i)只限完整套装向量，再N_F/Q每参考流；服务=1。分裂组件量向量须在完整性前单独真实组件输入卡及协议，绝不进入完整套装N_F；收退实物仅作核查。 | Item(s) | 每次事件，逐日核对，跟踪退货至截止 | 全池包括失败及迟到修订 | 同SKU配置收货自提门 | 每参考流 | 签署验收去向证据、供应商向量、校准及库存核对 |
| cp_energy | trade | electricity | 仪表与受益者账 | meter_id; parent_boundary; date; opening_kWh; closing_kWh; E_retail; E_admin; E_idle; E_fixed; t_b; t_s; r_b; r_s; beneficiary; line_handling_seconds; transaction_common_seconds; reservation_start; reservation_end; E_core | 校准结账控制器回路与同步逐行终端计时按a_energy划四个互斥源池；保留所有SKU受益者实际占用秒、失败退货任务及含闭店实际预留终端小时排程；核对总表及分配电量和，不从销售数推小时。 E_core使用a_energy固定秒小时公式，再3.6*E_core/Q MJ每参考流一次，支持模块排除这些源ID。 | kWh | 每计量区间及配置变化 | 全报告池含闭店 | 仅互斥核心回路 | 每参考流 | 校准、总表平衡、受益者驱动量完整性 |
| cp_carton | trade | extra_carton | 追加防护纸箱库存 | carton_source_id; first_use_event; prior_pool; prior_version; material; coating; lot; opening_unused_kg; opening_used_kg; received_new_kg; closing_unused_kg; transfer_unused_kg; return_unused_kg; C_in; customer_handover_kg; retained_used_kg; held_waste_kg; reuse_event; recipient | 校准净重及带原源库存盘点区分每期初末和收转退中的全新未用及已用箱，匹配唯一首次耗用事件；查复用清洗维修运输记录，按b_carton_stock维护原负担历史；排除原商品箱。 C_in=opening_unused_kg+received_new_kg-closing_unused_kg-transfer_unused_kg-return_unused_kg；C_in/Q一次，已用复用箱kg不再进入制造耗用。 | kg | 每次收用及每日库存 | 全池 | 仅追加包装 | 每参考流 | 秤核查、购运ID、材质声明 |
| cp_waste | trade | broken_kit; carton_waste | 实际废物运单 | consignment_id; source_original_ids; carrier_state; ceramic_kg; accessory_kg; packaging_kg; gross_kg; tare_kg; W_kit; W_carton; opening_held; generated; closing_held; destination; treatment_scope; receiver_contract_id; accepted_constituents; accepted_state; treatment_dataset_id; treatment_constituent_scope; included_collection_transport; downstream_separation_mass | 出库用校准毛减皮重，保留实际绑定源组成状态；按b_mixed_acceptance核对签署合同明确接受陶瓷碎片及实际附件原包装，并与完整匹配处理数据边界比较，核对组件分选质量。分收纸箱互斥称重。加运输前检查实际已含范围，许可证照片不能独立证明适用。 W_kit及W_carton为互斥直接出库净kg，分别/Q每参考流。库存平衡仅核查；处理运输各匹配一次，不再用产生量修正出库质量。 | kg | 每运次，逐月待运库存核对 | 全池及后续关联出运 | 门店残余出库门 | 每参考流 | 校准磅单、签署混合组成接收、完整处理及互斥运输范围、载体原源及分选核对。 |
| cp_assets | assets | shelf; trolley; terminal | 持续寿命资产账 | asset_id; model; configuration; contract_id; complete_package_scope; source_vector_id; e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; f_final_a_h; R_a; delta_a_h; delta; beneficiary; exposure_unit; period; prior_version; f_shelf; f_trolley; f_terminal; retirement; repair_events | 核对完整型号合同及运输生命周期范围，采集所有历史受益者货架预留m2*h及推车终端预留小时（含闲置）；每卡限一同构型号原源，异模型须分卡协议。保留全部历史暴露旧份额修订及最终退休日期；校准时间面积测量，核对暴露及包份额和。 按a_asset精确计算f_new或f_final并替换全部旧版本，仅同型号份额相加后/Q一次；总暴露零未知保留未分配整包并阻止最终归属。 | Item(s) | 每暴露区间维修和寿命修订 | 全寿命受益者及当前池 | 核心设备排除建筑固定灯具 | 每参考流 | 范围BOM核对、暴露日志、累计份额、无维修证据 |
| cp_transport | trade | all inventory rows | 绑定原源追加运输 | transport_source_id; provider_scope; already_attributed; consignment_id; carton_source_id; asset_id; vehicle_model; trip_id; segment_id; loaded_vehicle_km; empty_vehicle_km; stationary_idle_h; A_trip_k; H_trip_k; v_b_trip_k; v_s_trip_k; payload_t; distance_km; responsible_dispatch; original_denominator; version; included_fuel_capital_maintenance; attribution_level; U_asset_x; f_a_h; U_asset_h_x_new; U_asset_h_x_old; delta_U_asset_h_x; original_beneficiary_period; original_pool_id; carton_original_quantity; carton_first_consumed_quantity; carton_unused_quantity; carton_transfer_return_quantity; transport_assigned_vector; transport_unassigned_vector; prior_source_version | 逐实际纸箱资产入场资产报废残余路线查签署源边界及供应载货空载闲置全范围，使用可追溯路线GPS里程时间记录和所有受益者实测包装预留立方体积，关联空返静止闲置保留发起预留；校核体积里程时间并与供应运次总量核对。已含运输不再加。 资产生命周期运输不是普通当前期货运。先按c_transport实际货件分配取得归属实际asset_id a的完整运输原分子U_asset_x；供应方已归到该资产时原样保留，不再乘预留体积比例。再以同一a_asset运行或最终份额及生命周期原源版本，向各原历史受益者时段h归属一次：U_asset_h_x=f_a_h*U_asset_x。寿命暴露或运输向量修订时，将每个旧U_asset_h_x替换为新值，并将delta_U_asset_h_x=U_asset_h_x_new-U_asset_h_x_old记回原h池。不得将资产整项运输全记退休当前Q，不再乘制造份额，也不添加完整资产寿命包已含运输。核实供应值若已归属h，按其自身原分母恢复后原样保留，不再乘f_a_h。保留attribution_level（运次/资产/受益者时段）及精确源ID，确保同一层级不重复执行。追加纸箱入场运输随carton_source_id及b_carton_stock首次耗用惯例：实际同质原批次运输向量跟随其原纸箱数量，各数量均按同一原收货状态净纸箱kg测量，仅首次耗用部分在首次使用池承接一次，实测未用库存携未分配原源份额结转，未用转出退回将同一未分配份额转明确后续责任方。已用复用箱只保留既往已分配源引用，不新增运输负担。核对原纸箱数量及运输向量已未分配份额，不在新收货期全记运输再于未来耗用复制。复用退回的新增实际运输为独立事件源，不重复原入场源；若纸箱收货门制造向量已含运输，则只核查不添加。 c_transport保留供应已分配原分子，否则按预留m3分别分配车公里闲置小时，恢复模块分母后c_completion/Q一次。 | mixed | 每运次段及关联闲置区间 | 全原源批次含失败空程 | 明确纸箱资产废物起终门 | 每参考流 | 签署路线范围、全运次核对、源ID去重及无未归属空载闲置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_custody | customer_kit; supplier_kit; external_damaged; supplier_damaged | H_intact和R_supplier计实际互斥完整交接事件，不是最终有效Q；D_external和D_supplier=sum互斥损坏载体毛重gross_kg减tare_kg。分别/Q一次。这四项命名实物托管伴随行不表征，制造遵循source_failure及S/T/O责任，处理只跟随实际废物。 | H_intact; R_supplier; D_external; D_supplier; gross_kg; tare_kg; Q | 每参考流四项实物托管伴随量 | ghg-product-2011 |
| c_q | service | Q=最终有效完整验收不同original_id数；使用最新替换账，不从最终有效数再扣一次撤销。 | original_id; acceptance_status; revocation_date; Q | Q及每参考流一项服务 | ghg-product-2011 |
| c_failure | source_failure | N_F=sum_i(F_whole_i)；q_failure=N_F/Q。每个纳入源为实际完整同构原套装向量，含原包装及运抵门店收货门的上游运输，只计一次。source_failure仅限实际完整同构原套装及匹配完整套装供应向量的F责任当量。对这些原完整套装源i，N_F=sum_i(F_whole_i)，不得从选定组件或废物质量推导F_whole_i。若后代去向分裂，将盆存水弯附件包装源向量分别归入S/F/T/O，不能用N_F乘完整套装向量表示，因为环境清单向量通常不成比例。完整性前须逐F组件新增真实组件源输入卡，使用其实际原组件数量属性单位、原组件供应向量、源ID及关联协议，保留每组件原始量及向量在S/F/T/O中的守恒。不得把组件清单放入完整套装流身份或以一个公用比例重建。组件源份额须从source_failure排除，核对全部原向量ID防重。正常完整套装源保持完整，不必机械拆组件；供应组件向量或数量未知阻止分流路径及完整性。 | F_whole_i; whole_kit_source_id; source_vector_id; component_source_id; component_original_quantity; component_property_unit; component_vector_id; component_fate; N_F; Q | 每参考流失败原套装当量 | ghg-product-2011 |
| c_energy | electricity | E_core=E_retail*t_s/sum_b(t_b)+(E_admin+E_idle+E_fixed)*r_s/sum_b(r_b)；q_energy=3.6*E_core/Q。t为实测终端占用秒，r为实际预留终端小时；互斥自用直测优先；实测零源项计零但不求0/0，正源驱动未知零阻止完整。 | E_retail; E_admin; E_idle; E_fixed; t_s; t_b; r_s; r_b; E_core; Q | 每参考流MJ | ghg-product-2011 |
| c_carton | extra_carton | C_in=opening_unused_kg+received_new_kg-closing_unused_kg-transfer_unused_kg-return_unused_kg；q_carton=C_in/Q。排除既往已用库存，首次源历史及复用移动执行b_carton_stock。 | opening_unused_kg; received_new_kg; closing_unused_kg; transfer_unused_kg; return_unused_kg; opening_used_kg; first_use_event; prior_pool; prior_version; C_in; Q | 每参考流kg | ghg-product-2011 |
| c_waste | broken_kit; carton_waste | W_kit=sum实际混合载体gross_kg-tare_kg；W_carton=sum独立纸箱gross_kg-tare_kg。分别/Q一次；载体kg不再乘原源责任比例。 | gross_kg; tare_kg; W_kit; W_carton; Q | 每参考流两项互斥废物kg | ghg-product-2011 |
| c_asset | shelf; trolley; terminal | 运行f_new_a_h=e_a_h/L_a且L_a>=E_a=sum_h(e_a_h)>0；退休f_final_a_h=e_a_h/E_a，以delta=f_final_a_h-f_old_a_h替换全部旧分配。唯一终结法为更正后实际f_final_a_h=e_a_h/E_a及每个历史受益者时段delta_a_h=f_final_a_h-f_old_a_h。R_a=1-sum_h(f_old_a_h)仅核查sum_h(delta_a_h)=R_a，绝非分配捷径。当前同型号卡=sum当前受益者f/Q，不跨型号累加Item(s)。暴露未知零保留未分配整包并阻止最终归属。 | e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; f_final_a_h; R_a; delta_a_h; delta; model; contract_id; prior_version; f_shelf; f_trolley; f_terminal; Q | 每参考流完整寿命包份额 | ghg-product-2011 |
| c_completion | all inventory rows | 每兼容交换x，q_complete_x=(U_core_x+sum互斥U_j_x)/Q；U_j_x=u_j_x*d_j。恢复原始分母和源版本，按源ID去重后仅加同单位向量。缺失模块未知禁止完整性。 进入本和的U_j_x须已归属所选原受益者池h：资产运输先经c_transport资产生命周期f_a_h及版本替换，纸箱运输先经纸箱源首次耗用未用责任归属。供应归一化值按其记录attribution_level恢复后仅补缺失层级，不重复已给h归属或f。每历史修订替换原池分子并使用该原池自身最终有效Q，不用当前退休期间的Q。 | U_core_x; U_j_x; u_j_x; d_j; source_vector_id; Q; attribution_level; original_beneficiary_period; original_pool_id; prior_source_version | 每参考流补齐交换向量 | ghg-product-2011 |
| c_support | all inventory rows | 逐未分配同单位源池x，U_s_x=U_pool_x*d_s_x/sum_b(d_b_x)，严格按b_support及b_support_drivers的源驱动对应：楼面调节安防m2*h、清洁m2、员工管理人时、CPU秒、字节、支付秒或独立设备端口员工预留小时；不同驱动维度不相加。供应已分配U_s_x原样保留，各模块向量再进入c_completion。 | U_pool_x; d_s_x; d_b_x; floor_m2_h; conditioned_m2_h; cleaned_m2; staff_person_h; CPU_seconds; transmitted_bytes; payment_occupied_seconds; reserved_port_h; reserved_device_h; protected_m2_h; admin_task_person_h; reserved_staff_capacity_h; U_j_x; Q | 逐交换保留原源支持分子 | ghg-product-2011 |
| c_transport | all inventory rows | 逐实际运次段k，A_s_k=A_trip_k*v_s_trip_k/sum_b(v_b_trip_k)车公里；H_s_k=H_trip_k*v_s_trip_k/sum_b(v_b_trip_k)静止闲置小时。载货空载段保留实际公里及责任发运预留，不用货物吨公里替代。已分配完整供应服务保留供应原分子，不再乘容量比例；绑定原源兼容运输分子进入c_completion一次。 资产生命周期运输不是普通当前期货运。先按c_transport实际货件分配取得归属实际asset_id a的完整运输原分子U_asset_x；供应方已归到该资产时原样保留，不再乘预留体积比例。再以同一a_asset运行或最终份额及生命周期原源版本，向各原历史受益者时段h归属一次：U_asset_h_x=f_a_h*U_asset_x。寿命暴露或运输向量修订时，将每个旧U_asset_h_x替换为新值，并将delta_U_asset_h_x=U_asset_h_x_new-U_asset_h_x_old记回原h池。不得将资产整项运输全记退休当前Q，不再乘制造份额，也不添加完整资产寿命包已含运输。核实供应值若已归属h，按其自身原分母恢复后原样保留，不再乘f_a_h。保留attribution_level（运次/资产/受益者时段）及精确源ID，确保同一层级不重复执行。追加纸箱入场运输随carton_source_id及b_carton_stock首次耗用惯例：实际同质原批次运输向量跟随其原纸箱数量，各数量均按同一原收货状态净纸箱kg测量，仅首次耗用部分在首次使用池承接一次，实测未用库存携未分配原源份额结转，未用转出退回将同一未分配份额转明确后续责任方。已用复用箱只保留既往已分配源引用，不新增运输负担。核对原纸箱数量及运输向量已未分配份额，不在新收货期全记运输再于未来耗用复制。复用退回的新增实际运输为独立事件源，不重复原入场源；若纸箱收货门制造向量已含运输，则只核查不添加。 | A_trip_k; H_trip_k; v_s_trip_k; v_b_trip_k; responsible_dispatch; already_attributed; original_denominator; U_j_x; Q; asset_id; attribution_level; U_asset_x; f_a_h; U_asset_h_x_new; U_asset_h_x_old; delta_U_asset_h_x; original_beneficiary_period; original_pool_id; carton_source_id; carton_original_quantity; carton_first_consumed_quantity; carton_unused_quantity; carton_transfer_return_quantity; transport_assigned_vector; transport_unassigned_vector; prior_source_version | 互斥车公里闲置小时或供应已分配向量 | ghg-product-2011 |
| c_refrigerant | all inventory rows | 逐实际物种场址控制体source_internal_kg=opening_contained+added_standalone+added_equipment_containers-closing_contained-recovered_export-contained_export，仅为设备向场址内部物种净源核查量，绝非室外基本排放。全部容器库存和输入输出执行b_support，进出事件ID互斥，internal_transfer_id不构成跨界项。仅保留为c_refrigerant_air闭合核查，不分配为室外排放。未知不闭合余额阻止完整；有符号内部净回收源须调查，不转为负基本流。 | refrigerant_species; control_volume_id; vessel_ids; opening_contained; closing_contained; added_standalone; added_equipment_containers; import_event_id; recovered_export; contained_export; export_event_id; internal_transfer_id; inventory_uncertainty; conditioned_m2_h; Q | 仅设备内部物种源核查kg，无室外排放身份 | ghg-product-2011 |
| c_refrigerant_air | all inventory rows | 主绝对模式F_air_kg=sum_k(c_out_k*V_out_k)-sum_k(c_in_k*V_in_k)；source_internal_kg=F_air_kg+delta_room_kg+delta_capture_stock_kg+nonair_export_kg-nonair_import_kg独立作物种闭合核查。严格按b_refrigerant_air同状态区间积分、全路径、入口仅校正一次及库存输出互斥。仅核实实际正室外物种通量按b_support调节区m2*h分配，再由c_completion/Q一次；负未知不闭合仍待解决，不作零或吸收信用。 nonair_export_kg及nonair_import_kg仅为设备控制体之外吸附捕集或其他非空气载体跨场址边界的该物种kg。明确排除已在added_standalone、added_equipment_containers、recovered_export或contained_export计入的全部设备气瓶回收容器输入输出，包括实际外运的回收气瓶及携气设备。equipment_boundary_event_ids与nonair_boundary_event_ids必须是互斥集合，并核对共同原源及转移历史；同一事件或同一物种份额不得进入两套账。每项非空气物种量只采用一种互斥模式：直接实测species_kg，或同一实际运次状态实测net_carrier_kg乘实测species_mass_fraction。保留校准质量数据、代表性组成采样、方法及不确定度。整载体kg不是物种kg，已测物种kg不再乘组成。组成物种质量未知阻止闭合及最终排放。 本唯一主模式c_out_k和c_in_k必须为kg/m3的该物种质量浓度，V_out_k和V_in_k必须为同一实测温压干湿状态及同一观测区间累计实际空气体积m3，乘积为该物种kg。原始实际流率不是V：须将actual_flow_rate_m3_s按实测duration_s积分（或按区间分辨的等价积分）得到cumulative_actual_m3后才乘c。保留concentration_raw_unit、volume_raw_unit、流率时长原记录及精确一次单位换算。g到kg或小时到秒等纯比例单位换算只做一次。ppm、标准体积与实际体积或其他依赖状态的换算不得直接代入：须有来源支持且经验证的同物种同状态转换、实际条件及conversion_evidence，否则阻断计算并提请PCR方法复核；不得默认密度温度压力。 | c_out_k; V_out_k; c_in_k; V_in_k; source_internal_kg; delta_room_kg; delta_capture_stock_kg; nonair_export_kg; nonair_import_kg; measurement_mode; gas_temperature; gas_pressure; wet_dry_basis; boundary_coverage; flux_uncertainty; conditioned_m2_h; Q; equipment_boundary_event_ids; nonair_boundary_event_ids; carrier_measurement_mode; species_kg; net_carrier_kg; species_mass_fraction; composition_method; composition_uncertainty; concentration_raw_unit; volume_raw_unit; actual_flow_rate_m3_s; duration_s; cumulative_actual_m3; unit_conversion_method; conversion_evidence | 按实际介质核实室外物种kg，或待解决通量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_bom | source_failure; service | 核对实际同套装配置及原完整包装背景源；内含工具存水弯不重复制造。 source_failure仅限实际完整同构原套装及匹配完整套装供应向量的F责任当量。对这些原完整套装源i，N_F=sum_i(F_whole_i)，不得从选定组件或废物质量推导F_whole_i。若后代去向分裂，将盆存水弯附件包装源向量分别归入S/F/T/O，不能用N_F乘完整套装向量表示，因为环境清单向量通常不成比例。完整性前须逐F组件新增真实组件源输入卡，使用其实际原组件数量属性单位、原组件供应向量、源ID及关联协议，保留每组件原始量及向量在S/F/T/O中的守恒。不得把组件清单放入完整套装流身份或以一个公用比例重建。组件源份额须从source_failure排除，核对全部原向量ID防重。正常完整套装源保持完整，不必机械拆组件；供应组件向量或数量未知阻止分流路径及完整性。 | 实际批次组件清单及供应商边界；完整套装原源数量绑定或组件原量向量及明确新增卡守恒 |
| q_complete | all inventory rows | 所有数量输入须已知并具覆盖及不确定度，证明路线不存在项，核对池及分母；完整服务还须b_complete和c_completion及新增双语原子模块。 | 仪表秤校准、接收方记录、全受益者及模块源账 |
| q_refrigerant | all inventory rows | 任何制冷剂补齐模块须核查完整设备气瓶回收容器登记及实物库存，称量设备容器携气和单独入界量，核对唯一跨界事件ID。每项回收外运从contained_export排除；内部移动仅入容器核对。库存事件缺失或负值不闭合余额须待调查不确定度审查并阻止完整，不默认零不计吸收信用。 | 全容器登记、校准物种kg库存、设备交付携气证据、唯一进出账及余额不确定度 |
| q_refrigerant_air | all inventory rows | 设备携气缺额不能单独证明室外空气基本流。须取得场址全部实际入口出口无组织路径物种质量测量及室内捕集非空气库存输出闭合，核对共同转移ID和不确定度。未核实捕集室内存量不等于零，差分已校正数据不进入绝对模式。无系统须完整检查证据，不以缺采购发票代替。 nonair_export_kg及nonair_import_kg仅为设备控制体之外吸附捕集或其他非空气载体跨场址边界的该物种kg。明确排除已在added_standalone、added_equipment_containers、recovered_export或contained_export计入的全部设备气瓶回收容器输入输出，包括实际外运的回收气瓶及携气设备。equipment_boundary_event_ids与nonair_boundary_event_ids必须是互斥集合，并核对共同原源及转移历史；同一事件或同一物种份额不得进入两套账。每项非空气物种量只采用一种互斥模式：直接实测species_kg，或同一实际运次状态实测net_carrier_kg乘实测species_mass_fraction。保留校准质量数据、代表性组成采样、方法及不确定度。整载体kg不是物种kg，已测物种kg不再乘组成。组成物种质量未知阻止闭合及最终排放。 | 校准物种风量原始数据、全路径状态时间覆盖、室内捕集库存及载体物种记录、闭合不确定度和签署不存在核查；互斥设备非空气跨界事件集合及直接物种或净载体组成测量证据 |

## 9. 校验规则

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| v_identity | 所有未解决行须用官方直读核对流方向类型状态、产品限定、属性单位链及基本流介质。通用质量数量支持不证明套装资产废物或服务身份。核对供应商清单边界及实际套装BOM；不采用目录合规断言或默认质量。 | all inventory rows | ghg-product-2011; ikea-bjorkan-kit |
| v_balance | 分别核对套装数量、陶瓷附件包装质量、废物库存及验收账。废物期末=期初+实际报废或拆包装-实测出库；不再修正直接实测出库。数量不等于kg；两包毛重不是盆净kg。用校准秤逐批称量实际套装和组件，记录皮重状态；不以目录相减代替未测质量。未知保持未解决，不等于零；明确原源、实物托管记录及参与表征的交换。 | all inventory rows | ghg-product-2011; ikea-bjorkan-kit |
| v_route | 须有完整套装自提交付凭据及无安装配送展示证据。顾客出行使用报废和成功S商品制造归固定下游责任并披露；本服务不是整商品摇篮到坟墓。未经独立方法审查不计避免产品或回收信用。声称完整服务前检查不存在证据及b_complete源去重。 | all inventory rows | ghg-product-2011; ikea-bjorkan-kit |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选增量零售服务核心 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同有证据配置自提路线并固定背景责任；完整服务须先完成b_complete |
| excluded_use | 整产品足迹、安装卫生功能、全部附件零售、用部分核心作整店比较 |
| required_metadata | 全部参考限定、源向量模块ID、原分母、实际退货责任账版本 |
| required_quality_disclosure | 未解决身份、未测模块覆盖、不确定度及历史身份观察 |
| update_trigger | 配置BOM包装路线分配迟到退货资产寿命仪表供应商边界变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62162 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62162 | 官方包括塑料3693、陶瓷卫生器具3721、陶瓷管3736；采用较窄陶瓷盆范围 |
| ikea-bjorkan-kit | handbook | https://www.ikea.com.tw/en/products/water-fixtures-and-fittings/bathroom-sinks/bjorkan-spr-59546720 | 可行施釉陶瓷盆及存水弯套装组件材质区分；仅规格，不作清单或质量默认值 |
| jrc-retail-2013 | literature | https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 2013 EUR25998EN；零售能源供应物流及残余物方面；不采用基准值 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 2011年第6、7、9章分析单位边界分配原则；本PCR公式为采集设计，不声称完整标准符合性 |
