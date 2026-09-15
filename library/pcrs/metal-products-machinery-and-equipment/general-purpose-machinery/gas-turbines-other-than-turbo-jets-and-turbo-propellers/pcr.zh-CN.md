---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gas-turbines-other-than-turbo-jets-and-turbo-propellers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 燃气轮机（涡轮喷气发动机和涡轮螺旋桨发动机除外）

## 1. 范围与适用性

本 PCR 适用于完整的固定式、船用及其他非航空燃气轮机从摇篮到制造商工厂大门的生产；此类产品将燃料能量转换为机械轴功。边界包括外购材料和部件，以及企业直接控制的铸造（如有）、热处理、连接、机加工、防护涂层、装配、检验和在出厂前实施的制造商验收试验。

涡轮喷气发动机、涡轮螺旋桨发动机、汽轮机、水轮机、发电机、完整联合循环电站、场址土建、安装、经销、使用、维护、大修和报废阶段不在范围内。仅当航空衍生型机组作为非航空机械驱动或发电燃气轮机销售时才纳入；作为其技术来源的航空发动机不纳入。产品边界由 CPC 正式产品身份，以及工业燃气轮机特有的材料、制造控制和验收试验需要共同确定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gas-turbines-other-than-turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0：43143，燃气轮机（涡轮喷气发动机和涡轮螺旋桨发动机除外） |
| covered_products | 完整的开式循环、闭式循环、半闭式循环、固定式、船用、机械驱动、发电及非航空航空衍生型燃气轮机 |
| excluded_products | 涡轮喷气发动机；涡轮螺旋桨发动机；汽轮机；水轮机和水轮；单独销售的发电机；完整联合循环电站；单独销售的零部件；对客户自有实物投入提供的发动机和涡轮制造服务 |
| representative_product | 一台完整工业燃气轮机，包括压气机、燃烧室、涡轮段、轴系、机壳、控制系统，以及声明供货范围内的辅机 |
| production_route | 外购和/或厂内铸造、锻造、机加工、连接、热处理、涂层、装配、检验及验收试验的部件；逐项声明受控工序 |
| market_state | 制造商工厂大门处的完整、未包装燃气轮机，并声明所含辅机和出厂试验状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台能够将声明燃料转换为机械轴功的完整非航空燃气轮机 |
| How much | 声明工厂大门供货范围内完整燃气轮机净质量 1 kg |
| How well | 满足制造商声明的额定输出、热耗率或效率基准、燃料规格、排放控制配置和验收准则 |
| How long or cycle | 仅计生产阶段；设计寿命和维护间隔作为元数据声明，不计入使用阶段服务收益 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 燃气轮机（涡轮喷气发动机和涡轮螺旋桨发动机除外） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 额定轴功率或等效电功率；简单/回热/闭式/半闭式循环；固定式/船用/机械驱动用途；燃料规格；产品净干质量；所含压气机、燃烧室、涡轮、控制系统、底座、罩壳和辅机；冷却方式；涂层系统；出厂试验状态；生产场址；生产年份；再生含量核算方法 |

构建前景数据包时，应在元数据、过程说明、参考流备注或等效字段中声明所有必需限定信息。产品质量不含运输包装和单独供货的电站设备。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用工厂大门处经核实的产品净干质量。各批次总量应以相同供货范围内的合格产品质量归一化。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表记录的电能，并按 1 kWh = 3.6 MJ 换算；不得将电力换算为燃料质量。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或仪表参考条件报告计量体积，并披露温度、压力及标准体积换算。 |
| `test_output_basis` | 验收试验记录 | 声明的试验单位 | 声明的试验单位 | 原始记录应保留燃料、电力、试验时长、修正功率或轴功、热耗率、排气流量和试验不确定度；按受试序列号范围向产品质量分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在受控制造系统收货门进入的外购合金、钢材、铝合金、涂层材料、工艺化学品、能源载体、水和供应商精制部件 |
| starting_condition_role | 外购投入的上游摇篮到大门生产位于前景之外；厂内转化、装配和试验位于前景之内 |
| product_classification_scope | CPC 3.0 代码 43143 下的完整产品；零部件、独立发电机和电站建设不属于本 PCR 产品身份 |
| recursive_input_rule | 作为投入的外购完整燃气轮机应保留为独立上游产品，不得在本 PCR 下递归展开；应披露其功能和质量 |
| upstream_dataset_requirement | 每项外购投入均采用在地理、技术、时间、成分和产品状态方面具有代表性的上游数据集；代理数据应明确列为数据缺口 |
| disclosure | 声明受控过程清单、外购与自制部件划分、出厂试验边界、所含辅机、分配、截断、代理数据、再生含量方法和包装排除情况 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景及上游产品系统 | 纳入每项已记录投入的上游生产，以及直至未包装参考产品离开工厂大门的全部直接受控制造、装配、检验和适用的验收试验。 | `eu-pef-recommendation-2021-2279`; `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles` |
| `boundary_no_silent_cutoff` | 过程与流完整性 | 不得仅因 UUID 或首选数据集不可用而省略过程或交换。任何截断均应依据物料、能源和环境显著性进行量化和论证，并予以披露。 | `eu-pef-recommendation-2021-2279` |
| `boundary_use_excluded` | 下游生命周期 | 报告的摇篮到大门清单不包括安装、运行、维护、大修和报废；设计寿命和使用假设仅作为下游模型元数据报告。 | `eu-pef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_manufacture` | 部件制造、精加工、装配和检验 | required | 始终纳入全部直接受控的制造和装配步骤；仅当证明某原子交换不存在时其数值才可为零 | 前景生产 | 工厂大门处 1 kg 合格完整燃气轮机 |
| `acceptance_test` | 工厂热力性能验收试验 | conditional | 合同、例行或放行试验在工厂大门前消耗能源或产生排放时纳入 | 前景质量验收 | 将受试序列号份额分配至 1 kg 合格产品 |

### 过程：部件制造、精加工、装配和检验（`integrated_manufacture`）

#### 输入

##### 产品流

###### 镍基高温合金原料（`nickel_base_superalloy`）

记录进入铸造或机加工热端部件的外购镍基高温合金；合金牌号和来料形态为必需限定信息。

- 选定流：镍基高温合金
- 流属性/单位：Mass / kg
- 数量规则：实测收货质量减去退回的未开封材料，并向合格产品分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：`us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### 合金钢原料（`alloy_steel`）

记录轴、轮盘、紧固件、机壳或其他声明部件使用的涡轮级合金钢；底层物料清单应保留各前景牌号的可追溯性。

- 选定流：合金钢
- 流属性/单位：Mass / kg
- 数量规则：声明产品批次消耗的实测收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：

###### 碳素钢原料（`carbon_steel`）

按收货质量记录底座、罩壳、机壳、管路及其他声明部件使用的碳素钢。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明产品批次消耗的实测收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：

###### 铝合金原料（`aluminium_alloy`）

仅当声明设计中存在铝合金时记录；合金系列和产品形态作为前景限定信息保留。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在铝合金部件时记录实测消耗收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：

###### 氧化钇稳定氧化锆涂层材料（`ysz_coating`）

当前景内施加陶瓷热障顶层涂层时，记录氧化钇稳定氧化锆粉末。

- 选定流：氧化钇稳定氧化锆涂层材料
- 流属性/单位：Mass / kg
- 数量规则：施加陶瓷顶层涂层时，领用涂层材料减去有记录的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：`us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### MCrAlY 金属粘结层合金粉末（`mcraly_bond_coat`）

当前景内施加金属粘结层或覆盖层时，记录 MCrAlY 合金粉末。

- 选定流：MCrAlY 金属粘结层合金粉末
- 流属性/单位：Mass / kg
- 数量规则：适用涂层路线中领用的粘结层粉末减去有记录的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_receipts`
- 来源：`us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### 外购电力（`manufacturing_electricity`）

记录直接受控铸造、热处理、机加工、连接、涂层、装配、检验和所分配设施支持的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按有记录的分配规则归属生产批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_utilities`
- 来源：

###### 制造供热用气态天然气（`manufacturing_natural_gas`）

记录直接受控炉窑或热处理设备燃烧的气态天然气；仅当没有为产品服务的此类设备时方可不适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：向生产批次分配计量标准或实际体积，并披露参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_utilities`
- 来源：

###### 工业氧气（`industrial_oxygen`）

当氧燃料切割、焊接或另一项声明的前景工序消耗工业氧气时记录其供应量。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：适用耗氧工序向产品批次归属的供应商计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_utilities`
- 来源：

###### 工艺用水（`process_water`）

记录清洗、水基机加工、表面准备或压力试验中跨越前景边界的水；循环冷却系统仅计补充净水量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向生产批次分配的计量工艺用水净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_utilities`
- 来源：

###### 表面处理用氢氧化钠（`sodium_hydroxide`）

当服务于产品的碱洗或表面处理槽由企业直接控制时记录氢氧化钠产品质量，并披露溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用槽液补加量折算的纯品质量并向产品批次分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_factory_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整燃气轮机参考产品（`reference_product`）

仅记录声明供货范围内的合格完整燃气轮机质量；不合格机组属于在制品或废物，不得计为参考产品。

- 选定流：燃气轮机（涡轮喷气发动机和涡轮螺旋桨发动机除外）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开工厂大门的合格完整产品经核实净干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 分选废钢（`steel_scrap`）

将在前景中产生并离开的钢材边角料、切屑和不合格钢制件作为单一分选废物交换记录。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：产品批次发出的实测废钢质量，不含厂内重熔回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

###### 分选镍合金废料（`nickel_alloy_scrap`）

记录离开前景的镍合金浇口、冒口、切屑和不合格部件；不含厂内重熔回料。

- 选定流：镍合金废料
- 流属性/单位：Mass / kg
- 数量规则：产品批次发出的实测镍合金废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：`us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### 废熔模铸造陶瓷型壳（`spent_ceramic_shell`）

直接控制熔模铸造时，记录离开前景的破碎陶瓷模具和型芯材料。

- 选定流：废熔模铸造陶瓷型壳
- 流属性/单位：Mass / kg
- 数量规则：适用熔模铸造工序发出的实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：`us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles`

###### 废切削油（`waste_cutting_oil`）

记录机加工后离开的废油基切削液，并扣除返回同一前景循环的回收油。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于产品批次机加工的实测发出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch`
- 来源：

##### 基本流

###### 制造供热产生的化石源二氧化碳（`manufacturing_carbon_dioxide`）

记录综合制造边界内天然气燃烧直接释放的化石源二氧化碳；本行不含上游燃料排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟道质量或经场址批准的燃料碳计算结果，并向产品批次分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格完整燃气轮机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

### 过程：工厂热力性能验收试验（`acceptance_test`）

#### 输入

##### 产品流

###### 试验用电（`test_electricity`）

记录适用出厂试验期间试验辅机、仪表、控制系统、泵和冷却设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：向受试序列号直接分配的试验电表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_test`
- 来源：`asme-ptc-22-2023`

###### 试验用气态天然气（`test_natural_gas`）

当受试配置使用气体燃料时，记录出厂试验期间燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：向受试序列号直接分配的试验计量体积，并披露参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_test`
- 来源：`asme-ptc-22-2023`

###### 试验用柴油（`test_diesel`）

仅当合同或生产试验使用液体柴油时记录柴油质量。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用试验消耗并向受试序列号分配的称量或供应商计量柴油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_test`
- 来源：`asme-ptc-22-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 试验产生的化石源二氧化碳（`test_carbon_dioxide`）

记录所有已声明化石试验燃料直接释放的化石源二氧化碳；本行不含上游燃料生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向受试序列号分配的实测排气质量或经场址批准的燃料碳计算结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：

###### 试验产生的化石源一氧化碳（`test_carbon_monoxide`）

按设施声明的测量基准记录试验排气中的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对适用试验时段内实测排气浓度和干基或湿基流量进行积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：

###### 试验产生的化石源甲烷（`test_methane`）

使用气体燃料且对排放进行测量或量化时，记录试验排气中直接排放的未燃化石源甲烷。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对气体燃料试验时段内实测排气浓度和流量进行积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：

###### 试验产生的氮氧化物（`test_nitrogen_oxides`）

按照设施明确声明的报告物种和换算基准记录燃烧产生的氮氧化物总量；不得默认以一氧化二氮或一氧化氮身份替代。

- 选定流：氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：对适用试验时段内实测 NOx 浓度和排气流量进行积分，并声明报告基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品的受试序列号份额
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_test_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造和试验作业 | 只要物理上可行，应首先按产品系列、批次或序列号细分仪表、工单、试验日志和废物记录。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_causal` | 不可分割的共用作业 | 无法细分时，采用有记录的因果物理驱动因素，例如机器时间、炉膛占用、处理面积、试验时长或实测产品质量，并证明其代表资源消耗。 | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_last_resort` | 不可分割的多产品作业 | 仅当不存在可辩护的物理关系时采用经济分配；披露价格、期间、币种、波动处理和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap` | 金属废料和回收工艺材料 | 厂内再利用材料不跨越过程边界。离开前景的材料作为废物记录且不给予避免负荷收益；除非研究明确扩大边界，下游回收处理属于接收系统。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receipts` | `integrated_manufacture` | 材料投入 | ERP 收货、领用、退料和物料清单记录 | 材料身份；牌号；形态；供应商；收货质量；领用质量；退料质量；批次；序列号 | 将供应商称量与受控仓储和产品物料清单核对 | kg | 每次收货和生产领用 | 完整代表性生产年度或声明批次 | 供应参考产品的全部受控场址 | 各材料和产品批次净消耗质量除以合格产品质量 | 校准秤记录；供应商证书；物料清单版本；核对签字 |
| `cp_factory_utilities` | `integrated_manufacture` | 电力、燃料、氧气、水和工艺化学品 | 仪表、发票、储罐和槽液补加记录 | 仪表起止值；分表；体积参考条件；交付质量或体积；浓度；运行时长；生产驱动因素 | 读取校准分表；与发票核对；由溶液浓度计算纯氢氧化钠质量 | MJ; m3; kg | 可得时逐批，且至少每月 | 完整代表性生产年度 | 全部受控制造建筑 | 先直接归属，再按有记录因果关系分配，并除以合格产品质量 | 校准证书；发票；仪表图；浓度分析；分配工作表 |
| `cp_product_release` | `integrated_manufacture` | 参考产品 | 序列号放行和称量记录 | 序列号；配置；所含辅机；净干质量；验收状态；放行日期 | 校准终检称量或经核实部件质量汇总 | kg | 每台放行机组 | 完整声明批次或生产年度 | 总装和放行场址 | 相同供货范围内合格净干质量之和 | 秤校准；签字放行证书；配置基线 |
| `cp_waste_dispatch` | `integrated_manufacture` | 分选废物输出 | 废物过磅单和联单 | 废物身份；来源工序；毛重/皮重/净重；污染；去向；日期；批次归属 | 称量每次分选发运，并将累积期与工单核对 | kg | 每次发运 | 完整代表性生产年度 | 全部受控制造建筑 | 直接归属批次或按因果关系分配后除以合格产品质量 | 过磅单；废物联单；分选审核；质量核对 |
| `cp_direct_emissions` | `integrated_manufacture` | 制造燃烧排放 | 连续或定期烟道记录和燃料记录 | 污染物；浓度；排气流量；湿度；氧校正；时长；燃料碳；氧化基准 | 积分经验证烟道测量，或采用场址批准的燃料碳方法 | kg | 每次测量事件及每月燃料核对 | 完整代表性生产年度 | 服务于产品的全部直接受控燃烧设备 | 按有记录因果驱动因素向合格产品质量分配实测或计算质量 | 仪表校准；实验室 QA；燃料分析；方法批准 |
| `cp_acceptance_test` | `acceptance_test` | 试验能源投入 | 序列号试验日志和校准仪表记录 | 序列号；配置；燃料身份；燃料量；电力；时长；修正输出；热耗率；排气流量；不确定度 | 遵循声明的合同试验程序和校准仪表计划 | m3; kg; MJ; h; 声明性能单位 | 每次适用试验 | 数据集所代表的全部试验 | 工厂试验台 | 向序列号直接归属后除以受试合格产品质量 | 批准程序；仪表校准；不确定度分析；签字试验报告 |
| `cp_test_emissions` | `acceptance_test` | 试验排气基本流 | 排放试验记录 | 污染物物种；报告基准；浓度；干/湿流量；湿度；氧校正；时长；燃料身份；序列号 | 积分校准浓度和排气流量，并保留全部换算 | kg | 使用的每次排放测量 | 数据集所代表的全部适用试验 | 工厂试验台 | 向序列号直接归属后除以受试合格产品质量 | 仪表校准；实验室 QA；计算工作簿；签字试验报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | 每项批次清单交换 | 归一化交换 = 向合格批次分配的交换量 / 相同供货范围内合格完整燃气轮机净干质量 | 已分配交换量；合格产品质量 | 每 kg 参考产品的交换量 |  |
| `calc_solution_mass` | 氢氧化钠溶液 | 纯品等效质量 = 交付溶液质量 × 实测质量分数；达到重要性时单独保留溶液水 | 溶液质量；浓度 | kg 氢氧化钠 |  |
| `calc_exhaust_mass` | 试验一氧化碳、甲烷和氮氧化物 | 污染物质量 = 浓度与相容干基或湿基排气流量在时间上的积分，并进行有记录的参考条件、湿度和氧基准换算 | 浓度序列；排气流量；时长；换算数据 | kg 污染物 | `asme-ptc-22-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 将序列号、配置、材料牌号、供应商、产品形态和所含辅机范围与清单期间匹配；不得用通用流隐藏已知的不同材料。 | 放行记录；物料清单；供应商证书；UUID 审计 |
| `dq_measurement` | 仪表、秤和排放仪器 | 使用校准仪器，保留原始读数和换算，并量化验收试验测量的不确定度。 | 校准证书；不确定度分析；试验报告 |
| `dq_temporal` | 年度或批次数据集 | 覆盖代表性生产年度，或披露确切批次/试验时段、停机、样机、返工和生产率差异。 | 生产日历；工单；试验计划 |
| `dq_completeness` | 全部前景过程 | 将材料投入与产品、厂内回料和发出废物核对；将公用工程与发票核对；披露排除过程和环境显著性。 | 质量平衡；发票核对；截断登记表 |
| `dq_representativeness` | 上游数据集 | 记录地理、技术、时间、合金/产品状态、再生含量模型、燃料质量、电力结构和代理数据局限。 | 数据集元数据和数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 参考产品 | 确认产品为完整非航空燃气轮机，而非涡轮喷气发动机、涡轮螺旋桨发动机、水轮机、汽轮机、发电机、单独零件、电站或制造服务。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | 功能单位和参考流 | 确认所含辅机范围一致的合格产品净干质量恰为 1 kg，并核实输出行链接到 `reference_product`。 |  |
| `validate_atomic_inventory` | 每个清单行 | 确认每个选定流为单一原子交换，方向、流类型、属性、单位、适用条件和 UUID 决策相容；拒绝集合型行。 |  |
| `validate_test_condition` | `acceptance_test` | 仅当试验发生在工厂大门之前时纳入试验投入和排放；每个数值均链接到受试序列号和声明程序。 | `asme-ptc-22-2023` |
| `validate_completeness` | 前景清单 | 核对物料清单收货、产品质量、金属废料、其他废物、公用工程和直接燃烧排放；量化并论证每项截断或代理。 | `eu-pef-recommendation-2021-2279` |
| `validate_bilingual_uuid` | 双语 PCR | 确认每个带 UUID 的中文选定流名称为 Tiangong 公共正式中文 baseName，且规则和行标识符的顺序与英文一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整非航空燃气轮机从摇篮到制造商工厂大门的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当产品配置、所含辅机、地理、技术、年份和出厂试验状态相容时，可用于产品碳足迹、生命周期清单、燃气轮机系统和电站模型 |
| excluded_use | 不得直接替代涡轮喷气发动机、涡轮螺旋桨发动机、汽轮机、水轮机、单独部件、发电机、联合循环电站、安装、使用、维护、大修或报废阶段 |
| required_metadata | PCR id；产品型号和序列号/批次范围；额定输出；循环；用途；燃料；净干质量；所含辅机；涂层/冷却配置；生产场址和年份；受控过程清单；外购/自制划分；试验程序和状态；分配；截断；代理；再生含量方法 |
| required_quality_disclosure | 时间、地理和技术代表性；质量及公用工程核对；仪器校准；试验不确定度；上游数据集质量；未解决 UUID；缺失的独立范围证据；局限性 |
| update_trigger | 重大设计或合金变更；涂层或冷却路线变更；供应商或场址变更；新试验程序或燃料；年度单位产品电力、燃料、产品收率或主要废料率发生实质变化；UUID 更正；或出现新核实的独立范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | CPC 43143 正式产品身份及名称所编码的排除项 |
| `us-doe-netl-gas-turbine-handbook-2006-buckets-nozzles` | handbook | 美国能源部国家能源技术实验室，《Gas Turbine Handbook》，第 4.4.1 节“Buckets and Nozzles”，https://www.netl.doe.gov/sites/default/files/gas-turbine-handbook/4-4-1.pdf（检索日期：2026-09-05） | 工业燃气轮机热端材料；熔模铸造；热处理；连接；机加工；涂层；检验；YSZ 和 MCrAlY 过程分解 |
| `asme-ptc-22-2023` | standard | ASME PTC 22-2023，《Gas Turbines》，https://www.asme.org/codes-standards/find-codes-standards/gas-turbines（检索日期：2026-09-05） | 条件性工厂热力性能试验、修正性能和排气测量、试验策划、不确定度和报告 |
| `eu-pef-recommendation-2021-2279` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，《关于使用环境足迹方法的建议》，2021-12-30 合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期：2026-09-05） | 功能单位和参考流、系统边界、企业特定数据质量、截断披露、分配层级和回收建模 |
