---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.thermionic-cold-cathode-or-photo-cathode-valves-and-tubes-including-cathode-ray-tubes
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 热电子发射管、冷阴极管或光阴极管（包括阴极射线管）

## 1. 范围与适用性

本 PCR 规定成品电子管前景数据的编制方法，其电子在密封的真空或气体管壳内传输，包括热电子发射管、冷阴极管、光阴极管及阴极射线管。代表性前景从外购或单独建模的未密封组件开始，覆盖最终准备、封接、抽真空、激活、老炼、测试及包装；必须衔接上游制造。按质量声明的数据集不表示不同电子管的功能等价。[un-cpc-3-0-structure-2025; epa-electronic-components-phase-2-1984; hamamatsu-about-pmts]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.thermionic-cold-cathode-or-photo-cathode-valves-and-tubes-including-cathode-ray-tubes |
| classification_refs | CPC 3.0: 47140；分类背景，不代表已接受映射 |
| covered_products | 成品热电子发射管、冷阴极管和光阴极电子管，包括阴极射线管 |
| excluded_products | 开口玻壳及独立零件；半导体器件；电灯；整机电视、监视器及仪器；X 射线设备 |
| representative_product | 一种明确型号的密封玻壳真空电子管 |
| production_route | 接收未密封组件；条件性水漂洗；电加热封接与抽真空；阴极及吸气剂激活；老炼及验收测试；条件性瓦楞纸箱包装 |
| market_state | 出厂时全新、密封且测试合格的电子管；净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按具体型号声明电子控制、放大、开关、光探测或成像功能 |
| How much | 声明单位：同一型号合格成品电子管 1 kg；记录件数及平均净质量 |
| How well | 满足声明的制造商验收测试、电额定参数及型号特定响应要求 |
| How long or cycle | 一个生产批期；使用寿命作为产品限定信息披露，运行能耗不在本前景内 |
| reference_flow_link | finished_tube |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 热离子管、冷阴极管或光阴极管及其他管（包括阴极射线管） `ac3173f5-f70e-4122-a541-ac35b54330cc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 电子管型号与功能；阴极类型；管壳材料及含铅量；真空或充气种类及压力；成品尺寸；每件净质量；电额定参数；适用时的 CRT 屏幕或光阴极响应；验收测试与判废标准；声明寿命及工作制；组件起始状态；场址、时期及上游覆盖 |

必需限定信息须记录于数据集元数据、产品描述或等效字段；缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | 成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测件数乘型号平均净质量校验净产出；不得以包装毛重作分母。 |
| energy_conversion | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始 kWh 记录；按 1 kWh = 3.6 MJ 换算，电网上游排放不再列作直接排放。 |
| water_mass | 漂洗水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 体积转质量时记录实测密度及温度；不得无说明地假设密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 管壳、电极及功能表面已制成的未密封组件；披露吸气剂及玻璃焊料是否已装入 |
| starting_condition_role | intermediate_product |
| product_classification_scope | CPC 47140 内的成品电子管；未密封组件为单独识别的同类别前体 |
| recursive_input_rule | 对未密封投入记录一次，并关联其上游数据集及确切制造状态；不得递归关联到成品电子管数据集 |
| upstream_dataset_requirement | 衔接的供应商或独立前景数据集须覆盖管壳、电极、阴极、荧光层或光阴极制造及装配；确认交接边界无缺口 |
| disclosure | 分别披露门到门前景及上游衔接；使用与寿命终结属于下游情景 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | 纳入实际封接、抽真空、激活、老炼、失败测试、返工能耗及废物转移。EPA 历史工序与现代 PMT 描述支持这些操作，但均不提供当前工厂清单。 | epa-electronic-components-phase-2-1984; hamamatsu-about-pmts |
| boundary_extension | route | 表列路线采用电加热及干式真空泵。对充气、燃料加热、油泵、厂内涂层或 CRT 外涂层及防爆带路线，须补充实际操作的实测原子交换及供应商衔接后方可声明完整；不得把未采集交换设为零。 |  |
| boundary_waste | waste | 整管废品应与拆解玻璃分开记录，漂洗废水作为转移至明确处理设施的废物流记录。若厂内处理，须补充处理投入、污泥及环境边界实测排放物种；不得将同一污染物重复计入未处理废水。 | epa-electronic-components-phase-2-1984 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rinse | 最终水漂洗 | conditional | 接收组件后实际执行纯水漂洗 | 前景生产 | 1 kg 合格管 |
| finish | 封接、抽真空、激活及测试 | required | 所有数据集 | 前景生产 | 1 kg 合格管 |
| pack | 瓦楞纸箱包装 | conditional | 瓦楞纸箱跨越交付边界 | 前景生产 | 1 kg 合格管 |

### 过程：最终水漂洗（`rinse`）

#### 输入

##### 产品流

###### 工艺用水（`rinse_water`）

仅纳入实际执行的最终纯水漂洗；计量新鲜水，不计循环流量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rinse`
- 来源：`epa-electronic-components-phase-2-1984`

#### 输出

##### 废物流

###### 清洗废水（`rinse_wastewater`）

漂洗排出液体废物流时纳入；记录质量、组成及处理去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rinse`
- 来源：`epa-electronic-components-phase-2-1984`

### 过程：封接、抽真空、激活及测试（`finish`）

#### 输入

##### 产品流

###### 已装配电子阀或管，未密封（`unsealed_assembly`）

计量消耗的组件净质量，包括随后判废的组件；衔接确切上游制造状态。

- 选定流：已装配电子阀或管，未密封 `5a46a125-0b34-4e90-b714-2e46bb5c1257`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lot`
- 来源：`hamamatsu-about-pmts`

###### 含铅封接玻璃粉（`sealing_frit`）

inclusion_condition：采用玻璃粉封接且组件清单尚未包含该投入；称量干玻璃粉，若使用粘结剂须单列。

- 选定流：含铅封接玻璃粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lot`
- 来源：`epa-electronic-components-phase-2-1984`

###### BaAl4/Ni 蒸散型吸气剂组件（`getter_device`）

inclusion_condition：该外购吸气剂在前景安装且未包含于未密封组件；计量组件整体质量。激活时钡沉积于管内，不自动视为排向外界空气。

- 选定流：BaAl4/Ni 蒸散型吸气剂组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lot`
- 来源：`saes-ep1402554a1`

###### 电力（`electricity`）

计量封接、烘烤除气、干泵抽气、激活、老炼及验收测试用电，包括废品；辅助操作用电仅分配一次。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

#### 输出

##### 产品流

###### 热离子管、冷阴极管或光阴极管及其他管（包括阴极射线管）（`finished_tube`）

称量合格密封电子管，不含运输包装；核对件数及验收记录。

- 选定流：热离子管、冷阴极管或光阴极管及其他管（包括阴极射线管） `ac3173f5-f70e-4122-a541-ac35b54330cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lot`

##### 废物流

###### 不合格密封电子管（`rejected_tube`）

记录外送处理或回收的整管废品及其管壳组成与去向；不得用混合电子废料替代。

- 选定流：不合格密封电子管
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lot`
- 来源：`epa-electronic-components-phase-2-1984`

### 过程：瓦楞纸箱包装（`pack`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_box`）

仅在使用该纸箱时纳入；按发运合格管质量计量纸箱净消耗。实际使用的缓冲物须另列已识别交换。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按适用采集协议记录批期量；以同批合格管净质量归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 合格成品管净质量
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_equipment | 优先采用批期直接计量。共用真空设备及烘炉电耗按实测功率乘占用运行时间分配，包括可归属待机；记录其余共用服务。 |  |
| allocation_rejects | accepted_output | 废品及返工负荷计入合格电子管产出；不把不合格品作为无负荷共产品。内部再用作为内部循环；外送回收单列废物去向，不自动计入避免生产的收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rinse | rinse | rinse_water; rinse_wastewater | water_meter; waste_transfer | 时间、进出水质量、温度、密度、成分、去向 | 校准流量计与称量、采样、转移联单 | kg | 每批 | 完整代表性批期，披露起止日期 | 所声明工厂及设备 | 先汇总实际量，再除以同批合格净质量；无适用操作时注明不适用 | 校准记录、原始日志及凭证 |
| cp_lot | finish | unsealed_assembly; sealing_frit; getter_device; finished_tube; rejected_tube | batch_record | 批号、型号、件数、净质量、投入与库存、测试结果、废物去向 | 称量、仓库核对及测试日志 | kg | 每批 | 完整代表性批期，披露起止日期 | 所声明工厂及设备 | 先汇总实际量，再除以同批合格净质量；无适用操作时注明不适用 | 校准记录、原始日志及凭证 |
| cp_energy | finish | electricity | meter_record | 设备、时间、kWh、批号、占用时间、待机及分配系数 | 分表读数；共用设备实测功率及计时 | kWh | 每批 | 完整代表性批期，披露起止日期 | 所声明工厂及设备 | 先汇总实际量，再除以同批合格净质量；无适用操作时注明不适用 | 校准记录、原始日志及凭证 |
| cp_pack | pack | corrugated_box | stores_record | 箱型、件数、单箱质量、发运批号及库存变化 | 称量及发运记录核对 | kg | 每批 | 完整代表性批期，披露起止日期 | 所声明工厂及设备 | 先汇总实际量，再除以同批合格净质量；无适用操作时注明不适用 | 校准记录、原始日志及凭证 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部行 | q_i = sum(Q_i) / M_accepted | 同批实测交换量与合格净质量 | 每 kg 交换量 |  |
| yield | 质量核对 | M_in + M_added = M_accepted + M_rejected + M_losses + delta_stock | 批期称量及库存记录 | 核对记录，不设通用成品率 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_sampling | 产出及能耗 | 覆盖启动、稳定生产、停机、老炼及废品；禁止只选择最佳批次 | 批期日志及完整计量时间序列 |
| dq_upstream | 未密封组件 | 供应商边界须覆盖所有已装入材料及前序工艺；未覆盖的工序须另行建模 | 供应商工艺图、物料清单及数据集边界 |
| dq_ranges | 数量 | 使用前景记录；未经两个独立且边界相容的原文来源综合，不设外推范围 | 原始记录及不确定度说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_flow | 缺少型号、净质量、阴极及管壳状态或测试标准的数据集不合格；不得仅按 kg 比较不同功能。 |  |
| validate_balance | inventory | 核对组件投入、新增留存固体、合格管、废品管、实测损失与库存变化。按称量不确定度及返工记录解释差异，不虚构容差。 |  |
| validate_coverage | boundary | 要求提供路线适用性、上游接口、计量覆盖及去向凭证；披露未解决流身份，不得暗用近似流替代。缺少路线特定交换时，完整性结论应为不确定。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 设备过程及 lifecyclemodel 投影中的部件供应 |
| allowed_use | 型号及制造路线相容且上游衔接明确的使用 |
| excluded_use | CRT、接收管及光电倍增管之间的通用质量比较；整机足迹；使用阶段或处置声明 |
| required_metadata | 型号、场址、时期、组件供应商、阴极、管壳、充气或真空状态、额定值、单位质量、过程边界及分配驱动因素 |
| required_quality_disclosure | 仪表、校准、成品率核对、缺失流、上游代表性、废物去向及不确定性 |
| update_trigger | 电子管设计、阴极化学组成、泵或炉技术、供应商、成品率、能源供应或废物处理变化 |

## 11. 数据源

| 来源标识 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, row 47140 (30 June 2025); https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 访问日期 2026-09-09 | 仅用于分类身份 |
| epa-electronic-components-phase-2-1984 | official_guidance | US EPA, Development Document for Electrical and Electronic Components, Phase II (1984), sections 4.1.3, 4.2 and 5.2.2; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000K55B.TXT; 访问日期 2026-09-09 | 历史电子管工序与漂洗废水路径；不迁移数值 |
| hamamatsu-about-pmts | literature | Hamamatsu Photonics, About PMTs, Behind high-performance PMTs and Main components; https://www.hamamatsu.com/jp/en/product/optical-sensors/pmt/about_pmts.html; 访问日期 2026-09-09 | 光阴极管部件、封接、抽真空与检验 |
| saes-ep1402554a1 | literature | SAES Getters, EP1402554A1, Evaporable getter device for cathode-ray tubes, description; https://patents.google.com/patent/EP1402554A1/en; 访问日期 2026-09-09 | 条件性外购 BaAl4/Ni 吸气剂组件及管内激活；不采用数值因子 |
