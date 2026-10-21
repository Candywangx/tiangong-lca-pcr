---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.ribbon-blown-open-soda-lime-lamp-bulb-envelopes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# ribbon吹制透明开放式钠钙灯泡玻壳

## 1. 范围与适用性

本规则仅覆盖从真实配料到首次规定质量放行的ribbon吹制透明、未涂层、开放式钠钙白炽灯泡玻壳，供后续灯装配；不是成灯、玻璃管或建筑玻璃。完整制造路线和终端有技术原件支持。仅结合下文完整开放式玻壳限定采用宽泛的成型加工玻璃产品身份；它不是终端专属供应过程数据集。已撰写成熟度不表示科学或翻译审批、映射接受或发布。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.ribbon-blown-open-soda-lime-lamp-bulb-envelopes |
| classification_refs | CPC 3.0:37192; narrower ribbon-blown clear open soda-lime bulb-envelope subset |
| covered_products | 透明未涂层、未装配、未密封的开放钠钙灯泡玻壳；真实尺寸、壁厚、颈口与玻璃品级须声明 |
| excluded_products | 未加工管片原料及其单纯包装；Danner/Vello管；平板、磨边、热钢化、中空单元、泡沫块、纤维及织物非织造；食品罐、餐厨器皿；硼硅、石英、CRT、光伏FTO、压制反射器；磨砂酸蚀、着色或涂层；芯柱、灯丝、金属灯头、密封充气、灯整机装配及使用报废 |
| representative_product | 首次质量放行的透明开放未涂层钠钙玻壳 |
| production_route | 外购真实单种配料及可用碎料→储存配合→熔制澄清及料道→水冷辊成ribbon及孔板/吹头/模具空气吹制→颈口脱离及内部碎料循环→退火冷却→检验首次放行。兼容原件的透明技术综合，不声称同一SKU、同一工厂或当代订单，不用外购成壳包装替代制造。 |
| market_state | 开放未涂层空玻壳，首次规定质量放行；包装仓储发运为另归原批群的服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造已声明开放灯泡玻壳 |
| How much | 1 kg |
| How well | 按真实尺寸、壁厚、颈口、组成及退火缺陷检验要求放行；不假定光学性能或灯寿命 |
| How long or cycle | 连续有代表性生产期及唯一首次放行批群；放行后服务另记观测期 |
| reference_flow_link | first_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际场地与连续报告期; 首次质量放行门及唯一批群; 开放透明未涂层钠钙玻壳终端; 净玻璃质量及包装皮重; 玻璃组成尺寸壁厚颈口与检验方法; 原料整份供货配方品级含量水态及供应过程; 真实ribbon熔制吹制脱离退火路线; 能源燃气组成温压密度热值及电压地理; 实际空气湿度剩氧和各物种介质; 冷却淬冷供回水状态焓与处理约定; 期初期末原料WIP非在制FG资产流体及逐交换历史向量; 包装六类gross流动互斥存量水分维修; 实际失败启停待机清理返工; 专属与共享分配因果及真实余项同期同门状态市场证据; 原批群放行后服务Q和观测期; 原件上下文不确定性及宽泛成品玻璃身份限制 |

全部必需限定信息及每张卡片完整原生限制须在元数据、产品描述、参考流备注或等效完整可消费上下文声明，不得只留在manifest。原生玻璃（成型和加工）是以Mass/kg计量的宽泛产品流。完整记录未规定CAS、组成、品级、详细制品形态、生产路线、地理、供方或光学/电气性质。其CPC37199分类既不定义本方法边界，也不批准供应过程。仅采用独立证据支持的透明未涂层开放式钠钙灯泡玻壳成员：真实经ribbon吹制、颈口脱离、退火、检验和首次质量放行，供后续灯装配。此处成品是玻壳制造完成，不是密封或电气装配后的成灯。保留实际图纸、玻璃组成、开放颈口状态、试验、路线和供方边界；通用上游玻璃供货不能替代这些事实。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为cp_release唯一新增首次放行净玻璃千克和；称毛重扣实测皮重，不猜单件千克。 |
| single_normalization | 所有清单行 | 各行真实广延属性 | 各行单位每千克 | 只采未除raw，先换算并真实归属分子，normalize_exchange执行A_j/Q一次；所有卡片和汇总只引用该结果。Q=0保留真实负荷，不出单位结果。 |
| energy_units | electricity and gas | 各自能量或质量 | MJ or kg | 电量千瓦时×3.6得MJ一次；燃气原生质量与热MJ分开，以独立实际组成高低位热值换算。不得把Mass/kg强加所有清单行或重复采购自产热。 |
| state_conversion | each physical stream | 实际原生属性 | 各行单位 | 真正rate才对时间积分，积分体积不再乘时间。各物质密度独立按状态测量，水或次级属性系数不代其他物质。计件Item(s)与item同单位系数1，件数转质量须配置限定称重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实单种原料、外部碎料、整份制剂、公用工程及设备服务进入制造控制体 |
| starting_condition_role | 原料到开放玻壳的实质制造 |
| product_classification_scope | CPC 3.0:37192 narrower open soda-lime ribbon bulb-envelope subset |
| recursive_input_rule | 同类碎料外购和内部回用分开；外购成壳不得代替本制造路线 |
| upstream_dataset_requirement | 真实状态、配方、路线、地理和门一致的供应及处理数据集；原料及服务负荷不省略 |
| disclosure | 声明真实配方路线、质量门、全部存量历史、分配因果、归一与服务观察期；技术综合不假称同厂 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | 纳入接收、料仓及碎料分类、称量配合、熔制澄清、料道调温、水冷ribbon辊、孔板带和吹头、真实模具润滑和空气吹制、颈口划痕脱离、碎料收集淬冷、退火窑、冷却、检验试验和首次规定质量放行。以分阶段仪表和物料账区分一体控制体中的这些环节。 | `ge-glass-products-1990`; `epa-lamp-glass-1975`; `jrc-glass-bref-2013` |
| `boundary_complete` | all inventory rows | 保留失败和零产出批、启停、待机保温、清理、试验及破坏性样品、返工、泄漏和废品。记录期初期末原料、在制及未分配非在制存量与逐交换历史向量。内部碎料、热、水和阶段转移须量与历史先闭合后抵消。缺值为未知而非零；数据集完成前为实际遗漏的每种物料、制剂、燃料、流体、包装、废物和排放物种新增原子行。 | `epa-lamp-glass-1975`; `jrc-glass-bref-2013` |
| `boundary_gate` | first_release and service | Q为首次规定放行的新增净玻璃质量，每原批群只计一次。已放行期末FG已含Q，不再作为制造产出加一次，也不把其制造负荷作为Bclose扣除。制造Bclose仅包括原料、在制和未分配非在制存量。另存完整FG期初期末、gross发运、退货、变更和破损实物账；发运、复验不造产量。服务仅有真实增量负荷及原批群Q和观测期，不是净交付模型。 | `epa-lamp-glass-1975`; `ilcd-allocation-2010` |
| `boundary_assets_water` | physical control volumes | 每个炉窑、模具、退火设备、备件及在装油水气存量均保留不缩放的件数、质量或体积平衡及逐交换历史向量，与当期服务负荷分开。新维修添加、旧件拆出和真实水分独立记录；已校正净消耗不重复校正。纳入真实冷却、压缩空气、水处理和外送接收服务，不假定蒸汽锅炉。真实热水或凝水外返须有产品质量、实际焓及供方水能约定。 | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| `boundary_pack` | service packaging | 各包装材料分别闭合：期初空包+附着WIP+附着FG+可回用池+新外购+供方已含进入+收到外返+真实维修添加=互斥期末库存+随gross实物外运+单独对外返送+废物+实测真实损失。真实木、软木水分及新旧维修件单独追踪。内部回用抵消；gross质量不乘经济负荷份额，不按净Q校正，不再采购或自动给副产品信用。 | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| `boundary_species` | physical and elemental balances | 湿基总物理质量及相关碳氮硫氯硅钠钾钙镁铝硼平衡独立于真实物种证据。气体湿度、剩氧、反应程度、游离水、结构水、载水、凝水和非在制流体存量须在同一边界测量。不得一个残差拟两个未知，不用COD、VOC、总碳、总硼、NOx、SOx或颗粒粒级制造物种；质量差异在独立解决前保留不确定性或hold。 | `jrc-glass-bref-2013`; `epa-lamp-glass-1975` |

## 6. 过程清单结构

### 过程图谱

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 一体化配料熔制ribbon吹制退火检验放行 | required | 包含全部真实制造阶段和非生产时段 | foreground | 每1千克首次放行净玻璃 |
| service | 放行后包装仓储搬运发运及退货增量 | required | 按真实观察期归原放行批群，不增产量 | foreground | 每1千克原批群参考流 |

### 过程：一体化完整制造 (`manufacture`)

阶段独立记录接收配合、熔制澄清及料道、ribbon辊孔板吹头与模具、颈口脱离及淬冷回料、退火冷却检验和首次放行。它们在本控制体内聚合；内部转移及继承向量先逐阶段记录后抵消。

#### 输入

##### 产品流

###### 硅砂 (`silica`)

配合料所用整份外购硅砂。原生条件为粒径0.020–3.350毫米及工厂生产混合；英文路线为破碎与磁选，中文为破碎与洗砂。实际供货须证实这些处理环节，否则更换身份。长串二氧化硅多晶型同义词不证明实际矿相、粒级、铁含量或水分；按供应记录和分析确认，不以纳米颗粒或溶解态硅替代。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 碳酸钠 (`soda_ash`)

整份供货盐只采购一次。该条件身份为化工厂天然碱加工、碳酸钠含量95%、CAS497-19-8。分类中的羧酸与名称、CAS及备注一致指向的碳酸盐不符，作为分类瑕疵披露。其他含量或合成、回收路线须另核身份；并非要求灯壳配方使用95%纯碱。结晶水、游离水与杂质为子账，不再采购。

- 选定流：碳酸钠 `2099dae8-ad14-4496-87eb-d339b26e09f7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 石灰石 (`limestone`)

以质量计的前景石灰石身份未限定组成、纯度、品级、开采路线或供应方。采集整份矿物及实际碳酸盐、镁、碳和水分分析；氧化物当量不是外购氧化钙，不默认纯方解石或完全脱碳。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 白云石 (`dolomite`)

按实际配方条件纳入未煅烧白云石矿物：工厂生产混合，作为玻璃配合料原料。原生备注未提供清单量。测量碳酸盐比例、钙镁、脉石、水分与到货质量，不代入煅烧白云石或纯氧化镁。

- 选定流：白云石 `c15705ab-58b1-420f-ac59-3938bf8cda76`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 长石 (`feldspar`)

按实际配方条件纳入工厂生产混合的矿物长石原料。原生备注中的估计配方仅作身份背景；本配方量及实际钠钾铝硅矿物组成和水分须采集，不继承估计系数或瓷器、成品玻璃路线。

- 选定流：长石 `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 洁净分选钠钙碎玻璃 (`external_cullet`)

实际使用时纳入外部回收门后的碎玻璃供料，记录来源制品、分选、污染物、玻璃化学组成、水分和上游回收负荷。内部工艺回料不是外购，不使用此行；不默认混合废玻璃或玻璃纤维原料身份。

- 选定流：洁净分选钠钙碎玻璃
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 无水硫酸钠 (`sodium_sulfate`)

仅在实际使用硫酸盐澄清剂时纳入，确认无水或水合态及整份供货含量。玻璃、粉尘、废水和真实气体物种中的硫须独立闭合。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：无水硫酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 硝酸钠 (`sodium_nitrate`)

仅按实际硝酸盐氧化剂纳入整份供货盐和分析；硝酸盐氮不自动成为二氧化氮或排放系数。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：硝酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 硝酸钾 (`potassium_nitrate`)

仅按实际配方氧化剂纳入，与硝酸钠分别称量，不合成硝酸盐集合行。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：硝酸钾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 碳酸钾 (`potassium_carbonate`)

仅在实际使用钾熔剂时纳入，区分供货碳酸盐和成玻璃的氧化物当量。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：碳酸钾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 氧化铝 (`alumina`)

仅纳入真实单独外购氧化铝，不重复采购长石已有的铝；核实相态和品级。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：氧化铝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 硼酸 (`boric_acid`)

仅在本钠钙配方有记录时纳入少量硼酸；案例表的氧化硼当量不证明外购硼酸，也不授权转成硼硅灯壳方法。 其他真实外购配料须分别新增行，不以通用表格推断不存在。

- 选定流：硼酸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 天然气 (`gas`)

实际工业炉燃烧的整份天然气，原生为质量/千克，未固定品级或地理。独立记录组成、水分、供气状态、计量温压密度及高低位热值。整份燃气只计一次，甲烷等组分为子账，不再采购；自产热为内部量，不再购买同一热量，不替用已排除的涂装烘炉总热值记录。

- 选定流：天然气 `6b52b30c-b977-46cf-b8e2-39bc133813b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 交流电 (`electricity`)

条件身份为中国、到用户的1–35千伏电网平均交流电，基准能量属性为净热值/MJ。计量千瓦时后乘3.6转换一次，不视为质量或燃料热量。纳入配料输送、电助熔、ribbon传动、空压机、风机、退火、检验、水循环和控制。其他电压、地理或供电须匹配身份和供应过程；该条件引用不证明某家现行工厂。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 处理后自来水 (`water`)

真实外部供水，分别计量配料润湿、冷却、碎玻璃淬冷、补水和清洗；内部循环不再采购。体积转质量须测此水的密度和状态。中国黏胶专用且基准为毒性/计数属性的水及香港区域体积基准水均不证明本通用供水。记录实际处理边界与供应过程。

- 选定流：处理后自来水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 玻璃模具脱模用矿物油水乳液 (`release_emulsion`)

真实外购吹制润滑乳液按含水和添加剂的整份制剂采购一次；油水分析为子账，不重复采购。如实际厂内配制，以每种真实外购浓缩剂、原料及补水代替外购乳液行，并纳入混合能耗、损失、残留和存量，不以汽车润滑油代替整份乳液。

- 选定流：玻璃模具脱模用矿物油水乳液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 玻璃模具石墨脱模膏 (`graphite_paste`)

仅按实际使用纳入与油水喷雾不同的完整高温脱模膏，整份计量并保留载体和添加剂子账；不以纯石墨身份代替整膏，不默认同时使用第二种润滑剂。

- 选定流：玻璃模具石墨脱模膏
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 润滑油 (`lubricant`)

真实机械用石油润滑油，以质量计，工厂生产混合，原生描述为石油蒸馏精制；不代替模具乳液、合成润滑剂或制冷剂。记录充注、补加、排出、泄漏及设备内流体存量和逐交换历史向量；服务消耗仅按校正账一次，不在采购量后重复库存校正。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 耐火砖 (`refractory`)

用于炉窑维护的实际烧成、非硅藻土类耐火砖；原生备注提及高铝、硅质和镁质系列，未固定本砖组成。核实品级及适炉性，区分新备件、在装内衬、拆除旧耐材、附着玻璃与水分。负荷为cp_assets确定的真实资本/维护服务，不是每千克灯壳一套新内衬；完整实物质量留在独立资产平衡。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 铸铁玻璃吹制模具 (`mould`)

真实单套铸铁吹制模具，不采用铁铜铝铸件混合族。记录新旧在装和备件件数及实测质量、维修加减件、润滑和冷却。按真实有据服务分配负荷，不编寿命或单件质量，不按经济负荷份额缩减实物流。

- 选定流：铸铁玻璃吹制模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 玻璃熔窑 (`furnace`)

该单一设备类型的真实资本服务当量。按来源数据集基准和有记录观察期的实测服务使用归属继承制造负荷；不设固定寿命，不编机器重量，不以每千克灯壳一整机。实物采购、转移及期初期末在装/备件件数和质量另账完整记录，不缩放。质量基准供应过程须实测配置质量；计件供应过程用Item(s)，与item物理单位相同、系数1。

- 选定流：玻璃熔窑
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### ribbon玻壳成形机 (`ribbonmachine`)

该单一设备类型的真实资本服务当量。按来源数据集基准和有记录观察期的实测服务使用归属继承制造负荷；不设固定寿命，不编机器重量，不以每千克灯壳一整机。实物采购、转移及期初期末在装/备件件数和质量另账完整记录，不缩放。质量基准供应过程须实测配置质量；计件供应过程用Item(s)，与item物理单位相同、系数1。

- 选定流：ribbon玻壳成形机
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 玻璃退火窑 (`lehr`)

该单一设备类型的真实资本服务当量。按来源数据集基准和有记录观察期的实测服务使用归属继承制造负荷；不设固定寿命，不编机器重量，不以每千克灯壳一整机。实物采购、转移及期初期末在装/备件件数和质量另账完整记录，不缩放。质量基准供应过程须实测配置质量；计件供应过程用Item(s)，与item物理单位相同、系数1。

- 选定流：玻璃退火窑
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 聚酯过滤毡 (`filter_felt`)

仅在真实干式过滤装置使用该单一聚酯介质时纳入；无此介质的电除尘器不纳入。分别记录组成、涂层、新料量及受污染废介质量，不编捕集效率或过滤材料集合。

- 选定流：聚酯过滤毡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mfg`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### 废物流

##### 基本流

###### 氧气 (`oxygen_in`)

CAS7782-44-7，大气资源中的O2，不是外购氧气或化学需氧量。采集真实湿空气进量、氧组成和密度状态；燃烧、吹制和冷却各股分别计量。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 二氮 (`nitrogen_in`)

CAS7727-37-9，大气可再生元素资源；虽在排放措辞查询中返回，原生类别实际为进料资源。分子氮不是不含N2的总氮、硝酸盐、NO或NO2，不设固定干空气组成。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 氩 (`argon_in`)

CAS7440-37-1，大气资源，仅天然氩；同义词中的同位素不授权氩41放射性或瓶装气采购。测量实际空气组成，不假定氩比例。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 进气中的二氧化碳 (`ambient_co2_in`)

同一物理控制体进入的真实大气CO2，与燃料和矿物碳分开。已取得化石、生物源或延迟修正资源记录不能证明未分源的大气混合物，保留未绑定。

- 选定流：进气中的二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 进气中的水蒸气 (`humidity_in`)

实际环境湿空气携带的气相H2O；记录湿度、干湿基、温压与进量，不代入液态淡水或其密度，也不再采购空气总流。

- 选定流：进气中的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 透明开放式钠钙灯泡玻壳 (`first_release`)

首次规定质量放行的透明未涂层开放灯泡壳，供后续白炽灯装配：经ribbon吹制、颈口脱离、退火和检验，不含灯丝、芯柱、灯头、电气功能或密封充气。原生玻璃（成型和加工）是以Mass/kg计量的宽泛产品流。完整记录未规定CAS、组成、品级、详细制品形态、生产路线、地理、供方或光学/电气性质。其CPC37199分类既不定义本方法边界，也不批准供应过程。仅采用独立证据支持的透明未涂层开放式钠钙灯泡玻壳成员：真实经ribbon吹制、颈口脱离、退火、检验和首次质量放行，供后续灯装配。此处成品是玻壳制造完成，不是密封或电气装配后的成灯。保留实际图纸、玻璃组成、开放颈口状态、试验、路线和供方边界；通用上游玻璃供货不能替代这些事实。称净玻璃质量，排除包装；参考行为1千克，Q对每个批群只计一次。

- 选定流：玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`ge-glass-products-1990`; `jrc-glass-bref-2013`; `epa-lamp-glass-1975`

###### 外返非接触换热水 (`cooling_water_return`)

仅真实外返供方时作为产品输出，记录质量、温压、焓及供方水能约定；内部冷却循环抵消。不虚构蒸汽、锅炉、凝水或自动热信用；实际排水另列处理去向或分物种基本流。

- 选定流：外返非接触换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### 废物流

###### 钠钙灯壳玻璃废料 (`glass_reject`)

从ribbon余料、颈口脱离、失败壳、启停或检验产生并真正离开外边界的碎玻璃。内部洁净回用在控制体内连同继承负荷抵消，不变成二次外购、自动副产品或避免原生玻璃信用。

- 选定流：钠钙灯壳玻璃废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 不合格灯用玻璃矿物配合料 (`batch_reject`)

真实不合格混合配合料是按组分子账计量的一股废物，不用于隐藏未列外购物。记录污染、水分和处理。

- 选定流：不合格灯用玻璃矿物配合料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 捕集的灯用玻璃炉尘 (`captured_dust`)

真实捕集的多组分炉尘或配料尘作为一股物理废物流，分析氧化物、盐、碳和水分。内部回炉须保留历史并抵消，不再将捕集质量计作排放。

- 选定流：捕集的灯用玻璃炉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 灯用玻璃碎料淬冷废水 (`effluent`)

排向指定处理方的真实含油淬冷或清洗废水，计整股水及悬浮玻璃、溶解物和油子账。不引入酸磨砂的氟氨配方，不以COD拟有机物质量；外送处理不再成为一次基本流排放。

- 选定流：灯用玻璃碎料淬冷废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 灯用玻璃淬冷水污泥 (`sludge`)

真实脱水污泥须分别测干玻璃等固体和保留液体；分离水在真实接收水股记录一次，不从一个残差同时推干固体和水。

- 选定流：灯用玻璃淬冷水污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 废聚酯过滤毡 (`spent_felt`)

真实拆除的聚酯过滤介质及独立称量的污染物，仅在实际装用时纳入。

- 选定流：废聚酯过滤毡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 废玻璃炉耐火砖 (`spent_refractory`)

真实拆除旧耐材，附着玻璃及游离水、结构水与新砖服务负荷分开，记录去向，不默认回收信用。

- 选定流：废玻璃炉耐火砖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 铸铁玻璃模具废件 (`mould_scrap`)

真实退役铸铁模具或维修拆件，不是不锈钢废料；完整实物质量与资产历史服务归属分开。

- 选定流：铸铁玻璃模具废件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 废润滑油 (`spent_oil`)

原生为产生点的使用后受污染石油或合成润滑油废物流，未指定处理。记录实际排油质量和污染物，不自动给再生或燃烧信用，也不绑定油水乳液。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### 基本流

###### 二氧化碳（化石源） (`co2_fuel`)

CAS124-38-9，真实化石燃料CO2排向未特指空气。以独立燃气分析及真实反应、捕集证据分源，不用默认排放系数；空气穿透和碳酸盐碳为同一实测物理出口中互不重叠的子账。同位素、干冰同义词不改变实际气态排放状态。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 矿物脱碳二氧化碳 (`co2_mineral`)

真实地质碳CO2排放，保留碳酸盐分析、真实反应程度、滞留碳、尘液碳及独立出口测量；不得用同一质量残差再解第二个未知来源，也不默标为生物源。

- 选定流：矿物脱碳二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 一氧化碳（化石源） (`co_fuel`)

CAS630-08-0，实际化石源CO排向未特指空气，与CO2分测，不是总碳、VOC、COD或烟气产品；低温液体同义词不描述此热气出口。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 一氧化氮 (`nitric_oxide`)

CAS10102-43-9，分子NO，排向未特指空气。原生同义词含HNO或硝酰措辞，以实际NO名称及CAS核对测量；不从以NO2计的总NOx或硝酸盐平衡拟NO。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 排向空气的二氧化氮 (`nitrogen_dioxide`)

真实分子NO2，CAS10102-44-0，独立辨种计量，不以N2O、N2或总NOx代替；以NOx报告基为另存质量指标，不再计第二次排放。

- 选定流：排向空气的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 二氧化硫 (`sulfur_dioxide`)

CAS7446-09-5，仅在有硫且实际排放时记录SO2排向未特指空气。SOx以SO2计是分析约定，不证明全硫为分子SO2；独立保留硫酸盐、滞留硫及其他实际物种。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 排向空气的氯化氢 (`hydrogen_chloride`)

仅按有记录含氯料或燃料及实测排放纳入HCl；总氯、废水氯离子或表中HCl名称均不证明该气体量或介质。

- 选定流：排向空气的氯化氢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 氧 (`oxygen_out`)

CAS7782-44-7，实际剩余O2排向未特指空气。各排口或放空实测氧量并记录干湿基，不默认剩氧为零，也不在同时拟水与CO2后再倒算。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 二氮 (`nitrogen_out`)

CAS7727-37-9，分子N2排向未特指空气，与资源进量不同。核对真实空气穿透、反应辨种及非在制气体存量；NOx或总氮均非N2。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 氩 (`argon_out`)

CAS7440-37-1，天然氩排向未特指空气，不用另查得的平流层或氩41记录替代工厂出口；已知更具体介质时须匹配。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 穿透排向空气的大气二氧化碳 (`ambient_co2_out`)

真实物理出口中的大气来源CO2，与燃料和矿物来源分开；核对进量、出量及真实储存吸收，不以假定空气穿透产生负产量或信用。

- 选定流：穿透排向空气的大气二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 水蒸气 (`water_vapour_out`)

CAS7732-18-5，气态H2O排向未特指空气。独立核对进气湿度、真实燃料反应水、游离水、结构水、载水、蒸发、凝水和滞留水；来源子账合成一个出口，不重复排放。原生水、冰、重水同义词不证明其他相态或同位素。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

###### 排向空气的钠钙玻璃颗粒 (`glass_particulate`)

真实熔后玻璃尘须有化学组成、粒度分布和去向；不把总颗粒物改名为纯SiO2、PM2.5或特定硼、金属物种。真实原料粉尘按各排放组分新增行，不藏入仅玻璃的行。

- 选定流：排向空气的钠钙玻璃颗粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

### 过程：放行后服务 (`service`)

本服务与制造共用同一首次放行批群标识；物理FG和包装gross账独立保留，内部移交Q在合并时抵消。

#### 输入

##### 产品流

###### 瓦楞纸箱 (`carton_purchase`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 仅真实新外购；供方已含附着包装另记收到，不重复采购。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 瓦楞纸箱 (`carton_supplier_included`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 真实随供货已含包装实物进入，仅记录尚未包含在上游边界的负荷，不再采购。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 瓦楞纸箱 (`carton_external_return_received`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 真实收到外部空包返还，关联原可回用批群及剩余服务向量，不是新外购或新灯壳产量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 聚乙烯薄膜 (`pefilm_purchase`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 仅真实新外购；供方已含附着包装另记收到，不重复采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 聚乙烯薄膜 (`pefilm_supplier_included`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 真实随供货已含包装实物进入，仅记录尚未包含在上游边界的负荷，不再采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 聚乙烯薄膜 (`pefilm_external_return_received`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 真实收到外部空包返还，关联原可回用批群及剩余服务向量，不是新外购或新灯壳产量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 灯壳运输木托盘 (`pallet_purchase`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 仅真实新外购；供方已含附着包装另记收到，不重复采购。

- 选定流：灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 灯壳运输木托盘 (`pallet_supplier_included`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 真实随供货已含包装实物进入，仅记录尚未包含在上游边界的负荷，不再采购。

- 选定流：灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 灯壳运输木托盘 (`pallet_external_return_received`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 真实收到外部空包返还，关联原可回用批群及剩余服务向量，不是新外购或新灯壳产量。

- 选定流：灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 交流电 (`service_electricity`)

真实放行后仓储、包装、搬运和发运服务能耗，在观测期归属原放行批群，不新造Q。重复完整采用限制：仅条件性中国1–35千伏到用户电网平均供电、净热值/MJ；千瓦时乘3.6一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞纸箱 (`carton_gross_out`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 随gross实物发运外出的真实包装，包括再次交付，不按净Q或经济份额缩质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 瓦楞纸箱 (`carton_return_sent`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 向外部单独返送，区分随gross发运与内部回用。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 聚乙烯薄膜 (`pefilm_gross_out`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 随gross实物发运外出的真实包装，包括再次交付，不按净Q或经济份额缩质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 聚乙烯薄膜 (`pefilm_return_sent`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 向外部单独返送，区分随gross发运与内部回用。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 灯壳运输木托盘 (`pallet_gross_out`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 随gross实物发运外出的真实包装，包括再次交付，不按净Q或经济份额缩质量。

- 选定流：灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 灯壳运输木托盘 (`pallet_return_sent`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 向外部单独返送，区分随gross发运与内部回用。

- 选定流：灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

##### 废物流

###### 废瓦楞纸箱 (`carton_waste`)

条件身份为单个完整瓦楞运输箱；原生工厂技术混合固定原生纤维16.6%、回收纤维83.4%。原生恢复出处不证明本供应商或增添系数。实际纤维比例与组成须匹配，否则换身份，不是整个包装集合例外。 真实报废包装，污染和水分分别计量，记录去向，不自动给回收信用。

- 选定流：废瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 废聚乙烯薄膜 (`pefilm_waste`)

条件身份为单种供货PE膜，CAS9002-88-4，工厂生产混合，未固定支化或品级。皮革箱包分类与一致的PE名称、CAS、备注分开披露；备注提PET是竞争材料，不是本膜。确认聚合物、添加剂、厚度、供应商和层结构，不替代PET或复合膜。 真实报废包装，污染和水分分别计量，记录去向，不自动给回收信用。

- 选定流：废聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 废灯壳运输木托盘 (`pallet_waste`)

真实完整可回用木托盘。已查木材厂记录注明木板或木条且分类为电能，形态歧义使其不能默当完整托盘。记录树种、水分、金属紧固件和实际维修；每种真实新维修料及拆件分别新增，不设固定周转次数。 真实报废包装，污染和水分分别计量，记录去向，不自动给回收信用。

- 选定流：废灯壳运输木托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### 已放行钠钙灯壳破损料 (`service_glass_breakage`)

真实放行后玻璃破损废物，保留原批群制造历史及观测到的搬运、收集、处置增量；不从首次放行Q扣除，也不把旧负荷转给无关当期产量。退货、复验或返修放行壳不造新产量；真实增减玻璃、水或部件须测量并关联原批群。

- 选定流：已放行钠钙灯壳破损料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本交换唯一单位结果q_j；原始记录及唯一计算见第8节，不再除。
- 数值来源模式：计算前景值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`epa-lamp-glass-1975`; `jrc-glass-bref-2013`

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_scope` | attributional inventory | 仅在方法确需分配的已声明归因情景采用此层级，并说明ILCD其他情景或系统扩展条款为何不适用。本处评估多功能过程，不作多功能产品QFD比较。先专属归属，并实际细分或有据虚拟细分，再处理共享余项。 | `ilcd-allocation-2010` |
| `allocation_causality` | each shared exchange | 每个共享交换分别识别与各产出或功能的决定性物理因果。进入产品的配料按真实组成；热量仅在有决定性依据时按真实热需求；设备或空间服务可能需实际使用时间及容量。不为全部交换任选统一质量或经济键，不以示例清单代替因果证明；负荷分配不改变gross物理平衡。 | `ilcd-allocation-2010` |
| `allocation_residual` | genuine remaining common process | 仅对确实不可细分且无可辩护决定性物理因果的真实共享余项，使用同期、同一共同过程门、实际状态、量与质的各功能市场价值。下游价扣除后续包装、交付、升级和服务，披露不确定性；无任意固定比例、默认信用、自动切经济或负废物调整。缺此证据则该余项保留方法hold。 | `ilcd-allocation-2010` |
| `allocation_cullets_service` | cullet and cohort services | 内部回料携真实继承向量与匹配内部投入抵消。外部废物状态、回收门及真实副产品功能需证据，不给避免原生料信用。返工失败归原生产批群。放行后搬运、退货、维修和破损保留原FG历史，只向同一原批群加观测到的服务增量，不借无关当期Q。 | `ilcd-allocation-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 唯一首次放行 | 有据原始采集记录 | 批群ID;首次放行时间;配置;开放颈口状态;退火及应力尺寸缺陷测试;毛皮净千克;排除项;首次已计标志 | 经校准逐批或逐件称净重扣包装皮重；以唯一批群关联真实玻璃质量测试放行，废品复验再交付不加Q。 | kg | 每次放行 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_mfg | manufacture | 每种原料及整份制剂 | 有据原始采集记录 | 行ID;供应批;真实品级路线含量整份供货质量;水态;原始单位;阶段;gross收返损失;期初期末原料在制非在制存量;逐交换继承向量;零失败返工标志 | 接收和阶段称量与实际配方及整份制剂核对；保留原单位及所有失败待机清理记录，组成和水分独立测量。 | row native unit | 每批每班 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_energy | manufacture | 燃气与电分别 | 有据原始采集记录 | 行ID;仪表始末积分量或速率序列;原始单位;高低位热值;燃气组成密度温压;千瓦时;阶段;待机启停失败;归属证据 | 读取经校准阶段仪表；气液积分体积已经是数量，只有真实速率积分。各物质密度按测量状态独立取得。 | row native unit | 每时段每班 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_water | manufacture | 供水及真实外返 | 有据原始采集记录 | 水源;gross供水体积质量;温压密度焓;配料冷却淬冷清洗;内部循环;蒸发凝结;流体存量;接收方及供方约定 | 区分供水、内部循环、真实外返及排水，测各股状态和存量，不假定蒸汽或凝水。 | row native unit | 每时段 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_species | manufacture | 每种真实进出物种 | 有据原始采集记录 | 行ID;物种CAS相态;进出介质;气体体积或速率;干湿基;湿度氧;温压;浓度;检出限不确定性;独立元素分析反应程度凝水存量 | 逐实际物种独立取样计量并匹配进出体积；归属前换单位及干湿基状态，以独立证据核湿总质量和元素，不从COD、VOC、NOx或总硼推物种。 | kg | 每实际排口时段 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_waste | manufacture | 每种真实废物流 | 有据原始采集记录 | 行ID;整份湿质量;独立干固体液体物种;内部回用;外部接收;处理边界;零产出失败;存量历史 | 称量实际外出废物并分析组成，内部回用仅按匹配数量及继承向量抵消；保留处理方和运输覆盖。 | kg | 每次转移 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_assets | manufacture | 各设备及流体存量 | 有据原始采集记录 | 资产ID;真实配置;在装备件件数实测质量;期初期末存量;新外购;维修新料旧拆件;真实木材游离结构水;流体充排漏;逐交换历史向量;供应过程基准;实测使用期服务驱动 | 各单一资产流体完整实物流独立闭合；按继承制造交换向量和实测运行或有据因果使用确定消耗服务。已校正消耗不二次校正，不固定寿命或猜单件质量。 | row native unit | 每流动及服务期 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_pack | service | 各材料六类gross流动 | 有据原始采集记录 | 材料ID;完整组成;水分;供方已含或新购;收到外返;gross发运外出;单独返送;废物;期初期末空附着WIP附着FG可回用库存;维修旧件;原批群;继承服务向量 | 按boundary_pack逐材料独立核质量件数水分；供方已含不再采购，内部回用不是外流动，仅在真实存在时测木水分及维修。 | kg | 每次流动 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |
| cp_service | service | 放行后能耗及破损 | 有据原始采集记录 | 原放行批群;原Q;观测始末;实际增量原始能耗;grossFG流动;退货改动新增去除玻璃水部件;破损;原负荷向量;服务分子 | 追踪各放行批群真实仓储搬运交付退货，保留原制造负荷，仅测服务增量，不用无关当期Q或二次放行。 | row native unit | 每事件 | 完整连续有代表性生产期；服务保留原批群实际观测期 | 全部实际生产线及排口；不遗漏启停失败清理 | 每 1 kg 参考流 | 校准、供应批、化验、批群、接收去向、物理与历史向量闭合证据 |

表中aggregation_rule仅声明最终报告基准并引用下列唯一归一，不指示在采集时预除；collection_method和raw_fields始终采原始未除量。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | 所有清单行 | 按各行原始单位转其广延量。真实速率积分；积分量不重复时间因子。按该物质真实状态密度换算质量；电kWh×3.6=MJ，燃料热量使用独立实际组成及热值。保持质量、热量和服务当量不同列。 | raw_fields; cp_energy; cp_water; cp_species; cp_assets | converted_raw_j | `jrc-glass-bref-2013` |
| attribute_numerator | 所有清单行 | 制造各交换A_j为专属及真实分配后的当期量/负荷加本批群期初原料WIP与未分配非在制的继承量，减同边界期末原料WIP及未分配非在制的继承量；仅有真实转移并历史匹配才抵消。期末已放行FG不在制造Bclose。服务A_j仅为观测期归原批群的真实增量；原FG制造历史另携带，不再加造制造量。资产服务与完整实物存量分开，包装实物流不乘负荷份额。 | converted_raw_j; cp_mfg; cp_assets; cp_pack; cp_service; allocation_scope; allocation_causality; allocation_residual | A_j | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| normalize_exchange | 所有清单行 | q_j = A_j / Q | A_j; Q; cp_release | q_j | `ilcd-allocation-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

normalize_exchange仅在Q>0时执行一次，Q为当前制造批群首次放行净质量或服务所归原批群的同一Q。Q=0保留原始负荷和原因，不给单位结果。第6节所有q_j、采集汇总及最终表只引用同一次结果；参考成品行1千克是该Q的单位表达，不另加期末FG。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_source | all source-dependent decisions | 保留原件提取出处、页表上下文、反例、真实适用性、原始单位和不确定性。历史技术来源仅支持定性路线，不给默认配方、排放、水、成品率或单件质量。 | 原件与实际前景记录、身份和完整性证据 |
| dq_identity | all UUID-bearing rows | 身份与供应过程兼容及数量分开。保留每项原生卡片限制和官方中文名。辅助未解保留具体名并跟进；核心基准未解是真实hold。 | 原件与实际前景记录、身份和完整性证据 |
| dq_complete | all raw and burden ledgers | 要求连续有代表性的完整生产期含非生产时段；保留配置批群场地时间及检出限。缺失或不支持关系保留未知并阻断受影响结果。 | 原件与实际前景记录、身份和完整性证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference and native exchanges | 核对完整原生类别确实包含原始证据所支持的真实开放未涂层钠钙灯壳。宽泛成型加工玻璃产品仅在完整参考流/卡片限定和真实路线终端证据下适用；通用名或分类本身既不证明适用性，也不证明供应过程匹配。供料、管材、光伏玻璃或成灯不能替代此终端。每个采用UUID保留卡片全部限制、真实类型、介质、CAS、形态、品级、路线、地理、精确属性链证据和官方中文名。核心未知则不得成为可用指导或接受映射。 | `ge-glass-products-1990`; `jrc-glass-bref-2013` |
| `validate_basis` | all inventory rows | 按唯一放行及净重记录核Q，参考数量和成品行均为1千克。核对完整原始量到归属分子的链，normalize_exchange恰执行一次，协议、卡片和汇总不再除。Q为零保留真实负荷，不出单位结果。 | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| `validate_balance` | all physical ledgers | 独立核湿总质量、元素和真实物种及不确定性；核对全部启停、失败、返工、WIP、FG、非在制、资产和流体状态及继承向量。残差不是两个测量量。各包装核全部六类gross流动及互斥库存；制造服务门一致，合并抵消内部Q。 | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| `validate_completeness` | site data | 要求全部真实能源、公用工程、整份制剂、材料、设备服务、包装及去向。新增观察的成分、物种或维修件须具体原子行；not_applicable需不存在证据，未知不转零。工业来源不提供分配审批；来源适用性、分母、案例范围和不确定性须明确。 | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 待实际数据证实和独立方法复核后，供灯具供应链建模 |
| allowed_use | 仅符合本声明状态路线及实际供应边界的数据 |
| excluded_use | 不得作为成灯、管片、罐瓶、器皿、磨砂涂层、CRT、石英或光伏玻璃的等价数据；不含完整开放式玻壳限定的通用成品玻璃不在本方法范围 |
| required_metadata | 完整第3节限定与逐卡原生限制、归因情景、真实原料服务供应过程、质量门批群及时间 |
| required_quality_disclosure | 核心与辅助身份状态、历史技术证据范围、原始量质量、物理和物种闭合、分配因果、不确定性及未覆盖项 |
| update_trigger | 原生身份或限制变化、配方路线品级变更、供应边界或质量门变更、独立复核及新证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `ge-glass-products-1990` | `handbook` | General Electric, GE Glass Products (1990), especially printed/PDF p19 Manufacturing & Quality Control and adjacent tubing/pressed-glass/borosilicate contrasts. Manufacturer original reproduced in a third-party archive, https://www.lamptech.co.uk/Documents/Components/GE%20-%20Lamp%20Components%20-%20Glass%20-%201990%20US.pdf ; retrieved 2026-10-20. | 开放灯泡玻壳终端及ribbon吹制、脱离，与玻璃管压制及后续磨砂涂层反例分开；无当代SKU、清单系数或分配支持。 |
| `epa-lamp-glass-1975` | `official_guidance` | US EPA, Development Document for Effluent Guidelines and Standards for the Pressed and Blown Glass Segment of the Glass Manufacturing Point Source Category (1975), Section III and incandescent lamp envelope section, printed pp42–46 and77–79; Figure9 printed p78 (PDF92). https://www.epa.gov/sites/default/files/2019-06/documents/glass-mfg_pressed-blown-glass-segment_dd_1975.pdf ; retrieved 2026-10-20. | 技术性原料熔制吹制退火检验发运路线、碎料含油淬冷水及排除酸磨砂和灯装配；历史案例不作现行法规、配方或水量成品率。 |
| `jrc-glass-bref-2013` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Manufacture of Glass, EUR25786 EN (2013), DOI10.2791/69502, sections2.8 and3.7, printed pp65–66 and138–140, Tables3.33–3.34. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf ; original acquired 2026-10-20; reused and re-extracted 2026-10-20. | 技术分解与实际配方能源排放完整性、现场支路及管材陶瓷反例；表3.34按熔玻璃吨数的案例含氧化物当量与NOx/SOx报告基，不采用数值。 |
| `ilcd-allocation-2010` | `official_guidance` | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, sections7.9.2–7.9.3, printed pp255–268 (PDF275–288), including allocation applicability and multifunctional-product counterexample. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; original acquired 2026-10-13; reused and re-extracted 2026-10-20. | 仅在声明归因且确需分配情景采用细分虚拟细分、逐交换决定性物理因果及真实余项同门同状态市场价值；无通用质量经济任选、固定比例、自动替代或工业清单支持。 |
