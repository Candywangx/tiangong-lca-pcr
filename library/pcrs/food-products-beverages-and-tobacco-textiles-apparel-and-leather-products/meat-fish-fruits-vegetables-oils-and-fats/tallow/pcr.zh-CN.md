---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tallow
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 反刍动物炼制脂（Tallow）

## 1. 范围与适用性

本 PCR 规范 CPC 3.0 子类 21523 范围内的炼制动物脂及其紧密界定产品的前景数据包。覆盖牛、水牛、绵羊或山羊的炼制脂，以及在具体数据集中声明相应产品子类型的 greaves fat（油渣脂）和 oleo stock（初榨牛脂）。只有在声明物种、等级、预期用途、产品子类型、炼制路线、任何精炼路线和工厂门口状态时，本 PCR 才适用于食用、饲料或工业等级产品。

对于食用 tallow 声明，Codex CXS 211-1999 仅按其明示范围使用：由适合人类食用的健康牛和/或绵羊的清洁、完好脂肪组织、附着肌肉和骨骼炼制所得的食用脂。该定义不会自动证明水牛脂、山羊脂、油渣脂、初榨牛脂或非食用 tallow 具有食品等级；这些产品还须提供适用司法辖区的规格和证据。精炼食用 tallow 必须明确标识为精炼产品，不得与未精炼食用 tallow 静默合并。

本 PCR 不包括未炼制动物脂、猪或家禽炼制脂、鱼类/鱼肝/贝类/海洋哺乳动物脂油、oleo-oil、tallow oil 及其他单独交易的分提物、植物 tallow、生物柴油及下游油脂化学品，以及不能追溯物种份额和上游负荷的混合物。CXS 329-2017 仅用于证实鱼油属于独立产品族并支持该排除。

本 PCR 是中间产品的从摇篮到工厂门口规则。前景边界从炼制设施接收已声明的原料脂肪材料开始，到符合要求的 tallow 以声明的发运状态离开设施为止。上游畜牧、屠宰、收集和入厂运输由关联上游数据集表示。发运后的分销、转化为食品/饲料/燃料/肥皂/脂肪酸/生物柴油或其他产品、使用和生命周期末端不在此前景边界内；如研究明确扩展边界，应单独报告扩展部分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tallow |
| classification_refs | CPC 3.0：21523 Tallow（exact） |
| covered_products | 牛、水牛、绵羊或山羊的炼制脂；油渣脂；初榨牛脂；明确声明的食用、饲料或工业等级产品 |
| excluded_products | 未炼制动物脂；猪或家禽炼制脂；鱼类和海洋来源油脂；oleo-oil；tallow oil 和单独交易的分提物；植物 tallow；下游油脂化学品和燃料；不可追溯的混物种平均产品 |
| representative_product | 来自一个已声明物种组、已与水和固体分离并在炼制或精炼设施门口交付的 tallow |
| production_route | 接收和制备已声明的脂肪材料；热炼制或熔化；相分离和过滤；条件性净化或精炼；储存和发运 |
| market_state | 工厂门口散装或包装 tallow，已声明物种、子类型、等级、预期用途、精炼状态、物理状态和质量规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门口供应已声明物种、子类型、等级、预期用途及炼制/精炼路线的 tallow |
| How much | 1 kg 符合要求的 tallow 净质量 |
| How well | 满足已声明的采购方、监管或产品规格；食用 tallow 声明还应符合适用的 CXS 211-1999 产品定义和食品安全要求 |
| How long or cycle | 设施门口的一个发运批次；不计入储存寿命或下游服务 |
| reference_flow_link | `tallow_at_factory_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物物种或可追溯物种份额；产品子类型；等级；预期用途；原料合格性；炼制技术；精炼或改性步骤；称量时的物理状态和温度；水分/挥发物和不溶性杂质基准；质量规格；地理和时间范围；包装状态；分配方法 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。对于实际销售的混物种产品，仅可根据真实批次份额汇总可追溯的物种特定清单；对牛、水牛、绵羊和山羊采用未说明或无条件平均不符合本 PCR。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 发运时的参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用在声明发运温度和物理状态下经校准的净质量。参考数量不包括托盘、容器及其他包装；报告皮重确定方法和任何库存修正。 |
| `product_condition_basis` | 参考产品质量和收率 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明质量是发运原状还是按水分/挥发物或不溶性杂质修正。不得采用未报告的修正，也不得比较不同基准的收率。 |
| `species_mass_separation` | 原料、中间库存和产品 | Mass | kg | 从接收到负荷分配均按动物物种分别记录。若销售实体混合物，保留物种特定质量，仅计算已声明的真实批次质量加权结果。 |
| `energy_unit_consistency` | 外购电力、燃料、蒸汽和回收能源 | Energy 或燃料质量/体积 | 按计量记录使用 kWh、MJ、kg 或 m3 | 保留仪表或发票单位；需要换算时声明热值和蒸汽性质约定，并仅在记录换算因子后归一化。 |
| `water_mass_volume_conversion` | 工艺和清洗用水 | Volume 或 Mass | m3 或 kg | 保留实测体积或质量。若进行换算，记录水密度和测量温度，或采用有文件依据的设施约定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 炼制设施接收的脂肪材料，已按动物物种或可追溯物种份额、来源设施和批次、等级/合格性、保存状态及质量基准识别 |
| starting_condition_role | 前景门到门投入；上游畜牧、屠宰、收集和入厂运输仍作为关联上游过程，不因到厂门而消失 |
| product_classification_scope | CPC 3.0 子类 21523 语义范围内的炼制动物脂；规范身份不依赖任何分类树 |
| recursive_input_rule | 作为投入购入的 tallow 或其他 CPC 21523 产品应记录为具有自身合规数据集的独立上游产品流；不得在同一前景记录中递归再炼制，也不得视为零负荷原料 |
| upstream_dataset_requirement | 为脂肪原料和其他外购投入提供物种和等级特定的上游数据集，包括已声明的屠宰场/炼制分配状态和入厂运输。采用 PEF 的研究必须应用相应的物种特定畜牧和屠宰规则，不得使用跨物种平均 |
| disclosure | 声明纳入的单元过程、物种/子类型/等级/用途、原料来源和合格性、炼制和精炼技术、分配、再生或回收能源、废水和废气处理、包装、排除过程、截断、数据缺口及任何边界扩展 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rendering_gate_to_gate` | foreground_rendering_system | 纳入接收/制备、炼制或熔化、脂/水/固体分离、过滤、所需净化或精炼、内部转移、储存、发运、清洗、公用工程、直接排放、残余物、废水和可归属于声明产品的现场处理。 | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `boundary_upstream_traceability` | raw_fatty_material | 按声明物种和材料等级关联上游畜牧、屠宰、收集和入厂运输数据集；不得仅因材料被称为副产品就将其上游负荷设为零。 | `eu-pef-2021` |
| `boundary_edible_claim` | edible_tallow | 仅对合格牛和/或绵羊原料应用 CXS 211-1999 食用 tallow 定义，并保留适合人类食用的证据；披露精炼和标签状态。 | `codex-cxs-211-1999` |
| `boundary_fdm_bat_applicability` | regulatory_method_selection | 不得把欧盟食品、饮料和乳品 BAT 结论作为炼制/脂肪熔化工艺基准：其范围明确排除动物副产品初级产品的 rendering 和 fat melting。应改用适用的当地许可和动物副产品要求。 | `eu-fdm-bat-2019` |
| `boundary_no_silent_cutoff` | foreground_inventory | 记录全部已知前景投入和产出。任何目标特定截断均须明确论证、量化和报告；符合 PEF 的研究应遵循 PEF 截断规则和局限性报告要求。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | 原料接收与制备 | required | 始终 | 识别、称量、分隔、储存、修整和破碎合格脂肪材料 | 每单位制备后炼制进料质量 |
| `thermal_rendering` | 热炼制与相分离 | required | 始终 | 释放脂肪，并将炼制脂与水和固体分离 | 每单位粗炼 tallow 质量 |
| `tallow_conditioning` | Tallow 净化、精炼或改性 | conditional | 声明产品使用洗涤、干燥、中和、脱色、脱臭、分提、氢化或其他调理步骤时，逐一纳入 | 生产声明等级和规格 | 每单位调理后 tallow 质量 |
| `storage_dispatch` | 产品储存与发运 | required | 始终 | 储存、维持状态、称量、按需包装，并在工厂门口转移合格产品 | 工厂门口 1 kg tallow 净质量 |

### 过程：原料接收与制备（`raw_material_receipt`）

#### 输入

##### 产品流

###### 物种和等级特定脂肪材料（`raw_fatty_material`）

分别记录每批牛、水牛、绵羊或山羊脂肪材料、油渣脂进料或初榨牛脂进料。该记录确立原料合格性并把前景过程连接到其上游负荷。

- 选定流：按物种和子类型声明的原料脂肪材料
- 流属性/单位：Mass / kg
- 数量规则：经校准的接收净质量，仅按有记录的库存转移或拒收材料修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_lots`
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后炼制进料（`prepared_rendering_feed`）

记录制备损失单独记账后转入炼制设备的物种分隔材料。

- 选定流：制备后脂肪材料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或接收质量减去分别实测的拒收量和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_balance`

##### 废物流

###### 拒收或不合格来源材料（`receipt_rejects`）

记录检查、修整或制备期间拒收的材料及实际处理路线；不得从接收记录中静默扣除。

- 选定流：按路线区分的被拒动物源材料
- 流属性/单位：Mass / kg
- 数量规则：按拒收原因和处理去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口最终 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

##### 基本流

### 过程：热炼制与相分离（`thermal_rendering`）

#### 输入

##### 产品流

###### 制备后脂肪材料（`rendering_feed_input`）

按物种、批次和等级记录从接收过程转入的制备后进料。

- 选定流：制备后脂肪材料
- 流属性/单位：Mass / kg
- 数量规则：实测或核算后的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_balance`

###### 炼制供热（`rendering_thermal_energy`）

记录炼制作业使用的外购蒸汽、燃料或单独计量的回收热。回收能源必须保留其来源和分配处理。

- 选定流：按路线确定的蒸汽、燃料或回收热
- 流属性/单位：Energy 或燃料质量/体积 / 计量单位
- 数量规则：仪表计量、由运行小时支持的发票分摊，或有文件依据的能量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 炼制和分离用电（`rendering_electricity`）

记录破碎、蒸煮、压榨、卧螺机、离心机、泵、过滤及可归属控制设备的用电。

- 选定流：按记录确定的市场或供应商特定电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或有文件依据的设施总表/发票分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 炼制和清洗用水（`rendering_water`）

按水源和用途记录进入工艺或可归属清洗系统的水。干法炼制可以如实报告无工艺加水，但仍须记录清洗用水。

- 选定流：按水源和处理方式区分的供水
- 流属性/单位：Volume / m3
- 数量规则：炼制及可归属清洗的计量用水或核算用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗炼 tallow（`crude_tallow_output`）

记录离开初级相分离、尚未进入任何声明下游调理步骤的炼制脂。

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净质量，并与罐存变化和取样损失核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个炼制批次或报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

###### 分离出的食用或可销售固体（`rendering_coproducts`）

按法律类别、等级、质量、去向和价值分别记录油渣、蛋白固体、骨骼或其他可销售产出；不得把可销售产品与废物合并。

- 选定流：路线特定炼制共产品
- 流属性/单位：Mass / kg
- 数量规则：按共产品和去向实测产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

##### 废物流

###### 炼制废水或分离水相（`rendering_wastewater`）

在水相和清洗废水进入现场处理或离开设施的位置记录，并包括处理去向及相关污染物负荷数据。

- 选定流：按路线和处理方式区分的废水
- 流属性/单位：Volume / m3
- 数量规则：计量体积或水量平衡体积；污染物负荷采用匹配的实测浓度和流量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_waste`

###### 不可销售炼制残余物（`rendering_residues`）

按法律状态和实际处理路线记录固体、污泥、筛渣及不合格材料。

- 选定流：路线特定炼制残余物或处理废物
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或有记录的容器/承运方记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_waste`

##### 基本流

###### 炼制和现场燃烧的直接大气排放（`rendering_air_emissions`）

记录炼制、异味控制、锅炉及其他纳入燃烧过程的实测或计算直接排放。不得重复计入已由外购能源数据集表示的排放。

- 选定流：为每种报告物质选择对应的大气基本流
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由采集的活动数据乘以已披露且有来源支持的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗炼 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_waste`

### 过程：Tallow 净化、精炼或改性（`tallow_conditioning`）

#### 输入

##### 产品流

###### 进入调理的粗炼 tallow（`conditioning_feed`）

记录进入每条净化、精炼或改性路线的粗炼 tallow；清单记录不得混合物种或等级。

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和罐存核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 调理后 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

###### 调理公用工程和工艺助剂（`conditioning_inputs`）

使用时应逐项记录水、电、热、酸、碱、脱色介质、助滤剂、抗氧化剂、催化剂、氢气及其他投入；每种实际投入实例化一行。

- 选定流：实际公用工程或工艺助剂产品
- 流属性/单位：适用的质量、体积或能量属性 / 记录单位
- 数量规则：仪表、批记录、发票、加料日志或库存变化记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调理后 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理或精炼后 tallow（`conditioned_tallow_output`）

记录离开最后一个纳入调理步骤的 tallow，并声明每项精炼或改性处理。

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净质量，并与库存和调理损失核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调理批次或报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`codex-cxs-211-1999`

##### 废物流

###### 调理残余物和废水（`conditioning_waste`）

按质量或体积及处理路线逐项记录皂脚、废介质、污泥、废水、不合格分提物和其他残余物。

- 选定流：实际调理废物或废水
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按废物类型和去向实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调理后 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions_and_waste`

##### 基本流

###### 调理过程直接排放（`conditioning_direct_emissions`）

将纳入的调理和处理步骤产生的直接大气或水体释放逐项记录为基本流。

- 选定流：为排放物质和环境介质选择对应基本流
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由采集的活动数据和已披露且有来源支持的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 调理后 tallow 产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_waste`

### 过程：产品储存与发运（`storage_dispatch`）

#### 输入

##### 产品流

###### 转入产品储存的 tallow（`dispatch_feed`）

记录进入产品储存的粗炼或调理后 tallow，并与声明产品路线一致。

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和罐存核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_and_quality`

###### 储存能源和发运包装（`storage_dispatch_inputs`）

使用时分别记录罐体加热、泵送、装载用电、惰性气体和包装。散装可重复使用运输容器按研究中有文件依据的复用约定建模。

- 选定流：实际能源载体、气体或包装产品
- 流属性/单位：适用的质量、体积或能量属性 / 记录单位
- 数量规则：仪表、发票、包装领用或有记录的复用数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_and_quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口 tallow（`tallow_at_factory_gate`）

这是处于声明发运状态的参考产品。产品身份和质量限定信息必须与批次和预期用途一致。

- 选定流：Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 经校准的发运净质量，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口 1 kg tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 储存损失、不合格产品和包装废物（`storage_dispatch_waste`）

分别记录实际罐底物、作为废物回收的泄漏物、不合格产品和包装废物及其去向。

- 选定流：按材料和处理路线确定的实际废物流
- 流属性/单位：Mass / kg
- 数量规则：实测数量、库存核算或有记录的废物转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_and_quality`

##### 基本流

###### 储存和装载直接释放（`storage_dispatch_emissions`）

记录储存、加热、装载、泄漏和现场控制产生并跨越环境边界的实际直接释放。

- 选定流：为排放物质和环境介质选择对应基本流
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由采集的活动数据和已披露且有来源支持的因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口 tallow
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_and_waste`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multifunctional_foreground_processes | 首先按产品、物种、等级和过程拆分可直接归属的接收、炼制、调理、储存、处理、能源、水和排放记录。只有在研究目标下能够建模并论证附加功能和替代产品时才采用系统扩展。 | `eu-pef-2021` |
| `allocation_species_specific_upstream` | husbandry_slaughter_and_rendering_burdens | 分别保留牛、水牛、绵羊和山羊的上游负荷。采用 PEF 的牛、绵羊或山羊研究应应用相应物种组的 PEF 畜牧和屠宰规则，不得计算无条件跨物种平均。水牛或其他没有明确 PEF 默认值的情形须采用有论证、有来源或前景数据支持的分配方法。 | `eu-pef-2021` |
| `allocation_remaining_coproducts` | non_subdividable_rendering_and_conditioning_flows | 若拆分或合理系统扩展不能处理多功能流，只有在能代表其功能时才使用相关物理关系；否则使用同一过程门口、同一时期的同期产出质量和市场价值进行经济分配，并披露否决更高优先级方法的原因。 | `eu-pef-2021` |
| `allocation_waste_status` | residues_and_recovered_outputs | 根据实际法律状态、市场交易和去向判断产品、共产品、副产品、残余物或废物状态。不得通过把有价值产出改称废物来移除负荷；除非适用方法另有明确要求，现场废物管理负荷应留在产生系统中。 | `eu-pef-2021` |
| `allocation_physical_blend` | marketed_mixed_species_tallow | 实际销售的混合物仅可由分别建模的物种清单按采集批次质量汇总：混合物负荷等于各物种特定负荷乘以其真实质量份额后求和。报告份额和来源数据集；不得使用等份或类别平均混合。 |  |
| `allocation_recovered_energy` | energy_recovery | 分别报告外供或内部回收能源，避免在减少外购量和共产品抵扣之间重复计算，并一致应用研究声明的多功能处理方法。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_lots` | `raw_material_receipt` | 脂肪原料身份和接收 | 批次接收、供应商声明、地磅和合格性记录 | 日期/时间；供应商和来源设施；批号；物种；实体混合时的物种份额；组织/材料子类型；法律类别；等级；预期用途；适用时的屠宰/适食证据；保存状态；毛重、皮重和净重；拒收质量；入厂路线 | 经校准称量，并与批次检查和供应商文件关联 | kg 和声明状态 | 每个接收批次 | 代表性生产期的全部批次 | 每个来源设施和炼制场址 | 按物种、子类型、等级和路线汇总合格净质量；不得汇总身份不明物种 | 校准记录；批次追溯；供应商声明；适用时的食品安全或法律合格证据 |
| `cp_energy_records` | `thermal_rendering` | 电力、燃料、蒸汽和回收热 | 仪表、发票、燃料库存、蒸汽和运行记录 | 仪表 id；期初/期末读数；燃料量；电力；蒸汽质量/压力/温度；回收热来源；过程运行小时；分配驱动；换算因子和来源 | 优先分表；否则采用核算后的设施总表或发票，并记录分摊方法 | kWh、MJ、kg、m3 | 每批次、班次或仪表期间 | 包括启停处理的代表性生产期 | 每个纳入过程和场址 | 用有文件依据的因子换算，扣除单独计量的非过程用量，按过程产出归一化 | 仪表校准；发票核对；燃料/蒸汽规格；分摊工作表 |
| `cp_water_and_cleaning` | `thermal_rendering` | 工艺和清洗用水 | 水表、清洗和化学品加料记录 | 水源；仪表读数；工艺用水；清洗用水；循环量；排放路线；清洗剂和剂量 | 可行时按用途计量；否则采用有文件依据的水量平衡分摊 | m3、kg | 每批次、清洗事件或仪表期间 | 代表性生产期 | 每个炼制、调理和清洗系统 | 按来源和用途汇总；循环水与新鲜取水分开 | 仪表校准；清洗日志；水量平衡闭合 |
| `cp_mass_balance` | `thermal_rendering` | 材料、产品、共产品、拒收、残余物和库存 | 批记录、罐计量、地磅、实验室样品和库存记录 | 期初/期末库存；接收/转移；物种；等级；粗炼和调理后 tallow；共产品质量；废水/水相；残余物；取样和泄漏损失 | 直接称量或经校准罐体计量，并核算库存变化 | kg，适用时 m3 | 每批次或连续生产核算期 | 代表性生产期 | 每个过程、物种、等级和场址 | 投入加期初库存等于产出加期末库存和记录损失，差值须在声明的场址特定容差内 | 秤/罐校准；签署批记录；核算报告和偏差调查 |
| `cp_conditioning_records` | `tallow_conditioning` | 调理投入和路线 | 批配方、加料日志、仪表和库存记录 | 调理步骤；适用时温度/时间；水；热；电；酸/碱；脱色/过滤介质；催化剂或氢气；添加剂；投入/产出质量；残余物 | 批记录和经校准的加料或公用工程计量 | kg、m3、kWh、MJ | 每个调理批次或仪表期间 | 所有纳入的调理生产期 | 每项声明技术和场址 | 仅汇总物种、等级、路线和产品规格相同的数据 | 批次批准；仪表/加料校准；材料规格；路线追溯 |
| `cp_direct_emissions_and_waste` | `thermal_rendering` | 直接大气/水体排放和废物去向 | 烟道/排口监测、废水样品与流量、排放计算、废物转移和处理记录 | 物质；介质；点位；流量；浓度；采样时间；活动数据；因子和来源；废物类型；法律状态；质量/体积；去向；现场处理 | 规定时直接测量；否则由采集活动数据和已披露且有来源支持的因子计算 | kg、m3、浓度单位 | 许可/监测频次及每次废物转移 | 代表性生产期；异常事件单独披露 | 每个纳入排放点和处理路线 | 用时间匹配的流量和浓度计算负荷；按物质和介质汇总；确定处理边界后归一化 | 实验室资质/QA；采样方案；监测仪校准；因子来源；废物联单；许可记录 |
| `cp_dispatch_and_quality` | `storage_dispatch` | 产品质量、状态、质量和包装 | 罐体、发运称量、分析证书、包装领用和产品放行记录 | 批号；物种/子类型；等级/用途；路线；精炼状态；温度/状态；毛重/皮重/净重；包装；水分/挥发物；不溶性杂质；适用质量试验；规格；放行决定 | 经校准净重，并与批次放行和实验室记录关联 | kg 和试验特定单位 | 每个发运批次 | 代表性生产期的全部发运批次 | 每个产品、储存系统和场址 | 仅按声明状态基准汇总合格净质量；不合格产品分开 | 秤校准；分析证书；规格和放行批准；与投入批次的追溯 |
| `cp_allocation_records` | `thermal_rendering` | 分配和共产品证据 | 产出质量、销售、市场证据和分配工作表 | 产出身份；物种；等级；法律状态；质量；价格；币种；市场和日期；去向；可直接归属投入；分配方法；理由；因子 | 在同一过程门口和期间核对生产和销售记录 | kg、货币/kg、无量纲因子 | 每个报告期及每次实质方法变化 | 与清单数据相同期间 | 每个多功能过程和场址 | 优先拆分；任何经济份额均由匹配产出质量和同期价值计算；保留物种特定因子 | 销售/发票证据；质量核算；批准的方法理由；需要时的敏感性结果 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | 发运批次 | 参考净质量 = 发运毛重 - 皮重 - 排除的包装质量；仅在测量边界需要时应用库存修正，并保留核算记录 | 毛重；皮重；包装质量；库存修正 | 声明发运状态下的 kg tallow |  |
| `calc_normalized_inventory` | 每个清单行 | 归一化量 = 纳入期间的行数量 / 同期同范围合格参考产品净质量 | 行数量；合格 tallow 净质量 | 每 1 kg tallow 的行数量 | `eu-pef-2021` |
| `calc_material_balance` | 每个物料过程 | 平衡差 = 投入 + 期初库存 - 产出 - 期末库存 - 单独记录损失；与场址声明的测量不确定度容差比较，并调查超差 | 全部材料转移；库存；损失 | 核算物料平衡和偏差 |  |
| `calc_emission_load` | 直接实测排放 | 排放负荷 = 匹配浓度 x 匹配流量，记录单位和湿基/标准状态换算；计算排放则采用采集活动数据 x 已披露且有来源支持的因子 | 浓度和流量，或活动数据和因子 | 按介质的 kg 物质 |  |
| `calc_economic_allocation` | 剩余不可拆分多功能负荷 | 产出 i 的经济份额 =（质量_i x 同期门口价格_i）/ sum（质量_j x 门口价格_j）；仅在更高优先级方法被否决后使用，并保持物种组分开 | 产出质量；匹配价格；可直接归属负荷 | 分配份额和分配后清单 | `eu-pef-2021` |
| `calc_traceable_species_blend` | 实际销售实体混合物 | 每 kg 混合物清单 = sum（真实质量份额_s x 物种特定清单_s）；舍入核算后份额总和必须为一 | 实际物种质量和物种特定清单 | 已声明批次加权混合清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和原料 | 从接收到发运均须追溯物种、子类型、等级、预期用途、原料合格性、路线、精炼状态、物理状态和规格。 | 批次谱系、供应商声明、批记录和产品放行记录 |
| `dq_measurement` | 质量、能源、水和直接排放 | 可行时采用经校准或验证的仪器；记录仪表覆盖、估算方法、单位换算、不确定性和核算。 | 校准证书、仪表图、发票、实验室 QA 和计算工作簿 |
| `dq_temporal` | 前景报告期 | 覆盖代表性运行期，并披露日期、季节性、生产期、启停处理、异常事件和缺失时段。 | 生产日历、运行日志和完整性评估 |
| `dq_completeness` | 前景清单 | 纳入过程的全部已知产品、共产品、废物、公用工程和直接基本流；列出并论证任何排除或数据缺口。 | 工艺流程图、投入产出登记、物料/能量/水量核算和局限性登记 |
| `dq_species_separation` | 上游和前景汇总 | 保留物种特定质量、上游数据集和分配。混物种销售批次须有真实份额和分别建模的组分。 | 批记录、物种声明、分配工作表和混合计算 |
| `dq_allocation` | 多功能过程 | 先证明可归属流已经拆分；对剩余分配保留匹配的质量、价格、市场、时间和理由。 | 过程级仪表/记录、共产品销售证据、方法决定和需要时的敏感性分析 |
| `dq_source_scope` | 外部方法和标准 | 每项来源仅在其范围内应用；尤其不得把 CXS 211 视为定义全部 CPC 21523 产品，也不得把欧盟 FDM BAT 作为炼制/脂肪熔化基准。 | 来源适用性矩阵和数据集方法说明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 参考产品 UUID 必须为 `74260d26-09ba-4d24-93bd-c7687c2f2511`，Mass 属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考数量必须为 1 kg 净 tallow。 |  |
| `validate_required_qualifiers` | dataset_metadata | 缺失物种或可追溯份额、子类型、等级、预期用途、路线、精炼状态、物理状态/温度、质量基准、包装状态或分配方法时，应判定数据包不完整。 | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validate_scope_exclusions` | product_identity | 以猪脂、家禽脂、鱼类或海洋油脂、未炼制脂、oleo-oil、tallow oil/分提物、植物 tallow、下游油脂化学品/燃料或不可追溯混合物作为参考产品时，应拒绝应用本 PCR。 | `unsd-cpc-3-0-2025`; `codex-cxs-329-2017` |
| `validate_edible_tallow_claim` | edible_tallow | 食用 tallow 声明必须识别适合人类食用的合格牛和/或绵羊材料并披露任何精炼；其他物种或等级必须采用其适用规格，不得声称自动受 CXS 211 覆盖。 | `codex-cxs-211-1999` |
| `validate_species_no_unconditional_average` | inventory_and_allocation | 不同物种在没有真实批次份额、独立上游清单和可追溯混合计算时合并，或把一个物种的分配因子不加区分地用于另一物种时，校验失败。 | `eu-pef-2021` |
| `validate_process_route` | process_inventory | 清单必须包含所有必需过程和实际使用的每个调理步骤；未精炼产品不得包含泛化精炼路线，声明边界内的处理和直接释放不得遗漏。 | `eu-pef-2021` |
| `validate_mass_reconciliation` | material_inventory | 投入、产出、库存变化和单独记录损失须在声明且有证据支持的场址容差内核算；缺失共产品、废水或残余物时，本项应判为不确定而非零。 |  |
| `validate_allocation_hierarchy` | multifunctional_processes | 验证优先拆分，其次为合理系统扩展或相关物理关系，最后才采用经济分配等其他关系；并验证门口、期间、物种和产出状态一致。 | `eu-pef-2021` |
| `validate_emissions_and_waste` | direct_environmental_flows | 确认直接大气/水体排放和废物数量来自实测记录，或来自采集活动数据与已披露且有来源支持的因子；现场处理既不得遗漏，也不得重复计算。 | `eu-pef-2021` |
| `validate_source_applicability` | method_sources | 欧盟 FDM BAT 的范围排除了动物副产品初级 rendering 和 fat melting，因此采用其中炼制或脂肪熔化数值应标记为无依据。 | `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明 tallow 产品和路线的前景生产数据集 |
| downstream_use | 可发布为 `secondary_dataset` 或 `background_dataset`，供需要物种、等级、路线、地理和时间匹配的工厂门口 tallow 研究使用 |
| allowed_use | 用于声明物种/子类型/等级/用途及炼制/精炼路线，且上游屠宰/分配建模兼容并明确质量基准 |
| excluded_use | 不得作为跨动物物种、食用与非食用等级、重大不同精炼路线、不可追溯混合物、猪/家禽/海洋/植物脂或下游油脂化学品/燃料生产的通用代理，除非明确扩展模型 |
| required_metadata | PCR id 和版本；产品流 UUID；物种或真实物种份额；子类型；等级和预期用途；原料合格性；设施地理；技术和精炼步骤；参考状态；报告期；分配方法/因子；上游数据集身份；包装；数据源；截断和局限性 |
| required_quality_disclosure | 仪表和实验室覆盖；校准；物料/能量/水量核算；时间和场址覆盖；物种追溯；分配证据；直接排放方法；缺失流 UUID 或数据；来源适用性；不确定性及任何不确定校验项 |
| update_trigger | 动物物种或份额、原料合格性或来源、产品等级/用途/规格、炼制或精炼技术、设施边界、能源/水/排放处理、共产品市场或分配方法、上游数据集、法规/标准或重大数据质量发现发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，子类 21523 Tallow，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-12） | 类别纳入和排除；与未炼制脂、猪脂、家禽脂、海洋脂、分提物和植物脂的区分 |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius，*Standard for Named Animal Fats (CXS 211-1999)*，修订至 2024 年，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf（检索日期 2026-08-12） | 食用牛/绵羊 tallow 和 oleo stock 范围、原料适食性、精炼产品披露和质量基准背景 |
| `codex-cxs-329-2017` | `standard` | Codex Alimentarius，*Standard for Fish Oils (CXS 329-2017)*，修订至 2024 年，https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf（检索日期 2026-08-12） | 证实鱼和贝类油是独立产品族并排除在本 PCR 外 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279 on Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 功能单位、边界、企业特定清单、截断披露、多功能层级及物种特定畜牧/屠宰分配规则 |
| `eu-fdm-bat-2019` | `official_guidance` | 欧盟委员会，Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-12） | 适用性筛选：明确排除动物副产品初级 rendering 和 fat melting，防止误用其行业数值 |
